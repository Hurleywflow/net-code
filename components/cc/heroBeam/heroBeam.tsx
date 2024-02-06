import { TitleSparkles } from '../title-sparcles/title-sparcles';
import { BackgroundBeamsHero } from './backgroundBeam';

// type ParallaxImageProps = {
// 	smallImage: string;
// 	largeImage: string;
// 	smallImageSide: 'left' | 'right';
// 	parallaxDistance: string;
// };

// const ParallaxImage = ({
// 	smallImage,
// 	largeImage,
// 	smallImageSide,
// 	parallaxDistance,
// }: ParallaxImageProps) => {
// 	return (
// 		<div
// 			className={twMerge(
// 				'col-[wide] my-20 grid gap-3 [view-timeline-name:--parallax-wrapper]',
// 				smallImageSide === 'left'
// 					? 'md:grid-cols-[1fr_2fr]'
// 					: 'md:grid-cols-[2fr_1fr]',
// 			)}
// 		>
// 			<div className='self-start'>
// 				<div
// 					className='md:supports-[animation-timeline]:parallax-image relative'
// 					style={{ '--movement': parallaxDistance } as React.CSSProperties}
// 				>
// 					<div className='absolute bottom-full pb-5 text-[8px] uppercase'>
// 						<p>Teenie-tiny.</p>
// 						<p className='text-gray-400'>
// 							The Tadpole is just a tad taller than a gummy bear. It fits in
// 							your hand and rests nicely on your laptop display.
// 						</p>
// 					</div>
// 					{/* biome-ignore lint/a11y/useAltText: <explanation> */}
// 					<img src={smallImage} className='rounded-md' />
// 				</div>
// 			</div>

// 			{/* biome-ignore lint/a11y/useAltText: <explanation> */}
// 			<img
// 				src={largeImage}
// 				className={twMerge(
// 					'rounded-md',
// 					smallImageSide === 'right' && 'md:-order-1',
// 				)}
// 			/>
// 		</div>
// 	);
// };

function HeroBeam() {
	return (
		<section>
			<BackgroundBeamsHero />
			<div className='wrapper'>
				{/* background beams */}
				{/* <div className='full-bleed relative z-10 flex h-screen items-center bg-zinc-800 bg-[url(/img/opal-rebuild/hero-tadpole.webp)] bg-cover bg-center pb-20'>
					<BackgroundBeamsHero />
				</div> */}
				<div className='mt-[-100svh] h-[500svh] [view-timeline-name:--reveal-wrapper]'>
					<div className='sticky top-0 flex min-h-screen flex-col items-center justify-center'>
						<TitleSparkles />
						<div className='p-10'>
							<p className='supports-[animation-timeline]:reveal-text text-balance text-2xl text-neutral-500 shadow-neutral-500 text-shadow-lg md:text-3xl lg:text-4xl lg:leading-[1]'>
								We have a proven track record in designing websites that are
								both visually appealing and user-friendly. A solid company
								branding is an essential element for any successful website. Our
								team builds scalable websites from scratch that seamlessly
								integrate with design. Our focus is on micro animations,
								transitions, and interaction to enhance user experience. For
								content management, we use headless Sanity CMS. We pride
								ourselves on delivering complete websites from concept to
								implementation, which sets us apart from the competition. Our
								excellent design sense and development skills enable us to
								create outstanding projects.
							</p>
						</div>
					</div>
				</div>

				{/* <ParallaxImage
					smallImage='/img/opal-rebuild/image-1.webp'
					largeImage='/img/opal-rebuild/image-2.webp'
					smallImageSide='left'
					parallaxDistance='100%'
								/>

								<ParallaxImage
					smallImage='/img/opal-rebuild/image-1.webp'
					largeImage='/img/opal-rebuild/image-2.webp'
					smallImageSide='right'
					parallaxDistance='100%'
								/> */}

				{/* <div className='full-bleed flex h-screen items-center justify-center bg-gray-100 px-4 text-lg md:text-2xl'>
					<div className='max-w-[800px] space-y-3'>
						<p>
							This is a rebuild by{' '}
							<a
								href='https://www.frontend.fyi'
								target='_blank'
								className='underline'
								rel='noreferrer'
							>
								Frontend.FYI
							</a>
							, rebuilding the{' '}
							<a
								href='https://opalcamera.com/opal-tadpole'
								target='_blank'
								className='underline'
								rel='noreferrer'
							>
								Opal Tadpole
							</a>{' '}
							animations with modern CSS techniques. This website is in no way
							related to Opal. Their design is only used as an inspiration to
							teach frontend development.
						</p>
						<p>
							All images are taken from Opal's Press kit, and remain copyrighted
							by Opal.
						</p>
					</div>
								</div> */}
			</div>
		</section>
	);
}

export default HeroBeam;
