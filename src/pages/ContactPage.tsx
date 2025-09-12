import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const NAVY = "#0B2A44";

/*
  containerVariants: only uses staggerChildren (no easing)
  itemVariants: simple fade + slide with duration only (no `ease` here)
*/
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.44 } }, // duration only — TS safe
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you — we received your message.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      className="w-full bg-gray-50 py-10 px-4 md:py-14"
      initial="hidden"
      whileInView="visible" // play when in view
      viewport={{ once: false, amount: 0.18 }} // replay on scroll
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.div className="text-center mb-8" variants={itemVariants}>
        <h1
          className="text-3xl md:text-5xl font-semibold mb-2"
          style={{ color: NAVY }}
        >
          Contact Us
        </h1>
        <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
          Have questions or need assistance? Send us a message or use the
          contact details below to reach us directly.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Form Card (staggered children) */}
        <motion.div
          className="bg-white p-6 md:p-8 rounded-xl shadow-md"
          variants={itemVariants}
        >
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            variants={containerVariants}
          >
            {/* Each row is a motion.div so staggerChildren works */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
                style={{ color: NAVY }}
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2A44] transition"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                style={{ color: NAVY }}
              >
                Your Email
              </label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2A44] transition"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
                style={{ color: NAVY }}
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2A44] transition"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                className="w-full font-semibold py-3 rounded-lg transition-transform bg-[rgb(11,42,68)] text-white shadow-md"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>

        {/* Contact Info Card */}
        <motion.div
          className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col justify-center text-center md:text-left"
          variants={itemVariants}
        >
          <motion.h3
            className="text-2xl font-semibold mb-6"
            style={{ color: NAVY }}
            variants={itemVariants}
          >
            Contact Details
          </motion.h3>

          <motion.ul
            className="space-y-6 text-gray-700 text-base"
            variants={containerVariants}
          >
            <motion.li
              className="flex items-start md:items-center gap-3"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 text-[rgb(11,42,68)]">
                <FaMapMarkerAlt size={18} />
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: NAVY }}>
                  Address
                </div>
                <div className="text-gray-600">
                  No 3 Mount Ararat Street, Ijoka Road, Akure
                </div>
              </div>
            </motion.li>

            <motion.li
              className="flex items-start md:items-center gap-3"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 text-[rgb(11,42,68)]">
                <FaPhone size={18} />
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: NAVY }}>
                  Phone
                </div>
                <div>
                  <a
                    href="tel:+2347032270131"
                    className="text-gray-600 hover:text-[rgb(11,42,68)] transition relative group inline-block"
                  >
                    07032270131 / 08139618575
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[rgb(11,42,68)] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </div>
              </div>
            </motion.li>

            <motion.li
              className="flex items-start md:items-center gap-3"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 text-[rgb(11,42,68)]">
                <FaEnvelope size={18} />
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: NAVY }}>
                  Email
                </div>
                <div>
                  <a
                    href="mailto:apexiumconsultservice@gmail.com"
                    className="text-gray-600 hover:text-[rgb(11,42,68)] transition relative group inline-block"
                  >
                    apexiumconsultservice@gmail.com
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[rgb(11,42,68)] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </div>
              </div>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
