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
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
      {(isRecording || recordingComplete) && (
        <div className="w-full rounded-md bg-white p-4 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            {isRecording && (
              <div className="rounded-full w-4 h-4 bg-red-400 animate-pulse" />
            )}
            <span className="text-gray-600">{isRecording ? "Recording..." : "Recording Complete"}</span>
          </div>
          <div className="border rounded-md p-2 mt-4">
            <textarea
              className="w-full h-32 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={transcript}
              readOnly
            />
          </div>
        </div>
      )}
      <div className="flex items-center w-full mt-4">
        {isRecording ? (
          <button
            onClick={handleToggleRecording}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Stop
          </button>
        ) : (
          <button
            onClick={handleToggleRecording}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Start
          </button>
        )}
      </div>
    </div>
  );
}