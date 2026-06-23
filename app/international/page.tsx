import { PageHero } from "@/components/page-hero";

const locations = [
  ["Basque Country", "Home base", "left-[42%] top-[42%]"],
  ["North America", "Festivals", "left-[21%] top-[38%]"],
  ["Latin America", "Masterclasses", "left-[31%] top-[66%]"],
  ["Europe", "Symposiums", "left-[49%] top-[39%]"],
  ["Asia", "Competitions", "left-[70%] top-[46%]"]
];

export default function InternationalPage() {
  return (
    <main>
      <PageHero
        kicker="International Activity"
        title="A global conversation carried by young voices."
        body="Festivals, masterclasses, competitions, symposiums and guest conducting appearances connect Basilio's work with choral communities around the world."
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=80"
      />
      <section className="bg-[#111111] py-24 text-white">
        <div className="section-shell">
          <div className="relative min-h-[560px] overflow-hidden border border-white/10 bg-[#171717]">
            <div className="absolute inset-10 rounded-[50%] border border-white/10" />
            <div className="absolute inset-x-16 top-1/2 border-t border-white/10" />
            <div className="absolute inset-y-16 left-1/2 border-l border-white/10" />
            {locations.map(([city, type, position]) => (
              <div key={city} className={`absolute ${position}`}>
                <span className="absolute inline-flex size-5 animate-ping rounded-full bg-[#C8A96B]/60" />
                <span className="relative block size-5 rounded-full border-2 border-[#111111] bg-[#C8A96B]" />
                <div className="mt-3 min-w-36 bg-white/8 p-3 text-sm backdrop-blur">
                  <p className="font-semibold">{city}</p>
                  <p className="text-white/55">{type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
