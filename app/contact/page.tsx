import { HirePanel } from "@/components/hire-panel";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";

const reasons = [
  "International booking requests",
  "Youth choir residencies",
  "Guest conducting",
  "Festival and jury invitations",
  "Speaking invitations",
  "Media requests"
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        kicker="Contact"
        title="Hire Basilio Astúlez for a transformative artistic encounter."
        body="For festivals, institutions, choirs, universities, conferences, media requests and international partnerships."
        image="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=2200&q=80"
      />
      <HirePanel />
      <section className="py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.34em] text-[#C8A96B]">Inquiry types</p>
            <div className="mt-8 grid gap-3">
              {reasons.map((reason) => (
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
