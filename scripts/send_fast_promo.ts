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

const fastUrl = "https://selectivi.es/fast";

async function sendFastPromo() {
  console.log(`--- Iniciando Campaña Selectivi FAST (${IS_DRY_RUN ? 'SIMULACIÓN' : IS_TEST ? 'TEST' : 'REAL'}) ---`);

  let recipients: { email: string }[] = [];

  if (IS_TEST) {
    recipients = [{ email: TEST_EMAIL }];
  } else {
    console.log("Obteniendo correos de waitlist...");
    const { data: waitlist, error: wError } = await supabase.from('waitlist').select('email');
    if (wError) console.error("Error waitlist:", wError);

    console.log("Obteniendo correos de usuarios...");
    const { data: usuarios, error: uError } = await supabase.from('usuarios').select('correo_electronico');
    if (uError) console.error("Error usuarios:", uError);

    console.log("Obteniendo correos de auth.users...");
    let authUsersList: any[] = [];
    try {
      const { data: authData, error: aError } = await supabase.auth.admin.listUsers({ perPage: 1000 });
      if (aError) {
         console.error("Error auth.users:", aError);
      } else {
         authUsersList = authData.users;
      }
    } catch (e) {
      console.log("No se pudo obtener auth.users (posible falta de permisos admin), continuando con usuarios y waitlist...");
    }

    const allEmails = new Set<string>();
    
    waitlist?.forEach(u => u.email && allEmails.add(u.email.toLowerCase().trim()));
    usuarios?.forEach(u => u.correo_electronico && allEmails.add(u.correo_electronico.toLowerCase().trim()));
    authUsersList.forEach(u => u.email && allEmails.add(u.email.toLowerCase().trim()));
    
    // Añadimos correos de prueba por defecto
    allEmails.add("pabtoib@gmail.com");
    allEmails.add(TEST_EMAIL);

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
  <title>Llega Selectivi FAST ⚡</title>
</head>
<body style="margin: 0; padding: 0; background-color: #000000; -webkit-font-smoothing: antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000; margin: 0; padding: 40px 20px;">
    <tr>
      <td align="center">
        <!-- Card -->
        <table width="100%" style="max-width: 600px; background-color: #0A0A0A; border-radius: 24px; border: 1px solid #222222; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;" cellpadding="0" cellspacing="0">
          
          <tr>
            <td align="center" style="padding: 40px 30px 20px 30px;">
              <img src="https://selectivi.es/images/logoo.svg" width="70" height="70" style="border-radius: 18px; border: 2px solid #FFD000; box-shadow: 0 0 20px rgba(255, 208, 0, 0.3); display: block; margin-bottom: 24px;">
              <div style="display: inline-block; background-color: rgba(255, 208, 0, 0.1); color: #FFD000; padding: 6px 16px; border-radius: 100px; font-weight: 800; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; border: 1px solid rgba(255, 208, 0, 0.2); margin-bottom: 16px;">
                NUEVO MODO DE ESTUDIO
              </div>
              <h1 style="margin: 0; font-size: 32px; font-weight: 900; color: #FFFFFF; text-transform: uppercase; font-style: italic; letter-spacing: -1px; margin-bottom: 12px;">
                ⚡️ SELECTIVI <span style="color: #FFD000;">FAST</span>
              </h1>
              <p style="margin: 0; color: #A1A1AA; font-size: 16px; font-weight: 500;">
                Sube tu nota sin quemarte la cabeza.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding: 10px 30px 30px 30px;">
              <p style="color: #E4E4E7; font-size: 17px; margin-top: 0; margin-bottom: 20px; line-height: 1.6;">
                ¡Hola! Sabemos que la Sele se acerca y la energía empieza a escasear.
              </p>
              <p style="color: #E4E4E7; font-size: 17px; margin-top: 0; margin-bottom: 30px; line-height: 1.6;">
                Para esos momentos en los que tienes el <strong>cerebro frito (deepfried 🧠🔥)</strong> y no te entra un PDF más de teoría infumable, te traemos la solución.
              </p>

              <!-- Feature Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #111111; border-radius: 16px; border: 1px solid #222222; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 24px;">
                    
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
                      <tr>
                        <td width="40" valign="top">
                          <div style="font-size: 24px; line-height: 1; text-align: center;">📱</div>
                        </td>
                        <td style="padding-left: 12px;">
                          <div style="color: #FFFFFF; font-weight: 700; font-size: 16px; margin-bottom: 4px;">Estudia scrolleando</div>
                          <div style="color: #A1A1AA; font-size: 15px; line-height: 1.5;">Formato TikTok/Reels con preguntas clave. Deslizas, respondes y aprendes al instante.</div>
                        </td>
                      </tr>
                    </table>

                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
                      <tr>
                        <td width="40" valign="top">
                          <div style="font-size: 24px; line-height: 1; text-align: center;">🌍</div>
                        </td>
                        <td style="padding-left: 12px;">
                          <div style="color: #FFFFFF; font-weight: 700; font-size: 16px; margin-bottom: 4px;">Para toda España</div>
                          <div style="color: #A1A1AA; font-size: 15px; line-height: 1.5;">Preguntas universales que caen en todas las comunidades autónomas.</div>
                        </td>
                      </tr>
                    </table>

                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="40" valign="top">
                          <div style="font-size: 24px; line-height: 1; text-align: center;">🚀</div>
                        </td>
                        <td style="padding-left: 12px;">
                          <div style="color: #FFFFFF; font-weight: 700; font-size: 16px; margin-bottom: 4px;">Directo al grano</div>
                          <div style="color: #A1A1AA; font-size: 15px; line-height: 1.5;">Explicaciones rápidas y respuestas concisas. Cero paja.</div>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom: 10px;">
                    <a href="${fastUrl}" style="display: inline-block; background: linear-gradient(135deg, #FFD000 0%, #FF9900 100%); color: #000000; font-weight: 900; font-size: 18px; text-decoration: none; padding: 18px 36px; border-radius: 100px; text-transform: uppercase; font-style: italic; box-shadow: 0 8px 20px rgba(255, 208, 0, 0.2);">
                      PROBAR SELECTIVI FAST ⚡️
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #050505; border-top: 1px solid #222222; padding: 24px 30px; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; text-align: center;">
              <div style="color: #FFFFFF; font-weight: 800; font-size: 15px; margin-bottom: 8px;">Selectivi.es</div>
              <div style="color: #52525B; font-size: 13px; line-height: 1.5;">
                © 2026 Selectivi.es — Hackea la Selectividad.<br>
                Has recibido este correo porque estás en nuestra waitlist o te has registrado.
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
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
          subject: '⚡️ Estudia la Sele scrolleando (para cerebros deepfried 🧠)',
          html: htmlContent,
        });

        if (error) {
          console.error(`Error enviando a ${user.email}:`, error);
        } else {
          console.log(`Correo enviado con éxito a: ${user.email} (ID: ${data?.id})`);
        }
        
        // Pequeño retardo para no saturar Resend (10 emails por segundo max en free tier)
        await sleep(100);
      } catch (e) {
        console.error(`Excepción enviando a ${user.email}:`, e);
      }
    }
  }

  console.log(`--- Proceso finalizado ---`);
}

sendFastPromo();
