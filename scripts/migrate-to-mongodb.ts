import { createClient } from '@supabase/supabase-js'
import mongoose from 'mongoose'
import User from '../src/models/User'

// Supabase config
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY! // Necesitamos la service key para acceder a todos los datos
)

async function migrate() {
  try {
    // 1. Conectar a MongoDB
    console.log('🔄 Conectando a MongoDB...')
    await mongoose.connect(process.env.MONGODB_URI!)
    console.log('✅ Conectado a MongoDB')

    // 2. Obtener usuarios de Supabase
    console.log('🔄 Obteniendo usuarios de Supabase...')
    const { data: users, error } = await supabase
      .from('usuarios')
      .select('*')
    
    if (error) throw error
    console.log(`✅ Obtenidos ${users.length} usuarios de Supabase`)

    // 3. Migrar cada usuario
    console.log('🔄 Migrando usuarios...')
    for (const user of users) {
      // Obtener datos de auth
      const { data: authUser } = await supabase.auth.admin.getUserById(user.user_id)
      
      if (!authUser?.user) {
        console.log(`⚠️ No se encontró usuario auth para ${user.user_id}`)
        continue
      }

      // Crear usuario en MongoDB
      await User.create({
        email: authUser.user.email,
        name: user.nombre || authUser.user.email?.split('@')[0],
        avatar_url: authUser.user.user_metadata?.avatar_url,
        is_premium: user.es_premium,
        community: user.comunidad_autonoma,
        auth_id: user.user_id,
        created_at: user.created_at
      })

      console.log(`✅ Migrado usuario ${authUser.user.email}`)
    }

    console.log('✅ Migración completada')
  } catch (error) {
    console.error('❌ Error durante la migración:', error)
  } finally {
    await mongoose.disconnect()
  }
}

migrate()
