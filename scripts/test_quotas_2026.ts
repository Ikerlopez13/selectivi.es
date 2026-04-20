import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);

async function main() {
    const models = [
        "gemini-flash-latest",
        "gemini-2.0-flash-001",
        "gemini-2.5-flash",
        "gemini-2.5-flash-lite",
        "gemini-3.1-flash-lite-preview",
        "gemini-2.0-flash-lite",
        "gemini-1.5-flash"
    ];
    
    console.log("--- START QUOTA TEST ---");
    for (const m of models) {
        try {
            console.log(`Testing [${m}]...`);
            const model = genAI.getGenerativeModel({ model: m });
            const result = await model.generateContent("ping");
            console.log(`✅ [${m}] works! -> ${result.response.text().substring(0, 10)}...`);
        } catch (err: any) {
            console.log(`❌ [${m}] failed: ${err.message}`);
        }
    }
    console.log("--- END QUOTA TEST ---");
}

main();
