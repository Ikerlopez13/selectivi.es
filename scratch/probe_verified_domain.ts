import { Resend } from "resend";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const resend = new Resend(process.env.RESEND_API_KEY!);

async function probeVerifiedDomain() {
  console.log("Probing if resend.selectivi.cat works...");
  try {
    const { data, error } = await resend.emails.send({
      from: 'Iker de Selectivi <hola@resend.selectivi.cat>',
      to: ['lopezalegreiker@gmail.com'],
      subject: 'Domain Probe 2',
      html: '<p>Testing verified subdomain</p>',
    });

    if (error) {
      console.log("Subdomain NOT working:", error);
    } else {
      console.log("Subdomain WORKS! ID:", data?.id);
    }
  } catch (e) {
    console.error("Probe failed:", e);
  }
}

probeVerifiedDomain();
