// src/data/team.ts
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  image: string;
  bio: string;
  practiceAreas: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "samuel-omomowo",
    name: "Samuel Omotola Omomowo",
    role: "Managing Partner",
    email: "apexiumconsultservice@gmail.com",
    phone: "+2347032270131",
    image:
      "https://res.cloudinary.com/dvl2r3bdw/image/upload/v1757605451/WhatsApp_Image_2025-09-07_at_17.45.46_b95c3218_epnwe6.jpg",
    bio: "Samuel combines legal expertise with business insight to deliver practical solutions that drive growth and ensure compliance. He advises entrepreneurs, SMEs, and corporations across diverse sectors.",
    practiceAreas: [
      "Corporate & Commercial Transactions",
      "Regulatory Compliance",
      "Business Consulting",
      "Dispute Resolution & Litigation Support",
    ],
  },
  {
    id: "mercy-omomowo",
    name: "Mercy Sayo Omomowo-Edewi",
    role: "Senior Partner",
    email: "apexiumconsultservice@gmail.com",
    phone: "+2348139618575",
    image:
      "https://res.cloudinary.com/dvl2r3bdw/image/upload/v1757955186/partner_2_esvrpb.jpg",
    bio: "Mercy specializes in litigation and corporate transactions, with extensive experience drafting & reviewing agreements and providing business-focused legal solutions.",
    practiceAreas: [
      "Litigation & Dispute Resolution",
      "Corporate Transactions",
      "Contract Drafting & Review",
    ],
  },
];
