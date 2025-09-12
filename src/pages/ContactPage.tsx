import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const NAVY = "#0B2A44";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for your message! We will get back to you shortly.");
  };

  return (
    <div className="w-full bg-gray-50 py-10 px-4 md:py-14">
      {/* Page Title */}
      <div className="text-center mb-8">
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
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Form */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
          <form onSubmit={handleSubmit} method="POST" className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 flex items-center gap-2"
                style={{ color: NAVY }}
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2A44] transition"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 flex items-center gap-2"
                style={{ color: NAVY }}
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B2A44] transition"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 flex items-center gap-2"
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
            </div>
            <button
              type="submit"
              className="w-full font-semibold py-3 rounded-lg transition-colors duration-300"
              style={{ backgroundColor: NAVY, color: "white" }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md flex flex-col justify-center text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-6" style={{ color: NAVY }}>
            Contact Details
          </h3>
          <ul className="space-y-6 text-gray-700 text-base">
            <li>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <FaMapMarkerAlt size={18} style={{ color: NAVY }} />
                <span className="text-sm font-semibold" style={{ color: NAVY }}>
                  Address
                </span>
              </div>
              <p>No 3 Mount Ararat Street, Ijoka Road, Akure</p>
            </li>
            <li>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <FaPhone size={18} style={{ color: NAVY }} />
                <span className="text-sm font-semibold" style={{ color: NAVY }}>
                  Phone
                </span>
              </div>
              <p>07032270131 / 08139618575</p>
            </li>
            <li>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <FaEnvelope size={18} style={{ color: NAVY }} />
                <span className="text-sm font-semibold" style={{ color: NAVY }}>
                  Email
                </span>
              </div>
              <p>apexiumconsultservice@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
