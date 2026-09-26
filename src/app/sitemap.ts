import { MetadataRoute } from "next";
import { coaches } from "@/data/coaches";
import { SITE_URL } from "@/lib/seo";

const coachImages = coaches
  .filter((c) => c.photoUrl)
  .map((c) => `${SITE_URL}${c.photoUrl}`);

const routes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  images?: string[];
}> = [
  {
    path: "",
    priority: 1.0,
    changeFrequency: "weekly",
    images: [`${SITE_URL}/hero-clay-court.png`],
  },
  { path: "/programs-and-fees", priority: 0.9, changeFrequency: "weekly" },
  {
    path: "/coaches",
    priority: 0.9,
    changeFrequency: "monthly",
    images: coachImages,
  },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/pathway", priority: 0.8, changeFrequency: "monthly" },
  { path: "/facilities", priority: 0.7, changeFrequency: "monthly" },
  { path: "/private-lessons", priority: 0.7, changeFrequency: "monthly" },
  { path: "/policies", priority: 0.5, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map(({ path, priority, changeFrequency, images }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
    ...(images && { images }),
  }));
}
