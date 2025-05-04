"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useRouter } from "next/navigation";
const CallToAction: React.FC = () => {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-br from-black via-neutral-900 to-black text-white px-6 pt-32 md:pt-40 flex flex-col items-center justify-center text-center relative pb-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-transparent bg-clip-text"
      >
        Ready to Find Your Perfect Job Match?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-gray-400 mt-6 text-lg md:text-xl max-w-3xl"
      >
        Upload your resume today and let our AI find the best opportunities for you.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
        onClick={()=>router.push('/resume')}
        className="mt-10 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-white font-semibold py-4 px-10 text-lg md:text-xl rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300"
      >
        Get Started →
      </motion.button>

      {/* Footer Section */}
      <div className="w-full border-t border-white/10 mt-24 pt-10 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-6l mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-pink-500"> <FileText className="text-purple-500 w-8 h-8" /></span>
          <span className="text-lg font-bold">
            <span className="  bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">ResumeMatch</span>
          </span>
        </div>
        <p className="text-center">© 2025 ResumeMatch. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
