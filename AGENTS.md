# AGENTS.md

Guidance for AI agents (Claude Code, Cursor, Codex, etc.) working on this repository.

## Project

Personal web CV / portfolio for **David Ruiz Urraca** (Senior Mobile Engineer — Android, Flutter, KMP). It's a single-page, static website deployed to GitHub Pages at **https://davidru85.github.io/**.

There is **no build step, no framework, and no dependencies**. It is plain HTML5 + CSS3 + vanilla JavaScript. Do not introduce a bundler, package manager, framework, or CSS preprocessor unless the user explicitly asks — keeping it dependency-free is a deliberate design choice.

## File map

| File | Role |
|---|---|
| `index.html` | The entire page — all sections (hero, about, experience, projects, skills, education, contact). Single source of structural truth for the site. |
| `style.css` | Full design system in one file (~1600 lines). Section-commented and numbered. Keep it as a single file. |
| `script.js` | All client-side behavior. Vanilla JS, no libraries. |
| `CV_David_Ruiz_Urraca.md` | **Canonical CV content.** The narrative, dates, bullets, and skills here are the source of truth that `index.html`, `README.md`, and the PDF should reflect. |
| `CV David Ruiz Urraca.pdf` | Downloadable CV (linked from header + hero). Static asset — not generated here. Update manually when content changes. |
| `README.md` | GitHub repo landing page. Mirrors CV content in a repo-friendly format. |
| `profile.jpg` | Hero avatar + Open Graph / Twitter card image. |

## Run locally

No build. Serve the folder statically, e.g.:

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

Opening `index.html` directly works too, but a local server is closer to the GitHub Pages environment.

## Deployment

- Repo: `git@github.com:davidru85/davidru85.github.io.git` — this is a **GitHub Pages user site**, so the `main` branch is published directly at the root domain. Anything merged to `main` goes live.
- Active development happens on feature branches (currently `feature/claude_improv`). Open a PR into `main`; don't commit straight to `main` for non-trivial changes.
- There is no `CNAME` (uses the default `*.github.io` domain) and no Jekyll config — files are served as-is. If adding files that start with `_`, include a `.nojekyll` file.

## Conventions

**HTML** — Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`). Every interactive control and icon carries appropriate `aria-*` labels or `aria-hidden`. Section `id`s drive both nav anchors and the IntersectionObserver scroll-spy in `script.js`, so keep them in sync when renaming.

**CSS** — Everything is themed through CSS custom properties defined in `:root` at the top of `style.css` (colors, gradients, glassmorphism tokens, fonts, spacing, radii). **Use existing tokens rather than hardcoding values.** The visual language is a premium dark-mode glassmorphic style — `.glass-card`, `.spotlight-card`, gradient text via `.gradient-text`, ambient background orbs. Per-project accent colors come from `project-card--{cyan,purple,green}`. Preserve the existing print styles (`@media print`) and `prefers-reduced-motion` support when editing.

**JavaScript** — `script.js` uses an init-function module pattern: each feature is a `initX()` function called from a single `DOMContentLoaded` listener. Every init guards against missing DOM nodes (`if (!el) return;`). Follow this pattern for new behavior; keep it dependency-free and framework-free.

**Fonts** — `Space Grotesk` (titles) and `Plus Jakarta Sans` (body), loaded from Google Fonts.

## Content rules

- When updating CV content, treat `CV_David_Ruiz_Urraca.md` as canonical, then propagate the same facts to `index.html`, `README.md`, and (where relevant) the JSON-LD structured data and SEO meta tags in `index.html`. The PDF must be regenerated/replaced separately and manually.
- The `index.html` `<head>` contains SEO meta tags, Open Graph / Twitter cards, and `schema.org` Person JSON-LD. Keep job title, skills (`knowsAbout`), and links consistent with the visible content when you change them.
- Don't invent metrics, dates, or achievements. If a number is unknown, leave the existing placeholder.

## Known inconsistencies to reconcile

- **English level** is stated three different ways: `CV_David_Ruiz_Urraca.md` says "Upper-intermediate", `index.html` says "Advanced (C1)", `README.md` says "C1 (Upper-Intermediate)". Pick one wording with the user and align all three.

## Open TODOs (see comment block in `index.html` Projects section)

- Replace project thumbnail placeholders (`.project-thumb` monogram blocks) with real screenshots dropped into a `screenshots/` folder.
- Replace `—` placeholder metrics (downloads, store rating) with real figures.
- Replace disabled `href="#"` App Store / Google Play links with real store URLs once available.

## Guardrails

- Keep the site dependency-free, single-file-per-concern (one HTML, one CSS, one JS) unless the user asks otherwise.
- Don't break responsive layout, accessibility, print styles, or reduced-motion support.
- Preserve SEO/meta/structured-data integrity on any `<head>` or content change.
- Verify changes by serving locally and checking hero, mobile menu, collapsible older-experience toggle, copy-email button, and scroll-spy nav highlighting still work.
