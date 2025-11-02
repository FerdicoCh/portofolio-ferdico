// components/Section.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <section id={id} className={`scroll-mt-28 ${className}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
