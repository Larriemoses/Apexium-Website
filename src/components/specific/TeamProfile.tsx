import { useState } from "react";

const teamProfiles = [
  {
    id: "samuel",
    name: "Samuel Omotola Omomowo",
    role: "Managing Partner",
    image:
      "https://res.cloudinary.com/dvl2r3bdw/image/upload/v1757605451/WhatsApp_Image_2025-09-07_at_17.45.46_b95c3218_epnwe6.jpg",
    summary: `As Managing Partner at Apexium Consult & Services Ltd, Samuel combines legal expertise with business insight to deliver practical solutions that drive growth and ensure compliance. He is a Corporate & Commercial Lawyer and Business Consultant, with hands-on experience advising entrepreneurs, SMEs, and established corporations across diverse sectors.`,
    highlights: [
      "Corporate & Commercial Transactions – company incorporation, restructuring, M&A, shareholder agreements, and due diligence.",
      "Regulatory Compliance – guiding businesses through CAC filings, tax registrations, licensing, and statutory obligations.",
      "Business Consulting – strategic advisory services tailored to help organizations achieve operational efficiency and growth.",
      "Dispute Resolution & Litigation Support – providing clients with strong representation and pragmatic solutions to legal conflicts.",
    ],
  },
  {
    id: "priye",
    name: "Priye Ajama",
    role: "Associate Counsel",
    image:
      "http://res.cloudinary.com/dvl2r3bdw/image/upload/v1758407358/WhatsApp_Image_2025-09-20_at_09.29.04_ecc5d90e_or5wka.jpg",
    summary: `Priye Ajama holds a Bachelor of Laws (LL.B) from Igbinedion University, Okada, and a Barrister-at-Law (B.L) from the Nigerian Law School, where she graduated with First Class Honours. Her practice areas span general litigation, corporate governance and compliance, property law, and dispute resolution.`,
    highlights: [
      "Provided legal advisory services, drafted and reviewed contracts, and managed corporate secretarial functions.",
      "Represented over 150 clients in litigation within her first year of practice.",
      "Authored 100+ legal briefs in the past year, significantly contributing to client successes.",
      "Contributed to major corporate commercial transactions, advancing business objectives while ensuring compliance.",
      "Successfully registered 50+ businesses with the Corporate Affairs Commission.",
    ],
  },
];

const TeamProfile = () => {
  const [selected, setSelected] = useState("samuel");
  const profile = teamProfiles.find((p) => p.id === selected);

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Sticky Photo */}
          <div className="sticky top-24 flex justify-center">
            <img
              src={profile?.image}
              alt={profile?.name}
              className="w-60 h-72 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right: Profile Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              {profile?.name}
            </h3>
            <p className="text-lg text-teal-600 mb-4">{profile?.role}</p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {profile?.summary}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 marker:text-[#0B2A44]">
              {profile?.highlights.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>

            {/* Profile Selector */}
            <div className="flex gap-4 mt-8">
              {teamProfiles.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelected(p.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selected === p.id
                      ? "bg-[#0B2A44] text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {p.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamProfile;
