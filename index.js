/* global BVAmbient */

function getInitialTheme() {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: light)")?.matches ? "light" : "dark";
}

function setTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

function initThemeToggle() {
  const btn = document.querySelector("[data-theme-toggle]");
  if (!btn) return;

  const nextTheme = () => (document.body.dataset.theme === "light" ? "dark" : "light");

  btn.addEventListener("click", () => {
    setTheme(nextTheme());
  });
}

function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    header.dataset.stuck = window.scrollY > 8 ? "true" : "false";
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initMobileMenu() {
  const btn = document.querySelector("[data-menu]");
  const menu = document.querySelector("[data-mobile-menu]");
  if (!btn || !menu) return;

  const setOpen = (open) => {
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    menu.hidden = !open;
  };

  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });

  menu.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) setOpen(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) setOpen(false);
  });
}

function initYear() {
  const el = document.querySelector("[data-year]");
  if (el) el.textContent = String(new Date().getFullYear());
}

function initAmbient() {
  const ambient = document.getElementById("ambient");
  if (!ambient) return;

  // If the class isn't available (blocked), the CSS background still looks good.
  if (typeof BVAmbient !== "function") return;

  // Subtle particles: low count, soft colors.
  // Note: this library expects selector="#ambient" and inserts particles as children.
  // Clear any previous content (helps with hot reloads / soft refreshes).
  ambient.innerHTML = "";

  // eslint-disable-next-line no-new
  new BVAmbient({
    selector: "#ambient",
    particle_number: 18,
    particle_maxwidth: 44,
    particle_minwidth: 14,
    particle_radius: 999,
    particle_opacity: true,
    particle_colision_change: false,
    particle_background: "random",
    fps: 30,
    max_transition_speed: 15000,
    min_transition_speed: 11000,
    refresh_onfocus: true,
  });
}

function initExternalLinks() {
  document.querySelectorAll('a[href^="http"]').forEach((a) => {
    try {
      const u = new URL(a.href);
      if (u.origin !== window.location.origin) {
        a.target = "_blank";
        a.rel = a.rel ? `${a.rel} noopener noreferrer` : "noopener noreferrer";
      }
    } catch {
      // ignore
    }
  });
}

function init() {
  setTheme(getInitialTheme());
  initThemeToggle();
  initStickyHeader();
  initMobileMenu();
  initYear();
  initAmbient();
  initExternalLinks();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

