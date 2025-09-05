import { motion, type Variants } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { spring } from "./_spring";

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show:   { opacity: 1, y: 0, transition: spring },
};

export type FadeInUpProps = {
  children: ReactNode;
  hoverLift?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function FadeInUp({ children, hoverLift = true, className, style }: FadeInUpProps) {
  return (
    <motion.div
      variants={item}
      whileHover={hoverLift ? { y: -4, scale: 1.01 } : undefined}
      whileTap={hoverLift ? { scale: 0.995 } : undefined}
      transition={spring}
      style={{ willChange: "transform", ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
