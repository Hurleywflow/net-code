import { Container } from '@/components/cc/container/container';
import dynamic from 'next/dynamic';
const GridBackgroundDemo = dynamic(
	async () => import('@/components/cc/grid-background-demo/GridBackgroundDemo'),
);
const GridBackgroundDemoLight = dynamic(
	async () =>
		import('@/components/cc/grid-background-demo/GridBackgroundDemoLight'),
);
const Footer = dynamic(async () => import('@/components/cc/footer/footer'));
const HeroBeam = dynamic(
	async () => import('@/components/cc/heroBeam/heroBeam'),
);
const LampDemo = dynamic(async () => import('@/components/cc/lamp/lamp'));

export default function Home() {
	return (
		<>
			<main className='m-0 flex min-h-[100svh] min-w-full flex-col items-center justify-center overflow-x-clip p-0'>
				<Container>
					<HeroBeam />
				</Container>
				{/* Projects Component */}
				<GridBackgroundDemo />
				{/* FAQs component */}
				<LampDemo />
				{/* <CircleContainer /> */}
				{/* contact component */}
				<GridBackgroundDemoLight />
			</main>
			<Footer />
		</>
	);
}
