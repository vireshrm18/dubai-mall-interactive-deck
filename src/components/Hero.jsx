import { motion } from "framer-motion";

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const letterVariants = {
    hidden: { y: "100%", opacity: 0, rotateX: 90 },
    visible: { 
      y: 0, 
      opacity: 1, 
      rotateX: 0,
      transition: { 
        type: "spring",
        damping: 12,
        stiffness: 100 
      }
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center perspective-1000">
      {/* Background Video with multiple sources and fallback */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-black"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-50 mix-blend-luminosity opacity-80"
        >
          {/* Using a highly reliable sample video from a CDN */}
          <source
            src="https://player.vimeo.com/external/370331493.sd.mp4?s=7b925b6c3f0b2f0a1c1d4e5f6a7b8c9d0e1f2a3b&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
          {/* Backup link */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-city-traffic-at-night-from-above-34442-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black" />
        <motion.div 
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at center, #C5A059 0%, transparent 40%)', backgroundSize: '150% 150%' }}
        />
      </motion.div>

      {/* Content with Enhanced Animations */}
      <div className="relative z-10 text-center px-6 mt-16 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <motion.h4
            initial={{ opacity: 0, letterSpacing: "0em", filter: "blur(10px)" }}
            animate={{ opacity: 1, letterSpacing: "0.4em", filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="text-accent uppercase font-semibold text-xs md:text-sm mb-6 inline-block overflow-hidden relative"
          >
            <span className="relative z-10">The Pinnacle of Global Retail</span>
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 5 }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            />
          </motion.h4>
          
          <motion.h1 
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-8 tracking-tighter leading-none flex justify-center flex-wrap"
          >
            {"DUBAI".split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                {char}
              </motion.span>
            ))}
            <span className="w-4 md:w-8" />
            <motion.span
              initial={{ opacity: 0, scale: 0.5, rotate: -10, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 1.5, type: "spring" }}
              className="italic text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent via-yellow-200 to-accent"
            >
              MALL
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1.8 }}
            className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 font-light tracking-wide leading-relaxed"
          >
            A world-class sales platform where heritage meets the future. 
            Join the ranks of the world's most iconic brands in the heart of Dubai.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2, type: "spring" }}
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(197, 160, 89, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full md:w-auto px-12 py-5 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Explore Opportunity
                <motion.span 
                  className="inline-block ml-3 font-bold text-lg"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out skew-x-12" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline w-full md:w-auto px-12 py-5 backdrop-blur-md"
            >
              Watch Vision
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
        whileHover={{ y: 5 }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Scroll Down</span>
        <div className="w-[2px] h-20 bg-white/10 relative overflow-hidden rounded-full">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-accent to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
