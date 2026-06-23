import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { projects } from "@/lib/site-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main>
      <PageHero kicker={project.role} title={project.title} body={project.summary} image={project.image} />
      <section className="py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.34em] text-[#C8A96B]">History</p>
            <h2 className="mt-4 font-display text-5xl">A project with its own voice.</h2>
          </div>
          <div>
            <p className="text-xl leading-9 text-[#111111]/70">{project.history}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {project.achievements.map((item) => (
                <div key={item} className="border-t border-[#111111]/16 pt-4 text-sm uppercase tracking-[0.18em]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#111111] py-24 text-white">
        <div className="section-shell grid gap-5 md:grid-cols-3">
          {[project.image, "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80"].map((src) => (
            <div key={src} className="relative aspect-[4/5] overflow-hidden">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
