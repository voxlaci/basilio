"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { PageHero } from "@/components/page-hero";
import { pageCopy } from "@/lib/page-i18n";
import { galleryImages } from "@/lib/site-data";

const filters = ["All", "Conducting", "Workshops", "Concerts", "Festivals", "Rehearsals", "Travel"];

export default function GalleryPage() {
  const { locale } = useLanguage();
  const copy = pageCopy[locale].gallery;
  const [filter, setFilter] = useState("All");
  const images = useMemo(
    () => galleryImages.filter((image) => filter === "All" || image.category === filter),
    [filter]
  );

  return (
    <main>
      <PageHero
        kicker={copy.hero.kicker}
        title={copy.hero.title}
        body={copy.hero.body}
        image="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=2200&q=80"
      />
      <section className="py-24">
        <div className="section-shell">
          <div className="mb-10 flex flex-wrap gap-2">
            {filters.map((item, index) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-full border px-4 py-2 text-sm ${filter === item ? "border-[#111111] bg-[#111111] text-white" : "border-[#111111]/15"}`}
              >
                {copy.filters[index]}
              </button>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {images.map((image, index) => (
              <button key={image.src} className={`relative overflow-hidden ${index === 0 ? "md:col-span-2 md:row-span-2" : ""} aspect-[4/5]`}>
                <Image src={image.src} alt={image.category} fill className="object-cover transition duration-700 hover:scale-105" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
