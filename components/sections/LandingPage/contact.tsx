"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <motion.section 
      className="h-full" // Mondrian red
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-4">
        <div className="flex items-center gap-4 mb-4">
          <Mail className="w-6 h-6 text-white" />
          <h2 className="text-xl font-bold text-white">Contact</h2>
        </div>

        
      </div>
    </motion.section>
  );
}