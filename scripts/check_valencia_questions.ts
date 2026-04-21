
import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

async function checkValenciaQuestions() {
  console.log('--- Checking Valencia Subjects ---')
  const { data: subjects, error: sError } = await supabase
    .from('asignaturas')
    .select('*')
    .eq('comunidad', 'Valencia')
  
  if (sError) {
    console.error('Error fetching subjects:', sError)
    return
  }

  console.log(`Found ${subjects.length} subjects for Valencia.`)

  for (const s of subjects) {
    const { count, error: qError } = await supabase
      .from('preguntas')
      .select('*, temas!inner(asignatura_id)', { count: 'exact', head: true })
      .eq('temas.asignatura_id', s.id)
    
    // Actually simpler to use a join or just count by asignatura_id if it's there
    // But questions table doesn't have asignatura_id directly, it's in temas.
    
    const { data: qData, error: qDataError } = await supabase
      .from('preguntas')
      .select('id, temas!inner(asignatura_id)')
      .eq('temas.asignatura_id', s.id)

    const countVal = qData ? qData.length : 0
    console.log(`Subject: ${s.nombre} (ID: ${s.id}) - Questions: ${countVal}`)
  }
}

checkValenciaQuestions()
