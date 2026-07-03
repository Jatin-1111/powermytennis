import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://powermytennis.com';
  
  const routes = [
    '',
    '/about',
    '/coaches',
    '/contact',
    '/facilities',
    '/pathway',
    '/policies',
    '/private-lessons',
    '/programs-and-fees',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
