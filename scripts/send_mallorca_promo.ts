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
const SENDER = 'Iker de Selectivi <hola@resend.selectivi.cat>';
const TEST_EMAIL = 'lopezalegreiker@gmail.com';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const whatsappUrl = "https://wa.me/34675881777?text=Hola!%20Vengo%20de%20Selectivi.es%20y%20estoy%20interesado/a%20en%20lo%20de%20Mallorca";

async function sendMallorcaPromo() {
  console.log(`--- Iniciando Campaña Mallorca Promo (${IS_DRY_RUN ? 'SIMULACIÓN' : IS_TEST ? 'TEST' : 'REAL'}) ---`);

  let recipients: { email: string }[] = [];

  if (IS_TEST) {
    recipients = [{ email: TEST_EMAIL }, { email: 'pabtoib@gmail.com' }];
  } else {
    console.log("Obteniendo correos de waitlist...");
    const { data: waitlist, error: wError } = await supabase.from('waitlist').select('email');
    if (wError) console.error("Error waitlist:", wError);

    console.log("Obteniendo correos de usuarios...");
    const { data: usuarios, error: uError } = await supabase.from('usuarios').select('correo_electronico');
    if (uError) console.error("Error usuarios:", uError);

    const allEmails = new Set<string>();
    
    waitlist?.forEach(u => u.email && allEmails.add(u.email.toLowerCase().trim()));
    usuarios?.forEach(u => u.correo_electronico && allEmails.add(u.correo_electronico.toLowerCase().trim()));
    
    // Añadimos el correo extra solicitado
    allEmails.add("pabtoib@gmail.com");

    recipients = Array.from(allEmails).map(email => ({ email }));
  }

  if (recipients.length === 0) {
    console.log("No se encontraron usuarios.");
    return;
  }

  console.log(`Se procesarán ${recipients.length} destinatarios.`);

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mallorca Gratis con MAS</title>
      <style>
        body { 
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; 
          color: #1e293b; 
          line-height: 1.6; 
          margin: 0; 
          padding: 0; 
          background-color: #F0FBFF; 
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background-color: #ffffff; 
          border-radius: 24px; 
          overflow: hidden; 
          margin-top: 40px; 
          margin-bottom: 40px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        }
        .header { 
          background: linear-gradient(135deg, #FFB800 0%, #FF9800 100%); 
          padding: 40px 20px; 
          text-align: center; 
          color: white;
        }
        .logo-container {
          margin-bottom: 20px;
        }
        .logo {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          border: 4px solid white;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .content { 
          padding: 40px 30px; 
        }
        h1 { 
          font-size: 32px; 
          font-weight: 900; 
          margin: 0; 
          text-transform: uppercase; 
          font-style: italic; 
          letter-spacing: -1px;
          line-height: 1.1;
        }
        .highlight-emerald {
          color: #10b981;
        }
        .badge {
          display: inline-block;
          background-color: #f0fdf4;
          color: #10b981;
          padding: 6px 16px;
          border-radius: 100px;
          font-weight: 800;
          font-size: 12px;
          text-transform: uppercase;
          margin-bottom: 16px;
          border: 1px solid #10b981;
        }
        p { 
          font-size: 17px; 
          margin-bottom: 24px; 
          color: #475569;
          font-weight: 500;
        }
        .prizes-box {
          background-color: #f8fafc;
          border: 2px dashed #cbd5e1;
          border-radius: 20px;
          padding: 24px;
          margin-bottom: 32px;
        }
        .prizes-title {
          font-weight: 900;
          text-transform: uppercase;
          font-style: italic;
          font-size: 18px;
          margin-bottom: 16px;
          display: block;
        }
        .prize-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 12px;
        }
        .prize-icon {
          font-size: 24px;
          margin-right: 12px;
          line-height: 1;
        }
        .button-container { 
          text-align: center; 
          margin: 40px 0 20px 0; 
        }
        .button { 
          background-color: #10b981; 
          color: #ffffff !important; 
          padding: 20px 40px; 
          border-radius: 20px; 
          font-weight: 900; 
          text-decoration: none; 
          font-size: 20px;
          text-transform: uppercase;
          font-style: italic;
          display: inline-block;
          box-shadow: 0 10px 0 #059669;
          transition: all 0.2s;
        }
        .footer { 
          text-align: center; 
          padding: 30px; 
          font-size: 13px; 
          color: #94a3b8; 
          background-color: #f8fafc;
        }
        .brand-footer {
          font-weight: 800;
          color: #64748b;
          margin-bottom: 10px;
          display: block;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo-container">
            <!-- Si la imagen no carga, el diseño sigue siendo sólido -->
            <img src="https://selectivi.es/images/mas_logo.jpg" alt="MAS Logo" class="logo">
          </div>
          <h1>¿MALLORCA <span style="color: #ffffff; text-decoration: underline;">GRATIS</span>? 🌴✈️</h1>
        </div>
        
        <div class="content">
          <div class="badge">Oportunidad Promotores 2026</div>
          
          <p>¡Hola! Buenas,</p>
          
          <p>Soy <strong>Iker de Selectivi.es</strong>. Hoy no te escribo para hablar de exámenes (¡por fin!), sino de algo mucho mejor.</p>
          
          <p>Estamos colaborando con <strong>MAS</strong>, la agencia de viajes líder en finales de Selectividad. Son especialistas en montar los viajes más épicos a <span class="highlight-emerald">Mallorca</span>, aunque también organizan aventuras en otros destinos increíbles.</p>
          
          <p><strong>Buscamos gente como tú:</strong> personas con energía, con contactos nacidos en <strong>08/09</strong> (o de esa edad) y con ganas de liarla este verano.</p>

          <div class="prizes-box">
            <span class="prizes-title">RECOMPENSAS POR TU CARA BONITA:</span>
            <div class="prize-item">
              <span class="prize-icon">💰</span>
              <span><strong>Comisión en efectivo</strong> por cada persona que se apunte gracias a ti.</span>
            </div>
            <div class="prize-item">
              <span class="prize-icon">🏝️</span>
              <span><strong>Viaje a MALLORCA GRATIS</strong> con TODO incluido (vuelos, alojamiento, fiestas VIP, etc.).</span>
            </div>
          </div>
          
          <p>Si crees que cumples el perfil y quieres vivir el mejor verano de tu vida sin pagar un euro, ¡háznoslo saber!</p>
          
          <div class="button-container">
            <a href="${whatsappUrl}" class="button">¡QUIERO MI VIAJE! 🚀</a>
          </div>
          
          <p style="text-align: center; font-size: 14px; font-weight: 800; color: #10b981; text-transform: uppercase;">
            (Plazas limitadas para promotores)
          </p>
        </div>
        
        <div class="footer">
          <span class="brand-footer">Selectivi.es x MAS</span>
          <p>© 2026 Selectivi.es — La plataforma nº1 para la Selectividad</p>
          <p>Has recibido este correo porque estás en nuestra base de datos de estudiantes. <br>Si no quieres recibir más promos, puedes ignorar este mensaje.</p>
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
          subject: '🌴 ¡Vete a MALLORCA GRATIS con MAS y Selectivi.es! ✈️',
          html: htmlContent,
        });

        if (error) {
          console.error(`Error enviando a ${user.email}:`, error);
        } else {
          console.log(`Correo enviado con éxito a: ${user.email} (ID: ${data?.id})`);
        }
        
        // Pequeño retardo para no saturar Resend (10 emails por segundo max en free tier, pero mejor ser conservadores)
        await sleep(100);
      } catch (e) {
        console.error(`Excepción enviando a ${user.email}:`, e);
      }
    }
  }

  console.log(`--- Proceso finalizado ---`);
}

sendMallorcaPromo();
