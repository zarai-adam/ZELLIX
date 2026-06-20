import React, { useState } from "react";
import { MessageCircle, MapPin, Instagram, Facebook } from "lucide-react";
import { WhatsAppButton } from "../components/WhatsAppButton";

// Simple Tiktok Icon
function TikTokIcon({ size = 24 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.5z"></path>
    </svg>
  );
}

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-20 pb-16 px-6 bg-brand-black border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-400">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-gray-400 mb-10 leading-relaxed max-w-md">
              The fastest way to reach us for orders and quotes is via WhatsApp. Or you can drop a message here and we will get back to you shortly.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-900 text-brand-green flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">WhatsApp</h4>
                  <p className="text-gray-400 mb-3">+216 00 000 000</p>
                  <WhatsAppButton text="Message us now" className="py-2 px-4 text-sm" />
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-900 text-brand-green flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Location</h4>
                  <p className="text-gray-400">Sousse, Tunisia</p>
                  <p className="text-sm text-gray-500 mt-2">Pick-up available for local orders, delivery nationwide.</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex items-center gap-4">
                <a href="#" className="w-12 h-12 bg-gray-900 flex items-center justify-center text-white hover:bg-brand-green transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-900 flex items-center justify-center text-white hover:bg-brand-green transition-colors">
                  <TikTokIcon size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-900 flex items-center justify-center text-white hover:bg-brand-green transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-900/50 border border-gray-800 p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            
            {isSubmitted ? (
               <div className="bg-brand-green/10 border border-brand-green p-6 text-center">
                 <h3 className="text-brand-green font-bold text-xl mb-2">Message Sent!</h3>
                 <p className="text-gray-300 mb-6 font-medium">We'll get back to you within 24 hours.</p>
                 <p className="text-sm text-gray-500 mb-4">Want a faster response?</p>
                 <WhatsAppButton className="w-full py-3" />
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone / WhatsApp Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors"
                    placeholder="+216 ..."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={5}
                    className="w-full bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors resize-none"
                    placeholder="Tell us about your project or required parts..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-white text-brand-black font-bold py-4 px-6 hover:bg-gray-200 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
