#!/usr/bin/env python3
"""Refresh the magazine from public RSS/Atom feeds; store only titles, dates, source and links."""
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path
from urllib.request import Request, urlopen
from xml.etree import ElementTree as ET
import json
import re

ROOT = Path(__file__).resolve().parents[1]
DATA_FILE = ROOT / "actualidad.json"
FEEDS = [
    ("Musicales Baires", "https://www.musicalesbaires.com.ar/feeds/posts/default?alt=rss"),
    ("GEA Musical", "https://geamusical.com/feed/"),
    ("Broadwayfina", "https://broadwayfina.com/feed/"),
    ("EscribiendoCine · Agenda", "https://www.escribiendocine.com/rss/agenda/"),
    ("EscribiendoCine · Noticias", "https://www.escribiendocine.com/rss/noticias/"),
    ("EscribiendoCine · Industria", "https://www.escribiendocine.com/rss/industria/"),
]
KEYWORDS = ("musical", "broadway", "west end", "comedia musical", "teatro musical", "premios hugo",
            "hairspray", "frozen", "chicago", "sweeney todd", "company", "wicked", "les miserables",
            "los miserables", "matilda", "mamma mia", "el rey leon", "el rey león", "musicales")
NS = {"atom": "http://www.w3.org/2005/Atom"}

def text_of(parent, names):
    for name in names:
        node = parent.find(name)
        if node is not None and node.text:
            return node.text.strip()
    return ""

def parse_date(raw):
    if not raw:
        return None
    try:
        dt = parsedate_to_datetime(raw)
    except (TypeError, ValueError, OverflowError):
        try:
            dt = datetime.fromisoformat(raw.replace("Z", "+00:00"))
        except ValueError:
            return None
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=timezone.utc)
    return dt.astimezone(timezone.utc)

def entries_from(xml):
    root = ET.fromstring(xml)
    rss_items = root.findall(".//item")
    if rss_items:
        for item in rss_items:
            yield (text_of(item, ["title"]), text_of(item, ["link"]), text_of(item, ["pubDate", "{http://purl.org/dc/elements/1.1/}date"]))
    else:
        for item in root.findall(".//atom:entry", NS):
            link = item.find("atom:link", NS)
            yield (text_of(item, ["{http://www.w3.org/2005/Atom}title"]),
                   link.attrib.get("href", "") if link is not None else "",
                   text_of(item, ["{http://www.w3.org/2005/Atom}published", "{http://www.w3.org/2005/Atom}updated"]))

def clean_url(url):
    return url.strip().split("#", 1)[0]

def main():
    try:
        existing = json.loads(DATA_FILE.read_text(encoding="utf-8"))
    except FileNotFoundError:
        existing = {"items": []}
    items = {clean_url(row.get("url", "")): row for row in existing.get("items", []) if row.get("url")}
    for publisher, feed_url in FEEDS:
        try:
            request = Request(feed_url, headers={"User-Agent": "MundoTeatroMusicalMagazine/1.0 (+https://emmalopeztorres-eng.github.io/blog-teatro-musical/)"})
            with urlopen(request, timeout=25) as response:
                payload = response.read()
            for title, url, raw_date in entries_from(payload):
                title = re.sub(r"\s+", " ", title).strip()
                url = clean_url(url)
                date = parse_date(raw_date)
                if not title or not url.startswith("http") or date is None:
                    continue
                if not any(word in title.casefold() for word in KEYWORDS):
                    continue
                key = url.casefold()
                if key in items:
                    continue
                day = date.date().isoformat()
                items[key] = {
                    "date": day,
                    "dateLabel": date.astimezone(timezone.utc).strftime("%-d %b %Y").upper(),
                    "category": "escena",
                    "categoryLabel": "ACTUALIDAD · TEATRO MUSICAL",
                    "status": "Novedad de la semana",
                    "title": title,
                    "summary": f"Titular publicado por {publisher}. Abrí la fuente para leer la nota completa y consultar sus detalles.",
                    "publisher": publisher,
                    "url": url,
                    "tags": title.casefold(),
                }
        except Exception as exc:
            print(f"No se pudo leer {publisher} ({feed_url}): {exc}")
    ordered = sorted(items.values(), key=lambda row: (row.get("date", ""), row.get("title", "")), reverse=True)[:100]
    result = {"generatedAt": datetime.now(timezone.utc).isoformat(timespec="seconds"), "items": ordered}
    DATA_FILE.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Guardadas {len(ordered)} noticias")

if __name__ == "__main__":
    main()
