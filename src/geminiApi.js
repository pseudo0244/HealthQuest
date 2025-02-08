import axios from 'axios';

const API_URL = 'https://api.gemini.com/v1/speech';  // Replace with actual API URL
const API_KEY = 'your_gemini_api_key';  // Replace with your API Key

export const geminiSpeechToText = async (audioData) => {
  try {
    const response = await axios.post(
      API_URL, 
      audioData, 
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;  // Return the recognized text
  } catch (error) {
    console.error("Error with Gemini Speech API:", error);
    throw error;
  }
};

export const geminiTextToSpeech = async (text) => {
  try {
    const response = await axios.post(
      `${API_URL}/synthesize`, 
      { text },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;  // Return the speech response (audio file or link)
  } catch (error) {
    console.error("Error with Gemini Text-to-Speech API:", error);
    throw error;
  }
};
