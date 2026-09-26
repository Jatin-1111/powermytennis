import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const SITE_URL = "https://www.powermytennis.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "PowerMyTennis High Performance Academy",
};

interface PageSeo {
  title: string;
  description: string;
  path: string;
  /** Use when the title should not get the "| PowerMyTennis" suffix */
  absoluteTitle?: boolean;
}

/**
 * Per-page metadata. Child pages that set `openGraph` replace the root layout's
 * object entirely, so title/description/url are rebuilt here for every page.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
}: PageSeo): Metadata {
  const url = `${SITE_URL}${path}`;
  const socialTitle = absoluteTitle ? title : `${title} | PowerMyTennis`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: "PowerMyTennis",
      locale: "en_IN",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}

export function breadcrumbJsonLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

export const organizationRef = {
  "@type": "SportsActivityLocation",
  "@id": ORGANIZATION_ID,
  name: siteConfig.name,
  url: SITE_URL,
};
