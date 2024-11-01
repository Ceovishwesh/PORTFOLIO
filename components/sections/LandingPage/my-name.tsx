"use client";

import { motion } from "framer-motion";

export default function MyName() {
  return (
    <motion.section
      className="h-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-[#232629] text-3xl md:text-4xl font-bold tracking-tight">
        Vishweshwar Reddy
      </h1>
    </motion.section>
  );
}