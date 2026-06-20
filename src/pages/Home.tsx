import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Target, ShieldCheck, Box, Truck } from "lucide-react";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { ProductCard } from "../components/ProductCard";
import { productsData } from "../data/products";
import { motion, useScroll, useTransform } from "motion/react";

export function Home() {
  const featuredProducts = productsData.filter(p => p.featured).slice(0, 4);
  const { scrollY } = useScroll();

  // -------------------------
  // Parallax Values
  // -------------------------
  // Hero section parallax
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const yText = useTransform(scrollY, [0, 800], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0]);
  const xTypography = useTransform(scrollY, [0, 1500], [0, -300]);

  // How it works section parallax
  const refHowItWorks = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYWorks } = useScroll({
    target: refHowItWorks,
    offset: ["start end", "end start"]
  });
  // Moves the image relative to the scroll progress
  const yImg = useTransform(scrollYWorks, [0, 1], [-150, 150]);
  const yStep1 = useTransform(scrollYWorks, [0, 1], [30, -30]);
  const yStep2 = useTransform(scrollYWorks, [0, 1], [0, 0]);
  const yStep3 = useTransform(scrollYWorks, [0, 1], [-30, 30]);

  // Featured Work parity/marquee
  const refFeatured = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYFeatured } = useScroll({
    target: refFeatured,
    offset: ["start end", "end start"]
  });
  const xMarquee = useTransform(scrollYFeatured, [0, 1], [150, -350]);

  // Value Props parallax
  const refValueProps = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYValues } = useScroll({
    target: refValueProps,
    offset: ["start end", "end start"]
  });
  const yCol1 = useTransform(scrollYValues, [0, 1], [20, -20]);
  const yCol2 = useTransform(scrollYValues, [0, 1], [40, -40]);
  const yCol3 = useTransform(scrollYValues, [0, 1], [60, -60]);
  const yCol4 = useTransform(scrollYValues, [0, 1], [80, -80]);
  const yValueBg = useTransform(scrollYValues, [0, 1], [-150, 150]);

  return (
    <div className="flex flex-col min-h-screen bg-brand-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden border-b border-gray-900 pt-20">
        
        {/* Background Parallax Image */}
        <motion.div
          className="absolute inset-x-0 -inset-y-[20%] z-0 origin-center"
          style={{ y: yBg }}
        >
          <img 
            src="https://images.unsplash.com/photo-1629854499696-6d63df477eb3?auto=format&fit=crop&q=80&w=1920" 
            alt="3D printing tech background" 
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-lighten"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/80 to-brand-black"></div>
        </motion.div>

        {/* Background Parallax Grid */}
        <motion.div
          className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]"
          style={{ y: yBg }}
        />

        {/* Background Parallax Typography */}
        <motion.div
          className="absolute top-[25%] left-0 whitespace-nowrap text-[22vw] font-bold text-gray-900/40 select-none z-0 tracking-tighter"
          style={{ x: xTypography }}
        >
          ZELLIX STUDIO 3D
        </motion.div>

        {/* Hero Main Content */}
        <motion.div
          className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8"
          style={{ y: yText, opacity: opacityText }}
        >
          <div className="lg:col-span-8 flex flex-col items-start justify-center gap-8">
            <div className="inline-flex items-center gap-3 border border-brand-green bg-brand-green/10 text-brand-green px-4 py-2 font-bold text-xs uppercase tracking-widest">
              <div className="w-2 h-2 bg-brand-green"></div>
              Sousse, Tunisia 🇹🇳
            </div>
            
            <h1 className="text-[3.5rem] leading-[1.1] sm:text-7xl lg:text-8xl xl:text-[7rem] font-bold tracking-tighter xl:leading-[0.88] text-white">
              ONE IDEA.<br />
              <span className="text-brand-green">24 HOURS.</span><br />
              YOUR HANDS.
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-xl font-medium tracking-wide">
              Turn your digital concepts into physical reality with precision FDM and Resin manufacturing. We build the unbuildable.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2 w-full sm:w-auto">
              {/* Inherits styling from WhatsAppButton but applies width changes via className */}
              <WhatsAppButton className="text-lg px-8 py-5 sm:flex-none justify-center w-full sm:w-auto" text="Order on WhatsApp" />
              <Link
                to="/products"
                className="sm:flex-none w-full sm:w-auto flex items-center justify-center gap-3 border border-white text-white px-8 py-5 font-bold transition-all hover:bg-white hover:text-brand-black uppercase text-sm tracking-widest"
              >
                View Catalog
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          
          {/* Decorative Tech Graphic on Desktop */}
          <div className="hidden lg:flex lg:col-span-4 border border-gray-800 bg-brand-black/80 backdrop-blur-md p-8 flex-col justify-between relative overflow-hidden group min-h-[400px]">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-green/10 blur-3xl group-hover:bg-brand-green/20 transition-all duration-700 pointer-events-none"></div>
            
            <div className="flex justify-between items-start text-brand-green relative z-10">
              <Box size={56} strokeWidth={1} />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-green animate-pulse"></div>
                <span className="text-xs font-bold tracking-widest uppercase">sys.ready</span>
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-gray-500 font-bold tracking-widest text-sm mb-4 uppercase">Core Specs // 01</h3>
              <div className="space-y-4">
                <div className="border-t border-gray-800 pt-3 flex justify-between items-end">
                  <span className="text-gray-400 text-xs font-bold tracking-widest uppercase">Print Medium</span>
                  <span className="text-white font-bold tracking-wide">PLA / PETG / TPU</span>
                </div>
                <div className="border-t border-gray-800 pt-3 flex justify-between items-end">
                  <span className="text-gray-400 text-xs font-bold tracking-widest uppercase">Tolerance</span>
                  <span className="text-white font-bold tracking-wide">± 0.2mm</span>
                </div>
                <div className="border-t border-gray-800 pt-3 flex justify-between items-end">
                  <span className="text-gray-400 text-xs font-bold tracking-widest uppercase">Throughput</span>
                  <span className="text-brand-green font-bold tracking-wide">24/7 Operations</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. HOW IT WORKS SECTION (Solid Grid + Parallax Split) */}
      <section ref={refHowItWorks} className="border-b border-gray-900 bg-brand-black overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Side: Solid Data Grid */}
          <div className="flex flex-col relative z-20 bg-brand-black overflow-hidden">
            
            {/* Parallax Background Text */}
            <motion.div 
              className="absolute top-[20%] -left-[5%] text-[15vw] font-bold text-gray-900/10 whitespace-nowrap z-0 pointer-events-none select-none tracking-tighter"
              style={{ y: useTransform(scrollYWorks, [0, 1], [150, -150]) }}
            >
              PROCESS FLOW
            </motion.div>

            <div className="p-10 lg:p-20 border-b border-gray-900 relative z-10">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-6 uppercase">The Process</h2>
              <p className="text-gray-400 text-lg md:text-xl tracking-wide max-w-md leading-relaxed">
                From concept to delivery. Engineered for maximum velocity and architectural precision.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 relative z-10">
              {/* Step 1 */}
              <div className="p-10 lg:p-16 border-b md:border-b-0 md:border-r lg:border-r-0 lg:border-b border-gray-900 group hover:bg-gray-900/30 transition-colors">
                <motion.div style={{ y: yStep1 }}>
                  <div className="w-16 h-16 border border-brand-green text-brand-green flex items-center justify-center mb-8 bg-brand-green/5">
                    <Target size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">1. Transmit Idea</h3>
                  <p className="text-gray-400 leading-relaxed font-medium">
                    Share a sketch, photo, or 3D file directly via WhatsApp. We analyze feasibility and topology instantly.
                  </p>
                </motion.div>
              </div>
              
              {/* Step 2 */}
              <div className="p-10 lg:p-16 border-b md:border-b-0 border-gray-900 group hover:bg-gray-900/30 transition-colors">
                <motion.div style={{ y: yStep2 }}>
                  <div className="w-16 h-16 border border-brand-green bg-brand-green/10 text-brand-green flex items-center justify-center mb-8">
                    <Zap size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">2. Rapid Quote</h3>
                  <p className="text-gray-400 leading-relaxed font-medium">
                    We confirm parameters, raw material cost, and precise timeline. No hidden configurations or fees.
                  </p>
                </motion.div>
              </div>

              {/* Step 3 */}
              <div className="p-10 lg:p-16 border-b lg:border-b-0 border-gray-900 bg-brand-green text-brand-black group">
                <motion.div style={{ y: yStep3 }}>
                  <div className="w-16 h-16 bg-brand-black text-brand-green flex items-center justify-center mb-8">
                    <Box size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-black mb-4 uppercase tracking-widest">3. Deployed</h3>
                  <p className="text-gray-800 leading-relaxed font-medium">
                    Approved projects are sliced, printed, and dispatched nationwide securely within 24-48 hours.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Side: Parallax Image Panel */}
          <div className="relative h-[600px] lg:h-auto border-t lg:border-t-0 lg:border-l border-gray-900 bg-gray-950 overflow-hidden">
            <motion.img
              src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=1200"
              alt="Industrial 3D printer nozzle working"
              className="absolute inset-0 w-full h-[140%] -top-[20%] origin-center object-cover grayscale opacity-40 mix-blend-screen"
              style={{ y: yImg }}
            />
            {/* Grid overlay over the image */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000040_1px,transparent_1px),linear-gradient(to_bottom,#00000040_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none"></div>
            
            {/* Overlay Tracking UI Decals */}
            <div className="absolute bottom-10 right-10 flex gap-2 z-10">
              <div className="w-8 h-8 border border-gray-600 flex items-center justify-center">
                <div className="w-1 h-1 bg-gray-600"></div>
              </div>
              <div className="w-8 h-8 bg-brand-green flex items-center justify-center">
                <div className="w-1 h-1 bg-brand-black"></div>
              </div>
            </div>
            <div className="absolute top-10 left-10 p-2 border border-gray-800 bg-brand-black/80 backdrop-blur-sm z-10 inline-flex items-center gap-4">
               <span className="text-gray-500 font-mono text-xs font-bold">LIVESTREAM.OFF</span>
               <div className="w-2 h-2 rounded-full border border-gray-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS (Grid with Parallax Marquee) */}
      <section ref={refFeatured} className="py-24 px-6 bg-brand-black border-b border-gray-900 relative overflow-hidden">
         {/* Background Parallax Marquee text */}
         <motion.div 
           className="absolute top-32 left-0 whitespace-nowrap text-[18vw] font-bold text-gray-900/30 select-none pointer-events-none tracking-tight"
           style={{ x: xMarquee }}
         >
           RECENT BUILDS — RECENT BUILDS — 
         </motion.div>
         
         <div className="max-w-7xl mx-auto relative z-10">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
             <div className="max-w-2xl">
               <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter uppercase text-white">Featured Work</h2>
               <p className="text-gray-400 text-lg tracking-wide">A selection of popular rapid prints and complex custom geometric requests engineered by our studio.</p>
             </div>
             <Link to="/products" className="text-brand-green font-bold tracking-widest uppercase hover:text-white transition-colors inline-flex items-center gap-3 text-sm pb-1">
               Explore Full Catalog <ArrowRight size={18} />
             </Link>
           </div>
           
           {/* Products Grid Matrix */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-900 bg-gray-900 gap-px">
             {/* The gap-px and bg-gray-900 act to form a sharp 1px grid between cards */}
             {featuredProducts.map((product) => (
               <div key={product.id} className="bg-brand-black w-full h-full">
                 <ProductCard product={product} />
               </div>
             ))}
           </div>
         </div>
      </section>

      {/* 4. VALUE PROPS (Strict Structural Grid) */}
      <section ref={refValueProps} className="bg-brand-black border-b border-gray-900 relative overflow-hidden">
        
        {/* Parallax background graphic */}
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03] pointer-events-none z-0"
          style={{ y: yValueBg }}
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-gray-900 border-l border-r border-transparent lg:border-gray-900 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.0 }}
            className="p-12 lg:p-16 hover:bg-gray-900/40 transition-colors"
          >
            <motion.div style={{ y: yCol1 }}>
              <Zap className="text-brand-green mb-8" size={36} />
              <h4 className="text-xl font-bold mb-4 uppercase tracking-wider text-white">Velocity</h4>
              <p className="text-gray-400 leading-relaxed font-medium">Turnarounds that respect your momentum. Most standard operations execute in 24h.</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-12 lg:p-16 hover:bg-gray-900/40 transition-colors border-t md:border-t-0 md:border-l lg:border-l-0 border-gray-900"
          >
            <motion.div style={{ y: yCol2 }}>
              <Target className="text-brand-green mb-8" size={36} />
              <h4 className="text-xl font-bold mb-4 uppercase tracking-wider text-white">Unrestricted</h4>
              <p className="text-gray-400 leading-relaxed font-medium">Precision custom dimensions. We adapt the geometry directly to your exact spec.</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-12 lg:p-16 hover:bg-gray-900/40 transition-colors border-t lg:border-t-0 border-gray-900"
          >
             <motion.div style={{ y: yCol3 }}>
               <Truck className="text-brand-green mb-8" size={36} />
               <h4 className="text-xl font-bold mb-4 uppercase tracking-wider text-white">Logistics</h4>
               <p className="text-gray-400 leading-relaxed font-medium">National reach. We package securely and ship via express right to your door.</p>
             </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-12 lg:p-16 hover:bg-gray-900/40 transition-colors border-t lg:border-t-0 md:border-l border-gray-900"
          >
            <motion.div style={{ y: yCol4 }}>
              <ShieldCheck className="text-brand-green mb-8" size={36} />
              <h4 className="text-xl font-bold mb-4 uppercase tracking-wider text-white">Accessible</h4>
              <p className="text-gray-400 leading-relaxed font-medium">Industrial-grade quality manufacturing made locally affordable without hidden fees.</p>
            </motion.div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
