import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../specific/Header";
import Footer from "../specific/Footer";
import ScrollToTop from "../common/ScrollToTop";
import ChatWidget from "../common/ChatWidget";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  React.useEffect(() => {
    document.title = title;
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute("content", description);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }
  }, [title, description]);

  return (
    <div className="flex flex-col min-h-screen">
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
