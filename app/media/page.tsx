"use client";

import { FileText, Mic, Newspaper, PlayCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { PageHero } from "@/components/page-hero";
import { pageCopy } from "@/lib/page-i18n";

const mediaIcons = [PlayCircle, Mic, Newspaper, FileText, Mic, Newspaper];

export default function MediaPage() {
  const { locale } = useLanguage();
  const copy = pageCopy[locale].media;

  return (
    <main>
      <PageHero
        kicker={copy.hero.kicker}
        title={copy.hero.title}
        body={copy.hero.body}
        image="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=2200&q=80"
      />
      <section className="py-24">
        <div className="section-shell columns-1 gap-5 md:columns-2 lg:columns-3">
          {copy.items.map(([title, body], index) => {
            const Icon = mediaIcons[index];
            return (
            <article key={title as string} className={`mb-5 break-inside-avoid bg-white p-7 shadow-sm ${index % 2 ? "min-h-72" : "min-h-56"}`}>
              <Icon className="text-[#C8A96B]" />
              <h2 className="mt-8 font-display text-4xl">{title as string}</h2>
              <p className="mt-5 leading-7 text-[#111111]/66">{body as string}</p>
            </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
