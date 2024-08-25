"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/config/supabaseClient";
import { useRouter } from "next/navigation";

interface Transcript {
  id: string;
  title: string;
  created_at: string;
}

export default function TranscriptsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const router = useRouter();

  const handleCreateTranscript = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("transcripts")
        .insert([{ title: newTitle, content: newContent }])
        .select();

      if (error) throw error;
      alert("Transcript created successfully");
      router.push("/transcripts");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to create transcript"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Transcripts</h1>
      <div className="mb-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4  dark:text-gray-950">Create New Transcript</h2>
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
              className="mt-1 p-2 pl-4 text-start border block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
              className="mt-1 block w-full pl-4 p-2 border border-gray-300 rounded-md  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {
              isLoading ? "Creating..." : "Create Transcript"
            }
          </button>
          {
            error && <p className="text-red-500">{error}</p>
          }
        </form>
      </div>
    </div>
  );
}
