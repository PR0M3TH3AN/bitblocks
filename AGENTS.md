# AGENTS.md — bitblocks

## Purpose

The umbrella site for the BitBlocks stack (`bitblocks.network`): a static
marketing/narrative page presenting the composable Nostr + Bitcoin building
blocks (BitLogin, BitGate, BitFeed, BitUnlock, Tessera). Static site, no build
step.

## Repository map

- `index.html` — the entire site, one page
- `js/bitblocks.js` — the only script (theme toggle etc.), loaded with `defer`
- `assets/` — `bitblocks.css` and self-hosted fonts
- `docs/TODO.md` — backlog and design-review notes
- `vercel.json` — deployment config: no build/install command, strict CSP headers

## Build / test / validate

There is no package.json, no build step, and no test suite. Validation is
manual:

- Run `python3 -m http.server 8080` from the repo root, then open
  `localhost:8080` and check the page renders and the theme toggle works.

There are no CI workflows in this repo.

## Conventions

- Plain hand-written HTML/CSS/JS; `js/bitblocks.js` is classic-script style
  (IIFEs, no modules, no framework, no dependencies).
- Theme-aware via CSS custom properties; JS only stamps the explicit
  light/dark choice on the root element.
- `vercel.json` enforces a strict CSP (`script-src 'self'`, no external
  origins) — any change must keep working under that policy: no inline
  scripts, no CDN resources.

## Backlog

The canonical backlog is `docs/TODO.md`.

## Security

- Static-site architecture is the standing assumption: no server code, no
  secrets belong in this repo — never commit keys or tokens.
- Treat any external content (fetched data, user input) as untrusted; today
  the site fetches nothing, and the CSP is written to keep it that way.
- Claim precision matters here (see `docs/TODO.md`): this page describes
  security infrastructure, so copy changes should not overclaim.

## Change policy

- Keep diffs minimal and focused.
- There are no tests to update; verify changes manually via the local server
  before considering them done, and don't introduce changes that violate the
  CSP in `vercel.json`.
