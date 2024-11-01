"use client";

import { motion } from "framer-motion";
import ThemeToggle from "@/components/theme-toggle";
import LayoutArt from "@/components/sections/LandingPage/Layout_art";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <LayoutArt />
      </motion.div>
    </main>
  );
}