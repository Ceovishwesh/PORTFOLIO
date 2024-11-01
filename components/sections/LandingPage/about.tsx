"use client";

import { motion } from "framer-motion";
import { Code, User } from "lucide-react";

export default function About() {
  return (
    <motion.section 
      className="h-full" // Mondrian blue
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <User className="w-8 h-8 text-white" />
          <h2 className="text-2xl font-bold text-white">About Me</h2>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <p className="text-lg leading-relaxed text-white">
            I
          </p>
          
          <div className="flex items-center gap-2 text-white">
            <Code className="w-5 h-5" />
            <span>Currently working with Next.js, TypeScript, and Modern Web APIs</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}