"use client";

import { Download } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { PageHero } from "@/components/page-hero";
import { pageCopy } from "@/lib/page-i18n";

export default function ResourcesPage() {
  const { locale } = useLanguage();
  const copy = pageCopy[locale].resources;

  return (
    <main>
      <PageHero
        kicker={copy.hero.kicker}
        title={copy.hero.title}
        body={copy.hero.body}
        image="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=2200&q=80"
      />
      <section className="py-24">
        <div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {copy.items.map((item) => (
            <article key={item} className="border border-[#111111]/10 bg-white p-6">
              <Download className="text-[#C8A96B]" />
              <h2 className="mt-8 font-display text-3xl">{item}</h2>
              <p className="mt-4 text-sm leading-6 text-[#111111]/62">{copy.cardBody}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
