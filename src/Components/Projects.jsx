import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Spice Hub",
    description:
      "A modern e-commerce website for a masala brand, built with React, Tailwind CSS, and Redux Toolkit. Features product pages, cart, and smooth scroll.",
    link: "#",
  },
  {
    title: "Play School Website",
    description:
      "A colorful, responsive website for a play school with photo galleries, admissions form, and parent testimonials. Designed for engagement and trust.",
    link: "#",
  },
  {
    title: "Coaching Institute Website",
    description:
      "Informational site for a coaching institute with class details, faculty info, and student achievements. Built with clean design and responsive layout.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0f172a] text-white py-24 px-6 sm:px-10 lg:px-24">
      <motion.h2
        className="text-4xl font-bold text-yellow-400 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#1e293b] rounded-xl border border-blue-500 hover:border-yellow-400 shadow-lg p-6 transition-all duration-300 hover:shadow-yellow-300/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">{project.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed tracking-wide mb-6">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
