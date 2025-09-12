import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import {
  FaFileContract,
  FaRegHandshake,
  FaUserTie,
  FaClipboardList,
  FaCertificate,
  FaShieldAlt,
} from "react-icons/fa";
import ChatWidget from "../components/common/ChatWidget";
import Hero from "../components/specific/Hero";

// const NAVY = "#0B2A44";

// Safe, typed variants (NO function-valued variants — avoids TS errors)
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const services = [
  {
    icon: FaFileContract,
    title: "CAC Incorporation",
    description:
      "Seamless business and company registration with the Corporate Affairs Commission (CAC).",
  },
  {
    icon: FaRegHandshake,
    title: "Legal Drafting",
    description:
      "Expert drafting of agreements, contracts, deeds, and corporate resolutions.",
  },
  {
    icon: FaUserTie,
    title: "Business Proposals",
    description:
      "Crafting professional business proposals and other business documents.",
  },
  {
    icon: FaClipboardList,
    title: "Advisory & Support",
    description:
      "Professional auditing and advisory support for businesses and organizations.",
  },
  {
    icon: FaCertificate,
    title: "Compliance Certificates",
    description:
      "Assistance with securing compliance certificates and licenses.",
  },
  {
    icon: FaShieldAlt,
    title: "Litigation & Dispute Resolution",
    description:
      "Providing clients with strong representation and pragmatic solutions to legal conflicts.",
  },
];

const HomePage: React.FC = () => {
  return (
    <>
      {/* Keep your Hero component untouched as requested */}
      <Hero />

      {/* Services Section (white background) */}
      <section className="bg-white py-20 w-11/12 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#0B2A44] mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            variants={fadeUp}
            transition={{ delay: 0 }}
          >
            Our Services
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            variants={fadeUp}
            transition={{ delay: 0.08 }}
          >
            We provide seamless solutions to individuals, entrepreneurs, and
            organizations seeking to establish and grow their businesses in
            Nigeria.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUp}
              // Use per-item transition prop to stagger. This avoids function-valued variants.
              transition={{
                delay: index * 0.12,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#0B2A44]/10 text-[#0B2A44] rounded-full mx-auto mb-6 shadow-sm">
                <service.icon size={30} />
              </div>
              <h3 className="text-xl font-semibold text-[#0B2A44] mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/services"
            className="bg-[#0B2A44] text-white font-semibold py-3 px-10 rounded-full shadow-md hover:bg-[#0B2A44]/90 transition-colors duration-300"
          >
            Learn More About All Services
          </Link>
        </div>
      </section>

      {/* Who We Are (light background) */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-[#0B2A44]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          variants={fadeUp}
          transition={{ delay: 0 }}
        >
          Who We Are
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl max-w-4xl mx-auto mb-10 leading-relaxed text-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          variants={fadeUp}
          transition={{ delay: 0.06 }}
        >
          We are a professional business support and consultancy firm
          specializing in corporate and legal documentation. We provide seamless
          solutions to help you establish and grow your business in Nigeria.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          variants={fadeUp}
          transition={{ delay: 0.12 }}
        >
          <Link
            to="/about"
            className="bg-[#0B2A44] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#0B2A44]/90 transition-all duration-300"
          >
            Learn More About Us
          </Link>
        </motion.div>
      </section>

      {/* Managing Partner */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#0B2A44]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            variants={fadeUp}
            transition={{ delay: 0 }}
          >
            Meet Our Managing Partner
          </motion.h2>

          <motion.div
            className="flex flex-col md:flex-row items-center md:space-x-10 max-w-5xl mx-auto border border-gray-200 p-8 rounded-2xl shadow-xl bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.08 }}
          >
            <motion.img
              src="https://res.cloudinary.com/dvl2r3bdw/image/upload/v1757605451/WhatsApp_Image_2025-09-07_at_17.45.46_b95c3218_epnwe6.jpg"
              alt="Samuel Omotola Omomowo"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover flex-shrink-0 mb-6 md:mb-0 border-4 border-[#0B2A44]/20 shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />

            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B2A44]">
                Samuel Omotola Omomowo
              </h3>
              <p className="text-lg text-gray-500 mb-4">Managing Partner</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a Corporate & Commercial Lawyer and Business Consultant,
                Samuel combines legal expertise with business insight to deliver
                practical solutions that drive growth and ensure compliance.
              </p>
              <Link
                to="/about"
                className="bg-[#0B2A44] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-[#0B2A44]/90 transition-all duration-300"
              >
                View Full Profile →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Chat Icon */}
      <ChatWidget />
    </>
  );
};

export default HomePage;
