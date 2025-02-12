"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", percentage: 95 },
  { name: "CSS", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "React.js", percentage: 90 },
  { name: "Next.js", percentage: 88 },
  { name: "Tailwind CSS", percentage: 92 },
];

export default function Skills() {
  return (
    <section id="skills" className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white text-center">
      <h2 className="text-5xl font-bold mb-6 text-blue-400 mt-4">My Skills</h2>
      
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="relative w-full bg-gray-700 rounded-lg p-4 shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-600 rounded-full h-3 overflow-hidden">
              <motion.div 
                className="bg-blue-500 h-3 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${skill.percentage}%` }}
                transition={{ duration: 1.2, delay: index * 0.3 }}
              />
            </div>
            <span className="absolute right-4 top-4 text-sm font-semibold">{skill.percentage}%</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
