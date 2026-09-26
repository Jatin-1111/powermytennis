import type { Metadata } from "next";
import { privateLessons } from "@/data/programs";
import { JsonLd } from "@/components/shared/JsonLd";
import {
  SITE_URL,
  breadcrumbJsonLd,
  organizationRef,
  pageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Private Tennis Lessons in New Chandigarh",
  description:
    "One-on-one tennis lessons with PowerMyTennis coaches in New Chandigarh from ₹750/hour — chief coach, senior coach, assistant coach, fitness coach or hire a hitter.",
  path: "/private-lessons",
});

export default function PrivateLessonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd("Private Lessons", "/private-lessons"),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Private Tennis Lessons",
            serviceType: "Private tennis coaching",
            url: `${SITE_URL}/private-lessons`,
            provider: organizationRef,
            areaServed: "New Chandigarh, Punjab",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Private Lesson Fees",
              itemListElement: privateLessons.fees.map((f) => ({
                "@type": "Offer",
                name: `${f.role} — ${f.duration}`,
                price: f.fee,
                priceCurrency: "INR",
              })),
            },
          },
        ]}
      />
      {children}
    </>
  );
}
