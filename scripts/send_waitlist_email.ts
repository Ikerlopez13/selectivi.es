import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY!);

const IS_DRY_RUN = process.argv.includes('--dry-run');
const IS_TEST = process.argv.includes('--test');
const TARGET_COMMUNITY = 'Andalucía';
const SENDER = 'Iker de Selectivi.es <hola@selectivi.es>';
const TEST_EMAIL = 'lopezalegreiker@gmail.com'; // User's email found in DB

async function sendEmails() {
  console.log(`--- Iniciando proceso de envío (${IS_DRY_RUN ? 'SIMULACIÓN' : IS_TEST ? 'TEST' : 'REAL'}) ---`);

  let recipients: { email: string; comunidad: string }[] = [];

  if (IS_TEST) {
    recipients = [{ email: TEST_EMAIL, comunidad: 'Andalucía (Test)' }];
  } else {
    // 1. Obtener usuarios de Andalucía
    const { data: users, error } = await supabase
      .from('waitlist')
      .select('email, comunidad')
      .eq('comunidad', TARGET_COMMUNITY);

    if (error) {
      console.error("Error al obtener usuarios:", error);
      return;
    }
    recipients = users || [];
  }

  if (recipients.length === 0) {
    console.log("No se encontraron usuarios.");
    return;
  }

  console.log(`Se procesarán ${recipients.length} usuarios.`);

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Inter', sans-serif; color: #1f2937; line-height: 1.6; margin: 0; padding: 0; background-color: #fcfcff; }
        .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
        .header { text-align: center; margin-bottom: 30px; }
        .badge { background: linear-gradient(to right, #FFB800, #FF9800); color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase; }
        h1 { font-size: 28px; font-weight: 800; margin-top: 20px; color: #111827; }
        p { font-size: 16px; margin-bottom: 20px; color: #4b5563; }
        .button-container { text-align: center; margin: 40px 0; }
        .button { background: linear-gradient(to right, #FFB800, #FF9800); color: white; padding: 15px 30px; border-radius: 12px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 6px rgba(255,184,0,0.2); }
        .footer { text-align: center; font-size: 14px; color: #9ca3af; margin-top: 50px; border-top: 1px solid #e5e7eb; padding-top: 20px; }
        .highlight { font-weight: bold; color: #111827; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <span class="badge">🎉 Lanzamiento</span>
          <h1>¡SelectiviANDALUCIA ya está disponible! 🚀</h1>
        </div>
        
        <p>¡Hola!</p>
        
        <p>Traigo muy buenas noticias: <span class="highlight">ya puedes preparar la PEvAU de Andalucía</span> con Selectivi.es.</p>
        
        <p>Hemos adaptado todo nuestro contenido (SeleTest, bancos de preguntas y simulacros) al currículo oficial de Andalucía y a la reforma 2026. Ya no tienes excusa para no sacar la mejor nota.</p>
        
        <div class="button-container">
          <a href="https://selectivi.es/andalucia/seletest" class="button">Empezar SeleTest Andalucía Gratis →</a>
        </div>
        
        <p>¿Qué incluye SelectiviANDALUCIA?</p>
        <ul>
          <li><strong>Bancos de preguntas:</strong> Miles de ejercicios tipo examen adaptados.</li>
          <li><strong>Simulacros:</strong> Condiciones reales de examen con cronómetro.</li>
          <li><strong>Analytics:</strong> Feedback inmediato para que sepas dónde mejorar.</li>
        </ul>
        
        <p>Te esperamos dentro,</p>
        <p><span class="highlight">Iker de Selectivi.es</span></p>
        
        <div class="footer">
          <p>© 2026 Selectivi.es — La plataforma nº1 para la Selectividad</p>
          <p><a href="https://selectivi.es" style="color: #9ca3af;">Visitar nuestra web</a></p>
        </div>
      </div>
    </body>
    </html>
  `;

  for (const user of recipients) {
    if (IS_DRY_RUN) {
      console.log(`[DRY-RUN] Enviaría a: ${user.email}`);
    } else {
      try {
        const { data, error } = await resend.emails.send({
          from: SENDER,
          to: [user.email],
          subject: '¡SelectiviANDALUCIA ya está disponible! 🚀 Prepárate para la PEvAU 2026',
          html: htmlContent,
        });

        if (error) {
          console.error(`Error enviando a ${user.email}:`, error);
        } else {
          console.log(`Correo enviado con éxito a: ${user.email} (ID: ${data?.id})`);
        }
      } catch (e) {
        console.error(`Excepción enviando a ${user.email}:`, e);
      }
    }
  }

  console.log(`--- Proceso finalizado ---`);
}

sendEmails();
