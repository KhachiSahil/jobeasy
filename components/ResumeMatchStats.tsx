"use client";
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '85%', label: 'Higher match rate', color: 'purple' },
  { value: '10K+', label: 'Active users', color: 'pink' },
  { value: '5,000+', label: 'Companies', color: 'cyan' },
  { value: '92%', label: 'Satisfaction rate', color: 'purple' },
];

const colorMap: Record<string, string> = {
  purple: 'text-purple-400 shadow-purple-500/70',
  pink: 'text-pink-400 shadow-pink-500/70',
  cyan: 'text-cyan-400 shadow-cyan-500/70',
};

// Animation variant for each card
const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const ResumeMatchStats: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#353537] to-[#1e1e20] text-white flex flex-col items-center justify-center px-6 py-28">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text text-center"
      >
        Trusted by Job Seekers Worldwide
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-lg md:text-xl text-center text-gray-300 max-w-3xl"
      >
        Join thousands of professionals who found their dream jobs using ResumeMatch.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mt-20 w-full px-5">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-black hover:shadow-xl/30 hover:shadow-purple-800 bg-opacity-30 backdrop-blur-md border border-white/10 rounded-3xl p-10 flex flex-col items-center shadow-2xl cursor-default"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.98 }}
          >
            <span
              className={`text-5xl font-extrabold drop-shadow-lg ${colorMap[stat.color]}`}
            >
              {stat.value}
            </span>
            <span className="text-lg text-gray-300 mt-4 text-center">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ResumeMatchStats;
