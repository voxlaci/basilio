"use client";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";
import { pageCopy } from "@/lib/page-i18n";

export default function AboutPage() {
  const { locale } = useLanguage();
  const copy = pageCopy[locale].about;

  return (
    <main>
      <PageHero
        kicker={copy.hero.kicker}
        title={copy.hero.title}
        body={copy.hero.body}
        image="https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=2200&q=80"
      />
      <section className="py-24">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.72fr_1fr]">
          <Reveal>
            <p className="font-display text-5xl leading-tight text-balance">{copy.lead}</p>
          </Reveal>
          <div className="grid gap-8">
            {copy.timeline.map(([title, body], index) => (
              <Reveal key={title} delay={index * 0.06}>
                <article className="grid gap-4 border-l border-[#C8A96B] pl-6 md:grid-cols-[180px_1fr]">
                  <h2 className="font-display text-3xl">{title}</h2>
                  <p className="text-lg leading-8 text-[#111111]/68">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
