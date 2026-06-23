"use client";

import { HirePanel } from "@/components/hire-panel";
import { ContactForm } from "@/components/contact-form";
import { useLanguage } from "@/components/language-provider";
import { PageHero } from "@/components/page-hero";
import { pageCopy } from "@/lib/page-i18n";

export default function ContactPage() {
  const { locale } = useLanguage();
  const copy = pageCopy[locale].contact;

  return (
    <main>
      <PageHero
        kicker={copy.hero.kicker}
        title={copy.hero.title}
        body={copy.hero.body}
        image="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=2200&q=80"
      />
      <HirePanel />
      <section className="py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.34em] text-[#C8A96B]">{copy.inquiryTypes}</p>
            <div className="mt-8 grid gap-3">
              {copy.reasons.map((reason) => (
                <div key={reason} className="border-t border-[#111111]/12 py-4 font-display text-3xl">
                  {reason}
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
