import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { CounterBand } from "@/components/counter-band";
import { Hero } from "@/components/hero";
import { HirePanel } from "@/components/hire-panel";
import { LanguageStory } from "@/components/language-story";
import { SocialPulse } from "@/components/social-pulse";
import { YoutubeFeature } from "@/components/youtube-feature";
import { news, projects, testimonials } from "@/lib/site-data";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="bg-[#111111] py-16 text-[#F7F6F2]">
        <div className="section-shell grid gap-5 md:grid-cols-3">
          {[
            ["Listening", "A rehearsal culture built on attention, precision and trust."],
            ["Formation", "Young singers are treated as artists with voice, body and imagination."],
            ["Transformation", "Music becomes a shared practice for discipline, belonging and courage."]
          ].map(([title, body]) => (
            <article key={title} className="border-l border-[#C8A96B]/55 pl-5">
              <p className="font-display text-3xl">{title}</p>
              <p className="mt-3 leading-7 text-white/62">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <CounterBand />

      <LanguageStory />

      <SocialPulse />

      <section className="py-24">
        <div className="section-shell">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.34em] text-[#C8A96B]">Featured Projects</p>
              <h2 className="mt-4 font-display text-5xl">Living artistic laboratories</h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold">
              View all projects <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group relative min-h-[420px] overflow-hidden bg-[#111111] text-white"
              >
                <Image src={project.image} alt="" fill className="object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96B]">{project.role}</p>
                  <h3 className="mt-3 font-display text-3xl">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="media-grain py-24 text-white">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.34em] text-[#C8A96B]">Video Highlight</p>
            <h2 className="mt-4 font-display text-5xl text-balance">A rehearsal can become a turning point.</h2>
          </div>
          <div className="grid aspect-video place-items-center border border-white/25 bg-black/35">
            <button aria-label="Play featured video" className="grid size-20 place-items-center rounded-full bg-[#C8A96B] text-[#111111]">
              <Play fill="currentColor" />
            </button>
          </div>
        </div>
      </section>

      <YoutubeFeature />

      <section className="bg-[#111111] py-24 text-[#F7F6F2]">
        <div className="section-shell">
          <p className="text-sm uppercase tracking-[0.34em] text-[#C8A96B]">Testimonials</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="border border-white/10 p-7">
                <p className="font-display text-2xl leading-snug">“{item.quote}”</p>
                <p className="mt-8 text-sm text-white/60">{item.name} · {item.context}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.34em] text-[#C8A96B]">Latest News</p>
              <h2 className="mt-4 font-display text-5xl">Recent activity</h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {news.map((item) => (
              <article key={item.title} className="border-t border-[#111111]/15 py-6">
                <time className="text-sm text-[#111111]/50">{item.date}</time>
                <h3 className="mt-4 font-display text-3xl">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#111111]/66">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HirePanel />
    </main>
  );
}
