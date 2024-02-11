import Contact from '@/components/cc/Contact/contact';
import CircleContainer from '@/components/cc/circle-container/circle-container';
import { Container } from '@/components/cc/container/container';
import Footer from '@/components/cc/footer/footer';
import HeroBeam from '@/components/cc/heroBeam/heroBeam';
import { LampDemo } from '@/components/cc/lamp/lamp';
import { ProjectParallaxProducts } from '@/components/cc/project-parallax/project-parallax-products';

export default function Home() {
	return (
		<>
			<main className='m-0 flex min-h-[100svh] min-w-full flex-col items-center justify-center overflow-x-clip p-0'>
				<Container>
					<HeroBeam />
				</Container>
				<div className='m-0 box-border w-screen bg-foreground p-0'>
					<Container>
						<ProjectParallaxProducts />
					</Container>
				</div>
				<LampDemo />
				<CircleContainer />
				<Container>
					<Contact />
				</Container>
			</main>
			<Footer />
		</>
	);
}
