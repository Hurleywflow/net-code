import React from 'react';
import { ProjectParallax } from './project-parallax';

export function ProjectParallaxProducts() {
	return <ProjectParallax products={products} />;
}
export const products = [
	{
		title: ' Hurley Portfolio 1',
		link: 'https://portfoliohurley.vercel.app/',
		thumbnail:
		'https://aceternity.com/images/products/thumbnails/new/cursor.png',
	},
	{
		title: 'Villa Trung Nghia',
		link: 'https://www.villadalat.online',
		thumbnail:
			'https://aceternity.com/images/products/thumbnails/new/moonbeam.png',
	},
	{
		title: 'Hurley Portfolio 2',
		link: 'https://hurleyportfolio1.vercel.app/',
		thumbnail:
			'https://aceternity.com/images/products/thumbnails/new/rogue.png',
	},

	{
		title: 'Bank Design',
		link: 'https://hurley-bank.vercel.app',
		thumbnail:
			'https://aceternity.com/images/products/thumbnails/new/editorially.png',
	},
	{
		title: 'RealEstate',
		link: 'https://real-estate-api-alpha.vercel.app',
		thumbnail:
			'https://aceternity.com/images/products/thumbnails/new/editrix.png',
	},
	{
		title: 'NailStudioPro',
		link: 'https://www.nailstudiopro.com',
		thumbnail:
			'https://aceternity.com/images/products/thumbnails/new/pixelperfect.png',
	},
];
