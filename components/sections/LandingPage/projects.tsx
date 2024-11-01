"use client";

import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";


export default function Projects() {
  return (
    <motion.section 
      className="h-full"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <FolderGit2 className="w-8 h-8" />
          <h2 className="text-2xl font-bold">Projects</h2>
        </div>

        
      </div>
    </motion.section>
  );
}