import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

const timeline = [
  ["Early years", "A life in music begins with the direct human electricity of voices in community."],
  ["Education", "Training becomes a lifelong practice of listening, analysis and artistic generosity."],
  ["International career", "Guest conducting, festivals, juries and masterclasses widen the circle of exchange."],
  ["Teaching activity", "The rehearsal room becomes a place where technique and personal growth meet."],
  ["Leadership philosophy", "Basilio leads through attention: to sound, to bodies, to culture and to possibility."]
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="Biography"
        title="A conductor shaped by youth, place and transformation."
        body="This is a story-first biography for an artist whose influence is measured not only by performances, but by the singers and conductors who leave changed."
        image="https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=2200&q=80"
      />
      <section className="py-24">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.72fr_1fr]">
          <Reveal>
            <p className="font-display text-5xl leading-tight text-balance">The artistic work is always also human work.</p>
          </Reveal>
          <div className="grid gap-8">
            {timeline.map(([title, body], index) => (
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
