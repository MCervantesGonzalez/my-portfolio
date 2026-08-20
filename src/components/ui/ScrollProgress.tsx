"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { CYBER_RED, CYBER_CYAN } from "@/lib/theme";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{
        scaleX,
        background: `linear-gradient(90deg, ${CYBER_RED}, ${CYBER_CYAN})`,
      }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[100]"
    />
  );
}
