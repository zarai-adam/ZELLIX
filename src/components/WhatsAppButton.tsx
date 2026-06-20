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
      className={`inline-flex items-center justify-center gap-2 bg-brand-green text-white px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {text}
      <MessageCircle size={20} />
    </a>
  );
}
