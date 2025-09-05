import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { spring } from "./_spring";

export type HoverLiftProps = {
  children: ReactNode;
  amount?: number; // px
  scale?: number;
  className?: string;
  style?: CSSProperties;
};

export function HoverLift({ children, amount = 4, scale = 1.01, className, style }: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{ y: -amount, scale }}
      whileTap={{ scale: 0.995 }}
      transition={spring}
      style={{ willChange: "transform", ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
