"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    mass: 0.2,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="sunset-bg fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left"
    />
  );
}
