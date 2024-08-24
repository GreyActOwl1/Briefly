'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/config/supabaseClient';
import ReactMarkdown from 'react-markdown';

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
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTranscriptData();
  }, [transcriptId]);

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
    </div>
  );
}