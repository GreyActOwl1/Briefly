"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/config/supabaseClient";

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

  const handleCreateTranscript = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    try {
      const { data, error } = await supabase
        .from("transcripts")
        .insert([{ title: newTitle, content: newContent }])
        .select();

      if (error) throw error;
      setTranscripts((prevTranscripts) => [data[0], ...prevTranscripts]);
      setNewTitle("");
      setNewContent("");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to create transcript"
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Transcripts</h1>
      <div className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Create New Transcript</h2>
        <form onSubmit={handleCreateTranscript} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter transcript title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <textarea
              id="content"
              placeholder="Enter transcript content"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              required
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Transcript
          </button>
        </form>
      </div>

      <h2 className="text-2xl font-semibold mb-4">All Transcripts</h2>
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
              className="border p-4 rounded-lg hover:bg-gray-50"
            >
              <Link
                href={`/transcripts/${transcript.id}`}
                className="text-blue-600 hover:underline"
              >
                {transcript.title}
              </Link>
              <p className="text-sm text-gray-500 mt-1">
                Created: {new Date(transcript.created_at).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
