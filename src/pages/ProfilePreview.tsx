import { useParams, Link } from "react-router-dom";

const teamProfiles: Record<string, any> = {
  samuel: {
    name: "Samuel Omotola Omomowo",
    role: "Managing Partner",
    email: "apexiumconsultservice@gmail.com",
    // phone: "07032270131 / 08139618575",
    practice:
      "Corporate & Commercial Transactions, Regulatory Compliance, Business Consulting, Dispute Resolution & Litigation Support",
    bio: `As Managing Partner at Apexium Consult & Services Ltd, Samuel combines legal expertise with business insight to deliver practical solutions that drive growth and ensure compliance. He is a Corporate & Commercial Lawyer and Business Consultant with hands-on experience advising entrepreneurs, SMEs, and corporations across diverse sectors. He is passionate about empowering businesses with innovative legal and corporate services, bridging the gap between law and enterprise, and helping organizations operate with confidence in Nigeria’s dynamic business environment.`,
    experience: [
      "Lead the firm’s legal and business consulting practice with a client-centered approach.",
      "Advise on corporate governance, compliance, and risk management strategies.",
      "Draft, review, and negotiate commercial agreements and corporate documents.",
      "Oversee company secretarial services and CAC-related transactions (incorporation, restructuring, filings).",
      "Provide litigation and dispute resolution support tailored to business realities.",
      "Deliver corporate training and advisory sessions on compliance, business structuring, and regulatory issues.",
    ],
    skills: [
      "Corporate & Commercial Law",
      "Business Advisory & Consulting",
      "Litigation & Dispute Resolution",
      "Regulatory Compliance & Risk Management",
      "Contract Drafting & Negotiation",
      "Company Secretarial Services",
      "CAC Registration & Accreditation",
      "Corporate Governance",
      "Mergers & Acquisitions (M&A)",
      "Business Structuring & Expansion",
    ],
    image:
      "https://res.cloudinary.com/dvl2r3bdw/image/upload/v1757605451/WhatsApp_Image_2025-09-07_at_17.45.46_b95c3218_epnwe6.jpg",
  },
  mercy: {
    name: "Mercy Sayo Omomowo-Edewi",
    role: "Senior Partner",
    email: "apexiumconsultservice@gmail.com",
    // phone: "07032270131 / 08139618575",
    practice: "Litigation, Corporate & Commercial Transactions",
    bio: "She specializes in litigation, corporate and commercial transactions, with extensive experience in drafting and reviewing agreements. She provides legal support to businesses and companies across various sectors.",
    image:
      "https://res.cloudinary.com/dvl2r3bdw/image/upload/v1757955186/partner_2_esvrpb.jpg",
  },
  priye: {
    name: "Priye Ajama",
    role: "Associate Counsel",
    email: "apexiumconsultservice@gmail.com",
    // phone: "07032270131 / 08139618575",
    practice:
      "General Litigation, Corporate Governance & Compliance, Property Law, Dispute Resolution",
    bio: `Priye Ajama holds a Bachelor of Laws (LL.B) from Igbinedion University, Okada, and a Barrister-at-Law (B.L) from the Nigerian Law School, where she graduated with First Class Honours. Her practice areas span general litigation, corporate governance and compliance, property law, and dispute resolution.`,
    experience: [
      "Provided legal advisory services, drafted and reviewed contracts, and managed corporate secretarial functions.",
      "Represented over 150 clients in litigation within her first year of practice.",
      "Authored 100+ legal briefs in the past year, significantly contributing to client successes.",
      "Contributed to major corporate commercial transactions, advancing business objectives while ensuring compliance.",
      "Successfully registered 50+ businesses with the Corporate Affairs Commission (CAC).",
    ],
    skills: [
      "General Litigation & Legal Advocacy",
      "Corporate Governance & Compliance",
      "Property & Real Estate Law",
      "Regulatory Compliance & Risk Management",
      "Contract Drafting & Review",
      "Dispute Resolution & Mediation",
      "Corporate Secretarial Services",
      "Business Registration with CAC",
      "Legal Brief Writing",
      "Strategic Legal Advisory",
    ],
    image:
      "http://res.cloudinary.com/dvl2r3bdw/image/upload/v1758407358/WhatsApp_Image_2025-09-20_at_09.29.04_ecc5d90e_or5wka.jpg",
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
        {/* Left: Sticky Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full max-w-md h-auto object-cover rounded-lg md:sticky md:top-24"
          />
        </div>

        {/* Right: Scrollable Content */}
        <div className="flex flex-col justify-start md:max-h-[80vh] md:overflow-y-auto pr-2">
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
            {/* <p className="text-gray-700">
              <span className="font-semibold text-[#0B2A44]">Tel.:</span>{" "}
              <a href={`tel:${profile.phone}`} className="hover:underline">
                {profile.phone}
              </a>
            </p> */}
            {profile.practice && (
              <p className="text-gray-700">
                <span className="font-semibold text-[#0B2A44]">
                  Practice Area:
                </span>{" "}
                {profile.practice}
              </p>
            )}
          </div>

          {/* Bio */}
          <p className="text-gray-600 leading-relaxed mt-6 text-sm md:text-base">
            {profile.bio}
          </p>

          {/* Experience Section */}
          {profile.experience && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#0B2A44] mb-3">
                Experience
              </h3>
              <ol className="list-decimal list-outside pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                {profile.experience.map((exp: string, i: number) => (
                  <li key={i} className="leading-relaxed">
                    {exp}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Skills Section */}
          {profile.skills && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#0B2A44] mb-3">
                Skills & Expertise
              </h3>
              <ul className="list-disc list-outside pl-6 space-y-1 text-gray-700 text-sm md:text-base">
                {profile.skills.map((skill: string, i: number) => (
                  <li key={i} className="leading-relaxed">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Link
            to="/our-team"
            className="mt-10 inline-block bg-[#0B2A44] text-white px-6 py-2 rounded-full hover:bg-[#0B2A44]/90 transition text-sm md:text-base"
          >
            ← Back to Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProfilePreview;
