
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

async function test() {
  try {
    const result = await model.generateContent("Dime 'hola' en Valenciano.");
    console.log(result.response.text());
  } catch (e) {
    console.error(e);
  }
}
test();
