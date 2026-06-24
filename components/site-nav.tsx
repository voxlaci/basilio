"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { localeOptions } from "@/lib/i18n";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();
  const navItems = [
    { label: t.nav.about, href: "/about" },
    { label: t.nav.projects, href: "/projects" },
    { label: t.nav.international, href: "/international" },
    { label: t.nav.masterclasses, href: "/masterclasses" },
    { label: t.nav.media, href: "/media" },
    { label: t.nav.calendar, href: "/calendar" },
    { label: t.nav.hire, href: "/contact" }
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#111111]/72 text-white backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="signature-mark">
            <span className="font-script text-3xl leading-none text-[#C8A96B]">Basilio</span>
          </span>
        </Link>
        <div className="hidden items-center gap-4 text-sm text-white/78 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#C8A96B]">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center rounded-full border border-white/15 p-1 text-[11px] font-semibold lg:flex">
          {localeOptions.map((option) => (
            <button
              key={option.code}
              type="button"
              aria-label={option.label}
              onClick={() => setLocale(option.code)}
              className={`rounded-full px-3 py-1.5 transition ${
                locale === option.code ? "bg-[#C8A96B] text-[#111111]" : "text-white/62 hover:text-white"
              }`}
            >
              {option.short}
            </button>
          ))}
        </div>
        <Link
          href="/contact"
          className="hidden rounded-full border border-[#C8A96B]/70 px-5 py-2 text-sm text-[#F7F6F2] transition hover:bg-[#C8A96B] hover:text-[#111111] lg:inline-flex"
        >
          {t.nav.invite}
        </Link>
        <div className="flex items-center gap-2 lg:hidden">
          <div className="flex items-center rounded-full border border-white/15 p-1 text-[10px] font-semibold">
            {localeOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                aria-label={option.label}
                onClick={() => setLocale(option.code)}
                className={`rounded-full px-2.5 py-1.5 transition ${
                  locale === option.code ? "bg-[#C8A96B] text-[#111111]" : "text-white/62 hover:text-white"
                }`}
              >
                {option.short}
              </button>
            ))}
          </div>
          <button
            aria-label={t.nav.toggle}
            className="grid size-10 place-items-center rounded-full border border-white/15"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
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
