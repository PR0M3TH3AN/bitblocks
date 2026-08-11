// Theme toggle (light / dark / system), persisted. The page is theme-aware via
// CSS tokens; this only stamps an explicit choice on the root.
(() => {
  const KEY = 'bitblocks:theme';
  const root = document.documentElement;
  const saved = localStorage.getItem(KEY);
  if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);

  const btn = document.getElementById('theme');
  const glyph = () => {
    const t = root.getAttribute('data-theme');
    btn.textContent = t === 'dark' ? '☾' : t === 'light' ? '☀' : '◑';
  };
  glyph();
  btn?.addEventListener('click', () => {
    const cur = root.getAttribute('data-theme');
    const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
    // Cycle: system → opposite of system → the other → system.
    const next = !cur ? (prefersDark ? 'light' : 'dark') : cur === (prefersDark ? 'light' : 'dark') ? (prefersDark ? 'dark' : 'light') : null;
    if (next) { root.setAttribute('data-theme', next); localStorage.setItem(KEY, next); }
    else { root.removeAttribute('data-theme'); localStorage.removeItem(KEY); }
    glyph();
  });
})();
