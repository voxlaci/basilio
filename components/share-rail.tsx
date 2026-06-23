"use client";

import { Copy, Mail, Share2, Users } from "lucide-react";
import { useState } from "react";

export function ShareRail() {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const shareData = {
      title: "Basilio Astúlez",
      text: "Basilio Astúlez · Conductor, educator and artistic visionary.",
      url: window.location.href
    };

    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <aside className="fixed left-3 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-2 rounded-full border border-white/10 bg-[#111111]/82 p-2 text-white shadow-2xl shadow-black/25 backdrop-blur-xl">
      <button
        aria-label="Share this page"
        onClick={share}
        className="grid size-11 place-items-center rounded-full bg-[#C8A96B] text-[#111111] transition hover:bg-[#F7F6F2]"
      >
        <Share2 size={18} />
      </button>
      <a
        aria-label="Share by email"
        className="hidden size-10 place-items-center rounded-full transition hover:bg-[#C8A96B] hover:text-[#111111] md:grid"
        href="mailto:?subject=Basilio%20Ast%C3%BAlez&body=https%3A%2F%2Fbasilioastulez.com"
      >
        <Mail size={17} />
      </a>
      <a
        aria-label="Share on LinkedIn"
        className="hidden size-10 place-items-center rounded-full transition hover:bg-[#C8A96B] hover:text-[#111111] md:grid"
        href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fbasilioastulez.com"
      >
        <Users size={17} />
      </a>
      <button
        aria-label="Copy link"
        onClick={share}
        className="hidden size-10 place-items-center rounded-full transition hover:bg-[#C8A96B] hover:text-[#111111] md:grid"
      >
        <Copy size={17} />
      </button>
      {copied ? <span className="absolute left-14 whitespace-nowrap rounded-full bg-[#C8A96B] px-3 py-1 text-xs text-[#111111]">Link copied</span> : null}
    </aside>
  );
}
