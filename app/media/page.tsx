import { FileText, Mic, Newspaper, PlayCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";

const media = [
  ["Videos", "Featured performances, rehearsals and interviews.", PlayCircle],
  ["Interviews", "Conversations on education, artistry and leadership.", Mic],
  ["Articles", "Essays and press coverage for conductors and educators.", Newspaper],
  ["Downloads", "Press kit, biography, portraits and presentation materials.", FileText],
  ["Podcasts", "Audio conversations and international conference features.", Mic],
  ["Press", "Festival announcements, reviews and institutional profiles.", Newspaper]
];

export default function MediaPage() {
  return (
    <main>
      <PageHero
        kicker="Media Hub"
        title="Watch, read and listen across the work."
        body="A modular media center for videos, interviews, articles, podcasts, press assets and downloadable materials."
        image="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=2200&q=80"
      />
      <section className="py-24">
        <div className="section-shell columns-1 gap-5 md:columns-2 lg:columns-3">
          {media.map(([title, body, Icon], index) => (
            <article key={title as string} className={`mb-5 break-inside-avoid bg-white p-7 shadow-sm ${index % 2 ? "min-h-72" : "min-h-56"}`}>
              <Icon className="text-[#C8A96B]" />
              <h2 className="mt-8 font-display text-4xl">{title as string}</h2>
              <p className="mt-5 leading-7 text-[#111111]/66">{body as string}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
