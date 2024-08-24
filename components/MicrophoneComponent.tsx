"use client";

import { useEffect, useState, useRef } from "react";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

interface MicrophoneComponentProps {
  setTranscript: (transcript: (prevTranscript: string) => string) => void;
}

export default function MicrophoneComponent({ setTranscript }: MicrophoneComponentProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [transcript, setLocalTranscript] = useState("");
  const recognitionRef = useRef<any>(null);

  const startRecording = () => {
    setIsRecording(true);
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    recognitionRef.current.onresult = (event: any) => {
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const { transcript: resultTranscript } = event.results[i][0];
        if (event.results[i].isFinal) {
          setLocalTranscript((prevTranscript: string) => prevTranscript + resultTranscript + " ");
          setTranscript((prevTranscript: string) => prevTranscript + resultTranscript + " ");
        } else {
          interimTranscript += resultTranscript;
        }
      }
    };

    recognitionRef.current.start();
  };

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setRecordingComplete(true);
    }
  };

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  return (
    <div className="flex flex-col items-center">
      {(isRecording || recordingComplete) && (
        <div className="w-full rounded-md bg-white p-4">
          <div className="flex justify-between">
            {isRecording && (
              <div className="rounded-full w-4 h-4 bg-red-400 animate-pulse" />
            )}
          </div>
          <div className="border rounded-md p-2 mt-4">
            <textarea
              className="w-full h-32 p-2 border rounded-md"
              value={transcript}
              readOnly
            />
          </div>
        </div>
      )}
      <div className="flex items-center w-full">
        {isRecording ? (
          <button
            onClick={handleToggleRecording}
            className="mt-4 bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-full"
          >
            Stop
          </button>
        ) : (
          <button
            onClick={handleToggleRecording}
            className="mt-4 bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-full"
          >
            Start
          </button>
        )}
      </div>
    </div>
  );
}