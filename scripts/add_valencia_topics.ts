
import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY! // Use service role for inserts
const supabase = createClient(supabaseUrl, supabaseKey)

const MISSING_TOPICS: Record<string, { titulo: string, slug: string }[]> = {
  'ingles-valencia': [
    { titulo: 'Reading Comprehension', slug: 'reading-comp' },
    { titulo: 'Grammar and Vocabulary', slug: 'grammar-vocab' },
    { titulo: 'Writing Skills', slug: 'writing' }
  ],
  'filosofia-valencia': [
    { titulo: 'Platón y Aristóteles', slug: 'platon-aristoteles' },
    { titulo: 'Kant y el Criticismo', slug: 'kant' },
    { titulo: 'Nietzsche y la Crítica a la Modernidad', slug: 'nietzsche' }
  ],
  'matematicas-ccss-valencia': [
    { titulo: 'Probabilidad y Estadística', slug: 'probabilidad-estadistica' },
    { titulo: 'Álgebra y Matemáticas Financieras', slug: 'algebra-finanzas' },
    { titulo: 'Análisis de Funciones', slug: 'analisis' }
  ],
  'biologia-valencia': [
    { titulo: 'Biomoléculas y Metabolismo', slug: 'biomoleculas-metabolismo' },
    { titulo: 'Genética y Biología Molecular', slug: 'genetica' },
    { titulo: 'Inmunología y Microbiología', slug: 'inmunologia' }
  ],
  'quimica-valencia': [
    { titulo: 'Estructura Atómica y Enlace', slug: 'estructura-enlace' },
    { titulo: 'Termoquímica y Equilibrio', slug: 'termo-equilibrio' },
    { titulo: 'Química Orgánica', slug: 'organica' }
  ],
  'empresa-valencia': [
    { titulo: 'La Empresa y su Entorno', slug: 'empresa-entorno' },
    { titulo: 'Marketing y Finanzas', slug: 'marketing-finanzas' },
    { titulo: 'Estrategia y Organización', slug: 'estrategia-organizacion' }
  ]
}

async function addMissingTopics() {
  console.log('--- Adding Missing Topics to Valencia ---')
  for (const [subjId, topics] of Object.entries(MISSING_TOPICS)) {
    console.log(`Processing subject: ${subjId}`)
    for (const t of topics) {
       const { data: existing } = await supabase.from('temas').select('id').eq('asignatura_id', subjId).eq('slug', t.slug).single()
       if (!existing) {
         const { error } = await supabase.from('temas').insert({
           asignatura_id: subjId,
           titulo: t.titulo,
           slug: t.slug
         })
         if (error) console.error(`Error adding ${t.slug} to ${subjId}:`, error)
         else console.log(`Added topic ${t.slug} to ${subjId}`)
       } else {
         console.log(`Topic ${t.slug} already exists in ${subjId}`)
       }
    }
  }
}

addMissingTopics()
