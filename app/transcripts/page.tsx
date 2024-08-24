"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/config/supabaseClient";
import { FaPlus, FaTrash } from "react-icons/fa";
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

  const deleteTranscript = async (id: string) => {
    try {
      const { error } = await supabase
        .from("transcripts")
        .delete()
        .eq("id", id);

      if (error) throw error;

      // Refresh the transcript list
      fetchTranscripts();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred: " + err
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className='flex flex-row items-center mb-6 space-x-2'>
        <h1 className="text-3xl font-semibold">Transcripts</h1>
        <button onClick={
          () => {
            router.push('/transcripts/create');
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
        <ul className="space-y-4">
          {transcripts.map((transcript) => (
            <li
              key={transcript.id}
              className="border p-4 rounded-lg hover:bg-gray-50 cursor-pointer flex justify-between items-center"
            >
              <div
                onClick={() => {
                  router.push(`/transcripts/${transcript.id}`);
                }}
                className="flex-grow"
              >
                <div className="text-blue-600">{transcript.title}</div>
                <p className="text-sm text-gray-500 mt-1">
                  Created: {new Date(transcript.created_at).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTranscript(transcript.id);
                }}
                className="text-gray-400 hover:text-red-600 bg-gray-50 rounded-md p-3 hover:bg-gray-100"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
