import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#0f172a] to-[#1e293b] text-white pt-20 pb-12 px-8 sm:px-16 lg:px-32">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Brand and Motto */}
        <div>
          <h3 className="text-3xl font-extrabold text-blue-400 mb-4">Gaurav Verma</h3>
          <p className="text-xl text-gray-400 leading-relaxed">
            MERN Stack Developer passionate about building scalable web apps, solving real-world problems, and collaborating on creative projects.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-2xl font-semibold text-yellow-400 mb-4">Quick Links</h4>
          <ul className="space-y-4 text-gray-300">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-blue-400 transition cursor-pointer text-xl"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-blue-400 transition cursor-pointer text-xl"
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-blue-400 transition cursor-pointer text-xl"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-2xl font-semibold text-yellow-400 mb-4">Connect</h4>
          <div className="flex justify-center md:justify-start space-x-8 text-3xl">
            <a
              href="https://www.linkedin.com/in/gauravverma02"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourtwitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-blue-900 mt-12 pt-8 text-center text-xl text-gray-500">
        © {new Date().getFullYear()} Gaurav Verma. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
