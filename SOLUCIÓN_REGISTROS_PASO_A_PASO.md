# 🔥 SOLUCIÓN COMPLETA PARA REGISTROS - PASO A PASO 🔥

## ❌ Error actual
```
Database error saving new user
```

Esto significa que Supabase no puede crear el usuario en la tabla `usuarios`.

---

## ✅ SOLUCIÓN EN 5 PASOS

### PASO 1: Verificar estructura de la tabla

Ve a Supabase Dashboard → Table Editor → tabla `usuarios`

**Columnas necesarias:**
- `id` (SERIAL o UUID, primary key) ✓
- `user_id` (UUID, UNIQUE) ← **CRÍTICO**
- `correo_electronico` (TEXT o VARCHAR)
- `nombre` (TEXT o VARCHAR)
- `es_premium` (BOOLEAN, default false)
- `fecha_registro` (TIMESTAMP)
- `comunidad_autonoma` (TEXT, nullable)
- `avatar_url` (TEXT, nullable)

**Si falta `user_id` o `es_premium` o `fecha_registro`, añádelas:**

```sql
ALTER TABLE public.usuarios ADD COLUMN IF NOT EXISTS user_id UUID;
ALTER TABLE public.usuarios ADD COLUMN IF NOT EXISTS es_premium BOOLEAN DEFAULT false;
ALTER TABLE public.usuarios ADD COLUMN IF NOT EXISTS fecha_registro TIMESTAMP WITH TIME ZONE DEFAULT NOW();
ALTER TABLE public.usuarios ADD CONSTRAINT usuarios_user_id_key UNIQUE (user_id);
```

---

### PASO 2: Ejecutar el trigger

Ve a: **SQL Editor** en Supabase

Copia y pega TODO el contenido del archivo `TRIGGER_FINAL_COMPLETO.sql`

Haz clic en **RUN**

---

### PASO 3: Verificar que el trigger se creó

Ejecuta esto en SQL Editor:

```sql
SELECT 
  trigger_name,
  event_manipulation,
  event_object_table
FROM information_schema.triggers
WHERE trigger_name = 'on_auth_user_created';
```

**Resultado esperado:**
```
trigger_name          | event_manipulation | event_object_table
on_auth_user_created  | INSERT             | users
```

Si NO aparece nada, el trigger NO se creó. Vuelve al PASO 2.

---

### PASO 4: Configurar URLs de redirect en Supabase

Ve a: **Authentication** → **URL Configuration**

**Site URL:**
```
http://localhost:3000
```

**Redirect URLs** (añade TODAS estas):
```
http://localhost:3000/auth/callback
http://localhost:3000/madrid/auth/callback
http://localhost:3000/andalucia/auth/callback
https://tu-dominio.vercel.app/auth/callback
https://tu-dominio.vercel.app/madrid/auth/callback
https://tu-dominio.vercel.app/andalucia/auth/callback
```

Reemplaza `tu-dominio.vercel.app` con tu dominio real.

---

### PASO 5: Deshabilitar confirmación de email (opcional pero recomendado)

Ve a: **Authentication** → **Providers** → **Email**

**Desactiva:**
- "Confirm email" (o "Enable email confirmations")

Esto permite que los usuarios accedan inmediatamente sin confirmar email.

---

## 🧪 PROBAR

1. Abre el navegador en modo incógnito
2. Ve a `http://localhost:3000/login`
3. Haz clic en "Continuar con Google"
4. Inicia sesión con una cuenta de Google
5. Deberías ser redirigido a `/dashboard` automáticamente

---

## 🔍 DEBUGGING

Si sigue fallando, ejecuta esto en SQL Editor para ver los logs:

```sql
-- Ver usuarios en auth.users
SELECT id, email, created_at FROM auth.users ORDER BY created_at DESC LIMIT 5;

-- Ver usuarios en public.usuarios
SELECT id, user_id, correo_electronico, nombre, es_premium FROM public.usuarios ORDER BY id DESC LIMIT 5;

-- Comparar - ver quién está en auth pero no en public
SELECT 
  au.id,
  au.email,
  au.created_at,
  u.id as usuario_table_id
FROM auth.users au
LEFT JOIN public.usuarios u ON u.user_id = au.id
WHERE u.id IS NULL
ORDER BY au.created_at DESC
LIMIT 10;
```

---

## 🆘 SI NADA FUNCIONA

El problema podría ser que la tabla `usuarios` NO tiene la columna `user_id` o tiene un nombre diferente.

**Ejecuta esto para ver la estructura REAL de tu tabla:**

```sql
SELECT 
  column_name, 
  data_type, 
  is_nullable,
  column_default
FROM information_schema.columns
WHERE table_schema = 'public' 
  AND table_name = 'usuarios'
ORDER BY ordinal_position;
```

**Envíame el resultado** y te digo exactamente qué hacer.

---

## 📧 CREAR USUARIOS MANUALMENTE (TEMPORAL)

Si necesitas que funcione YA mientras arreglas el trigger, puedes crear usuarios manualmente después de que se registren:

```sql
-- Ejecuta esto cada vez que alguien se registre
INSERT INTO public.usuarios (user_id, correo_electronico, nombre, es_premium, fecha_registro)
SELECT 
  id,
  email,
  split_part(email, '@', 1),
  false,
  created_at
FROM auth.users
WHERE id NOT IN (SELECT user_id FROM public.usuarios WHERE user_id IS NOT NULL)
ON CONFLICT (user_id) DO NOTHING;
```

