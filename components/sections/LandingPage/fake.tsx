"use client";

import { motion } from "framer-motion";

export default function Fake() {
  return (
    <motion.section
      className="h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Empty section for future content */}
    </motion.section>
  );
}