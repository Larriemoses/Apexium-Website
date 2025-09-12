import { useState } from "react";
import {
  FaFileContract,
  FaClipboardList,
  FaUserTie,
  FaShieldAlt,
  FaLightbulb,
  FaGavel,
} from "react-icons/fa";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

// const NAVY = "#0B2A44";

const fullServicesList = [
  {
    icon: FaFileContract,
    title: "Business & Company Registration",
    short:
      "We handle all aspects of business and company registration with the Corporate Affairs Commission (CAC).",
    details: [
      "Business Name Registration for entrepreneurs and startups.",
      "Incorporation of Limited Liability Companies (LLCs).",
      "Registration of NGOs, Associations, and Cooperatives.",
      "Post-incorporation filings (Change of directors, shareholding, etc.).",
      "Guidance on choosing the right structure for your business.",
    ],
  },
  {
    icon: FaGavel,
    title: "Legal Drafting",
    short:
      "Professional drafting of agreements, contracts, deeds, and corporate resolutions.",
    details: [
      "Employment contracts and HR agreements.",
      "Shareholder agreements and partnership deeds.",
      "Service-level agreements (SLAs).",
      "Corporate resolutions and board documents.",
      "Customized contracts tailored to business needs.",
    ],
  },
  {
    icon: FaClipboardList,
    title: "Business Documentation",
    short:
      "Preparation of essential business documents to ensure efficiency and compliance.",
    details: [
      "Corporate policies and governance documents.",
      "Business constitutions and operational manuals.",
      "Proposals, business profiles, and annual reports.",
      "Company handbooks and compliance guidelines.",
      "Professional presentations for investors and clients.",
    ],
  },
  {
    icon: FaUserTie,
    title: "Advisory & Compliance Support",
    short:
      "Strategic advisory and regulatory support to help you stay compliant.",
    details: [
      "Advisory on Nigerian company law and regulations.",
      "Tax compliance guidance and filings.",
      "CAC annual returns filing support.",
      "Ongoing compliance monitoring.",
      "Corporate restructuring and risk management advice.",
    ],
  },
  {
    icon: FaShieldAlt,
    title: "Dispute Resolution & Litigation Support",
    short:
      "Representation and pragmatic solutions to legal conflicts for individuals and organizations.",
    details: [
      "Alternative Dispute Resolution (ADR).",
      "Pre-litigation advisory and case review.",
      "Representation in mediation and arbitration.",
      "Support for contract disputes and business conflicts.",
      "Litigation support in partnership with legal experts.",
    ],
  },
  {
    icon: FaLightbulb,
    title: "Business Consulting",
    short:
      "Tailored consulting services to achieve operational efficiency and growth.",
    details: [
      "Business strategy and planning.",
      "Process improvement and restructuring.",
      "Market entry and expansion support.",
      "Financial and investment advisory.",
      "Digital transformation and innovation consulting.",
    ],
  },
];

const ServicesPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full text-gray-800">
      {/* HERO SECTION */}
      <section
        className="relative w-full flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,42,68,0.72), rgba(11,42,68,0.62)), url('https://res.cloudinary.com/dvl2r3bdw/image/upload/v1757609090/19608_1_xin9zd.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full max-w-[85%] mx-auto text-center py-12 md:py-16 lg:py-20">
          <h1 className="text-white font-semibold text-3xl md:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="text-gray-200 mt-3 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Professional business support and legal solutions to help you grow
            with confidence.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto"
        >
          At Apexium Consult & Service, we provide a comprehensive suite of
          professional business support and legal solutions designed to empower
          your success.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {fullServicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header Row */}
              <div
                className="flex justify-between items-center p-6 cursor-pointer"
                onClick={() => toggleService(index)}
              >
                <div className="flex items-center">
                  <service.icon className="text-[#0B2A44] mr-3" size={32} />
                  <div>
                    <h2 className="text-lg md:text-xl font-medium text-[#0B2A44]">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-sm">{service.short}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleService(index)}
                  className="ml-4 text-[#0B2A44] hover:text-gray-800 transition"
                >
                  {openIndex === index ? (
                    <Minus size={24} />
                  ) : (
                    <Plus size={24} />
                  )}
                </button>
              </div>

              {/* Expanded Content */}
              <div
                className={`px-6 pb-6 transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base">
                  {service.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
