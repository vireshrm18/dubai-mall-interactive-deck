import { motion } from "framer-motion";

const ExperienceGrid = () => {
  const experiences = [
    {
      title: "Fashion Avenue",
      category: "Luxury Retail",
      image: "/assets/luxury.png",
      description: "Home to over 200 of the world's most coveted luxury brands in an setting of unparalleled elegance.",
      size: "large"
    },
    {
      title: "The Aquarium",
      category: "Attractions",
      image: "/assets/aquarium.png",
      description: "One of the largest suspended aquariums in the world, defining the mall as a global landmark.",
      size: "small"
    },
    {
      title: "Waterfront Dining",
      category: "Lifestyle",
      image: "/assets/dining.png",
      description: "Exceptional culinary experiences overlooking the world-famous Dubai Fountain.",
      size: "small"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-[80vh]">
      {experiences.map((exp, i) => (
        <motion.div
          key={exp.title}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.2, duration: 0.8, type: "spring", bounce: 0.4 }}
          whileHover={{ y: -10, scale: 1.02 }}
          className={`relative group overflow-hidden rounded-[2.5rem] shadow-2xl cursor-pointer border border-white/5 ${
            exp.size === "large" ? "lg:col-span-2" : ""
          }`}
        >
          <img
            src={exp.image}
            alt={exp.title}
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute inset-0 p-10 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <motion.div
               initial={{ width: 0 }}
               whileInView={{ width: "30px" }}
               transition={{ delay: 0.5 + (i * 0.2), duration: 0.8 }}
               className="h-[2px] bg-accent mb-6 transform origin-left group-hover:scale-x-150 transition-transform duration-500"
            />
            <span className="text-accent text-[10px] uppercase tracking-[0.3em] font-bold mb-3 block opacity-80 group-hover:opacity-100">
              {exp.category}
            </span>
            <h3 className="text-4xl font-display font-bold mb-4">{exp.title}</h3>
            <p className="text-white/70 text-sm max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
              {exp.description}
            </p>
          </div>
          <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 bg-black/20 backdrop-blur-sm">
            <span className="text-accent rotate-45 transform group-hover:rotate-0 transition-transform duration-500">→</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceGrid;
