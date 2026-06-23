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
      viewBox="0 0 120 72"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M18 48c6.2-12.4 15.8-15 25.4-7.1 5.2 4.3 11.5 4.5 17.8.6 5.7-3.5 12.3-3.3 18.9 1.1l-5.6 11.6c-14.7 7.1-31.7 7-50.8-.2-4.4-1.7-6.3-3.6-5.7-6Z"
        fill="#F7F6F2"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.5 42.4c-3.6-8.8.9-18.4 8.6-17.1 5 .9 7.7 6.5 4.8 14.7"
        fill="#F7F6F2"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.2 39.4c-1.9-9.5 3.5-17.2 10.2-14.2 4.2 1.9 5.4 7.2 2.3 14.8"
        fill="#F7F6F2"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M59.5 40.1c-.9-7.9 4.8-13.2 10.3-9.7 3.3 2.1 4.2 6.2 2.2 11.1"
        fill="#F7F6F2"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M68.5 42.8c2.4-7 9.8-8.6 14.3-2.6"
        fill="#F7F6F2"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52 33.6 96.6 8.5l7.2 11.3-47.5 25.7Z"
        fill="#111111"
        stroke="#C8A96B"
        strokeWidth="2.4"
      />
      <path
        d="m96.6 8.5 13-4.5-5.8 15.8Z"
        fill="#F7F6F2"
        stroke="#C8A96B"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M72 22.1 78.5 34"
        fill="none"
        stroke="#C8A96B"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="82.4" cy="39.8" r="3.2" fill="#111111" stroke="#C8A96B" strokeWidth="1.7" />
      <path d="M80 42.1c6.5 2.1 13 .8 19.5-3.7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
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
