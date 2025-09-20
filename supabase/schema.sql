create table if not exists public.usuarios (
  id bigserial primary key,
  nombre text not null,
  correo_electronico text not null unique,
  comunidad_autonoma text,
  es_premium boolean not null default false,
  created_at timestamptz not null default now()
);
-- Index for email lookups
create index if not exists usuarios_correo_idx on public.usuarios (correo_electronico);
-- Make comunidad_autonoma required
alter table public.usuarios alter column comunidad_autonoma set not null;
-- Enable RLS
alter table public.usuarios enable row level security;
-- Reset policies (idempotent)
drop policy if exists "Usuarios pueden ver su propio registro" on public.usuarios;
drop policy if exists "usuarios_select_own" on public.usuarios;
drop policy if exists "usuarios_insert_own" on public.usuarios;
drop policy if exists "usuarios_update_own" on public.usuarios;
-- Policies: each user can manage only their own row
create policy "usuarios_select_own" on public.usuarios
  for select to authenticated
  using (auth.uid() = user_id);
create policy "usuarios_insert_own" on public.usuarios
  for insert to authenticated
  with check (auth.uid() = user_id);
create policy "usuarios_update_own" on public.usuarios
  for update to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Waitlist table
create table if not exists public.waitlist (
  id bigserial primary key,
  email text not null,
  comunidad text not null,
  source text,
  created_at timestamptz not null default now()
);
create unique index if not exists waitlist_email_idx on public.waitlist (email);
alter table public.waitlist enable row level security;
-- Políticas de inserción para roles de Supabase (anon y authenticated)
drop policy if exists "wl_insert_anon" on public.waitlist;
drop policy if exists "wl_insert_auth" on public.waitlist;
drop policy if exists "wl_select_none" on public.waitlist;

create policy "wl_insert_anon" on public.waitlist
  for insert to anon
  with check (true);

create policy "wl_insert_auth" on public.waitlist
  for insert to authenticated
  with check (true);

create policy "wl_select_none" on public.waitlist
  for select to anon, authenticated
  using (false);
