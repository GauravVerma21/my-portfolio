import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [projects, setProjects] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjects((prev) => (prev < 15 ? prev + 1 : 15));
      setExperience((prev) => (prev < 6 ? prev + 1 : 8));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="about">
      <section className="min-h-screen flex flex-col md:flex-row items-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-gray-200 px-6 py-12">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left" data-aos="fade-right">
          <h1 className="text-5xl font-extrabold text-[#ffcc00] tracking-wider mb-6">
            About Me
          </h1>

          <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-300 mb-4 hover:text-[#63dcff] transition duration-300">
            I am a <span className="text-[#38bdf8] hover:text-[#63dcff] transition duration-300">B.Tech Computer Science</span> student at{" "}
            <span className="text-[#ffcc00] hover:text-[#ffdd33] transition duration-300">Prestige Institute of Management and Research, Bhopal</span>, passionate about software development and solving complex problems.
          </p>

          <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-300 mb-4 hover:text-[#ffdd33] transition duration-300">
            As a <span className="text-[#38bdf8] hover:text-[#63dcff] transition duration-300">MERN Stack Developer</span>, I love building scalable and modern web applications.
          </p>

          <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-300 mb-4 hover:text-[#63dcff] transition duration-300">
            I’ve also worked on <span className="text-[#ffcc00] hover:text-[#ffdd33] transition duration-300">5+ freelancing projects</span> for real clients, helping businesses build their online presence with custom websites and apps.
          </p>

          <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-300 mb-4 hover:text-[#ffdd33] transition duration-300">
            Beyond development, I enjoy <span className="text-[#38bdf8] hover:text-[#63dcff] transition duration-300">Data Structures & Algorithms</span> and have a strong curiosity about <span className="text-[#ffcc00] hover:text-[#ffdd33] transition duration-300">Cybersecurity</span>.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center sm:space-x-12 space-y-4 sm:space-y-0 justify-center md:justify-start" data-aos="fade-up">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#ffcc00]">{projects}+</h2>
              <p className="text-lg text-gray-400 hover:text-[#ffdd33] transition duration-300">
                Projects (Including Freelance)
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#38bdf8]">{experience}</h2>
              <p className="text-lg text-gray-400 hover:text-[#63dcff] transition duration-300">
                Months Experience
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="mt-6 inline-block px-6 py-3 text-lg font-semibold bg-[#ffcc00] text-[#0f172a] rounded-full shadow-lg hover:bg-[#ffd700] transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            View My Work
          </a>
        </div>

        {/* Right Side - Tech Icons */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0" data-aos="fade-left">
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 bg-[#1e293b] p-6 rounded-lg shadow-lg">
            <div className="text-5xl text-[#61DBFB] hover:scale-110 transition" aria-label="React">
              <FaReact />
            </div>
            <div className="text-5xl text-[#68A063] hover:scale-110 transition" aria-label="Node.js">
              <FaNodeJs />
            </div>
            <div className="text-5xl text-[#F7DF1E] hover:scale-110 transition" aria-label="JavaScript">
              <FaJs />
            </div>
            <div className="text-5xl text-[#E34F26] hover:scale-110 transition" aria-label="HTML5">
              <FaHtml5 />
            </div>
            <div className="text-5xl text-[#264DE4] hover:scale-110 transition" aria-label="CSS3">
              <FaCss3Alt />
            </div>
            <div className="text-5xl text-[#4DB33D] hover:scale-110 transition" aria-label="MongoDB">
              <SiMongodb />
            </div>
            <div className="text-5xl text-[#06B6D4] hover:scale-110 transition" aria-label="Tailwind CSS">
              <SiTailwindcss />
            </div>
            <div className="text-5xl text-[#181717] hover:scale-110 transition" aria-label="GitHub">
              <FaGithub />
            </div>
            <div className="text-5xl text-[#FFA500] hover:scale-110 transition" aria-label="Database">
              <FaDatabase />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
