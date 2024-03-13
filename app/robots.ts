import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: ['/', '/en', '/vn'],
			// not allow to show in google
			disallow: '/studio'
		},
		sitemap: 'https://netcodedev.com/sitemap.xml'
	};
}
