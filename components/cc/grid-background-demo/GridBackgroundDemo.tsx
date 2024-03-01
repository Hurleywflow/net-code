import { useTranslations } from 'next-intl';
import { BentoGridProjects } from '../project-parallax/BentoGrid';

export function GridBackgroundDemo() {
	const t = useTranslations('Index');
	return (
		<section className='relative flex h-fit w-full flex-col  items-center justify-center bg-foreground bg-grid-white/[0.2] dark:bg-black dark:bg-grid-foreground/[0.2]' id="projects">
			{/* Radial gradient for the container to give a faded look */}
			<div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-foreground [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black' />
			{/* <p className='relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl'>
				Backgrounds
			</p> */}
			<div className='relative left-0 top-0 z-20 w-[90vw] max-w-6xl px-4 py-20 md:mx-auto  md:w-full'>
				<h2 className='mt-8 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-5xl font-bold text-transparent md:text-6xl lg:text-7xl '>
					{t('project1')}
				</h2>
				<p className='mt-8 max-w-2xl text-lg font-normal text-neutral-100'>
					{t('project2')}
				</p>
			</div>
			<div className='relative z-20 mb-28'>
				<BentoGridProjects />
			</div>
		</section>
	);
}
