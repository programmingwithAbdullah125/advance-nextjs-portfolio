"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
      <h2 className="text-5xl font-bold mb-6 text-blue-400">Contact Me</h2>

      {/* Glassmorphism Form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl shadow-lg w-full max-w-lg"
      >
        <div className="mb-4">
          <label className="block text-left text-gray-300 text-sm font-semibold">Your Name</label>
          <input type="text" placeholder="Enter your name" className="w-full p-3 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="mb-4">
          <label className="block text-left text-gray-300 text-sm font-semibold">Your Email</label>
          <input type="email" placeholder="Enter your email" className="w-full p-3 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="mb-4">
          <label className="block text-left text-gray-300 text-sm font-semibold">Your Message</label>
          <textarea placeholder="Type your message..." className="w-full p-3 border rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"></textarea>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-md hover:bg-blue-600 transition"
        >
          Send Message 
        </motion.button>
      </motion.form>
    </section>
  );
}
