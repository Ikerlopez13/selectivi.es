import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function main() {
    const key = process.env.GOOGLE_AI_API_KEY;
    console.log("Checking API Key: ", key ? "Found" : "Missing");
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`);
        const data = await response.json();
        console.log("Available Models:", JSON.stringify(data, null, 2));
    } catch (err: any) {
        console.error("Error fetching models:", err.message);
    }
}

main();
