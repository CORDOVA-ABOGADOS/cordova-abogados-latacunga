
import { GoogleGenAI } from "@google/genai";

// The service now follows the @google/genai guidelines for text generation and chat history.
export const sendChatMessage = async (
  message: string, 
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    // Initializing GoogleGenAI inside the function using process.env.API_KEY directly.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = 'gemini-3-flash-preview';
    
    // We construct a system instruction to guide the AI persona
    const systemInstruction = `
      Eres el Asistente Virtual del Estudio Jurídico del Dr. Patricio Cordova.
      Tu objetivo es asistir a potenciales clientes con información básica, agendar citas y responder preguntas generales sobre servicios legales (Civil, Penal, Corporativo, Familia).
      
      Reglas:
      1. Mantén un tono profesional, empático y formal ("usted").
      2. NO des consejos legales específicos ni garantices resultados. Si preguntan algo complejo, invítalos a agendar una consulta con el Dr. Cordova.
      3. Sé conciso y claro.
      4. Si preguntan por horarios, son Lunes a Viernes de 9 a 18hs.
      5. Si quieren agendar, pide su nombre y correo (simulado).
      
      Nombre del abogado principal: Dr. Patricio Cordova.
      Experiencia: +38 años.
      Especialidades: Derecho Corporativo, Civil, Penal y Familia.
    `;

    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
      history: history,
    });

    // sendMessage only accepts the message parameter as per guidelines.
    const result = await chat.sendMessage({ message });
    
    // Using result.text property directly as recommended by guidelines.
    return result.text || "Disculpe, no pude procesar su solicitud en este momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lo siento, hubo un error técnico. Por favor intente más tarde o contáctenos por teléfono.";
  }
};
