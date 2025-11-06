-- ============================================
-- TRIGGER PARA REGISTROS AUTOMÁTICOS
-- Ejecuta TODO este código en Supabase SQL Editor
-- ============================================

-- 1. Primero, eliminar trigger existente si hay
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- 2. Eliminar función existente si hay
DROP FUNCTION IF EXISTS public.handle_new_user();

-- 3. Crear la función con manejo de errores mejorado
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_nombre TEXT;
  v_email TEXT;
BEGIN
  -- Log para debugging
  RAISE LOG 'Trigger handle_new_user ejecutándose para user_id: %', new.id;
  
  -- Extraer valores
  v_email := new.email;
  v_nombre := COALESCE(
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'name',
    split_part(new.email, '@', 1)
  );
  
  -- Intentar insertar usuario
  BEGIN
    INSERT INTO public.usuarios (
      user_id,
      correo_electronico,
      nombre,
      es_premium,
      fecha_registro
    ) VALUES (
      new.id,
      v_email,
      v_nombre,
      false,
      NOW()
    )
    ON CONFLICT (user_id) DO UPDATE
    SET correo_electronico = EXCLUDED.correo_electronico,
        nombre = EXCLUDED.nombre;
    
    RAISE LOG 'Usuario creado/actualizado exitosamente: %', v_email;
    
  EXCEPTION WHEN OTHERS THEN
    -- Log del error pero no fallar el trigger
    RAISE LOG 'Error al insertar usuario en tabla: %, SQLSTATE: %', SQLERRM, SQLSTATE;
    -- Importante: NO hacer RAISE ERROR aquí, porque eso bloquearía el registro
  END;
  
  RETURN new;
END;
$$;

-- 4. Crear el trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- 5. Verificar que el trigger se creó
SELECT 
  trigger_name,
  event_manipulation,
  event_object_table,
  action_statement
FROM information_schema.triggers
WHERE trigger_name = 'on_auth_user_created';

-- ============================================
-- VERIFICAR ESTRUCTURA DE LA TABLA
-- ============================================
-- Ejecuta esto para ver qué columnas tiene tu tabla usuarios:
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_schema = 'public' 
  AND table_name = 'usuarios'
ORDER BY ordinal_position;

-- ============================================
-- SI LA TABLA NO TIENE LAS COLUMNAS NECESARIAS
-- ============================================
-- Descomentar y ejecutar solo si faltan columnas:

-- ALTER TABLE public.usuarios ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id);
-- ALTER TABLE public.usuarios ADD COLUMN IF NOT EXISTS es_premium BOOLEAN DEFAULT false;
-- ALTER TABLE public.usuarios ADD COLUMN IF NOT EXISTS fecha_registro TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Crear constraint único en user_id si no existe:
-- ALTER TABLE public.usuarios ADD CONSTRAINT usuarios_user_id_key UNIQUE (user_id);

-- ============================================
-- PROBAR EL TRIGGER MANUALMENTE
-- ============================================
-- Puedes probar si el trigger funciona con un usuario de prueba:
-- (Reemplaza 'test@example.com' con un email real de prueba)

/*
DO $$
DECLARE
  test_user_id UUID;
BEGIN
  -- Obtener un user_id existente de auth.users
  SELECT id INTO test_user_id FROM auth.users LIMIT 1;
  
  IF test_user_id IS NOT NULL THEN
    -- Intentar insertar/actualizar en usuarios
    INSERT INTO public.usuarios (
      user_id,
      correo_electronico,
      nombre,
      es_premium,
      fecha_registro
    ) VALUES (
      test_user_id,
      'test@example.com',
      'Test User',
      false,
      NOW()
    )
    ON CONFLICT (user_id) DO UPDATE
    SET correo_electronico = EXCLUDED.correo_electronico;
    
    RAISE NOTICE 'Test exitoso';
  ELSE
    RAISE NOTICE 'No hay usuarios en auth.users para probar';
  END IF;
END $$;
*/

