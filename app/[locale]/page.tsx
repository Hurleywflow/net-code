import { Container } from '@/components/cc/container/container';
import dynamic from 'next/dynamic';
const Contact = dynamic(async () => import('@/components/cc/Contact/contact'));
const Footer = dynamic(async () => import('@/components/cc/footer/footer'));
const HeroBeam = dynamic(
	async () => import('@/components/cc/heroBeam/heroBeam'),
);
const LampDemo = dynamic(async () => import('@/components/cc/lamp/lamp'));

// import CircleContainer from '@/components/cc/circle-container/circle-container';

// import { BackgroundBoxes } from '@/components/cc/project-parallax/BackgroundBoxes';

export default function Home() {
	return (
		<>
			<main className='m-0 flex min-h-[100svh] min-w-full flex-col items-center justify-center overflow-x-clip p-0'>
				<Container>
					<HeroBeam />
				</Container>
				{/* <BackgroundBoxes /> */}
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
