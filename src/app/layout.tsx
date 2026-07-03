import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/data/siteConfig";
import { WhatsAppCTA } from "@/components/shared/WhatsAppCTA";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Inject JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <Navbar />
        
        <div className="flex-1">
          {children}
        </div>
        
        <Footer />
        
        {/* Global WhatsApp CTA */}
        <WhatsAppCTA />
      </body>
    </html>
  );
}
