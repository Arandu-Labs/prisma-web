/* Prisma Noticias — estadísticas del catálogo de medios */

const I18N = {
  es: {
    kicker: "Catálogo de medios",
    title: "El espectro de la prensa latinoamericana",
    subtitle: "medios de",
    heroTpl: "{n} medios de {p} países, clasificados por línea editorial.",
    cta: "Descargar la app",
    kpiMedios: "medios activos",
    kpiPaises: "países",
    kpiMediosCats: "medios activos",
    kpiMediosCatsSub: "en {n} categorías",
    kpiCatsNews: "noticias catalogadas en {t} tipos",
    kpiCatsNewsSub: "y {s} subtipos",
    tickerTitle: "Últimas noticias",
    tickerAll: "Todos los países",
    tickerLive: "EN VIVO",
    searchTitle: "Busca un medio",
    searchSub: "Escribe el nombre, país o categoría para ver su línea editorial.",
    searchPh: "Ej: Clarín, Página 12, G1, El Mercurio…",
    noResults: "Sin resultados",
    tooManyResults: "medios coincidentes. Escribe más letras para acotar a 5 o menos.",
    showFirst5: "Ver primeros 5",
    axesTitle: "Distribución por Perfil",
    axesSub: "Los medios (excluidas las categorías de Deportes, Entretenimiento y Estilo, y Ciencia y Tecnología) han sido clasificados en 6 dimensiones temáticas. Cada columna muestra cuántos medios caen en cada valor.",
    chartMap: "Medios por país",
    chartPaises: "Medios por país",
    chartCats: "Medios por categoría",
    footer: "Datos de clasificación editorial con evidencia — proyecto de transparencia informativa para América Latina.",
    razonamiento: "Observaciones",
    fuenteEvidencia: "Fuente de evidencia",
    sinEvidencia: "Sin evidencia verificable — clasificación neutra (3 en todos los ejes).",
    posicion: "Posicionamiento",
    de: "de",
    clearFilter: "Limpiar filtro",
    mapAria: "Mapa de América del Sur: medios por país",
    mediosLabel: "medios",
    closeAria: "Cerrar",
  },
  pt: {
    kicker: "Catálogo de imprensa",
    title: "O espectro da imprensa latino-americana",
    subtitle: "veículos de",
    heroTpl: "{n} veículos de {p} países, classificados por linha editorial.",
    cta: "Baixar o app",
    kpiMedios: "veículos ativos",
    kpiPaises: "países",
    kpiMediosCats: "veículos ativos",
    kpiMediosCatsSub: "em {n} categorias",
    kpiCatsNews: "notícias catalogadas em {t} tipos",
    kpiCatsNewsSub: "e {s} subtipos",
    tickerTitle: "Últimas notícias",
    tickerAll: "Todos os países",
    tickerLive: "AO VIVO",
    searchTitle: "Busque um veículo de imprensa",
    searchSub: "Digite o nome, país ou categoria para ver sua linha editorial.",
    searchPh: "Ex: Folha, Estadão, O Globo, Clarín…",
    noResults: "Sem resultados",
    tooManyResults: "veículos coincidentes. Digite mais caracteres para refinar para 5 ou menos.",
    showFirst5: "Ver primeiros 5",
    axesTitle: "Distribuição por Perfil",
    axesSub: "Os veículos (excluídas as categorias de Esportes, Entretenimento e Estilo, e Ciência e Tecnologia) foram classificados em 6 dimensões temáticas. Cada coluna mostra quantos veículos caem em cada valor.",
    chartMap: "Veículos por país",
    chartPaises: "Veículos por país",
    chartCats: "Veículos por categoria",
    footer: "Dados de classificação editorial com evidência — projeto de transparência informativa para a América Latina.",
    razonamiento: "Observações",
    fuenteEvidencia: "Fonte de evidência",
    sinEvidencia: "Sem evidência verificável — classificação neutra (3 em todos os eixos).",
    posicion: "Posicionamento",
    de: "de",
    clearFilter: "Limpar filtro",
    mapAria: "Mapa da América do Sul: veículos por país",
    mediosLabel: "veículos",
    closeAria: "Fechar",
  },
  en: {
    kicker: "Media catalog",
    title: "The spectrum of Latin American press",
    subtitle: "outlets from",
    heroTpl: "{n} outlets from {p} countries, classified by editorial line.",
    cta: "Download the app",
    kpiMedios: "active outlets",
    kpiPaises: "countries",
    kpiMediosCats: "active outlets",
    kpiMediosCatsSub: "in {n} categories",
    kpiCatsNews: "news cataloged in {t} types",
    kpiCatsNewsSub: "and {s} subtypes",
    tickerTitle: "Latest news",
    tickerAll: "All countries",
    tickerLive: "LIVE",
    searchTitle: "Search an outlet",
    searchSub: "Type a name, country or category to see its editorial line.",
    searchPh: "E.g.: Clarín, Página 12, G1, El Mercurio…",
    noResults: "No results",
    tooManyResults: "matching outlets. Type more letters to narrow down to 5 or fewer.",
    showFirst5: "See first 5",
    axesTitle: "Profile Distribution",
    axesSub: "Outlets (excluding the Sports, Entertainment & Style, and Science & Technology categories) have been classified on 6 thematic dimensions. Each column shows how many outlets fall on each value.",
    chartMap: "Outlets by country",
    chartPaises: "Outlets by country",
    chartCats: "Outlets by category",
    footer: "Editorial classification data with evidence — an informative transparency project for Latin America.",
    razonamiento: "Notes",
    fuenteEvidencia: "Evidence source",
    sinEvidencia: "No verifiable evidence — neutral classification (3 on all axes).",
    posicion: "Positioning",
    de: "of",
    clearFilter: "Clear filter",
    mapAria: "South America map: outlets by country",
    mediosLabel: "outlets",
    closeAria: "Close",
  },
};

