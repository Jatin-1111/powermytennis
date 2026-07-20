import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { siteConfig } from "@/data/siteConfig";
import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ComingSoon } from "@/components/shared/ComingSoon";
import { MotionProvider } from "@/components/shared/MotionProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.powermytennis.com"),
  title: {
    template: "%s | PowerMyTennis",
    default:
      "PowerMyTennis High Performance Academy | Tennis Training in New Chandigarh",
  },
  description:
    "Clay-court tennis training for aspiring players in New Chandigarh, Chandigarh, Kharar, Ropar & SAS Nagar. High-performance coaching from beginner to professional level.",
  keywords: [
    "PowerMyTennis",
    "power my tennis",
    "tennis academy New Chandigarh",
    "tennis coaching Chandigarh",
    "clay court tennis training",
    "high performance tennis academy",
    "tennis training Punjab",
    "junior tennis coaching India",
    "professional tennis coaching",
    "tennis lessons Kharar",
    "tennis academy SAS Nagar",
    "tennis academy Ropar",
  ],
  authors: [{ name: "PowerMyTennis High Performance Academy" }],
  creator: "PowerMyTennis",
  publisher: "PowerMyTennis",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "PowerMyTennis High Performance Academy",
    description:
      "Elite clay-court tennis training in New Chandigarh. High-performance coaching at every level — from beginners to tournament players.",
    url: "https://www.powermytennis.com",
    siteName: "PowerMyTennis",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PowerMyTennis High Performance Academy",
    description:
      "Clay-court tennis training in New Chandigarh. High-performance coaching at every level.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["SportsActivityLocation", "LocalBusiness"],
        "@id": "https://www.powermytennis.com/#organization",
        name: siteConfig.name,
        alternateName: "Power My Tennis",
        description: siteConfig.tagline,
        url: "https://www.powermytennis.com",
        telephone: `+91 ${siteConfig.phone}`,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.address.city,
          addressRegion: "Punjab",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.address.coordinates.lat,
          longitude: siteConfig.address.coordinates.lng,
        },
        sport: "Tennis",
        image: "https://www.powermytennis.com/powermytennis-logo.jpeg",
        logo: {
          "@type": "ImageObject",
          url: "https://www.powermytennis.com/powermytennis-logo.jpeg",
        },
        areaServed: siteConfig.address.accessibleFrom.map((city) => ({
          "@type": "City",
          name: city,
        })),
        hasMap: `https://maps.google.com/?q=${siteConfig.address.coordinates.lat},${siteConfig.address.coordinates.lng}`,
        priceRange: "₹₹",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.powermytennis.com/#website",
        url: "https://www.powermytennis.com",
        name: "PowerMyTennis",
        alternateName: "Power My Tennis",
        description: siteConfig.tagline,
        publisher: {
          "@id": "https://www.powermytennis.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.powermytennis.com/?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  const isComingSoon = process.env.NEXT_PUBLIC_COMING_SOON === "true";

  if (isComingSoon) {
    return (
      <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased font-sans`}>
        <body className="min-h-full flex flex-col bg-brand-primary">
          <ComingSoon />
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased font-sans`}>
      <head />
      <body className="min-h-full flex flex-col">
        {/* Inject JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <MotionProvider>
          <Navbar />

          <div className="flex-1">{children}</div>

          <Footer />

          {/* Global WhatsApp CTA */}
          <WhatsAppCTA />
        </MotionProvider>
      </body>
    </html>
  );
}
