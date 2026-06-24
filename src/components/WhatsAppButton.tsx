import React from "react";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  text?: string;
  className?: string;
  message?: string;
}

export function WhatsAppButton({ text = "Order on WhatsApp", className = "", message = "" }: WhatsAppButtonProps) {
  const phoneNumber = "21600000000";
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : "";
  const href = `https://wa.me/${phoneNumber}${encodedMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-brand-green text-brand-black px-6 py-3 font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] hover:bg-[#23B888] hover:shadow-[0_0_20px_rgba(29,158,117,0.3)] hover:text-brand-black ${className}`}
    >
      {text}
      <MessageCircle size={20} />
    </a>
  );
}
