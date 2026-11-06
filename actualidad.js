const grid = document.getElementById("newsGrid");
const search = document.getElementById("newsSearch");
const filter = document.getElementById("newsFilter");
const monthFilter = document.getElementById("newsMonth");
const count = document.getElementById("newsCount");
const empty = document.getElementById("emptyState");
const lastUpdated = document.getElementById("lastUpdated");
let newsItems = [];

function escapeHtml(value) {
  const escapes = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return String(value ?? "").replace(/[&<>"']/g, (character) => escapes[character]);
}

function monthLabel(key) {
  const [year, month] = key.split("-").map(Number);
  return new Intl.DateTimeFormat("es-AR", { month: "long", year: "numeric" })
    .format(new Date(year, month - 1, 1))
    .replace(/^./, (letter) => letter.toLocaleUpperCase("es"));
}

function renderNews() {
  const query = search.value.trim().toLocaleLowerCase("es");
  const topic = filter.value;
  const month = monthFilter.value;
  const visibleItems = newsItems
    .filter((item) => topic === "all" || item.category === topic)
    .filter((item) => month === "all" || item.date.startsWith(month))
    .filter((item) => !query || [item.title, item.summary, item.publisher, item.tags].join(" ").toLocaleLowerCase("es").includes(query))
    .sort((a, b) => b.date.localeCompare(a.date));

  grid.innerHTML = visibleItems.map((item) => `
    <article class="news-card">
      <div class="news-card-top">
        <span class="eyebrow">${escapeHtml(item.categoryLabel)}</span>
        <time datetime="${escapeHtml(item.date)}">${escapeHtml(item.dateLabel)}</time>
      </div>
      <div class="news-card-body">
        <span class="news-status">${escapeHtml(item.status)}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.summary)}</p>
        <div class="news-meta"><span>Fuente</span><span>${escapeHtml(item.publisher)}</span></div>
        <span class="news-reading-note">LECTURA EDITORIAL · MUNDO TEATRO MUSICAL</span>
      </div>
    </article>
  `).join("");

  count.textContent = visibleItems.length + " DE " + newsItems.length + " " + (newsItems.length === 1 ? "NOTICIA" : "NOTICIAS");
  empty.hidden = visibleItems.length > 0;
  grid.hidden = visibleItems.length === 0;
}

search.addEventListener("input", renderNews);
filter.addEventListener("change", renderNews);
monthFilter.addEventListener("change", renderNews);

fetch("actualidad.json", { cache: "no-store" })
  .then((response) => {
    if (!response.ok) throw new Error("No se pudo actualizar el archivo");
    return response.json();
  })
  .then((data) => {
    newsItems = Array.isArray(data.items) ? data.items : [];
    const months = [...new Set(newsItems.map((item) => item.date.slice(0, 7)))].sort().reverse();
    monthFilter.innerHTML = '<option value="all">Todos los meses</option>' +
      months.map((month) => '<option value="' + escapeHtml(month) + '">' + escapeHtml(monthLabel(month)) + '</option>').join("");
    if (lastUpdated && data.generatedAt) {
      lastUpdated.textContent = "ACTUALIZADO " + new Intl.DateTimeFormat("es-AR", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "America/Argentina/Buenos_Aires"
      }).format(new Date(data.generatedAt)).toLocaleUpperCase("es");
    }
    renderNews();
  })
  .catch((error) => {
    console.info(error.message + "; se muestra el archivo guardado en la página.");
  });
