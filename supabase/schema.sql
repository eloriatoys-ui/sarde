-- =======================================================
-- SARDE RESTAURANT — Supabase schema
-- Run once: Dashboard → SQL Editor → New query → paste → Run
-- =======================================================

-- 1. Admins table (links auth.users to admin role)
create table if not exists public.admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

-- 2. Categories
create table if not exists public.categories (
  id           uuid primary key default gen_random_uuid(),
  slug         text unique not null,
  sort_order   int  not null default 0,
  name_en      text not null,
  name_ar      text,
  name_ru      text,
  desc_en      text,
  desc_ar      text,
  desc_ru      text,
  banner_image_url text,
  is_active    boolean not null default true,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- 3. Menu items
create table if not exists public.menu_items (
  id           uuid primary key default gen_random_uuid(),
  category_id  uuid not null references public.categories(id) on delete cascade,
  sort_order   int  not null default 0,
  name_en      text not null,
  name_ar      text,
  name_ru      text,
  price_aed    numeric(10,2) not null,
  image_url    text,
  badge        text check (badge in ('signature','premium','family','for_two') or badge is null),
  is_active    boolean not null default true,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create index if not exists idx_menu_items_category on public.menu_items(category_id, sort_order);
create index if not exists idx_categories_sort      on public.categories(sort_order);

-- Helper: is current user an admin?
create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.admins where user_id = auth.uid())
$$;

-- Auto-update updated_at
create or replace function public.touch_updated_at() returns trigger
language plpgsql as $$ begin new.updated_at = now(); return new; end; $$;

drop trigger if exists categories_touch on public.categories;
create trigger categories_touch before update on public.categories
  for each row execute function public.touch_updated_at();

drop trigger if exists menu_items_touch on public.menu_items;
create trigger menu_items_touch before update on public.menu_items
  for each row execute function public.touch_updated_at();

-- Row Level Security
alter table public.admins      enable row level security;
alter table public.categories  enable row level security;
alter table public.menu_items  enable row level security;

drop policy if exists "admins_self_read"        on public.admins;
drop policy if exists "categories_public_read"  on public.categories;
drop policy if exists "categories_admin_write"  on public.categories;
drop policy if exists "menu_items_public_read"  on public.menu_items;
drop policy if exists "menu_items_admin_write"  on public.menu_items;

create policy "admins_self_read" on public.admins
  for select using (user_id = auth.uid());

create policy "categories_public_read" on public.categories
  for select using (true);

create policy "menu_items_public_read" on public.menu_items
  for select using (true);

create policy "categories_admin_write" on public.categories
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

create policy "menu_items_admin_write" on public.menu_items
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- Storage bucket for images
insert into storage.buckets (id, name, public)
values ('menu-images', 'menu-images', true)
on conflict (id) do nothing;

drop policy if exists "menu_images_public_read"   on storage.objects;
drop policy if exists "menu_images_admin_write"   on storage.objects;
drop policy if exists "menu_images_admin_update"  on storage.objects;
drop policy if exists "menu_images_admin_delete"  on storage.objects;

create policy "menu_images_public_read" on storage.objects
  for select using (bucket_id = 'menu-images');

create policy "menu_images_admin_write" on storage.objects
  for insert to authenticated with check (
    bucket_id = 'menu-images' and public.is_admin()
  );

create policy "menu_images_admin_update" on storage.objects
  for update to authenticated using (
    bucket_id = 'menu-images' and public.is_admin()
  );

create policy "menu_images_admin_delete" on storage.objects
  for delete to authenticated using (
    bucket_id = 'menu-images' and public.is_admin()
  );

-- ────────────────────────────────────────────────────────
-- After running this, do TWO more things in the dashboard:
--
-- 1) Authentication → Users → "Add user"
--    Create email/password (e.g. admin@sarde.ae). Confirm the email.
--    Copy that user's UUID.
--
-- 2) SQL Editor → run:
--      insert into public.admins (user_id) values ('PASTE-UUID-HERE');
--
-- Then visit /admin.html and sign in with that email.
-- ────────────────────────────────────────────────────────
