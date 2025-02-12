"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white relative overflow-hidden">
      {/* Glowing Animated Background */}
      <motion.div 
        className="absolute w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 0.4 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Animated Name */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold tracking-wide"
      >
        Hi, I&apos;m <span className="text-blue-400">Abdullah</span>
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-xl mt-4 text-gray-300"
      >
        🚀 Frontend Developer | Next.js Expert | UI/UX Enthusiast
      </motion.p>

      {/* Animated Profile Image */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <Image 
          src="/pPhoto.jpg" // Apni image yahan daalni hai
          alt="Abdullah"
          width={300} 
          height={300} 
          className="rounded-full mt-6 shadow-lg border-4 border-blue-400"
        />
      </motion.div>

      {/* Floating Effect */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 text-gray-300"
      >
        Scroll Down ⬇️
      </motion.div>
    </section>
  );
}