const AXES = [
  { key: "economico",         es: "Económico",          pt: "Econômico",          en: "Economic",
    desc_es: "1 — Intervencionismo estatal (estatismo, regulación, gasto público)\n2 — Centro-izquierda económica\n3 — Economía mixta / centrado\n4 — Centro-derecha económica\n5 — Libre mercado (desregulación, propiedad privada, apertura)",
    desc_pt: "1 — Intervencionismo estatal (estatismo, regulação, gasto público)\n2 — Centro-esquerda econômica\n3 — Economia mista / centrado\n4 — Centro-direita econômica\n5 — Livre mercado (desregulamentação, propriedade privada, abertura)",
    desc_en: "1 — State intervention (statism, regulation, public spending)\n2 — Center-left economics\n3 — Mixed economy / centered\n4 — Center-right economics\n5 — Free market (deregulation, private property, openness)" },
  { key: "social",            es: "Social",             pt: "Social",             en: "Social",
    desc_es: "1 — Progresismo (género, DDHH, diversidad, izquierda cultural)\n2 — Centro-izquierda social\n3 — Centro\n4 — Conservadurismo moderado\n5 — Conservadurismo (valores tradicionales, orden moral, derecha cultural)",
    desc_pt: "1 — Progressismo (gênero, DH, diversidade, esquerda cultural)\n2 — Centro-esquerda social\n3 — Centro\n4 — Conservadorismo moderado\n5 — Conservadorismo (valores tradicionais, ordem moral, direita cultural)",
    desc_en: "1 — Progressivism (gender, HR, diversity, cultural left)\n2 — Center-left social\n3 — Center\n4 — Moderate conservatism\n5 — Conservatism (traditional values, moral order, cultural right)" },
  { key: "institucional",     es: "Institucional",      pt: "Institucional",      en: "Institutional",
    desc_es: "1 — Garantismo civil (derechos, debido proceso, controles al poder)\n2 — Centro-izquierda institucional\n3 — Centro / institucionalismo estándar\n4 — Orden y seguridad moderados\n5 — Punitivismo / mano dura (seguridad, orden, endurecimiento penal)",
    desc_pt: "1 — Garantismo civil (direitos, devido processo, controles ao poder)\n2 — Centro-esquerda institucional\n3 — Centro / institucionalismo padrão\n4 — Ordem e segurança moderadas\n5 — Punitivismo / linha dura (segurança, ordem, endurecimento penal)",
    desc_en: "1 — Civil guarantees (rights, due process, checks on power)\n2 — Center-left institutional\n3 — Center / standard institutionalism\n4 — Moderate order and security\n5 — Punitivism / tough on crime (security, order, penal hardening)" },
  { key: "geopolitico",       es: "Geopolítico",        pt: "Geopolítico",        en: "Geopolitical",
    desc_es: "1 — Globalismo / multilateralismo (integración, cooperación internacional)\n2 — Multilateralismo pragmático\n3 — Pragmático\n4 — Soberanismo moderado\n5 — Nacionalismo / soberanismo (autonomía, anti-globalización)",
    desc_pt: "1 — Globalismo / multilateralismo (integração, cooperação internacional)\n2 — Multilateralismo pragmático\n3 — Pragmático\n4 — Soberanismo moderado\n5 — Nacionalismo / soberanismo (autonomia, anti-globalização)",
    desc_en: "1 — Globalism / multilateralism (integration, international cooperation)\n2 — Pragmatic multilateralism\n3 — Pragmatic\n4 — Moderate sovereignism\n5 — Nationalism / sovereignism (autonomy, anti-globalization)" },
  { key: "linea_editorial",   es: "Línea editorial",    pt: "Linha editorial",    en: "Editorial line",
    desc_es: "1 — Pro-establishment (afín al poder, oficialista)\n2 — Cercano al oficialismo\n3 — Moderado / plural / centrado\n4 — Crítico moderado / opositor\n5 — Anti-sistema (crítico del establishment, opositor radical, anti-casta, contracultural)",
    desc_pt: "1 — Pró-establishment (alinhado ao poder, governista)\n2 — Próximo ao governo\n3 — Moderado / plural / de centro\n4 — Crítico moderado / oposição\n5 — Antissistema (crítico do establishment, oposição radical, anticasta, contracultural)",
    desc_en: "1 — Pro-establishment (pro-government, state-aligned)\n2 — Close to incumbents\n3 — Moderate / plural / centered\n4 — Moderate critic / opposition\n5 — Anti-system (anti-establishment, radical opposition, countercultural)" },
  { key: "estilo_informativo",es: "Estilo informativo",  pt: "Estilo informativo",  en: "Reporting style",
    desc_es: "1 — Rigor técnico / datos / investigación\n2 — Periodismo de calidad\n3 — Periodismo estándar\n4 — Periodismo popular / divulgativo\n5 — Sensacionalismo / militancia / clickbait",
    desc_pt: "1 — Rigor técnico / dados / investigação\n2 — Jornalismo de qualidade\n3 — Jornalismo padrão\n4 — Jornalismo popular / divulgativo\n5 — Sensacionalismo / sensacionalista / clickbait",
    desc_en: "1 — Technical rigor / data / investigative\n2 — Quality journalism\n3 — Standard journalism\n4 — Popular / feature journalism\n5 — Sensationalism / partisan / clickbait" },
];

