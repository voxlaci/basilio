import Link from "next/link";
import { ArrowUpRight, Camera, Network, RefreshCw } from "lucide-react";
import { latestPromotedPost, socialProfiles } from "@/lib/site-data";

export function SocialPulse() {
  return (
    <section className="bg-[#F7F6F2] py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.34em] text-[#C8A96B]">Latest Social Pulse</p>
          <h2 className="mt-5 font-display text-5xl leading-tight text-balance md:text-6xl">
            The latest work promoted by Basilio Astulez Duque.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#111111]/68">
            This area is designed to surface Basilio's newest promoted post from his own social channels.
          </p>
        </div>
        <div className="grid gap-5">
          <article className="border border-[#111111]/10 bg-white p-7 shadow-2xl shadow-black/5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[#C8A96B]">
                  {latestPromotedPost.source}
                </p>
                <h3 className="mt-3 font-display text-4xl">{latestPromotedPost.profileName}</h3>
                <p className="mt-2 text-sm text-[#111111]/52">{latestPromotedPost.handle}</p>
              </div>
              <div className="grid size-14 place-items-center rounded-full bg-[#111111] text-white">
                <Network size={22} />
              </div>
            </div>
            <h4 className="mt-8 font-display text-3xl">{latestPromotedPost.title}</h4>
            <p className="mt-4 text-lg leading-8 text-[#111111]/68">{latestPromotedPost.summary}</p>
            <div className="mt-6 flex items-center gap-2 text-sm text-[#111111]/55">
              <RefreshCw size={15} />
              <span>{latestPromotedPost.status}</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={latestPromotedPost.url}
                className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-5 py-3 text-sm font-semibold text-white"
              >
                Open Facebook <ArrowUpRight size={16} />
              </Link>
              <Link
                href={socialProfiles.instagram}
                className="inline-flex items-center gap-2 rounded-full border border-[#111111]/18 px-5 py-3 text-sm font-semibold"
              >
                <Camera size={16} /> Instagram
              </Link>
            </div>
          </article>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href={socialProfiles.facebook}
              className="border border-[#111111]/10 bg-[#111111] p-5 text-white transition hover:bg-[#C8A96B] hover:text-[#111111]"
            >
              <p className="text-sm uppercase tracking-[0.24em] opacity-70">Facebook</p>
              <p className="mt-4 font-display text-3xl">basilio.astulezduque</p>
            </Link>
            <Link
              href={socialProfiles.instagram}
              className="border border-[#111111]/10 bg-white p-5 transition hover:border-[#C8A96B]"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-[#C8A96B]">Instagram</p>
              <p className="mt-4 font-display text-3xl">astulezduque</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
