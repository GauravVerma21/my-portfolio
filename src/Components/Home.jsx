import React, { useState, useEffect } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Pro from "../assets/Pro.jpg";

const roles = [
  "MERN Stack Developer",
  "Problem Solver",
  "Open Source Contributor",
];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home">
      <section className="min-h-screen pt-24 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between text-left px-6 sm:px-10 lg:px-20 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
        {/* Container for centered content */}
        <div className="container mx-auto px-6">
          <motion.div
            className="flex flex-col-reverse md:flex-row items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Text Section */}
            <div className="w-full md:w-1/2 flex flex-col items-start mt-8 md:mt-0">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Hi, I'm <span className="text-blue-400">Gaurav Verma</span>
              </motion.h1>

              <motion.p
                className="text-blue-300 text-lg sm:text-xl md:text-2xl font-medium mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {roles[roleIndex]}
              </motion.p>

              {/* Short About Paragraph */}
              <motion.p
                className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-6 leading-relaxed font-light max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                I'm a passionate <span className="text-blue-400">MERN Stack Developer</span> who loves solving
                problems with optimized code. I enjoy turning ideas into scalable web applications, and I'm
                always looking for new opportunities to collaborate and grow in the tech world.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="flex space-x-4 justify-start mt-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer px-8 py-4 text-base sm:text-lg bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition duration-300"
                >
                  View Portfolio
                </ScrollLink>
              </motion.div>

              {/* Socials */}
              <motion.div
                className="flex space-x-6 mt-6 justify-center md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <a
                  href="https://www.linkedin.com/in/gauravverma02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-400 hover:text-blue-500 transform hover:scale-110 transition duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://twitter.com/yourtwitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-400 hover:text-blue-500 transform hover:scale-110 transition duration-300"
                >
                  <FaTwitter />
                </a>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              className="w-72 h-72 md:w-96 md:h-96 flex justify-center mt-10 md:mt-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={Pro}
                alt="Gaurav"
                className="w-full h-full rounded-full shadow-2xl border-4 border-blue-500 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
