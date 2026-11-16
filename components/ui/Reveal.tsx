"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** detik */
  delay?: number;
  /** jarak geser awal (px) */
  y?: number;
};

// Fade + slide-up halus saat elemen masuk viewport (sekali saja).
export default function Reveal({ children, className, delay = 0, y = 18 }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
