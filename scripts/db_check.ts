import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function check() {
  const { data, error } = await supabase.from('asignaturas').select('*').limit(5)
  if (error) {
    console.error('Error fetching asignaturas:', error)
  } else {
    console.log('Sample asignaturas:', JSON.stringify(data, null, 2))
  }
  
  const { data: temas, error: temasError } = await supabase.from('temas').select('*').limit(5)
  if (temasError) {
    console.error('Error fetching temas:', temasError)
  } else {
    console.log('Sample temas:', JSON.stringify(temas, null, 2))
  }
}

check()
