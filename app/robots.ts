import { MetadataRoute } from 'next'
import { WEBSITE_BASE_URL } from '@/constants'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${WEBSITE_BASE_URL}/sitemap.xml`
  }
}