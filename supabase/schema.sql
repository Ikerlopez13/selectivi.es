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
begin
  insert into public.usuarios (
    user_id,
    correo_electronico,
    nombre_completo,
    es_premium,
    fecha_registro
  ) values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.email),
    false,
    now()
  )
  on conflict (user_id) do nothing;
  
  return new;
end;
$$;

-- Trigger to automatically create user record on signup
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();