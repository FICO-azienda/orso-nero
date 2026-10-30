// Italian copy lives in the HTML; English overrides live here.
const EN = {
  "nav.space": "The space",
  "nav.coffee": "Coffee",
  "nav.pastry": "Pastry",
  "nav.visit": "Visit",
  "nav.open": "Open menu",

  "hero.eyebrow": "Via Paolo Lomazzo 20 · Chinatown, Milan",
  "hero.title": "Coffee, researched.<br><em>Room to think.</em>",
  "hero.lead": "Since 2016 Orsonero has brought Nordic-inspired specialty coffee to Milan. The new space, in a former workshop, brings together a café, a coworking table and international pastry.",
  "hero.cta1": "Discover the space",
  "hero.cta2": "Directions",
  "hero.f1": "on Google Maps",
  "hero.f2": "one of Milan’s first specialty cafés",
  "hero.f3": "locations in the city",
  "hero.badge": "New · Lomazzo 20",

  "story.eyebrow": "Our story",
  "story.title": "From Copenhagen to Porta Venezia, <em>and now Chinatown.</em>",
  "story.p1": "Orsonero was founded in 2016 by Canadian barista Brent Jopson and his wife Giulia Gasperini. It was one of Milan’s very first specialty coffee shops: light roasts, alternative brewing methods and European roasters chosen one by one.",
  "story.p2": "Light wood, white walls and the big menu above the bar. Walking in feels like a café in Copenhagen or New York. Ten years on, the same identity is growing into a new space.",

  "space.eyebrow": "Via Paolo Lomazzo 20",
  "space.title": "A former workshop where <em>coffee meets work.</em>",
  "space.lead": "Orsonero shares its new home with Superhumans, an independent creative agency based between Rome and Milan. The café is on one side, the agency on the other, and in between is a large coworking table open to everyone.",
  "space.f1t": "Coworking table",
  "space.f1": "A long shared table bridges the café and the agency. Sit down, open your laptop, and study or work.",
  "space.f2t": "A charger at every seat",
  "space.f2": "Every seat at the table has its own charger, so you can stay all morning without hunting for a socket.",
  "space.f3t": "Light & Nordic design",
  "space.f3": "Large windows, light wood, concrete. Designed by architects Annalisa Grasselli and Matteo Rota.",
  "space.f4t": "An open bar",
  "space.f4": "A low counter and a front-facing La Marzocco Linea PB remove the barrier between barista and guest.",
  "space.quote": "“It’s a shared space, but not a confused one: the café stays independent, with its own clear identity.”",
  "space.cite": "founder · via CiboToday",

  "coffee.eyebrow": "The coffee",
  "coffee.title": "Multi-roaster, <em>always moving.</em>",
  "coffee.p1": "Brent personally selects European roasters: light roasts, careful extractions and clear flavour profiles. The beans change constantly, and for three years there has also been an Orsonero-branded line for espresso and filter.",
  "coffee.m1": "Rotating single-origin espresso",
  "coffee.m5": "Matcha latte, the most requested newcomer",
  "coffee.roasters": "Some roasters that have featured at the bar",

  "pastry.eyebrow": "International pastry",
  "pastry.title": "Nordic bakes, <em>by Pasticceria Cleà.</em>",
  "pastry.lead": "A short, considered selection: Scandinavian-inspired breads and sweets, with vegan options, to pair with the coffee of the day.",
  "pastry.c1": "Generous, tall and wide: a soft cinnamon swirl, lightly glazed on top.",
  "pastry.c1q": "“Highly recommended.” — Milan Foodie Insider",
  "pastry.c2t": "Chocolate viennoiserie",
  "pastry.c2": "Buttery layers and dark chocolate: the breakfast classic, perfect with a flat white.",
  "pastry.c3t": "The Orsonero break",
  "pastry.c3": "A pastry, a flat white and a seat at the coworking table: the longest break of the day. Vegan options available too.",

  "press.eyebrow": "What they say",
  "press.q1": "“Perhaps this is Orsonero’s real strength: evolving without ever losing its identity.”",
  "press.q2": "“The perfect place for anyone who wants coffee with character, identity and a story in every cup.”",
  "press.q3": "“The vibe is friendly and the menu is succinct.”",

  "visit.eyebrow": "Locations & hours",
  "visit.title": "Two bears, <em>one city.</em>",
  "visit.new": "New · Study & work",
  "visit.lomazzo": "Café, coworking table and pastry in the space shared with Superhumans.",
  "visit.lomazzoHours": "Open daytime, until 4 pm. Up-to-date hours on Google Maps.",
  "visit.map": "Open in Maps",
  "visit.original": "The original · since 2016",
  "visit.d1": "Tue – Fri",
  "visit.d2": "Saturday",
  "visit.d3": "Sunday",
  "visit.d4": "Monday",
  "visit.closed": "Closed",

  "ig.title": "Follow the bear <em>@orsonerocoffee</em>",

  "footer.tag": "Specialty coffee · Milan · since 2016",
  "footer.credits": "Photos: Orsonero Coffee, Google Maps, CiboToday/MilanoToday, Mixer Planet, Artù Magazine/Ristorando, ©2foodtrippers, Flawless.life, © Benedetto Grivo / Milan Foodie Insider. Unofficial demo website.",
  "footer.designed": "Website designed by",

  "alt.hero": "Orsonero’s room on Via Paolo Lomazzo: light wood tables and large windows",
  "alt.window": "The Orsonero bear logo on the window, since 2016",
  "alt.space": "The Via Lomazzo space with its orange portal and wooden tables",
  "alt.counter": "The low counter with the La Marzocco Linea PB",
  "alt.team": "Brent Jopson and the team behind the Via Lomazzo counter",
  "alt.cortado": "Cortado with latte art in front of the La Marzocco",
  "alt.latte": "Brent Jopson pouring latte art into a cappuccino",
  "alt.cinnamon": "Orsonero cinnamon roll",
  "alt.pastry": "Chocolate viennoiserie and two flat whites",
  "alt.flatwhite": "Flat white with latte art"
};

