import Image from "next/image";
import Link from "next/link";
import { Play, Video } from "lucide-react";
import { youtubeVideos } from "@/lib/site-data";

export function YoutubeFeature() {
  const [featured, ...moreVideos] = youtubeVideos;

  return (
    <section className="bg-[#111111] py-24 text-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="flex items-center gap-2 text-sm uppercase tracking-[0.34em] text-[#C8A96B]">
            <Video size={18} /> YouTube
          </p>
          <h2 className="mt-5 font-display text-5xl leading-tight text-balance md:text-6xl">
            The sound world around Kantika, SJB and Basilio.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/66">
            Public YouTube material from the related Kantika Korala & SJB channel is surfaced as a cinematic media wall, with the feed’s newest returned item placed first.
          </p>
          <div className="mt-8 overflow-hidden border border-white/10 bg-black">
            <iframe
              className="aspect-video w-full"
              src={`https://www.youtube.com/embed/${featured.id}`}
              title={featured.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <div className="grid content-end gap-4">
          {[featured, ...moreVideos].map((video) => (
            <Link
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              className="group grid grid-cols-[130px_1fr] gap-4 border border-white/10 p-3 transition hover:border-[#C8A96B]"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <Image
                  src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt=""
                  fill
                  className="object-cover opacity-80 transition group-hover:scale-105"
                />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid size-9 place-items-center rounded-full bg-[#C8A96B] text-[#111111]">
                    <Play size={15} fill="currentColor" />
                  </span>
                </span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#C8A96B]">{video.published}</p>
                <h3 className="mt-2 font-display text-2xl leading-tight">{video.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{video.note}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
