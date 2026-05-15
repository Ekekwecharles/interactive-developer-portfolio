# Interactive Developer Portfolio (SvelteKit)

A production-oriented, immersive portfolio: hero with canvas particles (respects `prefers-reduced-motion`), staggered Svelte transitions, project filtering, prerendered case studies, a **command palette** (⌘/Ctrl + K), dark/light theme with **accent persistence**, accessible skip link and focus styles, and a **contact form** backed by a Zod-validated server action (optional Resend email).

## Setup

```bash
npm install
npm run dev
# http://localhost:5173
```

```bash
npm run build   # production build
npm run preview # serve build locally
npm run check   # svelte-check + TypeScript
npm run lint    # Prettier + ESLint
```

Copy [`.env.example`](.env.example) to `.env` if you enable Resend for contact email.

## Architecture

| Area                                                                      | Location                                                                                                                         |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Site copy & social defaults                                               | [`src/lib/site.ts`](src/lib/site.ts)                                                                                             |
| Project data (replace with yours)                                         | [`src/lib/data/projects.ts`](src/lib/data/projects.ts)                                                                           |
| Theme + accent (`localStorage`, `data-theme` / `data-accent` on `<html>`) | [`src/lib/theme.svelte.ts`](src/lib/theme.svelte.ts)                                                                             |
| Motion helpers                                                            | [`src/lib/motion/reduced-motion.ts`](src/lib/motion/reduced-motion.ts), [`src/lib/motion/presets.ts`](src/lib/motion/presets.ts) |
| Layout shell, skip link, palette                                          | [`src/routes/+layout.svelte`](src/routes/+layout.svelte)                                                                         |
| Design tokens & global a11y CSS                                           | [`src/routes/layout.css`](src/routes/layout.css)                                                                                 |
| Contact server action + Zod                                               | [`src/routes/contact/+page.server.ts`](src/routes/contact/+page.server.ts)                                                       |
| Static project art                                                        | [`static/projects/*.svg`](static/projects)                                                                                       |

**Routing:** home (`/`), projects index + filters (`/projects`), dynamic case studies (`/projects/[slug]` with `entries()` for prerender), printable resume (`/resume`), SSR contact (`/contact` with `prerender = false`).

**Deployment:** [`@sveltejs/adapter-auto`](https://svelte.dev/docs/kit/adapter-auto) picks the right adapter for your host (Vercel, Netlify, Cloudflare, etc.). For explicit Vercel output on Windows, you can switch to `@sveltejs/adapter-vercel` if your filesystem allows symlinks (Developer Mode / non–OneDrive paths often work).

Connect the repo in Vercel (or Netlify), set env vars for Resend if used, and deploy.

## Animation decisions

- **Svelte `transition:`** (`fly`, `fade`, `scale`) for hero lines, cards, and palette — GPU-friendly transforms/opacity, shared easing (`cubicOut`).
- **CSS `prefers-reduced-motion`** in [`layout.css`](src/routes/layout.css) short-circuits animations/transitions globally so users who opt out are not overwhelmed.
- **Canvas particles** only mount when reduced motion is off; lightweight 2D dots to avoid a heavy WebGL bundle on first load.

## Performance

- Prerender static routes; **only** `/contact` opts out of prerender for the server action.
- Project images are **SVGs** in `static/` (sharp edges, tiny bytes, no remote LCP risk).
- `loading="lazy"` on below-the-fold cards; explicit `width`/`height` on `<img>` to limit CLS.
- Fonts loaded with `display=swap` and limited families (DM Sans + Instrument Sans).

## Accessibility

- Skip link (keyboard-visible) → `#main-content`.
- `:focus-visible` outlines on interactive elements.
- Semantic regions (`<main>`, `<header>`, `<footer>`, `<nav>`, `<article>`).
- Command palette: `role="dialog"`, listbox pattern, arrow/Enter/Escape support, full-screen close **button** (not a non-interactive `div` click target).
- Meaningful `alt` text on project imagery (defined next to each project).

## Trade-offs

- **Command palette vs Threlte:** palette delivers a strong “engineered product” feel with a small JS budget; 3D would increase bundle size and testing surface (especially on low-end mobile).
- **Resend optional:** without `RESEND_API_KEY`, submissions succeed after validation (useful for demos); production should set the key and `RESEND_FROM` / `RESEND_TO`.
- **`svelte/no-navigation-without-resolve` disabled** in ESLint: internal navigation uses plain paths; you can re-enable the rule and adopt [`resolve`](https://svelte.dev/docs/kit/$app-paths#resolve) if you move to stricter typed routing.

## Customize

1. Edit [`src/lib/site.ts`](src/lib/site.ts) (name, title, social URLs, scheduling link).
2. Replace project entries and image paths in [`src/lib/data/projects.ts`](src/lib/data/projects.ts).
3. Swap `static/projects/*.svg` or use optimized raster assets if you prefer screenshots.

## License

Private / portfolio use — adjust as you like for your submission.