const META = {
  it: { title: document.title, desc: document.querySelector('meta[name="description"]').content },
  en: {
    title: "Orsonero Coffee — Specialty coffee in Milan",
    desc: "Orsonero Coffee: specialty coffee since 2016. New space on Via Paolo Lomazzo 20 with a coworking table, Nordic pastry and cinnamon rolls."
  }
};

const nodes = {
  text: [...document.querySelectorAll("[data-i18n]")],
  html: [...document.querySelectorAll("[data-i18n-html]")],
  alt: [...document.querySelectorAll("[data-i18n-alt]")]
};
nodes.text.forEach(el => (el.dataset.it = el.textContent));
nodes.html.forEach(el => (el.dataset.it = el.innerHTML));
nodes.alt.forEach(el => (el.dataset.it = el.alt));

function setLang(lang) {
  const en = lang === "en";
  nodes.text.forEach(el => (el.textContent = en ? EN[el.dataset.i18n] ?? el.dataset.it : el.dataset.it));
  nodes.html.forEach(el => (el.innerHTML = en ? EN[el.dataset.i18nHtml] ?? el.dataset.it : el.dataset.it));
  nodes.alt.forEach(el => (el.alt = en ? EN[el.dataset.i18nAlt] ?? el.dataset.it : el.dataset.it));
  document.documentElement.lang = lang;
  document.title = META[lang].title;
  document.querySelector('meta[name="description"]').content = META[lang].desc;
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  try { localStorage.setItem("orsonero-lang", lang); } catch (e) {}
  const url = new URL(location.href);
  url.searchParams.set("lang", lang);
  history.replaceState(null, "", url);
}

function initialLang() {
  const q = new URLSearchParams(location.search).get("lang");
  if (q === "it" || q === "en") return q;
  try {
    const saved = localStorage.getItem("orsonero-lang");
    if (saved) return saved;
  } catch (e) {}
  return (navigator.language || "it").toLowerCase().startsWith("it") ? "it" : "en";
}

document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
setLang(initialLang());

// Mobile menu
const toggle = document.querySelector(".nav__toggle");
const menu = document.getElementById("menu");
function closeMenu() {
  menu.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
}
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

// Header border on scroll
const nav = document.querySelector(".nav");
addEventListener("scroll", () => nav.classList.toggle("is-scrolled", scrollY > 8), { passive: true });

// Reveal on scroll
const revealables = document.querySelectorAll(".section__head, .story > *, .tile, .features li, .pull, .coffee__media, .coffee__text, .card, .press figure, .place, .ig__strip img");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  revealables.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${(i % 4) * 70}ms`;
    io.observe(el);
  });
}
