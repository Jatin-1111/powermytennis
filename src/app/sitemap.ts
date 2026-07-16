import { MetadataRoute } from "next";

const routes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/programs-and-fees", priority: 0.9, changeFrequency: "weekly" },
  { path: "/coaches", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/pathway", priority: 0.8, changeFrequency: "monthly" },
  { path: "/facilities", priority: 0.7, changeFrequency: "monthly" },
  { path: "/private-lessons", priority: 0.7, changeFrequency: "monthly" },
  { path: "/policies", priority: 0.5, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.powermytennis.com";
  const now = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
