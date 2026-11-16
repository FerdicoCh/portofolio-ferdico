"use client";

import { MotionConfig } from "framer-motion";

// reducedMotion="user" → animasi transform otomatis mati kalau user set "reduce motion" di OS.
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