const PLAY_BADGES = {
  es: "https://play.google.com/intl/es_419/badges/static/images/badges/es_badge_web_generic.png",
  pt: "https://play.google.com/intl/pt_br/badges/static/images/badges/pt_badge_web_generic.png",
  en: "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png",
};

let LANG = "es";

/* ---------- helpers ---------- */
const norm = s => (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

// Quita emojis de banderas/regionales y globos del nombre del medio (solo display)
const EMOJI_RE = /[\u{1F1E6}-\u{1F1FF}]{2}|[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]+/gu;
function cleanName(s) {
  return String(s || "").replace(EMOJI_RE, "").replace(/\s{2,}/g, " ").replace(/[\s\-–—|·:,]+$/u, "").trim();
}

function countBy(arr, fn) {
  const m = new Map();
  for (const x of arr) {
    const k = fn(x) ?? "—";
    m.set(k, (m.get(k) || 0) + 1);
  }
  return [...m.entries()].sort((a, b) => b[1] - a[1]);
}

const EXCLUIDAS_PERFIL = new Set(["Deportes", "Entretenimiento y Estilo", "Ciencia y Tecnología"]);
const MEDIOS_PERFIL = MEDIOS.filter(m => !EXCLUIDAS_PERFIL.has(m.categoria));

function axisDist(key) {
  const d = [0, 0, 0, 0, 0, 0]; // index 1..5
  for (const m of MEDIOS_PERFIL) {
    const v = m.e && m.e[key];
    if (v >= 1 && v <= 5) d[v]++;
  }
  return d;
}

/* ---------- render ---------- */
// taxonomía de noticias (Supabase ejes_tematicos + subtipos)
const NOTICIAS_TIPOS = 20;
const NOTICIAS_SUBTIPOS = 18;

function renderKPIs() {
  const paises = new Set(MEDIOS.map(m => m.pais).filter(p => p && p !== "Global")).size;
  const catsMedios = new Set(MEDIOS.map(m => m.categoria)).size;
  document.getElementById("hero-sub").innerHTML = I18N[LANG].heroTpl
    .replace("{n}", MEDIOS.length).replace("{p}", paises);
  document.getElementById("kpi-medios").textContent = MEDIOS.length;
  document.getElementById("kpi-medios-label").innerHTML =
    `${escapeHtml(I18N[LANG].kpiMediosCats)}<br><span class="kpi-line2">${escapeHtml(I18N[LANG].kpiMediosCatsSub.replace("{n}", catsMedios))}</span>`;
  document.getElementById("kpi-paises2").textContent = paises;
  document.getElementById("kpi-cats").textContent = NOTICIAS_TIPOS;
  document.getElementById("kpi-cats-label").innerHTML =
    `${escapeHtml(I18N[LANG].kpiCatsNews.replace("{t}", NOTICIAS_TIPOS))}<br><span class="kpi-line2">${escapeHtml(I18N[LANG].kpiCatsNewsSub.replace("{s}", NOTICIAS_SUBTIPOS))}</span>`;
}

/* ---------- gráfico de torta (donut) ---------- */
const PIE_COLORS = [
  "#FF4444", "#FF9933", "#FFFF66", "#66FF66", "#66CCFF", "#4444FF",
  "#FF5CA8", "#5CE1FF", "#B266FF", "#FFB35C", "#5CFFA8", "#8FA8FF",
];

let mapFilterPais = null; // país seleccionado en el mapa (filtro de la dona)

function currentMedios() {
  return mapFilterPais ? MEDIOS.filter(m => m.pais === mapFilterPais) : MEDIOS;
}

function renderPieCurrent() {
  renderPie("chart-cats", countBy(currentMedios(), m => m.categoria));
  const el = document.getElementById("chart-cats");
  const old = el.querySelector(".pie-clear");
  if (old) old.remove();
  if (mapFilterPais) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pie-clear";
    btn.textContent = I18N[LANG].clearFilter;
    btn.addEventListener("click", () => {
      mapFilterPais = null;
      renderMap();
      renderPieCurrent();
    });
    const card = el.closest(".chart-card") || el;
    card.appendChild(btn);
  }
}

