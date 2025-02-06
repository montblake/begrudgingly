"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="flex-1 overflow-y-auto"
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}
