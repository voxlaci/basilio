"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { PageHero } from "@/components/page-hero";
import { pageCopy } from "@/lib/page-i18n";
import { projects } from "@/lib/site-data";

export default function ProjectsPage() {
  const { locale } = useLanguage();
  const copy = pageCopy[locale].projects;

  return (
    <main>
      <PageHero
        kicker={copy.hero.kicker}
        title={copy.hero.title}
        body={copy.hero.body}
        image="https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=2200&q=80"
      />
      <section className="py-24">
        <div className="section-shell grid gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group grid overflow-hidden border border-[#111111]/10 bg-white md:grid-cols-2"
            >
              <div className={`relative min-h-[360px] ${index % 2 ? "md:order-2" : ""}`}>
                <Image src={project.image} alt="" fill className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 md:p-12">
                <p className="text-sm uppercase tracking-[0.28em] text-[#C8A96B]">{project.role}</p>
                <h2 className="mt-4 font-display text-5xl">{project.title}</h2>
                <p className="mt-6 text-lg leading-8 text-[#111111]/68">{project.summary}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.achievements.map((item) => (
                    <span key={item} className="border border-[#EAEAEA] px-3 py-2 text-xs uppercase tracking-[0.16em]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
