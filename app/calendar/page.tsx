"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { PageHero } from "@/components/page-hero";
import { pageCopy } from "@/lib/page-i18n";
import { events } from "@/lib/site-data";

const eventTypes = ["All", "Concerts", "Festivals", "Workshops", "Masterclass", "Guest Conducting", "Speaking"];

export default function CalendarPage() {
  const { locale } = useLanguage();
  const copy = pageCopy[locale].calendar;
  const [type, setType] = useState("All");
  const filtered = useMemo(() => events.filter((event) => type === "All" || event.type === type), [type]);

  return (
    <main>
      <PageHero
        kicker={copy.hero.kicker}
        title={copy.hero.title}
        body={copy.hero.body}
        image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2200&q=80"
      />
      <section className="py-24">
        <div className="section-shell">
          <div className="mb-10 flex flex-wrap gap-2">
            {eventTypes.map((item, index) => (
              <button key={item} onClick={() => setType(item)} className={`rounded-full border px-4 py-2 text-sm ${type === item ? "border-[#111111] bg-[#111111] text-white" : "border-[#111111]/15"}`}>
                {copy.filters[index]}
              </button>
            ))}
          </div>
          <div className="grid gap-4">
            {filtered.map((event) => (
              <article key={`${event.date}-${event.title}`} className="grid gap-4 border-t border-[#111111]/12 py-7 md:grid-cols-[160px_1fr_180px]">
                <time className="font-display text-3xl">{event.date}</time>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#C8A96B]">{event.type}</p>
                  <h2 className="mt-2 font-display text-4xl">{event.title}</h2>
                </div>
                <p className="text-lg text-[#111111]/62">{event.city}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
