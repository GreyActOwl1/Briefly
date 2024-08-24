import { useState } from "react";
import MicrophoneComponent from "./MicrophoneComponent";

interface ModalProps {
  isOpen: boolean;
  onClose: (transcript: string) => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [transcript, setTranscript] = useState("");

  const handleClose = () => {
    onClose(transcript);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4 w-full max-w-md">
        <MicrophoneComponent setTranscript={setTranscript} />
        <button
          onClick={handleClose}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}