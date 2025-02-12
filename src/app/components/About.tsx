"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex flex-col justify-center items-center bg-gray-700 text-white text-center"
    >
      <h2 className="text-5xl font-bold mb-4 text-blue-400">About Me</h2>

      <motion.div
        initial={{ scale: 0.8, rotateY: 180 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{ duration: 1.2 }}
        className="relative group"
      >
        <Image
          src="/pPhoto.jpg"
          alt="About Me"
          width={300}
          height={200}
          className="rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-500"
        />
      </motion.div>

      <p className="w-3/4 text-lg mt-4 text-gray-300">
        I&apos;m Abdullah, a passionate Frontend Developer skilled in Next.js, React, and Tailwind CSS.
        I create stunning web experiences with high-end animations & futuristic UI designs.
      </p>
    </motion.section>
  );
}
