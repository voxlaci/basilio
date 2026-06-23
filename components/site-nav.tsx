"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { localeOptions } from "@/lib/i18n";

function WritingHandMark() {
  return (
    <svg
      className="signature-hand"
      viewBox="0 0 92 50"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M14 34c5.8-7.8 13.3-8.8 19.3-3.6 4.2 3.7 9.4 4.2 14.8.4 4.2-2.9 8.3-3 12.4-.4"
        fill="rgba(200,169,107,.12)"
        stroke="currentColor"
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.5 32.7c-1.8-6.9 2-12.2 7.7-10.6 3.8 1.1 5.1 5.6 2 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 31.8c-.5-6.9 4.3-10.2 8.8-7.1 2.5 1.7 3 4.7 1.7 7.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.4 29.6c1.5-4.7 5.9-6.4 9.4-3.6 2.4 1.9 2.9 5 1.4 7.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52.4 25.7 78.6 7.5l6.2 8.1-28.1 17.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m78.6 7.5 8.8-3.2-2.6 11.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M64.3 16.8 70.3 25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M54.8 34.3c7.7 2.1 14.6.9 20.5-3.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

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
            <WritingHandMark />
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
        <button
          aria-label={t.nav.toggle}
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
            <div className="flex items-center gap-2 pt-2">
              {localeOptions.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => setLocale(option.code)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                    locale === option.code
                      ? "border-[#C8A96B] bg-[#C8A96B] text-[#111111]"
                      : "border-white/15 text-white/70"
                  }`}
                >
                  {option.short}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
