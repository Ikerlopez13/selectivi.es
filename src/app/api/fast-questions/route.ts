import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { QuestionWithSubject } from "@/lib/seletest/types";

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const subjectName = searchParams.get('subject');

    if (!subjectName) {
      return NextResponse.json({ error: "Missing subject parameter" }, { status: 400 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // 1. Get all asignaturas with the given name (ignoring comunidad to get global bank)
    const { data: asignaturas, error: asignaturasError } = await supabase
      .from('asignaturas')
      .select('id, nombre')
      .eq('nombre', subjectName);

    if (asignaturasError || !asignaturas || asignaturas.length === 0) {
      return NextResponse.json({ error: "No se encontró la asignatura." }, { status: 404 });
    }

    const asignaturaIds = asignaturas.map(a => a.id);

    // 2. Get all temas for those asignaturas
    const { data: temas, error: temasError } = await supabase
      .from('temas')
      .select('id, titulo, asignatura_id')
      .in('asignatura_id', asignaturaIds);

    if (temasError || !temas || temas.length === 0) {
      return NextResponse.json({ error: "No se encontraron temas para esta asignatura." }, { status: 404 });
    }

    const temaIds = temas.map(t => t.id);

    // 3. Fetch a large batch of questions from those temas
    // We fetch a limit of 500 questions, and then shuffle them on the server to send to the client.
    const { data: dbQuestions, error: questionsError } = await supabase
      .from('preguntas')
      .select('*')
      .in('tema_id', temaIds)
      .limit(500);

    if (questionsError || !dbQuestions) {
      return NextResponse.json({ error: "No se encontraron preguntas." }, { status: 404 });
    }

    // 4. Map DB format to the client's QuestionWithSubject format
    const formattedQuestions: QuestionWithSubject[] = dbQuestions.map(q => {
      // Find the topic title just in case, though not strictly needed in the UI now
      return {
        id: q.id,
        tier: q.tier || 'standard',
        prompt: q.pregunta,
        options: [
          { id: 'a', label: q.opcion_a, isCorrect: q.correcta === 'a' },
          { id: 'b', label: q.opcion_b, isCorrect: q.correcta === 'b' },
          { id: 'c', label: q.opcion_c, isCorrect: q.correcta === 'c' },
          { id: 'd', label: q.opcion_d, isCorrect: q.correcta === 'd' },
        ],
        explanation: q.explicacion,
        subjectId: asignaturas[0].id,
        subjectName: subjectName
      }
    });

    // 5. Shuffle the array to get random questions every time
    for (let i = formattedQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [formattedQuestions[i], formattedQuestions[j]] = [formattedQuestions[j], formattedQuestions[i]];
    }

    // Return max 100 questions per session to avoid heavy payloads
    const finalQuestions = formattedQuestions.slice(0, 100);

    return NextResponse.json({ questions: finalQuestions });
  } catch (error: any) {
    console.error("Error fetching fast questions:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
