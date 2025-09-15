import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: "samuel",
    name: "Samuel Omotola Omomowo",
    role: "Managing Partner",
    email: "apexiumconsultservice@gmail.com",
    phone: "07032270131 / 08139618575",
    practice: "Corporate & Commercial Law, Business Consulting",
    image:
      "https://res.cloudinary.com/dvl2r3bdw/image/upload/v1757605451/WhatsApp_Image_2025-09-07_at_17.45.46_b95c3218_epnwe6.jpg",
  },
  {
    id: "mercy",
    name: "Mercy Sayo Omomowo-Edewi",
    role: "Senior Partner",
    email: "apexiumconsultservice@gmail.com",
    phone: "07032270131 / 08139618575",
    practice: "Litigation, Corporate & Commercial Transactions",
    image:
      "https://res.cloudinary.com/dvl2r3bdw/image/upload/v1757955186/partner_2_esvrpb.jpg",
  },
];

const OurTeam = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B2A44]">
          Meet Our Team
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Professionals dedicated to delivering business and legal solutions
          that drive results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center text-center p-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-[#0B2A44]/20 shadow-md mb-4"
            />

            <h3 className="text-xl font-semibold text-[#0B2A44]">
              {member.name}
            </h3>
            <p className="text-gray-500 mb-3">{member.role}</p>

            <p className="text-gray-600 text-sm">
              <span className="font-semibold text-[#0B2A44]">Email:</span>{" "}
              {member.email}
            </p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold text-[#0B2A44]">Tel.:</span>{" "}
              {member.phone}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              <span className="font-semibold text-[#0B2A44]">
                Practice Area:
              </span>{" "}
              {member.practice}
            </p>

            <Link
              to={`/profile/${member.id}`}
              className="mt-auto bg-[#0B2A44] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#0B2A44]/90 transition"
            >
              View Profile
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
