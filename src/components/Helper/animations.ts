import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: customDelay,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const cardVariant: Variants = {
  hidden: { opacity: 0, y: 25, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};
