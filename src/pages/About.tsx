import React from "react";
import { PenTool, Target, Layers, Settings, Send } from "lucide-react";

export function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-16 px-6 bg-brand-black text-center border-b border-gray-900">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-400">
            Ancient craft. Modern layer. From Sousse to the entire country.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-white mb-4">The ZELLIX Story</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                We believe in combining the traditional Tunisian spirit of craftsmanship with modern additive manufacturing. Founded in the coastal city of Sousse, ZELLIX 3D was born from a simple idea: making custom manufacturing accessible to everyone.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                Whether you need a bespoke gift, a missing spare part for a household appliance, or rapid prototyping for a new invention, we are here to bridge the gap between digital design and physical reality, layer by layer.
              </p>
              <div className="pt-6 border-t border-gray-900">
                <p className="text-xl font-bold text-brand-green tracking-wider text-right">
                  صناعة تونسية بلمسة عصرية
                </p>
              </div>
            </div>
            
            <div className="flex-1 w-full relative">
              <div className="aspect-[4/3] bg-gray-900 border border-gray-800 relative">
                <img 
                  src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800" 
                  alt="3D Printer working" 
                  className="w-full h-full object-cover grayscale opacity-80"
                />
                {/* Decorative elements */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-brand-green"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-brand-green"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 px-6 bg-black border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-400">How we bring your ideas to life.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <ProcessStep 
              number="01" 
              icon={<Target size={24} />} 
              title="Assess" 
              desc="We review your idea, measure requirements, and quote."
            />
            <ProcessStep 
              number="02" 
              icon={<PenTool size={24} />} 
              title="Design" 
              desc="If needed, we CAD model your part precisely."
            />
            <ProcessStep 
              number="03" 
              icon={<Layers size={24} />} 
              title="Print" 
              desc="Layer-by-layer manufacturing using durable materials."
            />
            <ProcessStep 
              number="04" 
              icon={<Settings size={24} />} 
              title="Finish" 
              desc="Post-processing, support removal, and quality check."
            />
            <ProcessStep 
              number="05" 
              icon={<Send size={24} />} 
              title="Deliver" 
              desc="Securely packaged and shipped to your door."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ProcessStep({ number, icon, title, desc }: { number: string, icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-start p-6 border border-gray-900 bg-brand-black relative">
      <span className="absolute top-4 right-4 text-4xl font-bold text-gray-800 opacity-50">{number}</span>
      <div className="w-12 h-12 bg-gray-900 text-brand-green flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}
