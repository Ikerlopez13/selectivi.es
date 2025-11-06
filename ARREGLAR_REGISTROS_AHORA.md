# 🚨 EJECUTA ESTO EN SUPABASE AHORA MISMO 🚨

## ⚠️ Los registros NO funcionan hasta que hagas esto

### 1. Ve a Supabase Dashboard
https://supabase.com/dashboard/project/_/sql/new

### 2. COPIA Y PEGA este SQL exacto:

```sql
-- Function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.usuarios (
    user_id,
    correo_electronico,
    nombre_completo,
    es_premium,
    fecha_registro
  ) VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'full_name', new.email),
    false,
    NOW()
  )
  ON CONFLICT (user_id) DO NOTHING;
  
  RETURN new;
END;
$$;

-- Trigger to automatically create user record on signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

### 3. Haz clic en RUN

### 4. ADEMÁS - Configura las URLs en Supabase Auth

Ve a: Authentication → URL Configuration

**Añade estas Redirect URLs:**
```
http://localhost:3000/auth/callback
http://localhost:3000/madrid/auth/callback
http://localhost:3000/andalucia/auth/callback
https://tu-dominio.vercel.app/auth/callback
https://tu-dominio.vercel.app/madrid/auth/callback
https://tu-dominio.vercel.app/andalucia/auth/callback
```

Reemplaza `tu-dominio.vercel.app` con tu dominio real de Vercel.

---

## ✅ Después de hacer esto:

1. Intenta registrarte de nuevo
2. Deberías llegar al dashboard automáticamente
3. El trigger creará tu usuario en la tabla `usuarios`
4. Todo funcionará correctamente

## ❌ Si hay usuarios que ya se registraron pero no están en la tabla:

Ejecuta esto para crearlos retroactivamente:

```sql
INSERT INTO public.usuarios (user_id, correo_electronico, nombre_completo, es_premium, fecha_registro)
SELECT 
  id,
  email,
  COALESCE(raw_user_meta_data->>'full_name', email),
  false,
  created_at
FROM auth.users
WHERE id NOT IN (SELECT user_id FROM public.usuarios)
ON CONFLICT (user_id) DO NOTHING;
```

---

**ESTO ES CRÍTICO. Los registros no funcionarán hasta que ejecutes el SQL del trigger.**

