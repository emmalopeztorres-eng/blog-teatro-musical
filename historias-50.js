(() => {
  const cards = Array.from(document.querySelectorAll(".hw-card"));
  const search = document.getElementById("hwSearch");
  const region = document.getElementById("hwRegion");
  const decade = document.getElementById("hwDecade");
  const count = document.getElementById("hwCount");
  const empty = document.getElementById("hwEmpty");
  const normalize = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  function applyFilters() {
    const query = normalize(search.value);
    let visible = 0;
    cards.forEach(card => {
      const matches = (!query || normalize(card.textContent).includes(query)) &&
        (!region.value || card.dataset.region === region.value) &&
        (!decade.value || card.dataset.decade === decade.value);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    count.textContent = visible === 1 ? "1 historia" : visible + " historias";
    empty.hidden = visible !== 0;
  }
  search.addEventListener("input", applyFilters);
  region.addEventListener("change", applyFilters);
  decade.addEventListener("change", applyFilters);
  document.getElementById("hwClear").addEventListener("click", () => {
    search.value = "";
    region.value = "";
    decade.value = "";
    applyFilters();
    search.focus();
  });
  document.getElementById("hwOpen").addEventListener("click", () => cards.forEach(card => { if (!card.hidden) card.open = true; }));
  document.getElementById("hwClose").addEventListener("click", () => cards.forEach(card => { card.open = false; }));
  applyFilters();
})();