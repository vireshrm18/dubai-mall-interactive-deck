import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Counter = ({ value, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (isNaN(end)) return;
      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / end;

      const timer = setInterval(() => {
        start += Math.ceil(end / 100);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 20);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Stats = () => {
  const stats = [
    { label: "Annual Visitors", value: "105", suffix: "M+", sub: "The world's most visited retail destination" },
    { label: "Total Area", value: "12", suffix: "M sq.ft", sub: "Equivalent to 200 football pitches" },
    { label: "Retail Outlets", value: "1200", suffix: "+", sub: "From global flagships to boutique pop-ups" },
    { label: "F&B Outlets", value: "200", suffix: "+", sub: "A world-class culinary landscape" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.8 }}
          whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
          className="glass-card p-10 flex flex-col items-center text-center group relative overflow-hidden"
        >
          {/* Subtle Glow Effect on Hover */}
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h3 className="text-5xl md:text-6xl font-display font-bold text-accent mb-4 tracking-tighter">
            <Counter value={stat.value} suffix={stat.suffix} />
          </h3>
          <p className="text-[10px] uppercase tracking-[0.25em] font-black mb-4 text-white/80">{stat.label}</p>
          <div className="w-8 h-[1px] bg-accent/30 mb-4 group-hover:w-16 transition-all duration-500" />
          <p className="text-xs text-white/40 leading-relaxed font-light">{stat.sub}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;
