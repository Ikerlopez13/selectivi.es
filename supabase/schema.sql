-- Reset RLS policies
drop policy if exists "usuarios_select_own" on public.usuarios;
drop policy if exists "usuarios_select_by_email" on public.usuarios;
drop policy if exists "usuarios_insert_own" on public.usuarios;
drop policy if exists "usuarios_update_own" on public.usuarios;

-- Policies: usuarios can read any row with their email and manage their own row
create policy "usuarios_select_by_email" on public.usuarios
  for select to authenticated
  using (correo_electronico in (
    select correo_electronico 
    from public.usuarios 
    where user_id = auth.uid()
  ));

create policy "usuarios_insert_own" on public.usuarios
  for insert to authenticated
  with check (user_id = auth.uid());

create policy "usuarios_update_own" on public.usuarios
  for update to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- Helper function to check premium status by email
create or replace function public.check_premium_status(p_email text)
returns boolean
language sql
security definer
as $$
  select exists(
    select 1
    from public.usuarios
    where correo_electronico = p_email
    and es_premium = true
  );
$$;

-- Function to handle new user registration
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_nombre text;
begin
  v_nombre := coalesce(
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'name',
    split_part(new.email, '@', 1)
  );
  
  insert into public.usuarios (
    user_id,
    correo_electronico,
    nombre,
    comunidad_autonoma,
    es_premium,
    created_at,
    avatar_url
  ) values (
    new.id,
    new.email,
    v_nombre,
    'General',
    false,
    now(),
    coalesce(
      new.raw_user_meta_data->>'avatar_url',
      new.raw_user_meta_data->>'picture'
    )
  )
  on conflict (user_id) do update
  set correo_electronico = excluded.correo_electronico,
      nombre = excluded.nombre,
      avatar_url = coalesce(excluded.avatar_url, usuarios.avatar_url);
  
  return new;
  
exception when others then
  raise log 'Error en handle_new_user: %, SQLSTATE: %', sqlerrm, sqlstate;
  return new;
end;
$$;

-- Trigger to automatically create user record on signup
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();