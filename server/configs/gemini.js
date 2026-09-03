import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main(prompt) {
  const response = await ai.interactions.create({
    model: "gemini-3.8-flash",
    input: prompt,
  });
  return response.output_text
}

export default main