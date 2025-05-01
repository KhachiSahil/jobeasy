'use client';

import { motion } from 'framer-motion';
import { Bolt, Search, Shield } from 'lucide-react';

export default function FeaturesBanner() {
  return (
    <section id="features" className="bg-black text-white py-28 px-6 md:px-24 relative ">
      {/* Glowing Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="w-full h-full bg-cover" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center space-y-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-base px-5 py-1.5 bg-purple-900/50 rounded-full text-purple-300 backdrop-blur-sm shadow">
            Features
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent"
        >
          Why Choose ResumeMatch?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-300 max-w-3xl mx-auto text-xl"
        >
          Our platform uses advanced AI to analyze your resume and match you with the perfect job opportunities.
        </motion.p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {/* Card 1 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-10 text-center shadow-xl hover:shadow-purple-500/30 transition"
        >
          <div className="flex justify-center mb-6">
            <Bolt className="w-14 h-14 text-purple-400 drop-shadow-glow" />
          </div>
          <h3 className="text-2xl font-bold text-purple-400 mb-3">AI-Powered Matching</h3>
          <p className="text-gray-400 text-lg">
            Our advanced algorithms analyze your resume to find the perfect job matches based on your skills and experience.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-10 text-center shadow-xl hover:shadow-pink-500/30 transition"
        >
          <div className="flex justify-center mb-6">
            <Search className="w-14 h-14 text-pink-500 drop-shadow-glow" />
          </div>
          <h3 className="text-2xl font-bold text-pink-500 mb-3">Smart Job Search</h3>
          <p className="text-gray-400 text-lg">
            Discover opportunities you might have missed with our intelligent job search that goes beyond keywords.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-10 text-center shadow-xl hover:shadow-cyan-500/30 transition"
        >
          <div className="flex justify-center mb-6">
            <Shield className="w-14 h-14 text-cyan-400 drop-shadow-glow" />
          </div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">Privacy First</h3>
          <p className="text-gray-400 text-lg">
            Your data is secure with our privacy-focused approach. We never share your information without permission.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
