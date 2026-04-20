
import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const MAPPING = [
  { from: 'historia-espana', to: 'historia-espana-valencia' },
  { from: 'lengua', to: 'lengua-castellana-valencia' },
  { from: 'ingles', to: 'ingles-valencia' },
  { from: 'matematicas', to: 'matematicas-ii-valencia' },
  { from: 'fisica', to: 'fisica-valencia' },
  { from: 'biologia', to: 'biologia-valencia' },
  { from: 'quimica', to: 'quimica-valencia' },
]

async function copyQuestions() {
  console.log('--- Copying Questions from Madrid to Valencia ---')
  for (const map of MAPPING) {
    console.log(`Mapping ${map.from} -> ${map.to}`)
    
    // Get Madrid topics
    const { data: mTopics } = await supabase.from('temas').select('id, slug, titulo').eq('asignatura_id', map.from)
    // Get Valencia topics
    const { data: vTopics } = await supabase.from('temas').select('id, slug, titulo').eq('asignatura_id', map.to)
    
    if (!mTopics || !vTopics) continue

    for (const vt of vTopics) {
       // Find matching Madrid topic by slug or similar title
       const mt = mTopics.find(t => t.slug === vt.slug || t.titulo.toLowerCase().includes(vt.titulo.toLowerCase()))
       if (!mt) {
         console.log(`  No matching topic found for ${vt.titulo} (${vt.slug})`)
         continue
       }
       
       console.log(`  Copying from ${mt.titulo} to ${vt.titulo}`)
       
       // Get questions from Madrid topic
       const { data: questions } = await supabase.from('preguntas').select('*').eq('tema_id', mt.id)
       if (questions && questions.length > 0) {
         const toInsert = questions.map(q => {
           const { id, created_at, ...rest } = q
           return { ...rest, tema_id: vt.id }
         })
         
         const { error } = await supabase.from('preguntas').insert(toInsert)
         if (error) console.error(`    Error inserting:`, error.message)
         else console.log(`    Successfully copied ${questions.length} questions`)
       } else {
         console.log(`    No questions to copy from ${mt.titulo}`)
       }
    }
  }
}

copyQuestions()
