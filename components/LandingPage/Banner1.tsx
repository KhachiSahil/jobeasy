'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Banner1() {
  return (
    <section className="relative overflow-hidden bg-black text-white min-h-screen flex flex-col justify-center banner">
      {/* Blurred gradient background blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-cyan-400 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-[50%] left-[50%] w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-pink-500 opacity-20 rounded-full blur-[200px]" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-20 py-16 md:py-24 gap-16 md:gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Find Your Perfect Job Match
            </span>
            <br />
            with <span className="text-purple-400">AI-Powered Resume Analysis</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg font-bold max-w-xl mx-auto md:mx-0">
            Upload your resume and let our AI match you with the best job opportunities tailored to your skills and experience.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/resume">
              <button className="bg-purple-600 font-bold text-white px-6 py-3 rounded-full hover:bg-purple-700 transition w-full sm:w-auto">
                Upload Resume →
              </button>
            </Link>
            <Link href="#">
              <button className="border font-bold border-purple-500 px-6 py-3 rounded-full text-white hover:bg-purple-800 transition w-full sm:w-auto">
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-[500px] px-4">
            <Image
              src="/resume.jpg"
              alt="Resume Upload"
              width={600}
              height={350}
              className="rounded-xl shadow-lg rotate-3 hover:rotate-0 transition-transform duration-700 w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
