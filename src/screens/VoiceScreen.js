import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Voice from 'react-native-voice';
import Tts from 'react-native-tts';
import axios from 'axios';

export default function VoiceScreen() {
  const [isListening, setIsListening] = useState(false);
  const [speechResult, setSpeechResult] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // OpenAI API URL and your API Key
  const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY'; // Replace with your OpenAI API Key
  const OPENAI_API_URL = 'https://api.openai.com/v1/completions';

  useEffect(() => {
    // Initialize TTS (Text to Speech)
    Tts.setDefaultLanguage('en-US');
    Tts.setDefaultRate(0.5);

    // Initialize Voice (speech-to-text)
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      // Clean up Voice and TTS
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechResults = async (e) => {
    const recognizedText = e.value[0]; // Get the recognized speech text
    setSpeechResult(recognizedText);
    await handleChatGPTRequest(recognizedText);
  };

  const onSpeechError = (e) => {
    setSpeechResult('Error recognizing speech');
  };

  const handleChatGPTRequest = async (text) => {
    setIsProcessing(true);

    try {
      // Make the API call to OpenAI (GPT)
      const response = await axios.post(
        OPENAI_API_URL,
        {
          model: 'text-davinci-003', // You can use other models like GPT-4 if available
          prompt: text,
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const responseText = response.data.choices[0].text.trim();

      // Output the response from GPT as speech
      Tts.speak(responseText);

      // Optionally, log the response for debugging
      console.log('OpenAI Response:', responseText);

      setIsProcessing(false);
    } catch (error) {
      console.error('Error with OpenAI API:', error);
      setIsProcessing(false);
    }
  };

  const startListening = async () => {
    try {
      await Voice.start('en-US');
      setIsListening(true);
    } catch (e) {
      console.error(e);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voice Chat</Text>

      <Text style={styles.speechResult}>
        {speechResult || 'Say something to start a conversation...'}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => startListening()}
        disabled={isListening || isProcessing}
      >
        <Text style={styles.buttonText}>
          {isListening ? 'Listening...' : 'Start Listening'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => stopListening()}
        disabled={!isListening || isProcessing}
      >
        <Text style={styles.buttonText}>Stop Listening</Text>
      </TouchableOpacity>

      {isProcessing && <Text style={styles.processingText}>Processing...</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  speechResult: {
    fontSize: 20,
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  processingText: {
    fontSize: 16,
    color: '#ff6347',
    marginTop: 20,
  },
});
