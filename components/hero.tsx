 "use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero-video relative min-h-screen overflow-hidden bg-[#111111] text-white">
      <img
        className="absolute inset-0 h-full w-full object-cover object-[28%_center] opacity-[0.88] sm:object-[68%_center] lg:object-[88%_center]"
        src="/media/basilio-current.jpg"
        alt="Basilio Astulez Duque"
      />
      <div className="section-shell relative z-10 flex min-h-screen items-end pb-16 pt-28 md:items-center md:pb-0">
        <div className="hero-copy max-w-[560px] md:ml-0 lg:max-w-[620px]">
          <p className="mb-5 text-sm uppercase tracking-[0.34em] text-[#C8A96B]">
            {t.hero.kicker}
          </p>
          <h1 className="font-display text-5xl leading-[0.98] text-balance md:text-7xl lg:text-8xl">
            {t.hero.title}
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-white/88 md:text-xl">
            {t.hero.body}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="rounded-full bg-[#C8A96B] px-7 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#F7F6F2]"
            >
              {t.hero.primary}
            </Link>
            <Link
              href="/calendar"
              className="rounded-full border border-white/35 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#111111]"
            >
              {t.hero.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
