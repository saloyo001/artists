// Mzalendo: tiny overhead "drone view" street life spread over the WHOLE page.
// People cross the page, bus stops and food stands line the margins, and matatus
// stop at each bus stop shouting "Shukisha!". Everything is inline SVG, no images.
(() => {
let uid = 0;
const svg = (vb, w, h, body) => `<svg viewBox="${vb}" width="${w}" height="${h}">${body}</svg>`;
const shade = (x, y, w, h, r) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="#000" opacity=".35"/>`;

const matatu = (c, a) => svg("0 0 46 96", 24, 50, `${shade(7, 6, 36, 88, 10)}
  <g fill="#111"><rect x="1" y="16" width="4" height="14" rx="2"/><rect x="1" y="62" width="4" height="14" rx="2"/><rect x="37" y="16" width="4" height="14" rx="2"/><rect x="37" y="62" width="4" height="14" rx="2"/></g>
  <rect x="3" y="2" width="36" height="88" rx="10" fill="${c}"/>
  <path d="M8 12q13-6 26 0l-2 14H10z" fill="#16222f"/><rect x="7" y="24" width="28" height="3" fill="${a}"/>
  <rect x="7" y="30" width="28" height="48" rx="5" fill="#fff" opacity=".14"/>
  <path d="M10 38q7-7 11 1t11-2M10 52q8-6 12 2t10-3M11 66q6-5 10 1t11-2" fill="none" stroke="${a}" stroke-width="2.4" stroke-linecap="round"/>
  <rect x="9" y="80" width="24" height="6" rx="2" fill="#16222f"/><circle cx="10" cy="5" r="2.4" fill="#ffe9a0"/><circle cx="32" cy="5" r="2.4" fill="#ffe9a0"/>`);

const person = (shirt, skin, hair) => svg("0 0 20 20", 13, 13, `<ellipse cx="11" cy="11" rx="8" ry="7" fill="#000" opacity=".3"/>
  <ellipse class="ft" cx="7" cy="4" rx="2" ry="3" fill="#222"/><ellipse class="ft b" cx="13" cy="4" rx="2" ry="3" fill="#222"/>
  <ellipse cx="10" cy="10" rx="7" ry="4.5" fill="${shirt}"/><circle cx="10" cy="10" r="3.6" fill="${skin}"/><circle cx="10" cy="9.2" r="3.2" fill="${hair}"/>`);

const stall = (kind) => {
  const id = "c" + uid++, smocha = kind === "s", color = smocha ? "#e8442f" : "#22a24a";
  const stripes = [0, 1, 2, 3, 4, 5].map((i) => `<rect x="${3 + i * 9.7}" y="2" width="9.8" height="34" fill="${i % 2 ? "#fff8e8" : color}"/>`).join("");
  const food = smocha
    ? `<circle cx="20" cy="49" r="9" fill="#262626"/><circle cx="20" cy="49" r="6" fill="#f5a623"/><g fill="#e8c27a"><circle cx="44" cy="45" r="4.5"/><circle cx="45" cy="50" r="4.5"/><circle cx="43" cy="55" r="4.5"/></g>`
    : `<rect x="8" y="41" width="40" height="17" rx="3" fill="#222"/><g fill="#ff7a1a"><circle cx="14" cy="50" r="2"/><circle cx="26" cy="54" r="2"/><circle cx="40" cy="47" r="2"/></g><g fill="#8a3b22"><rect x="11" y="43" width="34" height="4" rx="2"/><rect x="11" y="51" width="34" height="4" rx="2"/></g>`;
  const smoke = [0, 1.1].map((d) => `<circle class="st" style="animation-delay:-${d}s" cx="${smocha ? 20 : 28}" cy="47" r="3.5" fill="${smocha ? "#fff" : "#aaa"}"/>`).join("");
  return svg("0 0 64 64", 30, 30, `${shade(8, 8, 54, 54, 8)}<rect x="3" y="30" width="58" height="32" rx="5" fill="#7a4b2a"/>${food}
    <ellipse cx="32" cy="37" rx="10" ry="4.5" fill="${smocha ? "#fff" : "#f5a623"}"/><circle cx="32" cy="37" r="3.8" fill="#3b2417"/>${smoke}
    <clipPath id="${id}"><rect x="3" y="2" width="58" height="34" rx="8"/></clipPath><g clip-path="url(#${id})">${stripes}<rect x="3" y="17" width="58" height="2" fill="#000" opacity=".15"/></g>`);
};

const busStop = () => svg("0 0 64 64", 30, 30, `${shade(8, 8, 52, 50, 4)}<rect x="9" y="38" width="40" height="8" rx="2" fill="#7a4b2a"/>
  <rect x="5" y="5" width="52" height="50" rx="4" fill="#00c2d6" opacity=".78"/><path d="M5 17h52M5 29h52M5 41h52" stroke="#fff" stroke-width="1.6" opacity=".45"/>
  <circle cx="58" cy="58" r="5" fill="#ffd23f"/><circle cx="58" cy="58" r="2.4" fill="#1d5fd1"/>`);

const tree = (a, b, c) => svg("0 0 40 40", 30, 30, `<circle cx="23" cy="23" r="16" fill="#000" opacity=".3"/><circle cx="18" cy="18" r="15" fill="${a}"/><circle cx="13" cy="14" r="8" fill="${b}"/><circle cx="24" cy="22" r="8" fill="${c}"/>`);

const MATATU = [["#e8442f", "#ffd23f"], ["#22a24a", "#fff3dc"], ["#00c2d6", "#f5a623"], ["#8a4fd1", "#00c2d6"]];
const SHIRTS = ["#e8442f", "#f5a623", "#00c2d6", "#22a24a", "#f6ecdc", "#8a4fd1", "#2d6cdf"];
const SKIN = ["#5a3825", "#3b2417", "#7a4b2f", "#8d5a3a"];
const folk = (i) => person(SHIRTS[i % 7], SKIN[i % 4], "#141010");
const TREES = [() => tree("#8a5bd1", "#a77be6", "#7447b8"), () => tree("#1f7a3a", "#2a9a4a", "#26883f")]; // jacaranda + green

const SAY = "Shukisha!";                  // what the passengers shout
const BUSES = 2, SPEED = 90, DWELL = 2.6; // matatus, px per second, seconds spent at each stop
let layer, anims = [], height = 0, timer;

const spot = (x, y, rot, art, cls = "") => `<div class="spot ${cls}" style="left:${x};top:${y}px;--r:${rot}deg">${art}</div>`;
const fromLeft = (px) => `${px}px`, fromRight = (px) => `calc(100% - ${px}px)`;

function build(H) {
  anims.forEach((a) => a.cancel());
  anims = [];
  layer?.remove();
  const n = Math.max(2, Math.round(H / 1000)), gap = H / (n + 1);
  const at = (i, shift = 0) => Math.round(gap * (i + shift));
  let html = "";

  // Left margin: smocha and mutura stands with customers, plus trees
  for (let i = 0; i <= n; i++) {
    html += spot(fromLeft(22), at(i, .5), -90, stall(i % 2 ? "m" : "s"));
    html += spot(fromLeft(46), at(i, .5) + 3, -90, folk(i), "still") + spot(fromLeft(46), at(i, .5) - 11, -90, folk(i + 3), "still");
    html += spot(fromLeft(18), at(i, .8), 0, TREES[i % 2]());
  }
  // Right margin: bus stops with waiting passengers who shout too, plus trees
  for (let i = 1; i <= n; i++) {
    html += spot(fromRight(22), at(i), 0, busStop());
    html += spot(fromRight(48), at(i) + 1, -90, folk(i + 1), "still") + spot(fromRight(48), at(i) + 14, -90, folk(i + 4), "still");
    html += `<div class="say stop" style="top:${at(i) - 24}px;--d:${11 + i * 2}s;--w:-${i * 3 + 2}s">${SAY}</div>`;
    html += spot(fromRight(18), at(i, .5), 0, TREES[(i + 1) % 2]());
  }
  // People walking across the whole page (heading to the stops and stands)
  const walkers = Math.max(4, Math.round(H / 500));
  for (let i = 0; i < walkers; i++) {
    html += `<div class="w ${i % 2 ? "l" : "r"}" style="top:${Math.round(H * (i + .5) / walkers) + (i * 37) % 60}px;--d:${38 + (i * 7) % 25}s;--w:-${(i * 11) % 40}s">${folk(i + 5)}</div>`;
  }
  // Matatus (drawn facing down; they drive the bus-stop lane)
  for (let b = 0; b < BUSES; b++) html += `<div class="bus">${matatu(...MATATU[b % 4])}<div class="say">${SAY}</div></div>`;

  layer = document.createElement("div");
  layer.className = "life";
  layer.setAttribute("aria-hidden", "true");
  layer.style.height = H + "px";
  layer.innerHTML = html;
  document.body.append(layer);
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // Each matatu drives down the page, pausing at every bus stop while its bubble pops up
  const stops = Array.from({ length: n }, (_, i) => at(i + 1));
  layer.querySelectorAll(".bus").forEach((bus, k) => {
    let t = 0, y = -90;
    const pos = [[0, y]], say = [[0, 0]];
    stops.forEach((s) => {
      t += (s - y) / SPEED; y = s;
      pos.push([t, y]); say.push([t, 0], [t + .4, 1]);
      t += DWELL;
      pos.push([t, y]); say.push([t - .4, 1], [t, 0]);
    });
    t += (H + 90 - y) / SPEED;
    pos.push([t, H + 90]); say.push([t, 0]);
    const opts = { duration: t * 1000, iterations: Infinity };
    const a = bus.animate(pos.map(([x, yy]) => ({ offset: x / t, transform: `translateY(${yy}px)` })), opts);
    const b = bus.querySelector(".say").animate(say.map(([x, o]) => ({ offset: x / t, opacity: o })), opts);
    if (k) a.currentTime = b.currentTime = t * 1000 * k / BUSES; // stagger the matatus
    anims.push(a, b);
  });
}

// Rebuild when the page height changes (images loading, listings added...)
function refresh() {
  if (layer) layer.style.height = "0"; // so the layer itself doesn't count toward the page height
  const H = document.documentElement.scrollHeight;
  if (layer) layer.style.height = height + "px";
  if (Math.abs(H - height) > 60) build(height = H);
}
refresh();
addEventListener("load", refresh);
new ResizeObserver(() => { clearTimeout(timer); timer = setTimeout(refresh, 400); }).observe(document.body);
})();

// Mzalendo loading screen: shows on every page load, drives the matatu for 8 seconds, then fades out.
(() => {
  const el = document.getElementById("intro-screen");
  if (!el) return;

  const root = document.documentElement;
  root.classList.add("intro-lock");

  const MIN = 8000;    // loading screen stays up for 8 seconds
  const MAX = 12000;   // safety: never longer than this, even if the page is slow
  const start = performance.now();
  let p = 0, loaded = document.readyState === "complete", finished = false;
  addEventListener("load", () => { loaded = true; });

  function finish() {
    if (finished) return;
    finished = true;
    el.style.setProperty("--p", 100);
    el.classList.add("done");
    setTimeout(() => {
      el.classList.add("leave");
      setTimeout(() => { el.remove(); root.classList.remove("intro-lock"); }, 700);
    }, 700);
  }

  function tick(now) {
    if (finished) return;
    const t = now - start;
    const target = Math.min(t / MIN * 100, loaded ? 100 : 90);
    p += (target - p) * 0.1;
    el.style.setProperty("--p", p.toFixed(2));
    if ((loaded && t >= MIN && p > 99) || t > MAX) return finish();
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();