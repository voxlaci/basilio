import { Download } from "lucide-react";
import { PageHero } from "@/components/page-hero";

const resources = ["Articles", "Teaching materials", "Presentations", "Videos", "For conductors", "For teachers", "For choirs", "For students"];

export default function ResourcesPage() {
  return (
    <main>
      <PageHero
        kicker="Resources"
        title="A growing library for conductors, teachers, choirs and students."
        body="A future-ready resource center designed for downloads, teaching materials, articles, presentations and embedded learning content."
        image="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=2200&q=80"
      />
      <section className="py-24">
        <div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((item) => (
            <article key={item} className="border border-[#111111]/10 bg-white p-6">
              <Download className="text-[#C8A96B]" />
              <h2 className="mt-8 font-display text-3xl">{item}</h2>
              <p className="mt-4 text-sm leading-6 text-[#111111]/62">Prepared for curated downloads and CMS-managed updates.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
