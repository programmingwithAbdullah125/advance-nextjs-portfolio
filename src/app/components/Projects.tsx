"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "PWA FragranceHub", link: "https://marketplace-hackathon-six.vercel.app/" },
  { title: "Morent Car Rental", link: "https://milestone-2-hackathon-alpha.vercel.app/" },
  { title: "Color Changer", link: "https://color-changer-nine-chi.vercel.app/" },
  { title: "Profile NextCSS", link: "https://portfolio-css-theta-peach.vercel.app/" },
  { title: "AW Outfits", link: "https://aw-outfits.vercel.app/" },
  { title: "AW Outfits Ecommerce", link: "https://aw-outfits-website.vercel.app/" },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section id="projects" className="h-auto flex flex-col justify-center items-center bg-gray-900 text-white text-center py-16">
      <h2 className="text-5xl font-bold mb-6 text-blue-400 mt-4">Projects</h2>

      {/* IFRAME CONTAINER (Responsive for Mobile & Desktop) */}
      {selectedProject && (
        <div className={`fixed inset-0 bg-gray-900 bg-opacity-90 flex justify-center items-center z-50 ${isMobile ? "w-full h-full" : "w-3/4 h-[500px]"}`}>
          <iframe src={selectedProject} className="w-full h-full rounded-lg border-2 border-blue-500"></iframe>
          <button 
            className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg text-xl"
            onClick={() => setSelectedProject(null)}
          >
            Close ❌
          </button>
        </div>
      )}

      {/* PROJECT LINKS */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-3/4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project, index) => (
          <motion.button 
            key={index} 
            className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform text-xl font-semibold w-full"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedProject(project.link)}
          >
            {project.title}
          </motion.button>
        ))}
      </motion.div>
    </section>
  );
}
