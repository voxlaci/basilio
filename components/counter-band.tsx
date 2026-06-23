"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/language-provider";
import { counters } from "@/lib/site-data";

function CountLabel({ value }: { value: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const number = parseInt(value, 10);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (Number.isNaN(number)) return value;
    return `${Math.round(latest)}${value.replace(String(number), "")}`;
  });

  useEffect(() => {
    if (inView && !Number.isNaN(number)) {
      animate(count, number, { duration: 1.4, ease: "easeOut" });
    }
  }, [count, inView, number]);

  return (
    <motion.span ref={ref} className="font-display text-5xl md:text-6xl">
      {Number.isNaN(number) ? value : rounded}
    </motion.span>
  );
}

export function CounterBand() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#111111] py-20 text-[#F7F6F2]">
      <div className="section-shell grid gap-8 md:grid-cols-4">
        {counters.map((counter, index) => (
          <div key={counter.label} className="border-l border-[#C8A96B]/45 pl-5">
            <CountLabel value={counter.value} />
            <p className="mt-3 text-sm leading-6 text-white/62">{t.counters[index]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
