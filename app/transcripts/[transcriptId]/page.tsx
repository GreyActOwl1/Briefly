"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/config/supabaseClient";
import ReactMarkdown from "react-markdown";
import MicModal from "@/components/MicModal";

interface EditableTextProps {
  isEditing: boolean;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: "input" | "textarea";
}

const EditableText = ({
  isEditing,
  value,
  onChange,
  type = "input",
}: EditableTextProps) => {
  return isEditing ? (
    type === "input" ? (
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-md"
      />
    ) : (
      <textarea
        value={value}
        onChange={onChange}
        className="w-full p-4 border rounded-md"
        rows={10}
      />
    )
  ) : (
    <p>{value}</p>
  );
};

interface EditButtonProps {
  isEditing: boolean;
  onClick: () => void;
}

const EditButton = ({ isEditing, onClick }: EditButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-blue-600 bg-gray-50 rounded-md p-2 hover:bg-gray-100"
    >
      {isEditing ? "Save" : "Edit"}
    </button>
  );
};

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

export default function TranscriptPage({
  params,
}: {
  params: { transcriptId: string };
}) {
  const { transcriptId } = params;
  const [transcript, setTranscript] = useState<Transcript | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTranscript, setModalTranscript] = useState("");
  const [comments, setComments] = useState("");
  const [isCommentsEditable, setIsCommentsEditable] = useState(false);

  useEffect(() => {
    fetchTranscriptData();
  }, [transcriptId]);

  const fetchTranscriptData = async () => {
    try {
      const { data, error } = await supabase
        .from("transcripts")
        .select("*, annotations (*)")
        .eq("id", transcriptId)
        .single();

      if (error) throw error;

      setTranscript(data as Transcript);
      setEditedTitle(data.title);
      setEditedContent(data.content);
      setComments(data.annotations.map((annotation: Annotation) => annotation.content).join("\n"));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred: " + err
      );
    } finally {
      setIsLoading(false);
    }
  };

  const updateTranscript = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase
        .from("transcripts")
        .update({ title: editedTitle, content: editedContent })
        .eq("id", transcriptId);

      if (error) throw error;

      setIsEditing(false);
      fetchTranscriptData();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const upsertAnnotation = async (content: string) => {
    try {
      setIsLoading(true);

      const { error: deleteError } = await supabase
        .from("annotations")
        .delete()
        .eq("transcript_id", transcriptId);

      if (deleteError) throw deleteError;

      const annotations = content.split("\n").map((line) => ({
        transcript_id: transcriptId,
        content: line,
      }));

      const { error: insertError } = await supabase
        .from("annotations")
        .insert(annotations);

      if (insertError) throw insertError;

      fetchTranscriptData();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenModal = () => {
    setModalTranscript(""); // Reset modal transcript
    setIsModalOpen(true);
  };

  const handleCloseModal = (transcribedText: string) => {
    setComments((prevComments) => prevComments + "\n" + transcribedText);
    setIsCommentsEditable(true);
    setIsModalOpen(false);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!transcript) return <p>No transcript found</p>;

  return (
    <div className='mt-5'>
      <div className="flex justify-between items-center">
        <EditableText
          isEditing={isEditing}
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <EditButton
          isEditing={isEditing}
          onClick={() => (isEditing ? updateTranscript() : setIsEditing(true))}
        />
      </div>
      <EditableText
        isEditing={isEditing}
        value={editedContent}
        onChange={(e) => setEditedContent(e.target.value)}
        type="textarea"
      />
      <h2>Comments:</h2>
      {isCommentsEditable ? (
        <textarea
          className="w-full p-4 border rounded-md"
          rows={10}
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      ) : (
        <ReactMarkdown>
          {comments}
        </ReactMarkdown>
      )}
      {isCommentsEditable && (
        <button
          onClick={() => upsertAnnotation(comments)}
          className="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded mr-4"
        >
          Save Comments
        </button>
      )}
      <button
        onClick={handleOpenModal}
        className="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded"
      >
        Record comments
      </button>

      <MicModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}