-- ============================================
-- TRIGGER CORRECTO PARA TU ESTRUCTURA DE TABLA
-- ============================================

-- PASO 1: Hacer user_id NOT NULL y UNIQUE (si aún no lo es)
-- Esto es CRÍTICO para que funcione
ALTER TABLE public.usuarios ALTER COLUMN user_id SET NOT NULL;
ALTER TABLE public.usuarios ADD CONSTRAINT usuarios_user_id_unique UNIQUE (user_id);

-- PASO 2: Eliminar trigger y función existentes
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- PASO 3: Crear función que coincide con TU estructura de tabla
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_nombre TEXT;
BEGIN
  -- Extraer nombre del metadata o usar parte del email
  v_nombre := COALESCE(
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'name',
    split_part(new.email, '@', 1)
  );
  
  -- Insertar con las columnas que TU TABLA tiene:
  -- nombre, correo_electronico, comunidad_autonoma, es_premium, created_at, user_id, avatar_url
  INSERT INTO public.usuarios (
    user_id,
    correo_electronico,
    nombre,
    comunidad_autonoma,
    es_premium,
    created_at,
    avatar_url
  ) VALUES (
    new.id,
    new.email,
    v_nombre,
    'General',  -- Default, se puede actualizar después
    false,
    NOW(),
    COALESCE(
      new.raw_user_meta_data->>'avatar_url',
      new.raw_user_meta_data->>'picture'
    )
  )
  ON CONFLICT (user_id) DO UPDATE
  SET 
    correo_electronico = EXCLUDED.correo_electronico,
    nombre = EXCLUDED.nombre,
    avatar_url = COALESCE(EXCLUDED.avatar_url, usuarios.avatar_url);
  
  RETURN new;
  
EXCEPTION WHEN OTHERS THEN
  -- Log error pero no bloquear el registro
  RAISE LOG 'Error en handle_new_user: %, SQLSTATE: %', SQLERRM, SQLSTATE;
  RETURN new;
END;
$$;

-- PASO 4: Crear el trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- PASO 5: Verificar que se creó
SELECT 
  trigger_name,
  event_manipulation,
  event_object_table
FROM information_schema.triggers
WHERE trigger_name = 'on_auth_user_created';

-- ============================================
-- CREAR USUARIOS RETROACTIVOS
-- ============================================
-- Si hay usuarios en auth.users que no están en public.usuarios:

INSERT INTO public.usuarios (
  user_id,
  correo_electronico,
  nombre,
  comunidad_autonoma,
  es_premium,
  created_at,
  avatar_url
)
SELECT 
  au.id,
  au.email,
  COALESCE(
    au.raw_user_meta_data->>'full_name',
    au.raw_user_meta_data->>'name',
    split_part(au.email, '@', 1)
  ),
  'General',
  false,
  au.created_at,
  COALESCE(
    au.raw_user_meta_data->>'avatar_url',
    au.raw_user_meta_data->>'picture'
  )
FROM auth.users au
WHERE au.id NOT IN (
  SELECT user_id 
  FROM public.usuarios 
  WHERE user_id IS NOT NULL
)
ON CONFLICT (user_id) DO NOTHING;

