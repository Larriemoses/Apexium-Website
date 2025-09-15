import React from "react";
import { motion } from "framer-motion";
import {
  FaUserShield,
  FaHandshake,
  FaBullseye,
  FaHeart,
  FaFlag,
  FaRocket,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const coreValues = [
  {
    icon: FaUserShield,
    title: "Integrity",
    description: "We uphold transparency and honesty in all our dealings.",
  },
  {
    icon: FaHandshake,
    title: "Professionalism",
    description:
      "We deliver services with precision and consistent excellence.",
  },
  {
    icon: FaBullseye,
    title: "Reliability",
    description:
      "Clients rely on us for accurate, timely and practical solutions.",
  },
  {
    icon: FaHeart,
    title: "Client-Centered",
    description: "We prioritize client success and work with pragmatic focus.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutPage: React.FC = () => {
  return (
    <div className="w-full text-gray-800">
      {/* HERO */}
      <motion.section
        className="relative w-full flex items-center justify-center bg-cover bg-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,42,68,0.7), rgba(11,42,68,0.7)), url('https://res.cloudinary.com/dvl2r3bdw/image/upload/v1757609090/19608_1_xin9zd.jpg')",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-3xl mx-auto py-20 px-6">
          <motion.h1
            className="text-white text-4xl md:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-gray-200 text-lg md:text-xl leading-relaxed"
            variants={itemVariants}
          >
            Apexium Consult & Service empowers businesses and entrepreneurs with
            trusted corporate and legal solutions — helping them register,
            comply, and grow with confidence in Nigeria.
          </motion.p>
        </div>
      </motion.section>

      <main className="max-w-6xl mx-auto space-y-16 py-16 px-6 md:px-0">
        {/* WHO WE ARE */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* IMAGE (Hidden on mobile) */}
          <motion.div className="hidden md:block " variants={itemVariants}>
            <img
              src="https://res.cloudinary.com/dvl2r3bdw/image/upload/v1757963777/3d-rendering-classic-interior_buqnow.jpg"
              alt="Who We Are"
              className="w-full h-80 object-cover rounded-xl shadow "
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            className="space-y-4 text-center md:text-left"
            variants={itemVariants}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[rgb(11,42,68)]">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Apexium Consult & Service is a professional business support and
              consultancy firm specialising in corporate and legal
              documentation. We help individuals, SMEs, and larger organizations
              to navigate statutory requirements with confidence, particularly
              in relation to the Corporate Affairs Commission (CAC) and other
              regulatory bodies.
            </p>
          </motion.div>
        </motion.section>

        {/* MISSION & VISION */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {[
            {
              icon: FaFlag,
              title: "Our Mission",
              text: "To provide reliable, professional and timely business documentation and registration services that empower entrepreneurs and organizations to operate legally and successfully.",
            },
            {
              icon: FaRocket,
              title: "Our Vision",
              text: "To become a leading business support and consultancy firm in Nigeria, known for professionalism, integrity and excellence.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-lg p-8 flex flex-col items-center text-center space-y-4"
              variants={itemVariants}
            >
              <item.icon className="text-4xl text-[rgb(11,42,68)]" />
              <h3 className="text-xl font-semibold text-[rgb(11,42,68)]">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.section>

        {/* CORE VALUES */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-semibold text-[rgb(11,42,68)] mb-8 text-center"
            variants={itemVariants}
          >
            Our Core Values
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((v, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow hover:shadow-xl transition p-6 flex flex-col items-center text-center"
                variants={itemVariants}
              >
                <div className="text-[rgb(11,42,68)] text-4xl mb-3">
                  <v.icon />
                </div>
                <h4 className="text-lg font-semibold text-[rgb(11,42,68)] mb-1">
                  {v.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="text-center py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-semibold text-[rgb(11,42,68)] mb-6"
            variants={itemVariants}
          >
            Ready to Work With Us?
          </motion.h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/services"
              className="px-6 py-3 bg-[#0B2A44] text-white rounded-full font-medium shadow hover:bg-[#0B2A44]/90 transition"
            >
              Explore Our Services
            </Link>
            <Link
              to="/our-team"
              className="px-6 py-3 border border-[#0B2A44] text-[#0B2A44] rounded-full font-medium hover:bg-[#0B2A44] hover:text-white transition"
            >
              Meet Our Team
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default AboutPage;
