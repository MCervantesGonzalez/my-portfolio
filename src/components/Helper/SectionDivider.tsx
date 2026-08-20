"use client";

import { motion } from "framer-motion";
import { CYBER_CYAN } from "@/lib/theme";

export default function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-1">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="h-px w-24 sm:w-32"
        style={{
          background: `linear-gradient(90deg, transparent, ${CYBER_CYAN}80, transparent)`,
        }}
      />
    </div>
  );
}
