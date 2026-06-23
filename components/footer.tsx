import Link from "next/link";
import { navItems } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-[#111111] py-16 text-[#F7F6F2]">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-display text-4xl">Basilio Astulez Duque</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/62">
            Conductor, educator and artistic leader devoted to the transforming force of choral music.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm text-white/70">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#C8A96B]">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="section-shell mt-12 border-t border-white/10 pt-6 text-xs text-white/45">
        © 2026 Basilio Astúlez. Personal brand website concept.
      </div>
    </footer>
  );
}
