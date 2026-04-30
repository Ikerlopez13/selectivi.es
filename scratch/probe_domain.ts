import { Resend } from "resend";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const resend = new Resend(process.env.RESEND_API_KEY!);

async function probeDomain() {
  console.log("Probing if selectivi.es is verified...");
  try {
    const { data, error } = await resend.emails.send({
      from: 'Iker de Selectivi.es <hola@selectivi.es>',
      to: ['lopezalegreiker@gmail.com'],
      subject: 'Domain Probe',
      html: '<p>Testing domain verification</p>',
    });

    if (error) {
      console.log("Domain NOT verified or error:", error);
    } else {
      console.log("Domain seems VERIFIED! ID:", data?.id);
    }
  } catch (e) {
    console.error("Probe failed:", e);
  }
}

probeDomain();
