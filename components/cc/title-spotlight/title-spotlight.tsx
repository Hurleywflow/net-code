import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
const SelectLanguage = dynamic(
	async () => import('../selectLanguage/selectLanguage')
);
const Spotlight = dynamic(async () => import('./spotlight'));
const Meteors = dynamic(async () => import('../meteors/meteors'));

function TitleSpotlight() {
	const t = useTranslations('Index');

	// const isDesktop = useMediaQuery('(min-width: 768px)');
	// const matches = useMediaQuery('(min-width: 768px)');
	return (
		<header className='relative z-10 flex size-full h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-foreground '>
			<div className='relative mx-auto flex size-full items-center justify-center overflow-hidden rounded-md bg-foreground antialiased '>
				<Spotlight
					className='-top-40 left-0 md:-top-20 md:left-[20rem] lg:left-[30rem] xl:left-[40rem] 2xl:left-[50rem]'
					fill='white'
				/>
				<div className=' mx-auto flex   max-w-7xl flex-col gap-5 p-4'>
					{/* <!-- Element 1 --> */}
					<div className=''>
						<h2 className='relative  bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text p-4  text-center  text-2xl font-semibold italic text-transparent md:text-4xl lg:text-5xl'>
							{t('hero1')}
						</h2>
					</div>
					{/* <!-- Element 2 --> */}
					<h1 className='relative   bg-gradient-to-b from-neutral-100 to-neutral-300 bg-clip-text  p-4 text-center text-5xl font-bold  text-transparent  md:text-7xl lg:text-8xl'>
						{t('hero2')}
					</h1>
					{/* <!-- Element 3 --> */}
					<p className='relative  mx-auto my-2 max-w-xl animate-slidein text-center text-sm font-normal text-neutral-200 [--slidein-delay:300ms] lg:text-medium'>
						{t('hero3')}
					</p>
					{/* <!-- Element 4 --> */}
					<div className='relative  mx-auto my-2 max-w-lg animate-slidein text-center text-medium text-neutral-500 [--slidein-delay:600ms]'>
						<SelectLanguage />
					</div>
				</div>
			</div>
			{/* meteors hero section background */}
			<Meteors number={90} />
		</header>
	);
}
export default TitleSpotlight;
