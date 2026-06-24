import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Target, ShieldCheck, Box, Truck } from "lucide-react";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { ProductCard } from "../components/ProductCard";
import { productsData } from "../data/products";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const AbstractMorph = ({ progress }: { progress: any }) => {
  const topLayerY = useTransform(progress, [0, 0.4], [-80, -26]);
  const middleLayerY = useTransform(progress, [0, 0.4], [0, 0]);
  const bottomLayerY = useTransform(progress, [0, 0.4], [80, 26]);
  
  const opacityAbstract = useTransform(progress, [0.3, 0.45], [1, 0]);
  const opacityLogo = useTransform(progress, [0.4, 0.5], [0, 1]);

  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      <motion.div className="absolute inset-0 flex flex-col items-center justify-center gap-6" style={{ opacity: opacityAbstract }}>
         <motion.div style={{ y: topLayerY }} className="w-24 h-4 bg-brand-green/20 border border-brand-green absolute" />
         <motion.div style={{ y: middleLayerY }} className="w-32 h-6 border-2 border-brand-green absolute" />
         <motion.div style={{ y: bottomLayerY }} className="w-20 h-4 bg-brand-green/20 border border-brand-green absolute" />
         <motion.div className="absolute w-px h-full bg-brand-green/50" />
         <motion.div className="absolute h-px w-full bg-brand-green/30" />
      </motion.div>
      <motion.div className="absolute inset-0 flex flex-col items-center justify-center" style={{ opacity: opacityLogo }}>
         {/* Big Logo Icon Replica */}
         <div className="w-24 h-24 grid grid-cols-2 grid-rows-2 gap-1 bg-[#1D9E75] shadow-[0_0_40px_rgba(29,158,117,0.3)]">
            <div className="bg-[#1D9E75] w-full h-full"></div>
            <div className="bg-[#0A0A0A] w-full h-full"></div>
            <div className="bg-[#0A0A0A] w-full h-full"></div>
            <div className="bg-[#0A0A0A] w-full h-full"></div>
         </div>
         <div className="mt-6 text-2xl font-black text-white tracking-[0.3em] uppercase">Zellix</div>
      </motion.div>
    </div>
  )
}

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  const xGrid = useSpring((mousePos.x - window.innerWidth / 2) * -0.04, { stiffness: 400, damping: 90 });
  const yGrid = useSpring((mousePos.y - window.innerHeight / 2) * -0.04, { stiffness: 400, damping: 90 });

  const scaleIcon = useTransform(scrollYProgress, [0, 0.4, 0.6], [0.8, 1, 0.8]);
  const yIcon = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const opacityIcon = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);

  return (
    <div ref={ref} className="h-[250vh] bg-brand-black relative w-full">
       <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          <motion.div 
            className="absolute -inset-[20%] opacity-10 bg-[linear-gradient(to_right,#1D9E75_1px,transparent_1px),linear-gradient(to_bottom,#1D9E75_1px,transparent_1px)] bg-[size:64px_64px] z-0 pointer-events-none mix-blend-screen"
            style={{ x: xGrid, y: yGrid }}
          />

          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 pt-24 pb-6"
          >
             <h1 className="text-[clamp(40px,9vw,84px)] font-black tracking-tighter text-white leading-[0.9] text-center uppercase">
               One Idea.<br/>
               <span className="text-brand-green">24 Hours.</span><br/>
               Your Hands.
             </h1>
             <p className="mt-6 text-gray-400 text-[clamp(14px,2vw,20px)] tracking-widest uppercase font-bold max-w-2xl text-center">
               Custom 3D Printing Studio in Sousse 🇹🇳
             </p>
             <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto mb-6 relative z-40">
               <WhatsAppButton className="text-lg px-8 py-5 w-full sm:w-auto" text="Order on WhatsApp" />
               <Link
                 to="/products"
                 className="w-full sm:w-auto flex items-center justify-center gap-3 border border-white text-white px-8 py-5 font-bold transition-all hover:bg-white hover:text-brand-black uppercase text-sm tracking-widest"
               >
                 View Catalog
                 <ArrowRight size={18} />
               </Link>
             </div>
             
             <motion.div className="relative z-50 pointer-events-none" style={{ scale: scaleIcon, y: yIcon, opacity: opacityIcon }}>
                 <AbstractMorph progress={scrollYProgress} />
             </motion.div>
          </motion.div>
       </div>
    </div>
  )
}

const TheRevealSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.4, 0.5], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.65, 0.75], [0, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);

  const y1 = useTransform(scrollYProgress, [0, 0.25], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.5], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.75], [50, -50]);
  const y4 = useTransform(scrollYProgress, [0.75, 1], [50, 0]);

  // Line snapping
  const lineGap = useTransform(scrollYProgress, [0.8, 0.9], [0, 40]);
  const lineWidth = useTransform(scrollYProgress, [0.75, 0.85], [0, 300]);
  const logoOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

  return (
    <div ref={ref} className="h-[400vh] bg-[#0A0A0A] relative w-full z-10 border-t border-gray-900 border-b">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <motion.div className="absolute inset-0 flex items-center justify-center p-8 text-center" style={{ opacity: opacity1, y: y1 }}>
          <h2 className="text-[clamp(32px,5vw,72px)] font-black tracking-tighter text-gray-300 uppercase">Every ZELLIX piece ships unfinished.</h2>
        </motion.div>

        <motion.div className="absolute inset-0 flex items-center justify-center p-8 text-center" style={{ opacity: opacity2, y: y2 }}>
          <h2 className="text-[clamp(32px,5vw,72px)] font-black tracking-tighter text-gray-300 uppercase">You make the final cut.</h2>
        </motion.div>

        <motion.div className="absolute inset-0 flex items-center justify-center p-8 text-center" style={{ opacity: opacity3, y: y3 }}>
          <h2 className="text-[clamp(32px,5vw,72px)] font-black tracking-tighter text-gray-300 uppercase">That's the experience.</h2>
        </motion.div>

        <motion.div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center" style={{ opacity: opacity4, y: y4 }}>
          {/* Snapping Line */}
          <div className="relative h-2 w-full max-w-xs mb-10 flex justify-center items-center">
            <motion.div style={{ width: lineWidth }} className="h-px bg-white/30 absolute flex justify-between shadow-[0_0_15px_rgba(29,158,117,0.5)]">
              <motion.div className="h-px bg-brand-green w-1/2" style={{ x: useTransform(lineGap, g => -g) }} />
              <motion.div className="h-px bg-brand-green w-1/2" style={{ x: lineGap }} />
            </motion.div>
          </div>
          
          <h2 className="text-[clamp(40px,7vw,100px)] font-black tracking-tighter text-white uppercase leading-[0.9]">
            Not finished.<br/>
            <span className="text-brand-green">Yours to reveal.</span>
          </h2>
          <motion.p style={{ opacity: logoOpacity }} className="mt-8 text-lg md:text-2xl font-bold text-gray-400 tracking-wider">
           ماهيش كاملة اما انت الي باش تكملها.
          </motion.p>
        </motion.div>

      </div>
    </div>
  )
}

const HorizontalShowcase = () => {
   const featuredProducts = productsData.filter(p => p.featured).slice(0, 4);

   return (
     <section className="py-32 px-6 bg-[#0A0F0D] relative overflow-hidden border-b border-gray-900 border-t">
       <motion.div 
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         className="max-w-7xl mx-auto mb-16 px-6"
       >
         <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Featured Prints</h2>
         <p className="text-gray-400 font-medium tracking-wide mt-4 uppercase text-sm">Engineered in our studio</p>
       </motion.div>

       <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 px-6 md:px-12 pb-12 w-full no-scrollbar scroll-smooth">
         {featuredProducts.map((p, i) => (
           <motion.div 
             key={p.id} 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ delay: i * 0.1 }}
             className="snap-center shrink-0 w-[85vw] max-w-[450px]"
           >
             <ProductCard product={p} />
           </motion.div>
         ))}
       </div>
       <div className="max-w-7xl mx-auto px-6 mt-8 flex justify-center">
          <Link to="/products" className="text-brand-green font-bold tracking-widest uppercase hover:text-white transition-colors inline-flex items-center gap-3 text-sm pb-1 border-b border-brand-green hover:border-white">
            Explore Full Catalog <ArrowRight size={18} />
          </Link>
       </div>
     </section>
   )
}


