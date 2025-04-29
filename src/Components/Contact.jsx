import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // You can integrate EmailJS, Formspree, or backend API here
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#0f172a] text-white py-24 px-6 sm:px-10 lg:px-24">
      <motion.h2
        className="text-4xl font-bold text-yellow-400 text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <div className="max-w-3xl mx-auto bg-[#1e293b] rounded-xl shadow-lg p-8">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-blue-400 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#0f172a] border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-400 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#0f172a] border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-400 mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#0f172a] border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