function renderPie(elId, entries) {
  const el = document.getElementById(elId);
  if (!el) return;
  const total = entries.reduce((s, [, c]) => s + c, 0) || 1;
  const R = 15.9155; // circunferencia/100 en viewBox 42
  let offset = 0;
  const slices = entries.map(([, count], i) => {
    const pct = count / total * 100;
    const s = `<circle cx="21" cy="21" r="${R}" fill="none" stroke="${PIE_COLORS[i % PIE_COLORS.length]}" stroke-width="7.2" stroke-dasharray="${pct.toFixed(2)} ${(100 - pct).toFixed(2)}" stroke-dashoffset="${(-offset).toFixed(2)}"/>`;
    offset += pct;
    return s;
  }).join("");
  const legend = entries.map(([label, count], i) => `
    <div class="pie-legend-row">
      <span class="pie-dot" style="background:${PIE_COLORS[i % PIE_COLORS.length]}"></span>
      <span class="pie-label" title="${escapeHtml(label)}">${escapeHtml(label)}</span>
      <span class="pie-count">${count}</span>
    </div>`).join("");
  el.innerHTML = `<div class="pie-wrap">
    <div class="pie-donut"><svg viewBox="0 0 42 42"><g transform="rotate(-90 21 21)">${slices}</g></svg>
      <div class="pie-total"><strong>${total}</strong></div>
    </div>
    <div class="pie-legend">${legend}</div>
  </div>`;
  el.classList.remove("bars");
}

function renderBars(elId, entries, alt = false, maxItems = 25) {
  const el = document.getElementById(elId);
  const max = entries[0] ? entries[0][1] : 1;
  el.innerHTML = "";
  entries.slice(0, maxItems).forEach(([label, count], i) => {
    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `
      <span class="bar-label" title="${escapeHtml(label)}">${escapeHtml(label)}</span>
      <div class="bar-track"><div class="bar-fill ${alt && i % 2 ? "alt" : ""}" style="width:${(count / max * 100).toFixed(1)}%"></div></div>
      <span class="bar-count">${count}</span>`;
    el.appendChild(row);
  });
}

// ISO-3166 alpha-2 para flagcdn.com (null = sin bandera, usar icono)
const FLAG_BY_PAIS = {
  "Argentina": "ar", "Brasil": "br", "Colombia": "co", "Chile": "cl",
  "Perú": "pe", "Peru": "pe", "Venezuela": "ve", "Uruguay": "uy",
  "Bolivia": "bo", "Ecuador": "ec", "Panamá": "pa", "Panama": "pa",
  "Paraguay": "py", "México": "mx", "Mexico": "mx",
  "Global": null, "Estados Unidos": "us", "USA": "us",
};

function flagHtml(pais, cls = "") {
  const code = FLAG_BY_PAIS[pais];
  if (code) {
    return `<img class="flag-img ${cls}" src="https://flagcdn.com/w80/${code}.png" alt="${escapeHtml(pais)}" loading="lazy">`;
  }
  return `<span class="flag-img flag-globe ${cls}" title="${escapeHtml(pais)}">🌎</span>`;
}

function renderFlags() {
  const entries = countBy(MEDIOS, m => m.pais);
  const mosaic = document.getElementById("flags-mosaic");

  // carrusel: una bandera por país (sin Global), secuencia duplicada
  // para loop seamless; cada bandera aparece una vez por ciclo
  const flags = entries
    .map(([pais]) => FLAG_BY_PAIS[pais])
    .filter(Boolean) // excluye Global y países sin código
    .sort(() => Math.random() - 0.5); // orden aleatorio tipo mosaico

  let track = mosaic.querySelector(".flags-track");
  if (!track) {
    track = document.createElement("div");
    track.className = "flags-track";
    mosaic.appendChild(track);
  }
  const seq = flags.map(f =>
    `<img class="mosaic-flag" src="https://flagcdn.com/w320/${f}.png" alt="" loading="lazy">`
  ).join("");
  track.innerHTML = seq + seq;
  // velocidad ~30px/s proporcional al ancho de una secuencia
  requestAnimationFrame(() => {
    const w = track.scrollWidth / 2;
    track.style.setProperty("--flags-dur", `${Math.max(30, w / 160)}s`);
  });
}

function renderAxes() {
  const grid = document.getElementById("axes-grid");
  grid.innerHTML = "";
  const t = I18N[LANG];

  AXES.forEach(ax => {
    const dist = axisDist(ax.key);
    const total = dist.slice(1).reduce((a, b) => a + b, 0);
    const max = Math.max(...dist.slice(1), 1);

    const card = document.createElement("div");
    card.className = "axis-card";
    card.innerHTML = `
      <h4 class="has-tip" tabindex="0">${ax[LANG]}<span class="tip" role="tooltip">${ax["desc_" + LANG]}</span></h4>
      <div class="axis-dist">
        ${[1, 2, 3, 4, 5].map(v => `
          <div class="col">
            <span class="v">${dist[v]}</span>
            <div class="stack" style="height:${(dist[v] / max * 100).toFixed(1)}%"></div>
            <span class="n">${v}</span>
          </div>`).join("")}
      </div>`;
    grid.appendChild(card);

  });
}

function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ---------- search ---------- */
const searchInput = document.getElementById("search");
const resultsEl = document.getElementById("results");
const detailEl = document.getElementById("medio-detail");
let debounce;

searchInput.addEventListener("input", () => {
  clearTimeout(debounce);
  debounce = setTimeout(runSearch, 120);
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    clearTimeout(debounce);
    runSearch(true);
  }
});

