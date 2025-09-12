// src/components/common/ChatWidget.jsx
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ChatWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/2347032270131"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition transform hover:scale-110"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Email Icon */}
      <a
        href="mailto:apexiumconsultservice@gmail.com"
        className="flex items-center justify-center w-12 h-12 bg-[#0B2A44] hover:bg-[#133a5c] text-white rounded-full shadow-lg transition transform hover:scale-110"
      >
        <FaEnvelope className="text-2xl" />
      </a>
    </div>
  );
};

export default ChatWidget;
