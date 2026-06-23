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
    default: "Basilio Astúlez | Choral Conductor, Educator & Artistic Visionary",
    template: "%s | Basilio Astúlez"
  },
  description:
    "Premium personal website for Basilio Astúlez, internationally active choral conductor, educator, speaker and mentor in youth choir development.",
  keywords: [
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
    title: "Basilio Astúlez | Music transforms people and communities",
    description:
      "A cinematic personal platform for Basilio Astúlez: conductor, educator, speaker and artistic leader.",
    type: "website",
    locale: "en_US",
    siteName: "Basilio Astúlez",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Basilio Astúlez conducting and mentoring choral musicians"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Basilio Astúlez",
    description: "Conductor. Educator. Visionary.",
    images: [siteConfig.ogImage]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Basilio Astúlez",
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
