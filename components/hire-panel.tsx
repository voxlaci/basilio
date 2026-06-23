import Link from "next/link";
import { ArrowRight, Globe2, Sparkles } from "lucide-react";
import { hireOptions, verifiedFacts } from "@/lib/site-data";

export function HirePanel() {
  return (
    <section className="bg-[#C8A96B] py-24 text-[#111111]">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.82fr_1fr]">
        <div>
          <p className="flex items-center gap-2 text-sm uppercase tracking-[0.34em]">
            <Sparkles size={18} /> Hire Basilio
          </p>
          <h2 className="mt-5 font-display text-5xl leading-tight text-balance md:text-6xl">
            Bring a transformative choral presence to your institution.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#111111]/72">
            Designed for festivals, universities, conservatories, youth choir programs, conferences and international cultural partners.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#111111] px-7 py-4 text-sm font-semibold text-white"
          >
            Start booking inquiry <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-5">
          <div className="grid gap-3 sm:grid-cols-2">
            {hireOptions.map((option) => (
              <div key={option} className="border border-[#111111]/18 bg-[#F7F6F2]/70 p-4 text-sm font-semibold">
                {option}
              </div>
            ))}
          </div>
          <div className="grid gap-4 border border-[#111111]/18 bg-[#111111] p-6 text-white">
            <p className="flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-[#C8A96B]">
              <Globe2 size={17} /> Publicly supported context
            </p>
            {verifiedFacts.map((fact) => (
              <article key={fact.label} className="border-t border-white/10 pt-4">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl">{fact.label}</h3>
                  <p className="text-sm uppercase tracking-[0.18em] text-[#C8A96B]">{fact.value}</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-white/62">{fact.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
