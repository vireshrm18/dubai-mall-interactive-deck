import { useEffect, useRef } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Stats from "./components/Stats";
import ExperienceGrid from "./components/ExperienceGrid";
import CTASection from "./components/CTASection";
import VideoFrame from "./components/VideoFrame";
import AnimatedShowcase from "./components/AnimatedShowcase";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <main ref={containerRef} className="relative bg-black text-white font-sans selection:bg-accent selection:text-black overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left shadow-[0_0_15px_rgba(197,160,89,0.8)]"
        style={{ scaleX }}
      />

      <Navigation />
      
      {/* Cinematic Hero */}
      <Hero />

      {/* Overview / Stats */}
      <Section id="overview" className="relative z-10">
        <div className="max-w-7xl mx-auto w-full relative">
          <motion.div 
             className="absolute -top-[20%] -left-[10%] w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"
             animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            >
              <motion.h2 
                initial={{ opacity: 0, letterSpacing: "0px" }}
                whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="text-accent uppercase font-semibold text-xs mb-6"
              >
                Legacy & Ambition
              </motion.h2>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/50">
                A Landmark <br />
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="italic text-accent inline-block"
                >
                  Beyond Retail.
                </motion.span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.3 }}
              className="pb-2"
            >
              <p className="text-white/60 text-lg leading-relaxed max-w-md border-l-2 border-accent/50 pl-8 hover:border-accent transition-colors duration-500">
                With over 1.1 million square meters of luxury and lifestyle space, 
                Dubai Mall is the beating heart of the world's most dynamic city.
              </p>
            </motion.div>
          </div>
          <Stats />
        </div>
      </Section>

      {/* AI Animated Experience Showcase */}
      <AnimatedShowcase />

      {/* Retail & Luxury */}
      <Section id="retail" className="bg-gradient-to-b from-black via-secondary to-black relative">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-2xl"
            >
              <h2 className="text-accent uppercase tracking-[0.3em] font-semibold text-xs mb-4">
                The Luxury Ecosystem
              </h2>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                Where Prestige <br /> Meets <motion.span 
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-accent italic inline-block"
                >Performance.</motion.span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed hover:text-white/80 transition-colors duration-300">
                Home to the world's largest collection of luxury brands, Fashion Avenue offers 
                an unparalleled environment for flagship positioning and high-net-worth engagement.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 2, boxShadow: "0 0 30px rgba(197,160,89,0.3)" }}
              className="p-10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl rounded-3xl border border-white/10 cursor-pointer"
            >
              <p className="text-4xl font-display font-bold text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-yellow-200">98%</p>
              <p className="text-[10px] uppercase tracking-widest text-white/50 mt-2 font-bold">Occupancy Rate</p>
            </motion.div>
          </div>
          <ExperienceGrid />
        </div>
      </Section>

      {/* Parallax Image Section */}
      <section className="relative h-[80vh] w-full overflow-hidden group">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 w-full h-[140%] -top-[20%]"
        >
          <img 
            src="/assets/burj.png" 
            className="w-full h-full object-cover brightness-50 group-hover:brightness-75 transition-all duration-1000 scale-110 group-hover:scale-100"
            alt="Dubai Mall View"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black flex items-center justify-center text-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-4xl glass-card p-12 md:p-16 border-white/10 bg-black/40"
          >
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-6 tracking-tighter">
              Unrivaled <span className="italic text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-white">Visibility.</span>
            </h2>
            <p className="text-white/80 text-xl md:text-2xl font-light">Adjacent to the Burj Khalifa, attracting global eyes 24/7.</p>
          </motion.div>
        </div>
      </section>

      {/* Attractions & Entertainment */}
      <Section id="entertainment" className="bg-black relative">
        <motion.div 
          className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"
          animate={{ x: [-50, 50, -50], y: [-50, 50, -50] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-accent uppercase tracking-[0.3em] font-semibold text-xs mb-6">
                Limitless Engagement
              </h2>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">
                Entertainment <br /> As A <motion.span 
                  animate={{ color: ["#fff", "#C5A059", "#fff"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="italic"
                >Magnet.</motion.span>
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="space-y-4 group cursor-pointer"
                >
                  <div className="overflow-hidden rounded-2xl relative">
                    <img src="/assets/aquarium.png" className="w-full h-56 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt="Aquarium" />
                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                  </div>
                  <h4 className="font-bold text-lg group-hover:text-accent transition-colors">The Aquarium</h4>
                  <p className="text-sm text-white/50 leading-relaxed">A global landmark driving millions of footfalls daily.</p>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="space-y-4 group cursor-pointer"
                >
                  <div className="overflow-hidden rounded-2xl relative">
                    <img src="/assets/vr.png" className="w-full h-56 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt="VR Park" />
                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                  </div>
                  <h4 className="font-bold text-lg group-hover:text-accent transition-colors">VR Park</h4>
                  <p className="text-sm text-white/50 leading-relaxed">Cutting-edge digital entertainment for the next generation.</p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring" }}
              className="lg:pl-12"
            >
               <VideoFrame 
                src="https://assets.mixkit.co/videos/preview/mixkit-city-traffic-at-night-from-above-34442-large.mp4"
                category="Entertainment"
                title="The VR Experience"
                subtitle="Position your brand alongside the world's most advanced digital attractions."
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Events & Platform */}
      <Section id="events" className="bg-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-accent uppercase tracking-[0.4em] font-semibold text-xs mb-6 inline-block relative">
              The Global Stage
              <motion.span 
                className="absolute -bottom-2 left-0 h-[1px] bg-accent"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </h2>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter">
              Where Brands <br /><motion.span 
                initial={{ filter: "blur(8px)", opacity: 0 }}
                whileInView={{ filter: "blur(0px)", opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="italic text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent via-yellow-200 to-accent"
              >Make History.</motion.span>
            </h1>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Grand Atrium Activations", img: "/assets/luxury.png", desc: "The center of global product launches." },
              { title: "Waterfront Shows", img: "/assets/dining.png", desc: "Immersive fountain-side brand storytelling." },
              { title: "Digital Domination", img: "/assets/burj.png", desc: "Command attention across 1000+ screens." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.2, duration: 0.8, type: "spring" }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer"
                style={{ perspective: 1000 }}
              >
                <img src={item.img} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:rotate-2" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/80 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-10 h-1 bg-accent mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="contact" className="bg-black relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <CTASection />
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 bg-black relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="container mx-auto px-12 flex flex-col md:flex-row justify-between items-start gap-12 relative z-10"
        >
          <div className="max-w-sm">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-4xl font-display font-bold mb-6 tracking-tighter"
            >
              DUBAI<span className="text-accent italic">MALL</span>
            </motion.div>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              The world's most visited retail and entertainment destination. 
              A platform for the extraordinary.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50">
            <div className="flex flex-col gap-5">
              <span className="text-white mb-2 tracking-[0.3em]">Explore</span>
              <a href="#overview" className="hover:text-accent hover:translate-x-2 transition-all duration-300">Overview</a>
              <a href="#retail" className="hover:text-accent hover:translate-x-2 transition-all duration-300">Retail</a>
              <a href="#luxury" className="hover:text-accent hover:translate-x-2 transition-all duration-300">Luxury</a>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-white mb-2 tracking-[0.3em]">Connect</span>
              <a href="#" className="hover:text-accent hover:translate-x-2 transition-all duration-300">Leasing</a>
              <a href="#" className="hover:text-accent hover:translate-x-2 transition-all duration-300">Sponsorship</a>
              <a href="#" className="hover:text-accent hover:translate-x-2 transition-all duration-300">Events</a>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-white mb-2 tracking-[0.3em]">Legal</span>
              <a href="#" className="hover:text-accent hover:translate-x-2 transition-all duration-300">Privacy</a>
              <a href="#" className="hover:text-accent hover:translate-x-2 transition-all duration-300">Terms</a>
            </div>
          </div>
        </motion.div>
        <div className="container mx-auto px-12 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/30 relative z-10">
          <p>© 2026 Emaar Properties PJSC. All Rights Reserved.</p>
          <div className="flex gap-8">
            <motion.a whileHover={{ y: -3, color: "#fff" }} href="#" className="transition-colors">Instagram</motion.a>
            <motion.a whileHover={{ y: -3, color: "#fff" }} href="#" className="transition-colors">LinkedIn</motion.a>
            <motion.a whileHover={{ y: -3, color: "#fff" }} href="#" className="transition-colors">X.com</motion.a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
