import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dvl2r3bdw/image/upload/v1757609090/19608_1_xin9zd.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2A44]/90 to-[#0B2A44]/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full ">
        {/* Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl  text-white uppercase  mb-3">
          Apexium Consult & Service
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-normal mb-6 max-w-3xl">
          We are a professional business support and consultancy firm
          specializing in corporate and legal documentation. From company
          registration to compliance and advisory, we provide seamless solutions
          that empower individuals, entrepreneurs, and organizations to
          establish and grow their businesses in Nigeria with confidence.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/services"
            className="px-6 py-3 bg-white text-[#0B2A44] rounded-2xl font-medium shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 border border-white text-white rounded-2xl font-medium hover:bg-white hover:text-[#0B2A44] hover:scale-105 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