function runSearch(forceLimit) {
  const q = norm(searchInput.value.trim());
  resultsEl.innerHTML = "";
  if (!q) { detailEl.classList.add("hidden"); return; }

  const matches = MEDIOS
    .map(m => {
      const hay = norm(`${m.nombre} ${m.id} ${m.pais} ${m.region || ""} ${m.categoria || ""}`);
      const idx = hay.indexOf(q);
      return idx === -1 ? null : { m, score: idx === 0 ? 0 : 1 };
    })
    .filter(Boolean)
    .sort((a, b) => a.score - b.score)
    .map(x => x.m);

  if (!matches.length) {
    resultsEl.innerHTML = `<div class="result-item" style="cursor:default;color:var(--muted)">${I18N[LANG].noResults}</div>`;
    return;
  }

  // Mostrar listado de sugerencias cuando la lista es <= 5 (no desplegar lista enorme)
  if (matches.length > 5 && !forceLimit) {
    const t = I18N[LANG];
    const info = document.createElement("div");
    info.className = "result-item";
    info.style.cssText = "cursor:default;color:var(--muted);display:flex;justify-content:space-between;align-items:center;";
    info.innerHTML = `<span>${matches.length} ${t.tooManyResults}</span>`
      + `<button type="button" class="btn-top5" style="background:none;border:none;color:var(--accent1);cursor:pointer;font-size:.82rem;text-decoration:underline;padding:2px 6px;">${t.showFirst5}</button>`;
    info.querySelector(".btn-top5").addEventListener("click", () => renderMatches(matches.slice(0, 5)));
    resultsEl.appendChild(info);
    return;
  }

  renderMatches(matches.slice(0, 5));
}

function renderMatches(list) {
  resultsEl.innerHTML = "";
  list.forEach(m => {
    const btn = document.createElement("button");
    btn.className = "result-item";
    btn.innerHTML = `
      <span class="r-name">${escapeHtml(cleanName(m.nombre))}</span>
      <span class="r-meta">(${escapeHtml(m.pais)}${m.region ? ", " + escapeHtml(m.region) : ""}) · ${escapeHtml(m.categoria || "")}</span>`;
    btn.addEventListener("click", () => showDetail(m));
    resultsEl.appendChild(btn);
  });
}

