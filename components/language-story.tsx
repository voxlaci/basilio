"use client";

import { useLanguage } from "@/components/language-provider";
import { localeOptions } from "@/lib/i18n";

export function LanguageStory() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <section className="bg-[#111111] py-24 text-[#F7F6F2]">
      <div className="section-shell">
        <p className="text-sm uppercase tracking-[0.34em] text-[#C8A96B]">{t.languageStory.kicker}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <h2 className="font-display text-5xl leading-tight text-balance">{t.languageStory.title}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">{t.languageStory.body}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {localeOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => setLocale(option.code)}
                className={`border p-5 text-left transition ${
                  locale === option.code
                    ? "border-[#C8A96B] bg-[#C8A96B] text-[#111111]"
                    : "border-white/10 text-white hover:border-[#C8A96B]"
                }`}
              >
                <span className="text-sm uppercase tracking-[0.26em] opacity-65">{option.short}</span>
                <span className="mt-4 block font-display text-3xl">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
