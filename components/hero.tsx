import Link from "next/link";

export function Hero() {
  return (
    <section className="hero-video relative min-h-screen overflow-hidden bg-[#111111] text-white">
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        src="/media/basilio-current.jpg"
        alt="Basilio Astulez Duque"
      />
      <div className="section-shell relative z-10 flex min-h-screen items-center pt-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.44em] text-[#C8A96B]">
            Conductor · Educator · Visionary
          </p>
          <h1 className="font-display text-6xl leading-[0.95] text-balance md:text-8xl lg:text-9xl">
            Basilio Astulez Duque
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-white/78 md:text-2xl">
            Music transforms people and communities through discipline, imagination and shared breath.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="rounded-full bg-[#C8A96B] px-7 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#F7F6F2]"
            >
              Discover the Journey
            </Link>
            <Link
              href="/calendar"
              className="rounded-full border border-white/35 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#111111]"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
