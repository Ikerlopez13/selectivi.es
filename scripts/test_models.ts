import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);

async function main() {
    try {
        // Since there is no listModels in the client directly sometimes or it's limited,
        // let's just try to generate a simple "hello" with a few model strings.
        const models = ["gemini-1.5-flash", "gemini-1.5-pro", "gemini-pro"];
        for (const m of models) {
            try {
                const model = genAI.getGenerativeModel({ model: m }, { apiVersion: 'v1' });
                const result = await model.generateContent("Say hello");
                console.log(`Success with ${m}: ${result.response.text()}`);
                process.exit(0);
            } catch (err: any) {
                console.log(`Failed with ${m}: ${err.message}`);
            }
        }
    } catch (err: any) {
        console.error(err.message);
    }
}

main();
