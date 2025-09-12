import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0B2A44] to-[#081C2E] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="https://res.cloudinary.com/dvl2r3bdw/image/upload/v1757606113/WhatsApp_Image_2025-09-06_at_23.37.09_70e673d7_ip3isc.jpg"
            alt="Apexium Logo"
            className="h-14 mb-4"
          />
          <h3 className="font-semibold text-lg mb-2">
            Apexium Consult & Services Ltd
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            Professional business support and consultancy firm specializing in
            corporate and legal documentation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg mb-4 text-center md:text-left">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.to}
                  className="hover:text-white hover:pl-2 transition-all duration-300 block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg mb-4 text-center md:text-left">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "Business & Company Registration",
              "Legal Drafting",
              "Business Documentation",
              "Advisory & Compliance",
              "Dispute Resolution",
            ].map((service, idx) => (
              <li key={idx}>
                <span className="hover:text-white hover:pl-2 transition-all duration-300 block cursor-pointer">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg mb-4 text-center md:text-left">
            Contact
          </h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex flex-col items-center md:items-start">
              <span className="flex items-center mb-1">
                <FaMapMarkerAlt className="mr-2 text-teal-400" />
                <span className="font-medium">Address</span>
              </span>
              <p>No 3 Mount Ararat Street, Ijoka Road, Akure</p>
            </li>
            <li className="flex flex-col items-center md:items-start">
              <span className="flex items-center mb-1">
                <FaPhone className="mr-2 text-teal-400" />
                <span className="font-medium">Phone</span>
              </span>
              <a
                href="tel:+2347032270131"
                className="hover:text-white transition-colors"
              >
                07032270131 / 08139618575
              </a>
            </li>
            <li className="flex flex-col items-center md:items-start">
              <span className="flex items-center mb-1">
                <FaEnvelope className="mr-2 text-teal-400" />
                <span className="font-medium">Email</span>
              </span>
              <a
                href="mailto:apexiumconsultservice@gmail.com"
                className="hover:text-white transition-colors"
              >
                apexiumconsultservice@gmail.com
              </a>
            </li>
            <li className="flex flex-col items-center md:items-start">
              <span className="flex items-center mb-1">
                <FaLinkedin className="mr-2 text-teal-400" />
                <span className="font-medium">LinkedIn</span>
              </span>
              <a
                href="https://www.linkedin.com/in/samuel-omomowo-2a5bb1126/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Samuel Omomowo
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-400 mt-12 border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} Apexium Consult & Services Ltd. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
