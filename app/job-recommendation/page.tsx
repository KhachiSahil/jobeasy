"use client";

import React from "react";
import { Bookmark, Search, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";

const jobs = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA (Remote)",
    description:
      "We're looking for a Senior Frontend Developer to join our growing team. You'll be responsible for building user interfaces for our web applications using React and Next.js.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    salary: "$120,000 - $150,000",
    posted: "2 days ago",
    match: "95%",
  },
  {
    title: "Full Stack Engineer",
    company: "InnovateTech",
    location: "New York, NY",
    description:
      "Join our engineering team to build scalable web applications using modern JavaScript frameworks and technologies.",
    tags: ["JavaScript", "Node.js", "React", "MongoDB"],
    salary: "$130,000 - $160,000",
    posted: "1 day ago",
    match: "92%",
  },
  {
    title: "UI/UX Developer",
    company: "CreativeLabs",
    location: "Austin, TX",
    description:
      "We're seeking a UI/UX Developer to help craft beautiful, user-centered web experiences across our platform.",
    tags: ["Figma", "HTML", "CSS", "JavaScript"],
    salary: "$90,000 - $110,000",
    posted: "3 days ago",
    match: "88%",
  },
];

const JobRecommendationsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 relative">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
            Job Recommendations
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Based on your resume analysis
          </p>
        </div>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search jobs..."
              className="bg-[#111] border border-gray-700 rounded-full pl-10 pr-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium">
            Search
          </button>
          <button className="p-2 rounded-full bg-[#111] border border-gray-700 text-gray-300 hover:text-white">
            <SlidersHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Job Cards */}
      <div className="space-y-6">
        {jobs.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-6 rounded-2xl border border-white/10 shadow-inner relative"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-sm text-gray-400">{job.company}</p>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                  📍 {job.location}
                </p>
                <p className="mt-3 text-sm text-gray-300">{job.description}</p>
              </div>
              <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                {job.match} Match
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {job.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/10 text-white px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
              <span>
                {job.salary} • Posted {job.posted}
              </span>
              <div className="flex items-center gap-3">
                <Bookmark className="w-4 h-4 cursor-pointer hover:text-white" />
                <a
                  href="#"
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-black font-semibold text-sm px-4 py-2 rounded-full flex items-center gap-1 hover:opacity-90"
                >
                  Apply Now ↗
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JobRecommendationsPage;
