import type { Metadata } from "next";
import "./globals.css";
import { AskAi } from "@/components/ask-ai";
import { Footer } from "@/components/footer";
import { ShareRail } from "@/components/share-rail";
import { SiteNav } from "@/components/site-nav";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://basilioastulez.com"),
  title: {
    default: "Basilio Astulez Duque | Choral Conductor, Educator & Artistic Visionary",
    template: "%s | Basilio Astulez Duque"
  },
  description:
    "Premium personal website for Basilio Astulez Duque, internationally active choral conductor, educator, speaker and mentor in youth choir development.",
  keywords: [
    "Basilio Astulez Duque",
    "Basilio Astulez",
    "Basilio Astúlez",
    "Choral Conductor",
    "Choir Director",
    "Youth Choir Specialist",
    "Guest Conductor",
    "Choral Educator",
    "Masterclass Conductor",
    "International Choral Speaker",
    "Basque Choir Director",
    "International Choral Music"
  ],
  openGraph: {
    title: "Basilio Astulez Duque | Music transforms people and communities",
    description:
      "A cinematic personal platform for Basilio Astulez Duque: conductor, educator, speaker and artistic leader.",
    type: "website",
    locale: "en_US",
    siteName: "Basilio Astulez Duque",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Basilio Astulez Duque conducting and mentoring choral musicians"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Basilio Astulez Duque",
    description: "Conductor. Educator. Visionary.",
    images: [siteConfig.ogImage]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Basilio Astulez Duque",
    jobTitle: ["Choral Conductor", "Educator", "Speaker", "Artistic Director"],
    description:
      "Internationally active choral conductor and educator known for youth choir development, guest conducting, masterclasses and artistic leadership.",
    url: "https://basilioastulez.com",
    image: siteConfig.ogImage,
    sameAs: siteConfig.sameAs,
    knowsAbout: [
      "Choral music",
      "Youth choir development",
      "Conducting technique",
      "Choral movement",
      "Artistic programming",
      "Music education"
    ]
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteNav />
        <ShareRail />
        {children}
        <Footer />
        <AskAi />
      </body>
    </html>
  );
}
