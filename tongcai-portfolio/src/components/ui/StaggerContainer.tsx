import { motion, type Variants } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

const makeContainer = (stagger = 0.08, delayChildren = 0.05): Variants => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: stagger, delayChildren } },
});

export type StaggerContainerProps = {
  children: ReactNode;
  once?: boolean;
  stagger?: number;
  delayChildren?: number;
  className?: string;
  style?: CSSProperties;
};

export function StaggerContainer({
  children,
  once = true,
  stagger = 0.08,
  delayChildren = 0.05,
  className,
  style,
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={makeContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
