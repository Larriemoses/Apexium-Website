import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../specific/Header";
import Footer from "../specific/Footer";
import ScrollToTop from "../common/ScrollToTop";
import ChatWidget from "../common/ChatWidget";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  keywords,
}) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}

        {/* Open Graph Meta */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Apexium Consult & Service" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Meta */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <ScrollToTop />
      <Header />

      {/* Apply header padding only on non-home pages */}
      <main className={`flex-grow ${isHome ? "" : "pt-10 md:pt-20"}`}>
        {children}
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Layout;
