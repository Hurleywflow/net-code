/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useTranslations } from 'next-intl';

export const Header = () => {
	const t = useTranslations('Index');
	return (
		<div className='relative left-0 top-0 mx-auto w-full max-w-7xl px-4  py-20 md:py-40'>
			<h2 className='mt-8 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-5xl font-bold text-transparent md:text-6xl lg:text-7xl '>
				{t('project1')}
			</h2>
			<p className='mt-8 max-w-2xl text-lg font-normal text-neutral-100'>
				{t('project2')}
			</p>
		</div>
	);
};
