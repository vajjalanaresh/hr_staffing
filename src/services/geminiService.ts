
import { GoogleGenAI } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getHRConsultation = async (prompt: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are TalentSpeaks AI, an elite HR consultant for Talent Speaks HR Solutions. 
        Your goal is to help businesses with finding the best employees and making their work easier. 
        Focus on providing high-impact staffing advice, organizational efficiency tips, and talent management strategies for CORPORATE CLIENTS.
        We do NOT search for jobs for individuals; we provide elite staffing for our company clients.
        Keep responses professional, bold, concise, and structured with bullet points. 
        Your brand colors are Orange, Black, and White - your personality is premium, efficient, and direct.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "TalentSpeaks AI is currently optimizing its knowledge core. Please stand by.";
  }
};
