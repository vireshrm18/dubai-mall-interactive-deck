import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AnimatedShowcase = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <section className="relative w-full py-20 px-4 md:px-12 z-20">
      <div 
        ref={containerRef} 
        className="relative w-full max-w-7xl mx-auto min-h-[700px] flex items-center justify-center py-20 overflow-hidden rounded-[3rem] bg-gradient-to-br from-black via-zinc-900/50 to-black border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
      >
        
        {/* Background glow */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 w-full px-8 flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Text and AI Badge */}
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md shadow-[0_0_15px_rgba(197,160,89,0.2)]">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span className="text-accent text-[10px] uppercase tracking-[0.2em] font-bold">AI-Powered Experience</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-[1.1]">
              A City Within <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-white">A City.</span>
            </h2>
            
            <p className="text-white/60 text-lg leading-relaxed max-w-md border-l-2 border-accent/40 pl-6 hover:border-accent transition-colors duration-300">
              Explore the vastness of an ecosystem designed to keep visitors engaged for hours, featuring world-class architecture and a seamless flow between luxury and leisure. Built with cutting-edge AI visualization.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(197,160,89,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-accent hover:text-white transition-all duration-300"
            >
              Enter The Future
            </motion.button>
          </motion.div>

          {/* Right Side: Animated Image Collage */}
          <div className="flex-1 relative h-[600px] w-full flex items-center justify-center">
            
            {/* Main Large Image */}
            <motion.div 
              style={{ y: y1, scale }}
              className="absolute right-0 lg:right-10 top-0 lg:top-10 w-[90%] md:w-3/4 h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-20 group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
              <img src="/assets/ai-mall-1.png" alt="Futuristic Mall Interior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </motion.div>

            {/* Floating Small Image 1 */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute left-0 bottom-10 lg:bottom-20 w-[60%] lg:w-1/2 h-[250px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/20 z-30 group cursor-pointer"
            >
              <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
              <img src="/assets/ai-mall-2.png" alt="Futuristic Mall Exterior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </motion.div>

            {/* Floating Small Image 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              whileHover={{ scale: 1.1, rotate: 5, zIndex: 50 }}
              className="absolute right-10 -bottom-5 w-[40%] lg:w-1/3 h-[200px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 z-40 backdrop-blur-sm group cursor-pointer"
            >
              <img src="/assets/ai-mall-3.png" alt="Holographic Retail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AnimatedShowcase;
