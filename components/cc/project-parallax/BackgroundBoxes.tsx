import { Boxes } from '@/components/cc/boxes/Boxes';
import { useTranslations } from 'next-intl';
import { BentoGridProjects } from './BentoGrid';

export function BackgroundBoxes() {
	const t = useTranslations('Index');
	return (
		<div className='relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-none bg-foreground px-28'>
			<div className='pointer-events-none absolute inset-0 z-20 size-full bg-foreground [mask-image:radial-gradient(transparent,white)]' />

			<Boxes className='absolute h-fit' />
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
		</div>
	);
}
