"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "@/components/ui/icons";

// Dipakai di panel Contact yang berlatar gelap.
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard diblok browser → fallback buka mail client
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-6 text-[0.95rem] font-medium text-white transition-colors duration-200 hover:border-white/50 hover:bg-white/5 active:scale-[0.98]"
    >
      {copied ? (
        <>
          <Check className="text-base text-emerald-400" />
          Copied
        </>
      ) : (
        <>
          <Copy className="text-base text-white/60" />
          Copy email
        </>
      )}
    </button>
  );
}
