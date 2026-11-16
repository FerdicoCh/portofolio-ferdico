"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "@/components/ui/icons";

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
    <Button type="button" variant="secondary" size="lg" onClick={copy} aria-live="polite">
      {copied ? (
        <>
          <Check className="text-base text-emerald-600" />
          Copied to clipboard
        </>
      ) : (
        <>
          <Copy className="text-base text-muted" />
          Copy email
        </>
      )}
    </Button>
  );
}
