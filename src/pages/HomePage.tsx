import Hero from "../components/specific/Hero";
import ServicesGrid from "../components/specific/ServicesGrid";
import ChatWidget from "../components/common/ChatWidget";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Grid Section */}
      <ServicesGrid />

      {/* About Us Summary Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
          Who We Are
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-8">
          We are a professional business support and consultancy firm
          specializing in corporate and legal documentation. We provide seamless
          solutions to help you establish and grow your business in Nigeria.
        </p>
        <div className="text-center">
          <Link
            to="/about"
            className="bg-teal-500 hover:bg-teal-600 transition-colors duration-300 text-white font-semibold py-3 px-8 rounded-full shadow-lg"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Team Profile Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
            Meet Our Managing Partner
          </h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-8 max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            {/* Placeholder for the partner's image */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gray-300 flex-shrink-0 mb-6 md:mb-0" />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800">
                Samuel Omotola Omomowo
              </h3>
              <p className="text-lg text-teal-500 mb-4">Managing Partner</p>
              <p className="text-gray-600 leading-relaxed">
                As a Corporate & Commercial Lawyer and Business Consultant,
                Samuel combines legal expertise with business insight to deliver
                practical solutions that drive growth and ensure compliance.
              </p>
              <div className="mt-4">
                <Link
                  to="/about"
                  className="text-teal-500 hover:underline font-semibold"
                >
                  View Full Profile →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Icon */}
      <ChatWidget />
    </>
  );
};

export default HomePage;
