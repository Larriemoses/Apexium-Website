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
      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <section className="bg-white py-20 w-11/12 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#0B2A44] mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
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
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-[#0B2A44]/10 text-[#0B2A44] rounded-full mx-auto mb-6">
                <service.icon size={28} />
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

      {/* WHO WE ARE */}
      {/* WHO WE ARE */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* IMAGE (hidden on mobile) */}
          <motion.div
            className="hidden md:block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <img
              src="https://res.cloudinary.com/dvl2r3bdw/image/upload/v1757965035/735_jmqsqt.jpg"
              alt="About Apexium Consult"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            className="text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0B2A44]">
              Who We Are
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
              We are a professional business support and consultancy firm
              specializing in corporate and legal documentation. We provide
              seamless solutions to help you establish and grow your business in
              Nigeria.
            </p>
            <Link
              to="/about"
              className="bg-[#0B2A44] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#0B2A44]/90 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 text-center border-t border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#0B2A44]">
          Ready to take your business to the next level?
        </h2>
        <p className="text-gray-600 mb-6">
          Let’s help you with reliable, professional, and timely support today.
        </p>
        <Link
          to="/contact"
          className="bg-[#0B2A44] text-white font-semibold py-3 px-10 rounded-full shadow-md hover:bg-[#0B2A44]/90 transition-colors duration-300"
        >
          Contact Us
        </Link>
      </section>
      <ChatWidget />
    </>
  );
};

export default HomePage;
