import { FaUserShield, FaHandshake, FaBullseye, FaHeart } from "react-icons/fa";

const coreValues = [
  {
    icon: FaUserShield,
    title: "Integrity",
    description: "We uphold transparency and honesty in all our dealings.",
  },
  {
    icon: FaHandshake,
    title: "Professionalism",
    description: "We deliver with precision and excellence.",
  },
  {
    icon: FaBullseye,
    title: "Reliability",
    description: "Clients can depend on us for accurate and timely services.",
  },
  {
    icon: FaHeart,
    title: "Client-Centered",
    description: "We prioritize the success and satisfaction of our clients.",
  },
];

const AboutUsContent = () => {
  return (
    <div className="container mx-auto p-8">
      {/* About Us Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
          About Apexium Consult & Service
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center leading-relaxed">
          Apexium Consult & Service is a professional business support and
          consultancy firm specializing in corporate and legal documentation. We
          provide seamless solutions to individuals, entrepreneurs, and
          organizations seeking to establish and grow their businesses in
          Nigeria. With expertise in regulatory compliance and documentation, we
          assist clients in navigating the complexities of the Corporate Affairs
          Commission (CAC) and other business processes with ease and
          efficiency.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            To provide reliable, professional, and timely business documentation
            and registration services that empower entrepreneurs and
            organizations to operate legally and successfully.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To become a leading business support and consultancy firm in
            Nigeria, known for professionalism, integrity, and excellence.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="text-teal-500 mb-4">
                <value.icon size={48} />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {value.title}
              </h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUsContent;
