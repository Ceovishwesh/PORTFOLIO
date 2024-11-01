import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function Skills() {
  return (
    <motion.section
      className="p-8 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="flex items-center gap-4 group"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Code2 
            className="w-8 h-8 text-[#232629] transition-colors duration-300 group-hover:text-blue-500" 
          />
        </motion.div>

        <motion.h2
          className="text-3xl font-bold text-[#232629] relative"
          whileHover={{
            textShadow: "0 5px 15px rgba(0,0,0,0.3)",
          }}
        >
          <motion.span
            className="inline-block"
            whileHover={{
              y: -5,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            Skills
          </motion.span>
          <motion.div
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500"
            whileHover={{
              width: "100%",
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          />
        </motion.h2>
      </motion.div>
    </motion.section>
  );
}