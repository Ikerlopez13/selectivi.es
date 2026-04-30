import { Resend } from "resend";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const resend = new Resend(process.env.RESEND_API_KEY!);

async function probeRootCat() {
  console.log("Probing if selectivi.cat (root) works...");
  try {
    const { data, error } = await resend.emails.send({
      from: 'Iker de Selectivi <hola@selectivi.cat>',
      to: ['lopezalegreiker@gmail.com'],
      subject: 'Domain Probe 3',
      html: '<p>Testing root cat domain</p>',
    });

    if (error) {
      console.log("Root cat NOT working:", error);
    } else {
      console.log("Root cat WORKS! ID:", data?.id);
    }
  } catch (e) {
    console.error("Probe failed:", e);
  }
}

probeRootCat();
