import React from "react";
import { motion } from "framer-motion";
import {
  FaUserShield,
  FaHandshake,
  FaBullseye,
  FaHeart,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const NAVY = "#0B2A44";

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

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const AboutPage: React.FC = () => {
  return (
    <div className="w-full text-gray-800">
      {/* Hero */}
      <section
        className="relative w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,42,68,0.7), rgba(11,42,68,0.7)), url('https://res.cloudinary.com/dvl2r3bdw/image/upload/v1757609090/19608_1_xin9zd.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full max-w-3xl mx-auto text-center py-16 md:py-24 px-4">
          <motion.h1
            className="text-white text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-gray-200 mt-4 text-base md:text-lg lg:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            Apexium Consult & Service provides business support and consultancy
            focused on corporate and legal documentation — helping entrepreneurs
            and organisations register, comply, and grow with confidence in
            Nigeria.
          </motion.p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto space-y-12 py-12 px-4 md:px-0">
        {/* Who We Are */}
        <motion.section
          className="bg-white rounded-lg shadow p-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          custom={0}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[rgb(11,42,68)] mb-4">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
            Apexium Consult & Service is a professional business support and
            consultancy firm specialising in corporate and legal documentation.
            We help individuals, SMEs, and larger organizations to navigate
            statutory requirements with confidence, especially regarding the
            Corporate Affairs Commission (CAC) and related regulatory bodies.
          </p>
        </motion.section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Our Mission",
              text: "To provide reliable, professional and timely business documentation and registration services that empower entrepreneurs and organizations to operate legally and successfully.",
            },
            {
              title: "Our Vision",
              text: "To become a leading business support and consultancy firm in Nigeria, known for professionalism, integrity and excellence.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="rounded-lg shadow p-6"
              style={{ backgroundColor: NAVY }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={i}
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                {item.text}
              </p>
            </motion.div>
          ))}
        </section>

        {/* Core Values */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          custom={0}
        >
          <h3 className="text-2xl font-semibold text-[rgb(11,42,68)] mb-4 text-center">
            Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-5 flex items-start gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                custom={idx}
              >
                <div className="text-[rgb(11,42,68)] text-3xl">
                  <v.icon />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[rgb(11,42,68)]">
                    {v.title}
                  </h4>
                  <p className="text-gray-600 mt-1 text-sm">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Managing Partner + Contacts */}
        <motion.section
          className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          custom={0}
        >
          <motion.div
            className="flex-shrink-0 flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="https://res.cloudinary.com/dvl2r3bdw/image/upload/v1757605451/WhatsApp_Image_2025-09-07_at_17.45.46_b95c3218_epnwe6.jpg"
              alt="Samuel Omotola Omomowo"
              className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-md"
            />
          </motion.div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-semibold text-gray-800">
                Samuel Omotola Omomowo
              </h4>
              <p className="text-teal-700 mt-1 mb-4">Managing Partner</p>

              <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
                Samuel combines legal expertise with business insight to deliver
                practical solutions that drive growth and ensure compliance. He
                is a Corporate & Commercial Lawyer and Business Consultant,
                advising entrepreneurs, SMEs and larger corporations across
                diverse sectors.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 text-sm">
                <ul className="list-disc pl-5">
                  <li>
                    Corporate & Commercial Transactions (incorporation, M&A)
                  </li>
                  <li>Regulatory Compliance (CAC filings, licensing)</li>
                  <li>Business Consulting & Strategy</li>
                </ul>
                <ul className="list-disc pl-5">
                  <li>Dispute Resolution & Litigation Support</li>
                  <li>Contract Drafting & Negotiation</li>
                  <li>Company Secretarial & Compliance Services</li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-6 border-t pt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-base">
              <div>
                <div className="flex items-center gap-2 text-[rgb(11,42,68)] font-semibold">
                  <FaPhoneAlt /> Phone
                </div>
                <div className="text-gray-700 mt-1">
                  07032270131 / 08139618575
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-[rgb(11,42,68)] font-semibold">
                  <FaEnvelope /> Email
                </div>
                <div className="text-gray-700 mt-1">
                  apexiumconsultservice@gmail.com
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-[rgb(11,42,68)] font-semibold">
                  <FaMapMarkerAlt /> Address
                </div>
                <div className="text-gray-700 mt-1">
                  No 3 Mount Ararat Street, Ijoka Road, Akure
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default AboutPage;
