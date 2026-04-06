import { redirect } from 'next/navigation'

export default function AiLabRedirect() {
  // Redirigimos permanentemente al dashboard del laboratorio de AI
  // para mejorar el linkbuilding (selectivi.es/ai-lab)
  redirect('/dashboard/ai-lab')
}
