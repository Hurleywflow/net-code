import { ProjectParallax } from './project-parallax';

export function ProjectParallaxProducts() {
	return <ProjectParallax products={products} />;
}
export const products = [
	{
		title: ' Hurley Portfolio 1',
		link: 'https://portfoliohurley.vercel.app/',
		thumbnail: '/images/projects/hlp1.jpeg',
	},
	{
		title: 'Hurley Portfolio 2',
		link: 'https://hurleyportfolio1.vercel.app/',
		thumbnail: '/images/projects/hlp2.gif',
	},
	{
		title: 'NailStudioPro',
		link: 'https://www.nailstudiopro.com',
		thumbnail: '/images/projects/nsp.jpeg',
	},

	{
		title: 'Bank Design',
		link: 'https://hurley-bank.vercel.app',
		thumbnail: '/images/projects/b.gif',
	},

	{
		title: 'Villa Trung Nghia',
		link: 'https://www.villadalat.online',
		thumbnail: '/images/projects/vltn.gif',
	},
	{
		title: 'RealEstate',
		link: 'https://real-estate-api-alpha.vercel.app',
		thumbnail: '/images/projects/rs.jpeg',
	},
];
