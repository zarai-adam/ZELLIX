import React from "react";
import { PenTool, Target, Layers, Settings, Send } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-black">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-[#0A0F0D] text-center border-b border-gray-900">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">About Us</h1>
          <p className="text-xl font-medium tracking-wide text-gray-400">
            Ancient craft. Modern layer. From Sousse to the entire country.
          </p>
        </motion.div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-6 border-b border-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8"
            >
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">The ZELLIX Story</h2>
              <div className="space-y-6">
                <p className="text-gray-400 font-medium leading-relaxed text-lg">
                  We believe in combining the traditional Tunisian spirit of craftsmanship with modern additive manufacturing. Founded in the coastal city of Sousse, ZELLIX 3D was born from a simple idea: making custom manufacturing accessible to everyone.
                </p>
                <p className="text-gray-400 font-medium leading-relaxed text-lg">
                  Whether you need a bespoke gift, a missing spare part for a household appliance, or rapid prototyping for a new invention, we elevate the raw material. Layer by layer.
                </p>
              </div>
              <div className="pt-8 border-t border-gray-900">
                <p className="text-xl font-bold text-brand-green tracking-wider text-right">
                  صناعة تونسية بلمسة عصرية
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 w-full relative group"
            >
              <div className="aspect-[4/3] bg-[#0A0F0D] border border-gray-900 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800" 
                  alt="3D Printer working" 
                  className="w-full h-full object-cover opacity-50 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
                />
                {/* Decorative tech layer */}
                <div className="absolute inset-0 bg-brand-green/5 group-hover:bg-brand-green/10 transition-colors"></div>
                <div className="absolute top-4 left-4 border-l-2 border-t-2 border-brand-green w-8 h-8 opacity-50"></div>
                <div className="absolute bottom-4 right-4 border-r-2 border-b-2 border-brand-green w-8 h-8 opacity-50"></div>
                <div className="absolute top-4 right-4 text-[10px] font-bold text-brand-green uppercase tracking-widest opacity-50">
                  Core Sys
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 px-6 bg-[#0A0A0A] relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Our Methodology</h2>
            <p className="text-sm font-bold tracking-widest uppercase text-gray-500">How we forge your designs.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
            <ProcessStep 
              delay={0}
              number="01" 
              icon={<Target size={24} />} 
              title="Assess" 
              desc="We review parameters."
            />
            <ProcessStep 
              delay={0.1}
              number="02" 
              icon={<PenTool size={24} />} 
              title="Design" 
              desc="CAD drafting & modeling."
            />
            <ProcessStep 
              delay={0.2}
              number="03" 
              icon={<Layers size={24} />} 
              title="Print" 
              desc="Layer-by-layer fusion."
            />
            <ProcessStep 
              delay={0.3}
              number="04" 
              icon={<Settings size={24} />} 
              title="Finish" 
              desc="Support removal ops."
            />
            <ProcessStep 
              delay={0.4}
              number="05" 
              icon={<Send size={24} />} 
              title="Deliver" 
              desc="Securely shipped."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ProcessStep({ number, icon, title, desc, delay }: { number: string, icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex flex-col items-start p-8 border border-gray-900 bg-[#0A0F0D] relative group hover:border-brand-green/30 transition-colors"
    >
      <span className="absolute top-4 right-4 text-4xl font-black text-gray-900/50 uppercase">{number}</span>
      <div className="w-12 h-12 border border-brand-green bg-brand-green/5 text-brand-green flex items-center justify-center mb-6 group-hover:bg-brand-green/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-black uppercase tracking-wide mb-2">{title}</h3>
      <p className="text-xs font-medium uppercase tracking-widest text-gray-500 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