function showDetail(m) {
  const t = I18N[LANG];
  detailEl.classList.remove("hidden");
  resultsEl.innerHTML = ""; // ocultar sugerencias hasta nueva búsqueda

  const axisHtml = AXES.map(ax => {
    const v = m.e?.[ax.key] ?? 3;
    return `
      <div class="axis-row has-tip">
        <div class="axis-label"><span>${ax[LANG]}</span><span class="val">${v}/5</span></div>
        <div class="axis-bar"><div style="width:${v * 20}%"></div></div>
        <span class="tip" role="tooltip">${ax["desc_" + LANG]}</span>
      </div>`;
  }).join("");

  const razon = m.razonamiento
    ? `<div class="md-razon"><strong>${t.razonamiento}</strong>${escapeHtml(m.razonamiento)}
         ${m.fuente_evidencia ? `<div class="md-fuente"><strong>${t.fuenteEvidencia}:</strong> ${escapeHtml(m.fuente_evidencia)}</div>` : ""}
       </div>`
    : "";

  detailEl.innerHTML = `
    <div class="md-head">
      <div>
        <div class="md-name">${escapeHtml(cleanName(m.nombre))}</div>
        <div class="md-meta">
          ${escapeHtml(m.pais)}${m.region ? " · " + escapeHtml(m.region) : ""} · ${escapeHtml(m.categoria || "")}
          ${m.url_home ? ` · <a href="${escapeHtml(m.url_home)}" target="_blank" rel="noopener">${escapeHtml(m.url_home)}</a>` : ""}
        </div>
      </div>
      <button type="button" class="md-close" aria-label="${t.closeAria || 'Cerrar'}"
        onclick="this.closest('.medio-detail').classList.add('hidden')">✕</button>
    </div>
    <h3 style="margin-bottom:1rem">${t.posicion}</h3>
    ${axisHtml}
    ${razon}`;

  detailEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ---------- mapa de medios por país (Sudamérica, SVG) ---------- */
let saGeoJSON = null;
let saView = null;

function eachCoord(coords, cb) {
  if (typeof coords[0] === "number") { cb(coords[0], coords[1]); return; }
  for (const c of coords) eachCoord(c, cb);
}

function computeView(features) {
  let lonMin = 180, lonMax = -180, latMin = 90, latMax = -90;
  for (const f of features) eachCoord(f.geometry.coordinates, (lon, lat) => {
    lonMin = Math.min(lonMin, lon); lonMax = Math.max(lonMax, lon);
    latMin = Math.min(latMin, lat); latMax = Math.max(latMax, lat);
  });
  const padLon = (lonMax - lonMin) * 0.04, padLat = (latMax - latMin) * 0.04;
  lonMin -= padLon; lonMax += padLon;
  const latTop = latMax + padLat, latBottom = latMin - padLat;
  const cosLat = Math.cos(((latTop + latBottom) / 2) * Math.PI / 180);
  const wDeg = (lonMax - lonMin) * cosLat, hDeg = latTop - latBottom;
  const unit = 1000 / wDeg;
  return { lonMin, latBottom, latTop, cosLat, unit, w: 1000, h: Math.round(hDeg * unit) };
}

function px(lon, v) { return ((lon - v.lonMin) * v.cosLat * v.unit).toFixed(1); }
function py(lat, v) { return ((v.latTop - lat) * v.unit).toFixed(1); }

function geomPath(geom, v) {
  const polys = geom.type === "Polygon" ? [geom.coordinates]
    : geom.type === "MultiPolygon" ? geom.coordinates : [];
  const parts = [];
  for (const poly of polys) {
    for (const ring of poly) {
      const pts = [];
      for (let i = 0; i < ring.length; i++) {
        const [lon, lat] = ring[i];
        if (i === ring.length - 1 && lon === ring[0][0] && lat === ring[0][1]) continue;
        pts.push(`${px(lon, v)},${py(lat, v)}`);
      }
      parts.push("M" + pts.join("L") + "Z");
    }
  }
  return parts.join(" ");
}

// el mapa puede embeberse en /, /es/ o /pt/ además de /estadisticas/
const GEOJSON_CANDIDATES = [
  "/estadisticas/south_america.geojson",
  "south_america.geojson",
  "estadisticas/south_america.geojson",
  "../estadisticas/south_america.geojson",
];

function fetchGeoJSON(urls, i = 0) {
  if (i >= urls.length) return Promise.reject(new Error("geojson no encontrado"));
  return fetch(urls[i])
    .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .catch(() => fetchGeoJSON(urls, i + 1));
}

// fondo del mapa: el asset vive en assets/images/ según la página que lo embebe
const MAP_BG_CANDIDATES = [
  "/assets/images/logo_background.png",
  "assets/images/logo_background.png",
  "../assets/images/logo_background.png",
];

function applyMapBackground(el) {
  if (el.dataset.bgDone) return;
  el.dataset.bgDone = "1";
  const img = new Image();
  let i = 0;
  img.onload = () => {
    el.style.backgroundImage = `linear-gradient(rgba(10,14,24,.45), rgba(10,14,24,.45)), url("${MAP_BG_CANDIDATES[i]}")`;
    el.style.backgroundSize = "cover";
    el.style.backgroundPosition = "center";
    el.style.backgroundRepeat = "no-repeat";
  };
  img.onerror = () => { i++; if (i < MAP_BG_CANDIDATES.length) img.src = MAP_BG_CANDIDATES[i]; };
  img.src = MAP_BG_CANDIDATES[0];
}

function renderMap() {
  const el = document.getElementById("map");
  if (!el) return;
  applyMapBackground(el);

  if (!saGeoJSON) {
    fetchGeoJSON(GEOJSON_CANDIDATES)
      .then(gj => {
        saGeoJSON = gj;
        saView = computeView(gj.features);
        renderMap();
      })
      .catch(() => {});
    return;
  }
  if (!saView) return;

  const counts = new Map(countBy(MEDIOS, m => m.pais));
  const max = Math.max(1, ...counts.values());
  const NS = "http://www.w3.org/2000/svg";

  el.innerHTML = "";
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", `0 0 ${saView.w} ${saView.h}`);
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", (I18N[LANG] && I18N[LANG].mapAria) || "Mapa");

  // retícula de fondo cada 10°
  const grat = document.createElementNS(NS, "g");
  grat.setAttribute("stroke", "rgba(255,255,255,.05)");
  grat.setAttribute("stroke-width", "1");
  const step = 10;
  for (let lon = Math.floor(-81 / step) * step; lon <= -34; lon += step) {
    const l = document.createElementNS(NS, "line");
    l.setAttribute("x1", px(lon, saView)); l.setAttribute("x2", px(lon, saView));
    l.setAttribute("y1", 0); l.setAttribute("y2", saView.h);
    grat.appendChild(l);
  }
  for (let lat = Math.floor(-56 / step) * step; lat <= 12; lat += step) {
    const l = document.createElementNS(NS, "line");
    l.setAttribute("y1", py(lat, saView)); l.setAttribute("y2", py(lat, saView));
    l.setAttribute("x1", 0); l.setAttribute("x2", saView.w);
    grat.appendChild(l);
  }
  svg.appendChild(grat);

  const tip = document.createElement("div");
  tip.className = "pais-tip map-tip";
  tip.style.display = "none";
  el.appendChild(tip);
  // posiciona el tooltip dentro del contenedor (translate(-50%,-140%))
  const placeTip = (x, y) => {
    const r = el.getBoundingClientRect();
    const tw = tip.offsetWidth, th = tip.offsetHeight;
    const pad = 6;
    const minX = tw / 2 + pad, maxX = r.width - tw / 2 - pad;
    const minY = th * 1.4 + pad, maxY = r.height + th * 0.4 - pad;
    tip.style.left = Math.min(Math.max(x, minX), Math.max(minX, maxX)) + "px";
    tip.style.top = Math.min(Math.max(y, minY), Math.max(minY, maxY)) + "px";
  };
  const positionTip = ev => {
    const r = el.getBoundingClientRect();
    placeTip(ev.clientX - r.left, ev.clientY - r.top);
  };
  const showTip = (text, ev) => {
    tip.textContent = text;
    tip.style.display = "block";
    positionTip(ev);
  };
  const moveTip = ev => {
    if (tip.style.display !== "block") return;
    positionTip(ev);
  };
  const hideTip = () => { tip.style.display = "none"; };

  for (const f of saGeoJSON.features) {
    const pais = f.properties.pais;
    const n = counts.get(pais) || 0;
    const path = document.createElementNS(NS, "path");
    path.setAttribute("d", geomPath(f.geometry, saView));
    path.setAttribute("class", "sa-country" + (n ? " has-media" : "") + (pais === mapFilterPais ? " active" : ""));
    if (n) {
      const t = n / max;
      path.style.fill = `hsl(252 ${58 + 42 * t}% ${22 + 47 * t}%)`;
      path.style.stroke = "#7c5cff";
    } else {
      path.style.fill = "#161b22";
      path.style.stroke = "#2d333b";
    }
    path.style.fillOpacity = "1";
    path.style.strokeWidth = "1";
    if (n > 0) {
      path.addEventListener("mousemove", moveTip);
      path.addEventListener("mouseleave", hideTip);
      path.addEventListener("mouseenter", ev =>
        showTip(`${pais} — ${n} ${(I18N[LANG] && I18N[LANG].mediosLabel) || "medios"}`, ev));
      path.addEventListener("click", ev => {
        ev.stopPropagation(); // evita que el render del mapa desmonte el target antes del listener global
        showTip(`${pais} — ${n} ${(I18N[LANG] && I18N[LANG].mediosLabel) || "medios"}`, ev);
        setMapFilter(pais);
      });
      path.addEventListener("touchend", ev => {
        ev.stopPropagation();
        const touch = ev.changedTouches && ev.changedTouches[0];
        if (touch) {
          showTip(`${pais} — ${n} ${(I18N[LANG] && I18N[LANG].mediosLabel) || "medios"}`, touch);
        }
        setMapFilter(pais);
      }, { passive: false });
    }
    svg.appendChild(path);
  }
  el.appendChild(svg);

  // globo de medios globales (esquina inferior derecha, sin fondo)
  const globalCount = MEDIOS.filter(m => m.pais === "Global").length;
  if (globalCount) {
    const mediosLbl = (I18N[LANG] && I18N[LANG].mediosLabel) || "medios";
    const badge = document.createElement("button");
    badge.type = "button";
    badge.className = "map-global-badge";
    badge.setAttribute("aria-label", `Global — ${globalCount} ${mediosLbl}`);
    badge.textContent = "🌎";
    const showGlobalTip = (ev) => {
      if (ev && ev.stopPropagation) ev.stopPropagation();
      tip.textContent = `Global — ${globalCount} ${mediosLbl}`;
      tip.style.display = "block";
      const r = el.getBoundingClientRect();
      const br = badge.getBoundingClientRect();
      placeTip(br.left - r.left + br.width / 2, br.top - r.top + tip.offsetHeight * 0.4 + 4);
    };
    badge.addEventListener("mouseenter", showGlobalTip);
    badge.addEventListener("mouseleave", hideTip);
    badge.addEventListener("click", (ev) => {
      if (tip.style.display === "block" && mapFilterPais === "Global") {
        hideTip();
      } else {
        showGlobalTip(ev);
      }
      setMapFilter("Global");
    });
    badge.addEventListener("touchend", (ev) => {
      ev.stopPropagation();
      showGlobalTip(ev);
      setMapFilter("Global");
    }, { passive: false });
    el.appendChild(badge);
  }
}

// click fuera del mapa → oculta tooltip y limpia el filtro
document.addEventListener("click", ev => {
  const mapEl = document.getElementById("map");
  if (mapEl && !mapEl.contains(ev.target)) {
    const tip = mapEl.querySelector(".map-tip");
    if (tip) tip.style.display = "none";
    if (mapFilterPais) {
      mapFilterPais = null;
      renderMap();
      renderPieCurrent();
    }
  }
});
document.addEventListener("touchend", ev => {
  const mapEl = document.getElementById("map");
  if (mapEl && !mapEl.contains(ev.target)) {
    const tip = mapEl.querySelector(".map-tip");
    if (tip) tip.style.display = "none";
  }
}, { passive: true });

/* ---------- ticker de noticias ---------- */
const tickerSelect = document.getElementById("ticker-pais");
const tickerTrack = document.getElementById("ticker-track");
// NOTICIAS viene de noticias_data.js (const global); fallback si no cargó
let NEWS = (typeof NOTICIAS !== "undefined") ? NOTICIAS : [];

// Intento de actualización en vivo desde Cloudflare R2
if (typeof fetch !== "undefined") {
  const cb = Math.floor(Date.now() / 300000);
  fetch("https://prisma.data.arandulabs.dev/noticias.json?v=" + cb)
    .then(r => r.ok ? r.json() : null)
    .then(liveNews => {
      if (Array.isArray(liveNews) && liveNews.length) {
        NEWS = liveNews;
        renderTicker();
      }
    })
    .catch(() => {});
}

let pendingPais = null;
let lastAppliedPais = undefined; // undefined = nunca renderizado

const fmtDate = new Intl.DateTimeFormat("es-AR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false });
const fmtDateEN = new Intl.DateTimeFormat("en-US", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false });
const fmtDatePT = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false });

