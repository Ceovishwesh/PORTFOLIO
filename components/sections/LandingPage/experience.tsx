"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  // Animation variants for smooth transitions
  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headingVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const iconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hover: {
      scale: 1.05,
      color: "#4A4A4A",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      className="h-full flex items-center justify-center"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div 
        className="flex flex-col items-center gap-3"
        whileHover="hover"
      >
        <motion.div 
          className="flex items-center gap-3"
          variants={headingVariants}
        >
          <motion.div
            variants={iconVariants}
            whileHover="hover"
          >
            <Briefcase className="w-7 h-7 text-[#232629]" />
          </motion.div>
          
          <motion.h2 
            className="text-2xl font-bold text-[#232629] tracking-wide"
            variants={textVariants}
            whileHover="hover"
          >
            Experience
          </motion.h2>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}