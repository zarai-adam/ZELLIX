import React, { useState } from "react";
import { MessageCircle, MapPin, Instagram, Facebook } from "lucide-react";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { motion } from "motion/react";

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
    <div className="flex flex-col min-h-screen bg-brand-black">
      <section className="pt-32 pb-16 px-6 bg-[#0A0F0D] border-b border-gray-900">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">Contact Us</h1>
          <p className="text-xl font-medium tracking-wide text-gray-400">
            Have a project in mind? We'd love to hear from you.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-black mb-8 uppercase tracking-wider">Get in Touch</h2>
            <p className="text-gray-400 font-medium mb-10 leading-relaxed max-w-md">
              The fastest way to reach us for orders and quotes is via WhatsApp. Or you can drop a message here and we will get back to you shortly.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-[#0A0F0D] border border-gray-900 text-brand-green flex items-center justify-center flex-shrink-0 group-hover:border-brand-green transition-colors">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase tracking-wider mb-1">WhatsApp</h4>
                  <p className="text-gray-400 font-medium mb-4">+216 00 000 000</p>
                  <WhatsAppButton text="Message us now" className="py-2 px-5 text-xs inline-flex" />
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-[#0A0F0D] border border-gray-900 text-brand-green flex items-center justify-center flex-shrink-0 group-hover:border-brand-green transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-gray-400 font-medium">Sousse, Tunisia</p>
                  <p className="text-sm text-gray-600 mt-2 font-medium">Pick-up available for local orders, delivery nationwide.</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-black text-gray-500 uppercase tracking-widest mb-4">Network</h4>
              <div className="flex items-center gap-4">
                <a href="#" className="w-12 h-12 bg-[#0A0F0D] border border-gray-900 flex items-center justify-center text-white hover:bg-brand-green hover:border-brand-green transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-[#0A0F0D] border border-gray-900 flex items-center justify-center text-white hover:bg-brand-green hover:border-brand-green transition-colors">
                  <TikTokIcon size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-[#0A0F0D] border border-gray-900 flex items-center justify-center text-white hover:bg-brand-green hover:border-brand-green transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            className="bg-[#0A0F0D] border border-gray-900 p-8 md:p-12 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-3xl rounded-full pointer-events-none"></div>

            <h2 className="text-2xl font-black uppercase tracking-wider mb-8 relative z-10">Network Request</h2>
            
            {isSubmitted ? (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="bg-brand-green/10 border border-brand-green p-8 text-center"
               >
                 <h3 className="text-brand-green font-black uppercase tracking-wider text-xl mb-3">Transmission Sent</h3>
                 <p className="text-white font-medium mb-6">We'll process your request within 24h.</p>
                 <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Initiate Rapid Link</p>
                 <WhatsAppButton className="w-full py-4 text-sm" />
               </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Subject Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-brand-black border border-gray-800 px-5 py-4 text-white placeholder:text-gray-700 font-medium focus:outline-none focus:border-brand-green transition-colors"
                    placeholder="Enter name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Comms Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full bg-brand-black border border-gray-800 px-5 py-4 text-white placeholder:text-gray-700 font-medium focus:outline-none focus:border-brand-green transition-colors"
                    placeholder="+216 ..."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Core Directive</label>
                  <textarea 
                    id="message" 
                    required
                    rows={5}
                    className="w-full bg-brand-black border border-gray-800 px-5 py-4 text-white placeholder:text-gray-700 font-medium focus:outline-none focus:border-brand-green transition-colors resize-none"
                    placeholder="Describe parts, tolerances, or specific geometric requests..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-white text-brand-black font-black uppercase tracking-widest py-4 px-6 hover:bg-brand-green transition-colors hover:text-brand-black hover:shadow-[0_0_15px_rgba(29,158,117,0.3)]"
                >
                  Transmit
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>
    </div>
  );
}

