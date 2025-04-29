import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaGit,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";

// Skill List
const skills = [
  { icon: <FaReact className="text-blue-400 text-5xl" />, name: "React" },
  { icon: <FaNodeJs className="text-green-500 text-5xl" />, name: "Node.js" },
  {
    icon: <SiExpress className="text-gray-300 text-5xl" />,
    name: "Express.js",
  },
  { icon: <SiMongodb className="text-green-400 text-5xl" />, name: "MongoDB" },
  { icon: <FaJs className="text-yellow-400 text-5xl" />, name: "JavaScript" },
  { icon: <FaCss3Alt className="text-blue-500 text-5xl" />, name: "CSS" },
  { icon: <FaHtml5 className="text-orange-500 text-5xl" />, name: "HTML" },
  { icon: <FaGit className="text-red-500 text-5xl" />, name: "Git" },
];

const Skills = () => {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  const startAnimation = () => {
    controls.start({
      x: ["0%", "-100%"],
      transition: { repeat: Infinity, duration: 8, ease: "linear" }, // Increased speed
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <>
      <div id="skills">
        <section id="skills" className="py-16 bg-[#0b132b] text-white">
          {/* Heading */}
          <h2 className="text-center text-4xl font-bold mb-10 text-[#ffcc00]">
            Skills
          </h2>

          {/* Scrolling Container */}
          <div className="relative w-full overflow-hidden">
            {/* Gradient Fade Effect on Edges */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b132b] via-transparent to-[#0b132b] z-10"></div>

            {/* Scrolling Animation */}
            <motion.div
              className="flex space-x-6"
              animate={controls}
              onMouseEnter={() => {
                setIsPaused(true);
                controls.stop(); // Pause on hover
              }}
              onMouseLeave={() => {
                setIsPaused(false);
                startAnimation(); // Resume when hover leaves
              }}
            >
              {[...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center space-y-2 bg-[#1c2541] p-5 rounded-xl shadow-xl mx-3 cursor-pointer transition-transform transform hover:scale-125 hover:bg-[#5bc0eb] hover:text-black"
                  whileHover={{ scale: 1.2, transition: { duration: 0.3 } }} // Hover effect
                >
                  {skill.icon}
                  <span className="text-lg font-semibold">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;