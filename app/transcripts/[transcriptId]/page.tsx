'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { supabase } from '@/config/supabaseClient';
import ReactMarkdown from 'react-markdown';
import MicModal from '@/components/MicModal';

interface Annotation {
  id: string;
  content: string;
  start_time: number;
  end_time: number;
  created_at: string;
}

interface Transcript {
  id: string;
  title: string;
  content: string;
  created_at: string;
  annotations: Annotation[];
}

export default function TranscriptPage({ params }: { params: { transcriptId: string } }) {
  const { transcriptId } = params;
  const [transcript, setTranscript] = useState<Transcript | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTranscript, setModalTranscript] = useState("");

  useEffect(() => {
    const fetchTranscriptData = async () => {
      try {
        const { data, error } = await supabase
          .from('transcripts')
          .select('*, annotations (*)')
          .eq('id', transcriptId)
          .single();

        if (error) throw error;
        setTranscript(data as Transcript);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred: ' + err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTranscriptData();
  }, [transcriptId]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (transcribedText: string) => {
    setModalTranscript(transcribedText);
    setIsModalOpen(false);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!transcript) return <p>No transcript found</p>;

  return (
    <div>
      <h1><ReactMarkdown>{transcript.title}</ReactMarkdown></h1>
      <p><ReactMarkdown>{transcript.content}</ReactMarkdown></p>

      <h2>Comments:</h2>
      {transcript.annotations.map((annotation) => (
        <div key={annotation.id}>
          <p><ReactMarkdown>{annotation.content}</ReactMarkdown></p>
        </div>
      ))}

      <button
        onClick={handleOpenModal}
        className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
      >
        Open Microphone
      </button>

      <MicModal isOpen={isModalOpen} onClose={handleCloseModal} />

      {modalTranscript && (
        <div className="mt-4">
          <textarea
            className="w-full h-32 p-2 border rounded-md"
            value={modalTranscript}
            readOnly
          />
        </div>
      )}
    </div>
  );
}