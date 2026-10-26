import { MetadataRoute } from 'next';
import { SITE_URL } from '@/data/travelData';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}`,
    },
  ];
}
