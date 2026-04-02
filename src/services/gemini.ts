import { GoogleGenAI } from "@google/genai";
import { EditResponse, AspectRatio } from '../types';

/**
 * Edits an image using Gemini 2.5 Flash Image model.
 * @param imageBase64 Base64 string of the image (without prefix)
 * @param mimeType Mime type of the image
 * @param prompt Text prompt for editing
 * @param aspectRatio Desired aspect ratio for the output
 */
export async function editImageWithGemini(
  imageBase64: string | null,
  mimeType: string | null,
  prompt: string,
  aspectRatio: AspectRatio = '1:1',
  model: string = 'gemini-2.5-flash-image'
): Promise<EditResponse> {
  try {
    // Use the selected API key if available (for 3.1 models), otherwise fallback to the default Gemini API key
    const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return { error: "Gemini API key is missing. Please check your environment variables or select an API key." };
    }

    const ai = new GoogleGenAI({ apiKey });

    const parts: any[] = [];

    // Add image if provided
    if (imageBase64 && mimeType) {
      const cleanBase64 = imageBase64.includes(',') ? imageBase64.split(',')[1] : imageBase64;
      const normalizedMimeType = mimeType === 'image/jpg' ? 'image/jpeg' : mimeType;
      
      parts.push({
        inlineData: {
          data: cleanBase64,
          mimeType: normalizedMimeType,
        },
      });
    }

    // Always add text prompt
    parts.push({
      text: prompt,
    });

    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: parts,
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio
        },
      }
    });

    // Iterate through response parts to find the image
    const responseParts = response.candidates?.[0]?.content?.parts;
    
    if (!responseParts) {
      return { error: "No content generated from the model." };
    }

    let generatedImageUrl: string | undefined;

    for (const part of responseParts) {
      if (part.inlineData && part.inlineData.data) {
        const mime = part.inlineData.mimeType || 'image/png';
        generatedImageUrl = `data:${mime};base64,${part.inlineData.data}`;
        break; 
      }
    }

    if (generatedImageUrl) {
      return { imageUrl: generatedImageUrl };
    } else {
      // If no image found, check for text output which might indicate a refusal or error explanation
      const textOutput = responseParts.find(p => p.text)?.text;
      return { error: textOutput || "The model did not return an image. Please try a different prompt." };
    }

  } catch (error) {
    console.error("Gemini API Error:", error);
    return { error: error instanceof Error ? error.message : "An unexpected error occurred." };
  }
}