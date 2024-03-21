import { GridSmallBackgroundDemo } from '../background/GridSmallBackground';
import TitleSpotlight from '../title-spotlight/title-spotlight';


function HeroBeam() {
	return (
		<section
			id='home'
			className='m-0 flex w-screen flex-col items-center justify-center bg-background bg-grid-small-black/[0.2] dark:bg-black dark:bg-grid-small-white/[0.2] '
		>
			<div className='wrapper'>
				<div className='full-bleed relative z-20 flex h-screen items-center bg-cover bg-center pb-20'>
					{/* add a background beams and spotlight */}
					<TitleSpotlight />
				</div>
				<GridSmallBackgroundDemo />
				{/* <div className='mt-[-100vh] h-[180vh]'>
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
				</div> */}
			</div>
		</section>
	);
}

export default HeroBeam;
