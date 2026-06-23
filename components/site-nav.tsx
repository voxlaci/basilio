"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/site-data";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#111111]/72 text-white backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-[0.18em]">
          BA
        </Link>
        <div className="hidden items-center gap-7 text-sm text-white/78 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#C8A96B]">
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="hidden rounded-full border border-[#C8A96B]/70 px-5 py-2 text-sm text-[#F7F6F2] transition hover:bg-[#C8A96B] hover:text-[#111111] lg:inline-flex"
        >
          Invite Basilio
        </Link>
        <button
          aria-label="Toggle menu"
          className="grid size-10 place-items-center rounded-full border border-white/15 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-[#111111] px-5 py-5 lg:hidden">
          <div className="grid gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
