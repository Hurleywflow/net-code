import { Header } from '../MyCustomNextIntlClientProvider/MyCustomNextIntlClientProvider';
import { ProjectParallax } from './project-parallax';

export function ProjectParallaxProducts() {
	return (
		<ProjectParallax products={products}>
			<Header />
		</ProjectParallax>
	);
}
const products = [
	{
		title: 'RealEstate',
		link: 'https://real-estate-api-alpha.vercel.app',
		thumbnail: '/images/projects/rs.jpeg',
	},
];
