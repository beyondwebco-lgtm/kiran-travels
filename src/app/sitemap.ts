import { MetadataRoute } from 'next';
import { SITE_URL } from '@/data/travelData';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}`,
    },
    {
      url: `${SITE_URL}/car-rental-guntur`,
    },
    {
      url: `${SITE_URL}/chilakaluripeta-car-rental`,
    },
    {
      url: `${SITE_URL}/outstation-cabs-vijayawada`,
    },
  ];
}
