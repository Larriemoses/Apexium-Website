import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import OurTeam from "./pages/OurTeam";
import ContactPage from "./pages/ContactPage";
import ProfilePreview from "./pages/ProfilePreview"; // ✅ Import this

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            title="Apexium Consult & Services - Your Partner in Business & Legal Excellence"
            description="We provide seamless corporate and legal solutions, guiding you through every stage of establishing and growing your business in Nigeria."
            keywords="Business registration Nigeria, CAC services, legal documentation, business consultancy, compliance support"
          >
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout
            title="About Us - Apexium Consult & Service"
            description="Learn about Apexium Consult & Service, our mission, vision, and core values. Meet our Managing Partner, Samuel Omotola Omomowo."
            keywords="About Apexium, business consultancy Nigeria, legal services, corporate documentation"
          >
            <AboutPage />
          </Layout>
        }
      />
      <Route
        path="/services"
        element={
          <Layout
            title="Our Services - Apexium Consult & Service"
            description="Explore the full range of business and legal services offered by Apexium Consult & Service, from company registration to legal drafting."
            keywords="CAC registration, legal drafting Nigeria, business documentation, advisory services, corporate governance"
          >
            <ServicesPage />
          </Layout>
        }
      />
      <Route
        path="/our-team"
        element={
          <Layout
            title="Our Team - Apexium Consult & Services"
            description="Meet the experienced team at Apexium Consult & Services, delivering professional business and legal solutions in Nigeria."
            keywords="Apexium team, legal consultants, business consultants, corporate lawyers, Nigeria"
          >
            <OurTeam />
          </Layout>
        }
      />

      {/* ✅ This was missing */}
      <Route
        path="/profile/:id"
        element={
          <Layout
            title="Profile - Apexium Consult & Services"
            description="View the profile of a team member at Apexium Consult & Services."
            keywords="Apexium team profile, legal consultants, business consultants, corporate lawyers, Nigeria"
          >
            <ProfilePreview />
          </Layout>
        }
      />

      <Route
        path="/contact"
        element={
          <Layout
            title="Contact Us - Apexium Consult & Service"
            description="Contact Apexium Consult & Service for inquiries about corporate and legal documentation. Find our address, phone number, and email."
            keywords="Contact Apexium, Apexium phone number, Apexium email, Apexium office Akure"
          >
            <ContactPage />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
