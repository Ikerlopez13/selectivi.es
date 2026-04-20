
import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

async function listValenciaSubjects() {
  const { data: subjects, error } = await supabase
    .from('asignaturas')
    .select('id, nombre')
    .eq('comunidad', 'Valencia')
  
  if (error) {
    console.error(error)
    return
  }

  console.log('Valencia Subjects:')
  for (const s of subjects) {
    const { data: temas } = await supabase.from('temas').select('id, titulo, slug').eq('asignatura_id', s.id)
    console.log(`- ${s.nombre} (${s.id}) [${temas?.length || 0} temas]`)
    if (temas) {
      for (const t of temas) {
        const { count } = await supabase.from('preguntas').select('*', { count: 'exact', head: true }).eq('tema_id', t.id)
        console.log(`    * ${t.titulo} (${t.slug}): ${count || 0} questions`)
      }
    }
  }
}

listValenciaSubjects()
