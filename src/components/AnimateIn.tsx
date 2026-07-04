"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

type Direction = "up" | "left" | "right";

export default function AnimateIn({
  children,
  delay = 0,
  y = 28,
  direction = "up",
  className = "",
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  direction?: Direction;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  const offset =
    direction === "left"
      ? { x: -y, y: 0 }
      : direction === "right"
        ? { x: y, y: 0 }
        : { x: 0, y };

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
