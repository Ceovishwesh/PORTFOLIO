"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Corp",
    period: "2022 - Present",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
  },
];

export default function Experience() {
  return (
    <motion.section 
    className="h-full" // Mondrian blue
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
      <div className="p-4">
        <div className="flex items-center gap-4 mb-4">
          <Briefcase className="w-6 h-6 text-white" />
          <h2 className="text-xl font-bold text-white">Experience</h2>
        </div>

        
      </div>
    </motion.section>
  );
}
