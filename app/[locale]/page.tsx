import Contact from '@/components/cc/Contact/contact';
// import CircleContainer from '@/components/cc/circle-container/circle-container';
import { Container } from '@/components/cc/container/container';
import Footer from '@/components/cc/footer/footer';
import HeroBeam from '@/components/cc/heroBeam/heroBeam';
import { LampDemo } from '@/components/cc/lamp/lamp';
import { BackgroundBoxes } from '@/components/cc/project-parallax/BackgroundBoxes';

export default function Home() {
	return (
		<>
			<main className='m-0 flex min-h-[100svh] min-w-full flex-col items-center justify-center overflow-x-clip p-0'>
				<Container>
					<HeroBeam />
				</Container>
				<BackgroundBoxes />
				<LampDemo />
				{/* <CircleContainer /> */}
				<Container>
					<Contact />
				</Container>
			</main>
			<Footer />
		</>
	);
}
