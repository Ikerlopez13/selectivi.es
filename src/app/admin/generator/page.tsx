"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase/client"
import Navbar from "@/components/Navbar"

export default function AdminGeneratorPage() {
  const [subjects, setSubjects] = useState<any[]>([])
  const [topics, setTopics] = useState<any[]>([])
  const [selectedSubject, setSelectedSubject] = useState("")
  const [selectedTopic, setSelectedTopic] = useState("")
  const [content, setContent] = useState("")
  const [count, setCount] = useState(5)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState("")

  useEffect(() => {
    // Load subjects
    ;(async () => {
      const { data } = await supabase.from("asignaturas").select("*").order("nombre")
      if (data) setSubjects(data)
    })()
  }, [])

  useEffect(() => {
    if (!selectedSubject) {
      setTopics([])
      return
    }
    // Load topics for selected subject
    ;(async () => {
      const { data } = await supabase.from("temas").select("*").eq("asignatura_id", selectedSubject).order("titulo")
      if (data) setTopics(data)
    })()
  }, [selectedSubject])

  const generate = async () => {
    if (!selectedTopic || !content) {
      alert("Falta tema o contenido")
      return
    }
    setLoading(true)
    setError("")
    setResult(null)

    try {
      const res = await fetch("/api/ai/generate-questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topicId: selectedTopic, content, count })
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setResult(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1 max-w-[1000px] mx-auto w-full px-6 py-12">
        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
          <header className="mb-10">
             <h1 className="text-4xl font-black text-gray-900 mb-2">Sele<span className="text-[#FFB800]">Test</span> Pro <span className="text-xs bg-black text-white px-3 py-1 rounded-full align-middle ml-2">ADMIN</span></h1>
             <p className="text-gray-500">Convierte apuntes, PDFs o webs en preguntas para el banco de datos.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-tight">1. Asignatura</label>
                <select 
                  value={selectedSubject} 
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full h-14 bg-gray-50 border-2 border-gray-100 rounded-2xl px-4 focus:border-[#FFB800] outline-none transition-all"
                >
                  <option value="">Selecciona...</option>
                  {subjects.map(s => <option key={s.id} value={s.id}>{s.nombre}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-tight">2. Tema Específico</label>
                <select 
                  value={selectedTopic} 
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  disabled={!selectedSubject}
                  className="w-full h-14 bg-gray-50 border-2 border-gray-100 rounded-2xl px-4 focus:border-[#FFB800] outline-none transition-all disabled:opacity-40"
                >
                  <option value="">Selecciona...</option>
                  {topics.map(t => <option key={t.id} value={t.id}>{t.titulo}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-tight">3. Cantidad de preguntas</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" min="1" max="20" step="1" 
                    value={count} onChange={(e) => setCount(parseInt(e.target.value))}
                    className="flex-1 accent-[#FFB800]"
                  />
                  <span className="w-12 h-12 flex items-center justify-center bg-[#FFF9E6] text-[#8B5E00] rounded-xl font-bold border border-[#FFB800]/20">
                    {count}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-tight">4. Material de estudio (NotebookLM Style)</label>
              <textarea 
                placeholder="Pega aquí el texto, apuntes o conceptos clave..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="flex-1 w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-3xl focus:border-[#FFB800] outline-none transition-all resize-none min-h-[300px]"
              />
            </div>
          </div>

          <button 
            onClick={generate}
            disabled={loading || !selectedTopic || !content}
            className={`w-full py-6 rounded-3xl text-xl font-black transition-all shadow-xl active:scale-95 ${loading ? 'bg-gray-100 text-gray-400' : 'bg-[#FFB800] hover:bg-[#ffc835] text-black shadow-[#FFB800]/20'}`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="inline-block w-6 h-6 border-4 border-black/10 border-t-black rounded-full animate-spin"></span>
                GENERANDO PREGUNTAS MÁGICAMENTE...
              </span>
            ) : "✨ GENERAR E INSERTAR EN BASE DE DATOS"}
          </button>

          {error && (
            <div className="mt-6 p-5 bg-red-50 border-2 border-red-100 text-red-700 rounded-3xl font-medium animate-in fade-in slide-in-from-top-2">
               ❌ ERROR: {error}
               {error.includes("apiKey") && <p className="text-xs mt-2 font-normal opacity-70">Asegúrate de haber configurado GOOGLE_AI_API_KEY en tu .env.local y reiniciado el servidor.</p>}
            </div>
          )}

          {result && (
            <div className="mt-8 p-6 bg-green-50 border-2 border-green-100 text-green-900 rounded-3xl animate-in zoom-in-95 duration-500">
               <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black uppercase tracking-tight">✅ ¡CONSEGUIDO!</span>
                  <span className="bg-green-600 text-white px-4 py-1 rounded-full font-bold text-sm">+{result.count} PREGUNTAS</span>
               </div>
               <p className="mb-4 font-medium">Las preguntas han sido insertadas automáticamente en Supabase y ya están disponibles para los alumnos.</p>
               <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {result.questions.map((q: any, i: number) => (
                    <div key={i} className="p-5 bg-white rounded-2xl border border-green-100 shadow-sm transition-transform hover:scale-[1.01]">
                       <p className="font-bold text-lg mb-2">{q.pregunta}</p>
                       <p className="text-sm text-gray-500 italic">Correcta: <span className="text-green-600 font-bold uppercase">{q.correcta}</span></p>
                    </div>
                  ))}
               </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E5E7EB;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #D1D5DB;
        }
      `}</style>
    </main>
  )
}
