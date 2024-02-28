import { useTranslations } from 'next-intl';
import Description from '../Description';
import { TitleSparkles } from '../title-sparkles/title-sparkles';
import { TitleSpotlight } from '../title-spotlight/title-spotlight';

function HeroBeam() {
	const t = useTranslations('Index');
	return (
		<section
			id='home'
			className='m-0 flex w-screen flex-col items-center justify-center '
		>
			<div className='wrapper'>
				<div className='full-bleed relative z-30 flex h-screen items-center bg-cover bg-center pb-20'>
					{/* add a background beams and spotlight */}
					<TitleSpotlight />
				</div>
				<div className='mt-[-100vh] h-[220vh] [view-timeline-name:--reveal-wrapper] lg:h-[500vh]'>
					<div className='sticky top-0 flex min-h-screen flex-col items-center justify-center'>
						<TitleSparkles />
						<div className='my-10 hidden lg:block'>
							<p className='supports-[animation-timeline]:reveal-text text-balance text-xl text-foreground shadow-foreground-400 text-shadow-lg md:text-2xl lg:text-3xl lg:leading-[1]'>
								{t('hero4')}
							</p>
						</div>
						<div className='my-10 lg:hidden'>
							<Description />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroBeam;
