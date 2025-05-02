"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";
import Link from "next/link";
import handleResume from "@/actions/handleResume";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const UploadResumeCard: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signup");
    }
  }, [status, router]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleSubmit = () => {
    if(file != null)handleResume(file)
  };


  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Neon Bubbles */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-cyan-400 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-[50%] left-[50%] w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-pink-500 opacity-20 rounded-full blur-[200px]" />


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-[#1a1a1d] to-[#111112] rounded-3xl border border-white/10 p-8 md:p-10 shadow-[0_0_60px_rgba(0,255,255,0.1)] max-w-md w-full backdrop-blur-xl relative overflow-hidden"
      >
        {/* Back Button */}
        <Link
          href="/"
          className="absolute top-4 left-4 text-lg font-bold text-white hover:underline"
        >
          ←
        </Link>

        <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
          Upload <span className="text-white">Your Resume</span>
        </h2>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Upload your resume to find job matches tailored to your skills and experience
        </p>

        <motion.div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="mt-6 border border-dashed border-gray-500/40 p-6 rounded-xl flex flex-col items-center text-center bg-black/20 transition-all duration-300 hover:border-cyan-400"
        >
          <Upload className="w-10 h-10 text-purple-400 mb-4" />
          <p className="text-purple-400 font-medium">
            {file?.name ? `Uploaded: ${file.name}` : "Drag and drop your resume here"}
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Supports PDF, DOCX(Max 5MB)
          </p>
          <input
            type="file"
            accept=".pdf,.docx,.txt"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-xl transition-all text-sm font-medium"
          >
            Select File
          </button>
        </motion.div>

        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-white mb-1">
              Desired Job Title (Optional)
            </label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="e.g. Software Engineer, Marketing Manager"
              className="w-full bg-gradient-to-br from-black via-neutral-800 to-black border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-white mb-1">
              Preferred Location (Optional)
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. New York, Remote"
              className="w-full bg-gradient-to-br from-black via-neutral-800 to-black border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500"
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          className="mt-6 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white py-3 rounded-xl font-semibold text-sm md:text-base shadow-lg transition-all"
        >
          Find Job Matches →
        </motion.button>
      </motion.div>
    </div>
  );
};

export default UploadResumeCard;
