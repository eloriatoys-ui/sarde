# Sarde — Backend setup (Supabase)

The site is now backed by Supabase. The menu loads from the database; an admin panel lets you manage categories and dishes.

> ⚠️ **Security note:** The `service_role` key is the master key for your Supabase project. It should never go into client-side code, public repos, or chat messages. The keys you shared earlier should be rotated when convenient. The browser code in this project uses **only the anon key** (which is fine to expose).

---

## One-time setup

### 1. Create the schema
1. Open the SQL editor in your Supabase dashboard
2. Open a new query
3. Paste the contents of `supabase/schema.sql`
4. Run

This creates the `categories`, `menu_items`, and `admins` tables, the storage bucket `menu-images`, and all Row Level Security policies.

### 2. Create your admin user
1. Supabase dashboard → **Authentication → Users → Add user**
2. Use email + password (e.g. `admin@sarde.ae`). Confirm the email.
3. Copy that user's `id` (UUID).

### 3. Grant admin access
SQL editor → run:
```sql
insert into public.admins (user_id) values ('PASTE-UUID-HERE');
```

### 4. Sign into the admin
- Open `/admin.html`
- Sign in with the email/password from step 2
- Click **"Import default menu"** in the sidebar to seed the 11 categories and 155 dishes from the original Sarde menu (you can also start fresh)

---

## Day-to-day

- **Add a category** — sidebar → *New category*. Fill in EN/AR/RU names, slug, banner image, sort order
- **Edit/delete a category** — pick it in the sidebar → top-right buttons
- **Add a dish** — pick a category → *+ Add dish*. Fill in EN/AR/RU names, price, badge (Signature / Premium / Family / For Two), upload image, hit Save
- **Hide a dish/category** — uncheck "Active" — it stays in the database but no longer shows on the public menu
- **Reorder** — change the *Sort order* number on the item or category form

The public menu page (`menu.html`) reads from the database in real time. Refresh after any change.

---

## Files added for the backend

```
supabase/
  schema.sql          ← run once in the SQL editor
js/
  supabase-client.js  ← initializes window.sb with anon key
  menu-seed.js        ← default 155-item seed (used by "Import default menu")
  menu-loader.js      ← public menu page renderer
  admin.js            ← admin panel logic
css/
  admin.css           ← admin panel styles
admin.html            ← /admin.html — sign in + manage menu
```
