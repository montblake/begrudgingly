"use client";

import { motion } from "motion/react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 overflow-y-scroll snap-y snap-mandatory">
      <motion.div
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
