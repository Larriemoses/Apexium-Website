import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            title="Apexium Consult & Service - Your Partner in Business & Legal Excellence"
            description="We provide seamless corporate and legal solutions, guiding you through every stage of establishing and growing your business in Nigeria."
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
          >
            <ServicesPage />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout
            title="Contact Us - Apexium Consult & Service"
            description="Contact Apexium Consult & Service for inquiries about corporate and legal documentation. Find our address, phone number, and email."
          >
            <ContactPage />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
