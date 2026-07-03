import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { siteConfig } from "@/data/siteConfig";
import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ComingSoon } from "@/components/shared/ComingSoon";
import { MotionProvider } from "@/components/shared/MotionProvider";
import "./globals.css";

const fontHeading = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const fontBody = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://powermytennis.com'),
  title: {
    template: "%s | PowerMyTennis High Performance Academy",
    default: "PowerMyTennis High Performance Academy",
  },
  description: siteConfig.tagline,
  openGraph: {
    title: "PowerMyTennis High Performance Academy",
    description: siteConfig.tagline,
    url: "https://powermytennis.com",
    siteName: "PowerMyTennis",
    images: [
      {
        url: "/images/og-image.jpg", // Placeholder until provided
        width: 1200,
        height: 630,
        alt: "PowerMyTennis Academy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Schema for LocalBusiness
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": siteConfig.name,
    "description": siteConfig.tagline,
    "url": "https://powermytennis.com",
    "telephone": siteConfig.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": siteConfig.address.city,
      "addressCountry": "IN"
    }
  };

  const isComingSoon = process.env.NEXT_PUBLIC_COMING_SOON === 'true';

  if (isComingSoon) {
    return (
      <html
        lang="en"
        className={`${fontBody.variable} ${fontHeading.variable} h-full antialiased font-sans`}
      >
        <body className="min-h-full flex flex-col bg-brand-primary">
          <ComingSoon />
        </body>
      </html>
    );
  }

  return (
    <html
      lang="en"
      className={`${fontBody.variable} ${fontHeading.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col">
        {/* Inject JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <MotionProvider>
          <Navbar />
          
          <div className="flex-1">
            {children}
          </div>
          
          <Footer />
          
          {/* Global WhatsApp CTA */}
          <WhatsAppCTA />
        </MotionProvider>
      </body>
    </html>
  );
}
