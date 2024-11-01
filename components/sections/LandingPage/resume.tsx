"use client";

import { motion } from "framer-motion";
import { Eye, Download } from "lucide-react";

export default function Resume() {
  return (
    <motion.section
      className="h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between h-full p-2">
        <h2 className="text-[#232629] font-bold text-xl">Resume</h2>
        <div className="flex items-center gap-3">
          <Eye 
            className="w-5 h-5 text-[#232629] cursor-pointer hover:text-[#000] transition-colors"
            role="button"
            aria-label="View Resume"
          />
          <Download 
            className="w-5 h-5 text-[#232629] cursor-pointer hover:text-[#000] transition-colors"
            role="button"
            aria-label="Download Resume"
          />
        </div>
      </div>
    </motion.section>
  );
}