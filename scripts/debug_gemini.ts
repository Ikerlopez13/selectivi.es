import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);

async function main() {
    try {
        // The listModels method is on the client instance but it's not well documented in some versions
        // Let's try to just fetch the list of models from the API directly if possible or use the library's way.
        // Actually, let's try to use 'gemini-1.5-flash-8b' or similar variations.
        
        // Let's try to use a model name that is very common.
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent("hello");
        console.log(result.response.text());
    } catch (err: any) {
        console.error(err.message);
    }
}

main();
