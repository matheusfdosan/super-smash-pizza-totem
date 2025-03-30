import { useState, useRef } from 'react';
import axios from 'axios';

const TranscriptionTool = () => {
  const [transcription, setTranscription] = useState('');
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const apiKey = import.meta.env.VITE_API_KEY_TRANSKRIPTOR;  // Chave de API diretamente do .env

  const startRecording = async () => {
    try {
      // Verificar se o navegador suporta a API de captura de áudio
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('A API de captura de mídia não é suportada neste navegador.');
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        if (audioChunksRef.current.length === 0) {
          console.error('Nenhum dado de áudio gravado.');
          return;
        }

        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        audioChunksRef.current = []; // Limpar os chunks
        await transcribeAudio(audioBlob);
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (error) {
      console.error('Erro ao acessar o microfone:', error.message || error);
      alert('Erro ao acessar o microfone. Verifique as permissões e tente novamente.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  const transcribeAudio = async (audioBlob) => {
    const formData = new FormData();
    formData.append('file', audioBlob, 'audio.wav');

    try {
      // Enviar áudio para a API do Transkriptor
      const response = await axios.post('https://api.tor.app/developer/files/upload', formData, {
        headers: {
          'Authorization': `Bearer ${apiKey}`, // Chave de API diretamente
          'Content-Type': 'multipart/form-data'
        }
      });

      const orderId = response.data.order_id;
      let transcriptionText = '';

      // Verificar o status da transcrição periodicamente
      while (true) {
        const statusResponse = await axios.get(`https://api.tor.app/developer/files/${orderId}`, {
          headers: { 'Authorization': `Bearer ${apiKey}` } // Chave de API diretamente
        });

        if (statusResponse.data.status === 'completed') {
          transcriptionText = statusResponse.data.transcription;
          break;
        }
        await new Promise(resolve => setTimeout(resolve, 5000)); // Esperar 5 segundos antes de verificar novamente
      }

      // Exibir a transcrição
      setTranscription(transcriptionText);
    } catch (error) {
      console.error('Erro ao transcrever áudio:', error);
      setTranscription('Erro ao transcrever áudio.');
    }
  };

  return (
    <div>
      <button onClick={recording ? stopRecording : startRecording}>
        {recording ? 'Parar Gravação' : 'Iniciar Gravação'}
      </button>
      <p>Transcrição: {transcription}</p>
    </div>
  );
};

export default TranscriptionTool;
