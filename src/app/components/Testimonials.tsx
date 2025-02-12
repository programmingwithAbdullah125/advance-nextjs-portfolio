"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, XYZ Company",
    feedback: "Abdullah is an incredible developer! His Next.js skills are top-notch, and he delivered our project on time. Highly recommended!"
  },
  {
    name: "Sarah Khan",
    position: "CTO, Tech Corp",
    feedback: "The best frontend developer I’ve worked with! Super clean code and amazing UI/UX skills."
  },
  {
    name: "Ali Raza",
    position: "Manager, Digital Solutions",
    feedback: "Our company needed an advanced e-commerce platform, and Abdullah built something beyond expectations!"
  }
];

export default function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white text-center py-16"
    >
      <h2 className="text-5xl font-bold mb-6 text-blue-400">Testimonials</h2>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-700 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-lg italic text-gray-300">&quot;{testimonial.feedback}&quot;</p>
            <h3 className="text-xl font-semibold mt-4">{testimonial.name}</h3>
            <p className="text-sm text-gray-400">{testimonial.position}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
