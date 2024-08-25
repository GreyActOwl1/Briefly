"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/config/supabaseClient";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface Transcript {
  id: string;
  title: string;
  created_at: string;
}

export default function TranscriptsPage() {
  const [transcripts, setTranscripts] = useState<Transcript[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchTranscripts();
  }, []);

  const fetchTranscripts = async () => {
    try {
      const { data, error } = await supabase
        .from("transcripts")
        .select("id, title, created_at")
        .order("created_at", { ascending: false });

      console.log(error);

      if (data) {
        setTranscripts(data as Transcript[]);
      } else {
        setTranscripts([]);
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred: " + err
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className='flex flex-row items-center mb-6 space-x-2'>
        <h1 className="text-3xl font-semibold">Transcripts</h1>
        <button onClick={
          () => {
            router.push('/transcripts/new');
          }
        } className='text-blue-600 bg-gray-50 rounded-md p-2 hover:bg-gray-100'>
          <FaPlus />
        </button>
      </div>
      {isLoading ? (
        <p>Loading transcripts...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : transcripts.length === 0 ? (
        <p>No transcripts found.</p>
      ) : (
        <div className="space-y-4 flex flex-col">
          {transcripts.map((transcript) => (
            <button
              key={transcript.id}
              className="border p-4 rounded-lg hover:bg-gray-50 cursor-pointer text-start"
              onClick={
                () => {
                  router.push(`/transcripts/${transcript.id}`);
                }
              }
            >
              <div
                className="text-blue-600"
              >
                {transcript.title}
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Created: {new Date(transcript.created_at).toLocaleDateString()}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