function applyTickerFilter(force = false) {
  if (!tickerSelect || !tickerTrack) return;
  const pais = tickerSelect.value || null;
  if (!force && pais === lastAppliedPais) return;
  lastAppliedPais = pais;
  const fmt = LANG === "en" ? fmtDateEN : LANG === "pt" ? fmtDatePT : fmtDate;
  const filtered = pais ? NEWS.filter(n => n.p === pais) : NEWS;
  const items = filtered.slice(0, 60);
  const FLAG_EMOJIS = {
    "Argentina": "🇦🇷", "Brasil": "🇧🇷", "Colombia": "🇨🇴", "Chile": "🇨🇱",
    "Perú": "🇵🇪", "Peru": "🇵🇪", "Venezuela": "🇻🇪", "Uruguay": "🇺🇾",
    "Bolivia": "🇧🇴", "Ecuador": "🇪🇨", "Panamá": "🇵🇦", "Panama": "🇵🇦",
    "Paraguay": "🇵🇾", "México": "🇲🇽", "Mexico": "🇲🇽", "Estados Unidos": "🇺🇸",
    "USA": "🇺🇸", "España": "🇪🇸", "Espana": "🇪🇸", "Global": "🌐"
  };

  // Set de medios regionales para mostrar región condicionalmente
  const regSet = new Set(
    (typeof MEDIOS !== "undefined" && Array.isArray(MEDIOS))
      ? MEDIOS.filter(m => m && m.categoria === "Regionales").map(m => cleanName(m.nombre).toLowerCase())
      : []
  );

  // duplicar para loop continuo del marquee
  const html = items.map(n => {
    const fecha = n.f ? fmt.format(new Date(n.f)) : "";
    const isGlobal = n.p === "Global" || !FLAG_EMOJIS[n.p];
    const flag = isGlobal ? "🌐" : (FLAG_EMOJIS[n.p] || "🌐");
    const mClean = cleanName(n.m).toLowerCase();
    const isReg = n.cat === "Regionales" || regSet.has(mClean);
    const regText = (isReg && n.r) ? ` (${n.r})` : "";
    return `
    <span class="ticker-item">
      <span class="t-dot">◆</span>
      <span class="t-date">${escapeHtml(fecha)}</span>
      <span class="t-flag" title="${escapeHtml(n.p || '')}">${flag}</span>
      <a class="t-title" href="${escapeHtml(n.u)}" target="_blank" rel="noopener">${escapeHtml(cleanName(n.t))}</a>
      <span class="t-meta">${escapeHtml(cleanName(n.m))}${escapeHtml(regText)}</span>
    </span>`;
  }).join("");
  tickerTrack.innerHTML = html + html;
  // velocidad proporcional al ancho del contenido (~35px/s)
  requestAnimationFrame(() => {
    const w = tickerTrack.scrollWidth / 2;
    tickerTrack.style.setProperty("--ticker-dur", `${Math.max(90, w / 35)}s`);
  });
}

