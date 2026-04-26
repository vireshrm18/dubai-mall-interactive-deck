import { motion } from "framer-motion";

const VideoFrame = ({ src, title, subtitle, category }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="relative w-full h-[600px] rounded-[2.5rem] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 cursor-pointer"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110 bg-black"
        src={src}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />
      
      <div className="absolute bottom-0 left-0 p-12 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">
            {category}
          </span>
          <h3 className="text-5xl font-display font-bold mb-4">{title}</h3>
          <p className="text-white/70 text-base max-w-xl leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {subtitle}
          </p>
          <button className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold group/btn text-accent pointer-events-auto">
            Experience Now 
            <span className="w-8 h-[2px] bg-accent transition-all duration-300 group-hover/btn:w-16 shadow-[0_0_10px_rgba(197,160,89,0.8)]" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VideoFrame;
