# Sarde Restaurant — Website

Syrian & Lebanese restaurant in Barsha Heights, Dubai. Static site with a Supabase backend for menu management.

## Stack

- **Frontend** — Plain HTML, CSS, vanilla JS (no build step)
- **Backend** — Supabase (Postgres + Auth + Storage)
- **Hosting** — Static, deploys to Vercel / Netlify / any static host
- **Languages** — English / Arabic / Russian (RTL-aware)

## Pages

- `index.html` — landing
- `menu.html` — full menu (loaded dynamically from Supabase)
- `admin.html` — admin panel (Supabase Auth + CRUD)

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Backend setup

See [`SETUP.md`](./SETUP.md) for the one-time Supabase setup (schema, admin user, seed).

## Admin panel

`/admin.html` — sign in with the admin email/password, then:

- **Menu** view — manage categories and dishes (multi-language fields, image upload, badge, sort order)
- **Home images** view — replace the hero, about, signatures, and gallery photos

## Deploying to Vercel

1. Push to GitHub
2. Import the repo at <https://vercel.com/new>
3. Framework preset: **Other** (no build step needed)
4. Deploy — Vercel auto-detects the static files
