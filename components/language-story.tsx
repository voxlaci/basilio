import { languageStory } from "@/lib/site-data";

export function LanguageStory() {
  return (
    <section className="bg-[#111111] py-24 text-[#F7F6F2]">
      <div className="section-shell">
        <p className="text-sm uppercase tracking-[0.34em] text-[#C8A96B]">Euskara · English · Català</p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {languageStory.map((item) => (
            <article key={item.language} className="min-h-80 border border-white/10 p-7">
              <p className="text-sm uppercase tracking-[0.26em] text-white/45">{item.language}</p>
              <h2 className="mt-8 font-display text-4xl leading-tight">{item.title}</h2>
              <p className="mt-6 leading-8 text-white/68">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
