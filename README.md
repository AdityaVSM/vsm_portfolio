# Portfolio

Personal portfolio built with React, TypeScript and Vite, styled with the design kit in `public/assets`.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check, build, and prerender the home page into dist/index.html
```

Deploy on Vercel: `vercel.json` sends every route to the app, so detail pages work when opened directly.

## Updating content

- **Everything on the home page** lives in `src/data/profile.ts` (experience, projects, skills, education, links).
- **Detail pages** are Markdown: `src/content/experience/<slug>.md` and `src/content/projects/<slug>.md`.
  The slug must match the entry in `profile.ts`. Copy `src/content/TEMPLATE.md` to start a new one.
- **Writing:** add `src/content/writing/<slug>.md` and list it under `writing` in `profile.ts`.
- **Resume:** replace `public/resume.pdf` and push.
- **Photos:** put files in `public/assets/img/` and point the `photo(...)` entries in `profile.ts` at them.
  Licensed stand-in photos are credited in `public/credits.html`; update it if you change them.
- **Tool icons:** SVGs in `public/assets/icons/`, listed under `tools` in `profile.ts`.

## Design

- Kit (do not edit): `public/assets/system.css`, `layout/`, `motion/`, `moments/`, `ui/`, `icons/icon.css`.
- Page-specific CSS: `src/page.css`.
- Palette and fonts: the `:root` block in `index.html`.
