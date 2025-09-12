import {
  FaFileContract,
  FaRegHandshake,
  FaUserTie,
  FaClipboardList,
  FaCertificate,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const servicesPreview = [
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

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-gray-50 w-11/12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B2A44] mb-4">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We provide seamless solutions to individuals, entrepreneurs, and
          organizations seeking to establish and grow their businesses in
          Nigeria.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesPreview.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0B2A44]/10 to-[#0B2A44]/20 text-[#0B2A44] rounded-full mx-auto mb-6 shadow-sm">
              <service.icon size={30} />
            </div>
            <h3 className="text-xl font-semibold text-[#0B2A44] mb-3 text-center">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-14 text-center">
        <Link to="/services">
          <button className="bg-[#0B2A44] hover:bg-[#0B2A44]/90 transition-colors duration-300 text-white font-semibold py-3 px-10 rounded-full shadow-md hover:shadow-xl">
            Learn More About All Services
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesGrid;
