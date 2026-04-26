import { motion } from "framer-motion";

const Section = ({ children, className = "", id = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`min-h-screen relative flex flex-col justify-center px-6 md:px-24 py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
