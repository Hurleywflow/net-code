import dynamic from 'next/dynamic';
const AnimatedText = dynamic(
	async () => import('../animated-text/AnimatedText')
);
const TextRevealOnScroll = dynamic(
	async () => import('../text-reveal-on-scroll/TextRevealOnScroll')
);
const TextRevealOnScrollMobile = dynamic(
	async () => import('../text-reveal-on-scroll/TextRevealOnScrollMobile')
);

export function GridSmallBackgroundDemo() {
	return (
		<div className='relative mt-[-100vh] flex h-[180vh]  w-full  items-center justify-center'>
			{/* Radial gradient for the container to give a faded look */}
			<div className='pointer-events-none absolute inset-0 flex items-center justify-center' />
			{/* <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black' /> */}
			{/* <p className='relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl'>
				Backgrounds
			</p> */}
			<div className='sticky top-0 flex min-h-screen flex-col items-center justify-center'>
				<AnimatedText
					el='span'
					text={['NetCode']}
					className='bg-gradient-to-b from-neutral-400 to-neutral-800 bg-clip-text text-6xl font-bold text-transparent shadow-neutral-500 text-shadow-lg md:text-7xl lg:text-8xl'
					repeatDelay={5000}
					
				/>

				<div className='lg:hidden'>
					<TextRevealOnScrollMobile />
				</div>
				<div className='hidden md:flex'>
					<TextRevealOnScroll />
				</div>
			</div>
		</div>
	);
}
