import { useParams, Link } from "react-router-dom";

const teamProfiles: Record<string, any> = {
  samuel: {
    name: "Samuel Omotola Omomowo",
    role: "Managing Partner",
    email: "apexiumconsultservice@gmail.com",
    phone: "07032270131 / 08139618575",
    practice: "Corporate & Commercial Law, Business Consulting",
    bio: "As a Corporate & Commercial Lawyer and Business Consultant, Samuel combines legal expertise with business insight to deliver practical solutions that drive growth and ensure compliance.",
    image:
      "https://res.cloudinary.com/dvl2r3bdw/image/upload/v1757605451/WhatsApp_Image_2025-09-07_at_17.45.46_b95c3218_epnwe6.jpg",
  },
  mercy: {
    name: "Mercy Sayo Omomowo-Edewi",
    role: "Senior Partner",
    email: "apexiumconsultservice@gmail.com",
    phone: "07032270131 / 08139618575",
    practice: "Litigation, Corporate & Commercial Transactions",
    bio: "She specializes in litigation, corporate and commercial transactions, with extensive experience in drafting and reviewing agreements. She provides legal support to businesses and companies across various sectors.",
    image:
      "https://res.cloudinary.com/dvl2r3bdw/image/upload/v1757955186/partner_2_esvrpb.jpg",
  },
};

const ProfilePreview = () => {
  const { id } = useParams<{ id: string }>();
  const profile = teamProfiles[id || ""];

  if (!profile) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <p className="text-lg text-gray-600 mb-4">Profile not found.</p>
        <Link
          to="/our-team"
          className="bg-[#0B2A44] text-white px-6 py-2 rounded-full hover:bg-[#0B2A44]/90 transition"
        >
          Back to Our Team
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Full Image */}
        <div className="flex justify-center">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full max-w-md h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right: Profile Details */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B2A44] mb-2">
            {profile.name}
          </h2>
          <p className="text-base md:text-lg text-gray-500 mb-6">
            {profile.role}
          </p>

          <div className="space-y-3 text-sm md:text-base">
            <p className="text-gray-700">
              <span className="font-semibold text-[#0B2A44]">Email:</span>{" "}
              <a href={`mailto:${profile.email}`} className="hover:underline">
                {profile.email}
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-[#0B2A44]">Tel.:</span>{" "}
              <a href={`tel:${profile.phone}`} className="hover:underline">
                {profile.phone}
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-[#0B2A44]">
                Practice Area:
              </span>{" "}
              {profile.practice}
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed mt-6 text-sm md:text-base">
            {profile.bio}
          </p>

          <Link
            to="/our-team"
            className="mt-8 inline-block bg-[#0B2A44] text-white px-6 py-2 rounded-full hover:bg-[#0B2A44]/90 transition text-sm md:text-base"
          >
            ← Back to Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProfilePreview;
