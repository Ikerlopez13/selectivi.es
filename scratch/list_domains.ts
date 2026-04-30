import { Resend } from "resend";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const resend = new Resend(process.env.RESEND_API_KEY!);

async function listDomains() {
  console.log("Listing domains in Resend...");
  try {
    const { data, error } = await resend.domains.list();
    if (error) {
      console.error(error);
    } else {
      console.log("Domains:", JSON.stringify(data, null, 2));
    }
  } catch (e) {
    console.error("List failed:", e);
  }
}

listDomains();
