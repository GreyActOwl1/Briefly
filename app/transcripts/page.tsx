"use client";

import React from "react";
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
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  useEffect(() => {
    fetchTranscripts();
  }, []);

  const fetchTranscripts = async () => {
    try {
      const { data, error } = await supabase
        .from("transcripts")
        .select("id, title, created_at")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setTranscripts(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
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
      <div className="flex flex-row items-center mb-6 space-x-2">
        <h1 className="text-3xl font-semibold">Transcripts</h1>
        <button
          onClick={() => {
            router.push("/transcripts/create");
          }}
          className="text-blue-600 bg-gray-50 rounded-md p-2 hover:bg-gray-100"
          aria-label="Create new transcript"
        >
          <FaPlus />
        </button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">All Transcripts</h2>
      {isLoading ? (
        <p>Loading transcripts...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : transcripts.length === 0 ? (
        <p>No transcripts found.</p>
      ) : (
        <ul className="space-y-4" role="list button">
          {transcripts.map((transcript) => (
            <div key={transcript.id} className="space-y-4">
              <div className="border rounded-lg" role="button">
                <button
                  className="w-full text-left p-4 hover:bg-gray-50 flex justify-between items-center"
                  onClick={() => router.push(`/transcripts/${transcript.id}`)}
                >
                  <div className="flex-grow" role="button">
                    <div className="text-blue-600" >{transcript.title}</div>
                    <p className="text-sm text-gray-500 mt-1">
                      Created:{" "}
                      {new Date(transcript.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteTranscript(transcript.id);
                    }}
                    className="text-gray-400 hover:text-red-600 bg-gray-50 rounded-md p-2 hover:bg-gray-100"
                    aria-label="Delete transcript"
                  >
                    <FaTrash />
                  </button>
                </button>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}