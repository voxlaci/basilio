export function PageHero({
  kicker,
  title,
  body,
  image
}: {
  kicker: string;
  title: string;
  body: string;
  image?: string;
}) {
  return (
    <section
      className="relative min-h-[74vh] overflow-hidden bg-[#111111] pt-32 text-white"
      style={
        image
          ? {
              backgroundImage: `linear-gradient(90deg, rgba(17,17,17,.86), rgba(17,17,17,.24)), url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }
          : undefined
      }
    >
      <div className="section-shell flex min-h-[58vh] items-center">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm uppercase tracking-[0.38em] text-[#C8A96B]">{kicker}</p>
          <h1 className="font-display text-5xl leading-tight text-balance md:text-7xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">{body}</p>
        </div>
      </div>
    </section>
  );
}
