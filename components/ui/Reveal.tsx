"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** detik */
  delay?: number;
  /** jarak geser awal (px) */
  y?: number;
  /** skala awal, mis. 0.96 */
  scale?: number;
  /** true = jalan saat halaman dibuka, bukan saat masuk viewport */
  immediate?: boolean;
};

// Fade + slide-up halus saat elemen masuk viewport (sekali saja).
export default function Reveal({ children, className, delay = 0, y = 18, scale = 1, immediate = false }: Props) {
  const shown = { opacity: 1, y: 0, scale: 1 };
  const trigger = immediate
    ? { animate: shown }
    : { whileInView: shown, viewport: { once: true, margin: "0px 0px -60px 0px" } };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale }}
      {...trigger}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
