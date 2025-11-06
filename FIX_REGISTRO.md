# 🔧 FIX: Registros no funcionan

## Problema
Los registros no funcionaban porque faltaba un trigger que automáticamente cree el usuario en la tabla `usuarios` cuando se registra en Supabase Auth.

## Solución

### 1. Ve al Dashboard de Supabase
https://supabase.com/dashboard

### 2. Selecciona tu proyecto SelectiviES

### 3. Ve a SQL Editor (en el menú lateral)

### 4. Copia y pega este SQL:

```sql
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
```

### 5. Haz clic en "Run" (o presiona Ctrl/Cmd + Enter)

### 6. Verifica que se ejecutó correctamente
Deberías ver un mensaje de éxito.

## ¿Qué hace esto?

Este trigger automáticamente:
1. Se ejecuta cada vez que un nuevo usuario se registra con Google OAuth
2. Crea una entrada en la tabla `usuarios` con:
   - `user_id`: ID del usuario de auth
   - `correo_electronico`: Email del usuario
   - `nombre_completo`: Nombre del usuario (o su email si no tiene nombre)
   - `es_premium`: false (por defecto)
   - `fecha_registro`: Fecha actual

## Resultado

✅ Ahora cuando alguien se registre:
- Se creará automáticamente en auth.users (Supabase Auth)
- El trigger creará automáticamente el registro en public.usuarios
- El usuario podrá usar SeleTest sin problemas

## Usuarios que ya se registraron

Si hay usuarios que ya se registraron pero no tienen entrada en `usuarios`, puedes ejecutar este SQL para crearlos:

```sql
insert into public.usuarios (user_id, correo_electronico, nombre_completo, es_premium, fecha_registro)
select 
  id,
  email,
  coalesce(raw_user_meta_data->>'full_name', email),
  false,
  created_at
from auth.users
where id not in (select user_id from public.usuarios)
on conflict (user_id) do nothing;
```

---

**Nota:** Este archivo se puede borrar después de aplicar el fix.

