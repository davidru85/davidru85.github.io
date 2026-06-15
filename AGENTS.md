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

## Command: "Add information to the WebCV"

When the user asks to **add or change information on the WebCV** (`index.html`), follow this workflow — do not just edit `index.html` directly:

1. **Validate against the canonical CV first.** Before making any edit, cross-check the requested information against `CV_David_Ruiz_Urraca.md` (the source of truth). Look for conflicts such as:
   - Contradictory facts (different dates, titles, employers, metrics, or skill levels than what the CV states).
   - Duplicates or overlaps with content already present.
   - Claims that aren't supported anywhere in the CV and may be inaccurate.

2. **If there's a problem, stop and ask for confirmation.** Do not add the information yet. Explain clearly *what* the conflict is and *why* it's a problem (e.g. "The CV lists OLX as ending Jan 2026, but you're adding 'present' — these contradict each other"). Wait for the user to confirm how to proceed before editing anything.

3. **If there's no problem (or after the user confirms), apply the change in both places.** Any information added to the WebCV must also be reflected in `CV_David_Ruiz_Urraca.md` so the two never drift apart. Update:
   - `index.html` (the visible content, plus SEO meta / JSON-LD if the change touches job title, skills, or links).
   - `CV_David_Ruiz_Urraca.md` (mirror the same fact in the appropriate section).

4. **Always check whether `README.md` needs updating.** `README.md` mirrors CV content (about, technical expertise, experience summary, education, languages). After any content change, check whether it covers the affected fact — if it does, update it too so it stays consistent. If the change is purely visual/structural (CSS, layout, JS behavior) and doesn't touch content `README.md` describes, no update is needed.

5. **Confirm what changed.** Briefly tell the user which files were updated.

## Known inconsistencies to reconcile

- **English level** — resolved. All three files now state "Upper-Intermediate":
  - `index.html` says "Upper-Intermediate"
  - `CV_David_Ruiz_Urraca.md` says "Upper-Intermediate — professional working proficiency"
  - `README.md` says "Upper-Intermediate"

## Resolved content decisions (June 2026)

- **AI & Agentic Tooling stack** is canonical in the CV markdown; `index.html` mirrors it. Windsurf, Gemini, Qwen are included. `.cursorrules` is intentionally omitted from the web (too niche to surface as a public skill badge).
- **"Available for Remote Roles"** is a status badge in the hero of `index.html` and is also stated explicitly in both `CV_David_Ruiz_Urraca.md` and `README.md`.
- **Copyright** appears only in the `index.html` footer. `CV_David_Ruiz_Urraca.md` and `README.md` carry no copyright line.
- **Hero lead paragraph** in `index.html` is intentionally exclusive to the web (the CV markdown profile section is the equivalent).

## Open TODOs (see comment block in `index.html` Projects section)

- Replace project thumbnail placeholders (`.project-thumb` monogram blocks) with real screenshots dropped into a `screenshots/` folder.
- **Explora Prado is NOT published yet.** Its App Store / Google Play links must stay in the pre-launch state (`<span class="project-link project-link--pending" aria-disabled="true">… · Coming Soon</span>`), not live `<a href>` store URLs. Only switch them to real links once the app is actually on the stores. The Wegow store link is live because Wegow is published — that is the correct pattern for a released app.
- **Do not show download/rating metrics for unreleased apps.** Explora Prado must not claim figures like "5K+ downloads" or "4.9 store rating" until it is published and those numbers are real. Use honest pre-launch metrics instead (e.g. "2026 · launching soon", "3 platforms").

## Guardrails

- Keep the site dependency-free, single-file-per-concern (one HTML, one CSS, one JS) unless the user asks otherwise.
- Don't break responsive layout, accessibility, print styles, or reduced-motion support.
- Preserve SEO/meta/structured-data integrity on any `<head>` or content change.
- Verify changes by serving locally and checking hero, mobile menu, collapsible older-experience toggle, copy-email button, and scroll-spy nav highlighting still work.
- **PDF: a single professional experience must never split across pages.** Each experience entry carries `break-inside: avoid` so it stays whole on one page. After regenerating the PDF, visually verify no role is cut between pages (a small gap at the bottom of a page is acceptable; a split entry is not).
- **Radar chart ("Skill Proficiency") labels must never be clipped.** The SVG `viewBox` must be wide enough to contain the edge labels in BOTH languages (the Spanish labels are longer, so size for those). Current value: `viewBox="-94 -54 484 404"` (paired with `.radar-chart-wrapper { max-width: 390px }`). If labels change, re-verify the longest ones still fit inside the viewBox.
- **Never claim store presence (live links, downloads, ratings) for an app that isn't published.** See the Explora Prado TODO above.
- **Availability / current-location must never name a specific city.** The candidate's availability line stays exactly `Spain (Remote)` / `España (Remoto)` — do not append any city or "city options" (e.g. no "Madrid & Barcelona options"), and never write the candidate's actual home city anywhere in the site, repo, or PDF. This is deliberate: he works fully remote and does not want a current city shown. NOTE: the per-job **historical location badges** (e.g. "OLX · Barcelona", "Wegow · Madrid") are different — those are past employer locations and stay as-is.
- The downloadable PDF is generated from `CV_David_Ruiz_Urraca.md` with WeasyPrint via a build script (kept in the working/output folder, not committed). When CV content changes, regenerate and replace `CV David Ruiz Urraca.pdf`, then verify page count and that no experience is split.
