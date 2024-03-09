import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import TextRevealOnScroll from '../text-reveal-on-scroll/TextRevealOnScroll';
import TextRevealOnScrollMobile from '../text-reveal-on-scroll/TextRevealOnScrollMobile';

const Description = dynamic(async () => import('../Description'));
const TitleSpotlight = dynamic(
	async () => import('../title-spotlight/title-spotlight'),
);
const AnimatedText = dynamic(
	async () => import('../animated-text/AnimatedText'),
);

function HeroBeam() {
	const t = useTranslations('Index');
	return (
		<section
			id='home'
			className='m-0 flex w-screen flex-col items-center justify-center bg-gradient-to-br from-neutral-400 to-secondary '
		>
			<div className='wrapper'>
				<div className='full-bleed relative z-20 flex h-screen items-center bg-cover bg-center pb-20'>
					{/* add a background beams and spotlight */}
					<TitleSpotlight />
				</div>
				<div className='mt-[-100vh] h-[180vh]'>
					<div className='sticky top-0 flex min-h-screen flex-col items-center justify-center'>
						{/* <InfiniteTextScrolling /> */}
						{/* <TextRevealCardPreview /> */}
						{/* <TitleSparkles /> */}
						<AnimatedText
							el='span'
							text={['NetCode']}
							className='bg-gradient-to-b from-neutral-400 to-neutral-800 bg-clip-text text-6xl font-bold text-transparent shadow-neutral-500 text-shadow-lg md:text-7xl lg:text-8xl'
							repeatDelay={5000}
						/>
						{/* <div className='my-10 lg:hidden'>
							<Description />
						</div> */}
						{/* <div className='my-10'>
							<p className='supports-[animation-timeline]:reveal-text text-balance text-xl text-foreground shadow-foreground-400 text-shadow-lg md:text-2xl lg:text-3xl lg:leading-[1]'>
								{t('hero4')}
							</p>
						</div> */}
						<div className='lg:hidden'>
							<TextRevealOnScrollMobile />
						</div>
						<div className='hidden lg:flex'>
							<TextRevealOnScroll />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroBeam;