function renderTicker() {
  if (!tickerSelect || !tickerTrack) return;
  const t = I18N[LANG];
  // opciones de país
  const paises = [...new Set(NEWS.map(n => n.p).filter(Boolean))].sort();
  const current = tickerSelect.value;
  tickerSelect.innerHTML = `<option value="">${escapeHtml(t.tickerAll)}</option>` +
    paises.map(p => `<option value="${escapeHtml(p)}">${escapeHtml(p)}</option>`).join("");
  if (paises.includes(current)) tickerSelect.value = current;
  applyTickerFilter(true);
}

if (tickerSelect && tickerTrack) {
  tickerSelect.addEventListener("change", () => { pendingPais = tickerSelect.value; });
  // aplicar el filtro recién cuando el marquee vuelve al inicio (sin salto)
  tickerTrack.addEventListener("animationiteration", () => {
    if (pendingPais !== null) {
      applyTickerFilter();
      pendingPais = null;
    }
  });
}

/* ---------- i18n ---------- */
function applyLang(lang) {
  LANG = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (I18N[lang][k]) el.textContent = I18N[lang][k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const k = el.getAttribute("data-i18n-ph");
    if (I18N[lang][k]) el.placeholder = I18N[lang][k];
  });
  document.querySelectorAll(".lang-switch button").forEach(b =>
    b.classList.toggle("active", b.dataset.lang === lang));
  const badge = document.getElementById("play-badge");
  if (badge && PLAY_BADGES[lang]) badge.src = PLAY_BADGES[lang];
  // re-render dynamic parts
  renderKPIs();
  renderFlags();
  renderTicker();
  renderAxes();
  renderPieCurrent();
  renderMap();
  if (searchInput.value.trim()) runSearch();
}

document.querySelectorAll(".lang-switch button").forEach(b =>
  b.addEventListener("click", () => applyLang(b.dataset.lang)));

/* ---------- init ---------- */
const _urlParams = new URLSearchParams(window.location.search);
const _urlLang = (_urlParams.get("idioma") || _urlParams.get("lang") || _urlParams.get("hl") || "").toLowerCase().trim();
const initialLang = (_urlLang && I18N[_urlLang])
  ? _urlLang
  : ((document.documentElement.lang && I18N[document.documentElement.lang]) ? document.documentElement.lang : "es");
applyLang(initialLang);