export function Home() {
  // Value Props parallax
  const refValueProps = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYValues } = useScroll({
    target: refValueProps,
    offset: ["start end", "end start"]
  });
  const yCol1 = useTransform(scrollYValues, [0, 1], [30, -30]);
  const yCol2 = useTransform(scrollYValues, [0, 1], [60, -60]);
  const yCol3 = useTransform(scrollYValues, [0, 1], [90, -90]);
  const yCol4 = useTransform(scrollYValues, [0, 1], [120, -120]);

  return (
    <div className="flex flex-col min-h-screen bg-brand-black">
      
      <HeroSection />

      {/* HOW IT WORKS SECTION */}
      <section className="border-b border-gray-900 bg-[#0A0F0D] py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase">The Process</h2>
            <p className="text-gray-400 text-lg tracking-widest uppercase font-bold max-w-2xl mx-auto">
              Engineered for velocity and structural precision.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="flex flex-col items-center text-center p-8 border border-gray-900 bg-brand-black hover:border-brand-green/30 transition-colors group"
            >
              <div className="w-20 h-20 mb-8 flex items-center justify-center border border-brand-green text-brand-green bg-brand-green/5 group-hover:bg-brand-green/10 transition-colors">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wider">1. Transmit Idea</h3>
              <p className="text-gray-400 font-medium leading-relaxed">
                Send a sketch, photo, or 3D file on WhatsApp. We analyze topology instantly.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center text-center p-8 border border-gray-900 bg-brand-black hover:border-brand-green/30 transition-colors group"
            >
              <div className="w-20 h-20 mb-8 flex items-center justify-center border border-brand-green bg-brand-green/10 text-brand-green group-hover:bg-brand-green/20 transition-colors">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wider">2. Rapid Quote</h3>
              <p className="text-gray-400 font-medium leading-relaxed">
                We lock in exact dimensions, cost, and logistics timeline with no hidden fees.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center p-8 border border-brand-green bg-brand-green text-brand-black"
            >
              <div className="w-20 h-20 mb-8 flex items-center justify-center border border-brand-black bg-brand-black text-brand-green">
                <Box size={32} />
              </div>
              <h3 className="text-2xl font-black text-brand-black mb-4 uppercase tracking-wider">3. Deployed</h3>
              <p className="font-bold text-gray-800 leading-relaxed">
                Fabricated to exact specs and shipped via national express within 24-48 hours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <TheRevealSection />

      <HorizontalShowcase />

      {/* VALUE PROPS */}
      <section ref={refValueProps} className="bg-brand-black relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-gray-900 border-l border-r border-transparent lg:border-gray-900 relative z-10 my-12">
          
          <motion.div className="overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              style={{ y: yCol1 }} className="p-12 lg:p-16 hover:bg-gray-900/40 transition-colors h-full"
            >
              <Zap className="text-brand-green mb-8" size={36} />
              <h4 className="text-xl font-black mb-4 uppercase tracking-wider text-white">Velocity</h4>
              <p className="text-gray-400 leading-relaxed font-medium">Turnarounds that respect your momentum. Built in 24h.</p>
            </motion.div>
          </motion.div>
          
          <motion.div className="overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              style={{ y: yCol2 }} className="p-12 lg:p-16 hover:bg-gray-900/40 transition-colors border-t md:border-t-0 md:border-l lg:border-l-0 border-gray-900 h-full"
            >
              <Target className="text-brand-green mb-8" size={36} />
              <h4 className="text-xl font-black mb-4 uppercase tracking-wider text-white">Unrestricted</h4>
              <p className="text-gray-400 leading-relaxed font-medium">Custom dimensions adapted directly to your precise spec.</p>
            </motion.div>
          </motion.div>
          
          <motion.div className="overflow-hidden">
             <motion.div 
               initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
               style={{ y: yCol3 }} className="p-12 lg:p-16 hover:bg-gray-900/40 transition-colors border-t lg:border-t-0 border-gray-900 h-full"
             >
               <Truck className="text-brand-green mb-8" size={36} />
               <h4 className="text-xl font-black mb-4 uppercase tracking-wider text-white">Logistics</h4>
               <p className="text-gray-400 leading-relaxed font-medium">Packaged securely and shipped express to your door.</p>
             </motion.div>
          </motion.div>
          
          <motion.div className="overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              style={{ y: yCol4 }} className="p-12 lg:p-16 hover:bg-gray-900/40 transition-colors border-t lg:border-t-0 md:border-l border-gray-900 h-full"
            >
              <ShieldCheck className="text-brand-green mb-8" size={36} />
              <h4 className="text-xl font-black mb-4 uppercase tracking-wider text-white">Accessible</h4>
              <p className="text-gray-400 leading-relaxed font-medium">Industrial-grade quality manufacturing made locally affordable.</p>
            </motion.div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
