# Entrora Systems

Standalone site, extracted from `decrakerubo.com/entrora` so it can be hosted
and (eventually) domained on its own. A static export, no server of its own —
the one thing that used to need a server (the contact form) now posts to
`decrakerubo.com/api/contact` instead, cross-origin.

## Local dev

```bash
npm install
npm run dev
```

## Deploying to Netlify (free, no domain needed yet)

**Option A — connect this repo (recommended, auto-deploys on every push):**

1. Push this folder to a new GitHub repo.
2. In Netlify: **Add new site → Import an existing project → GitHub**, pick
   the repo. Build settings come from `netlify.toml` already in this repo
   (`npm run build`, publish directory `out`) — Netlify should pick them up
   automatically.
3. Deploy. You'll get a free `*.netlify.app` URL immediately; point a real
   domain at it later from **Site settings → Domain management** whenever
   you buy one.

**Option B — Netlify Drop (fastest, no GitHub/git needed, but you redo this
manually every time you want to update the live site):**

1. `npm run build` (outputs to `out/`)
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the
   `out/` folder in.

## What's different from the version inside decra-kerubo

- No shared components, no `@/` imports — this page was already fully
  self-contained, so nothing had to be rewritten, just copied.
- `next.config.ts` sets `output: "export"` (static HTML, no server) and
  `images.unoptimized: true` (Next's image optimizer needs a server; static
  export doesn't have one).
- The contact form's fetch target changed from the relative `/api/contact`
  to `https://decrakerubo.com/api/contact` (see `CONTACT_API_URL` in
  `app/page.tsx`). The main site's route was given CORS headers to allow it.
