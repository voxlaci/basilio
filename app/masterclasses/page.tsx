import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { masterclassTopics } from "@/lib/site-data";

export default function MasterclassesPage() {
  return (
    <main>
      <PageHero
        kicker="Masterclasses"
        title="Teaching that changes how conductors listen."
        body="Basilio's educational work supports conductors, teachers and choirs through practical tools, embodied musicianship and a generous artistic standard."
        image="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=2200&q=80"
      />
      <section className="py-24">
        <div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {masterclassTopics.map((topic) => (
            <article key={topic} className="min-h-64 border border-[#111111]/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10">
              <p className="text-sm uppercase tracking-[0.26em] text-[#C8A96B]">Topic</p>
              <h2 className="mt-5 font-display text-4xl">{topic}</h2>
              <p className="mt-5 leading-7 text-[#111111]/65">
                A focused session that blends technique, interpretation, movement and leadership for real rehearsal impact.
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#C8A96B] py-20 text-[#111111]">
        <div className="section-shell flex flex-wrap items-center justify-between gap-8">
          <h2 className="font-display text-5xl">Plan a masterclass or residency.</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-7 py-4 text-sm font-semibold text-white">
            Booking inquiry <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
