# Wanted - Portfolio

A pixel-faithful React rebuild of the original Framer one-page portfolio for
cinematographer **Karim Fahmy**. Built with **Vite + React** and ready to
deploy to **Netlify** out of the box.

## Tech stack

- React 18
- React Router 6 (client-side routing for individual project pages)
- Vite 5
- Plain CSS (one stylesheet per component, design tokens via CSS custom properties)
- Google Fonts: **Anton** (display) and **Azeret Mono** (body)

## Routes

| Path                                | Page                                              |
| ----------------------------------- | ------------------------------------------------- |
| `/`                                 | One-page portfolio (Home)                         |
| `/acts-commited/:slug`              | Individual project case file                      |
| `/acts-committed/:slug`             | Same page (alias for the correctly-spelled URL)   |
| `*`                                 | 404 — "Suspect Not Found"                         |

Available project slugs: `thriftinn`, `7alna`, `kadaba`, `alone`, `portsaid`, `trapped`.

## Project structure

```
.
├── index.html               # Vite HTML entry (loads /src/main.jsx)
├── netlify.toml             # Netlify build + SPA redirect config
├── package.json
├── vite.config.js
├── public/
│   └── _redirects           # SPA fallback for Netlify
└── src/
    ├── main.jsx              # React entry
    ├── App.jsx               # Router + page shell
    ├── data/
    │   └── projects.js       # Single source of truth for all projects
    ├── pages/
    │   ├── Home.jsx          # The one-page portfolio
    │   ├── ProjectPage.{jsx,css}  # Individual project case file
    │   └── NotFound.{jsx,css}     # 404 page
    ├── styles/
    │   └── global.css        # Reset, design tokens, page shell, animations
    └── components/
        ├── Header.{jsx,css}     # Giant "WANTED" title
        ├── Profile.{jsx,css}    # Photo + "Available for work" badge + name plate
        ├── About.{jsx,css}      # About section
        ├── Services.{jsx,css}   # Numbered list of services
        ├── Work.{jsx,css}       # "Acts Committed" project cards (linked)
        ├── Contact.{jsx,css}    # Contact links + form
        ├── Footer.{jsx,css}     # © Copyright
        └── ScrollToTop.jsx      # Resets scroll on route change
```

## Local development

Requirements: **Node.js 18+** (Netlify uses 20).

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually <http://localhost:5173>).

## Production build

```bash
npm run build      # outputs to /dist
npm run preview    # serve the production build locally
```

## Deploy to Netlify

### Option A — Git-based (recommended)

1. Push this folder to a GitHub / GitLab / Bitbucket repository.
2. In Netlify, click **Add new site → Import an existing project** and pick the repo.
3. Netlify will read `netlify.toml` and use:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 20

   No additional configuration is required.

### Option B — Netlify CLI (no Git)

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option C — Drag and drop

Run `npm run build`, then drag the generated `dist/` folder into the
Netlify dashboard's "Sites" tab to publish instantly.

## Customizing the content

- **Profile photo URL** → `src/components/Profile.jsx`
- **About paragraph** → `src/components/About.jsx`
- **Services list** → `src/components/Services.jsx`
- **Project cards & full project pages** → `src/data/projects.js`
  (one entry per project — title, slug, category, date, card image,
  tagline, description paragraphs, credits, and a `videoUrl` that can be
  either a YouTube _or_ Vimeo URL — auto-detected.)
- **Email / phone / social URLs** → `src/components/Contact.jsx`

Design tokens (background color, text colors, fonts, container width) are
centralized at the top of `src/styles/global.css`.

### Adding a new project

1. Open `src/data/projects.js` and append a new object to the `PROJECTS` array.
2. Provide a unique `slug` — that becomes the URL: `/acts-commited/<slug>`.
3. Fill in the fields (title, image, description, credits, etc.).
4. Done — the home grid and the project page will appear automatically.

## Notes on the rebuild

- The original Framer site referenced images hosted on
  `framerusercontent.com`. Those URLs are reused directly so the visuals
  match the original 1:1 without bundling images. Drop in your own URLs or
  local files in `public/` to self-host.
- The contact form is wired up with simple client-side validation and a
  simulated submit. To actually receive submissions, hook it up to a service
  like **Netlify Forms** (add `data-netlify="true"` and a hidden `form-name`
  input), Formspree, Resend, etc.
