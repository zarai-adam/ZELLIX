import React from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const location = useLocation();
  const isContact = location.pathname === "/contact";
  const phoneNumber = "21600000000";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center bg-brand-green text-white border border-[#23B888] transition-all duration-300 hover:scale-105 hover:bg-[#23B888] ${
        isContact ? "opacity-30 scale-75 hover:opacity-100" : "opacity-100 scale-100"
      }`}
      aria-label="Order on WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2} />
    </a>
  );
}
