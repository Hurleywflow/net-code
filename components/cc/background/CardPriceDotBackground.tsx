import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
const CardRegular = dynamic(
	async () => import('../card-pricing/PricingCardBasic')
);
const CardCustom = dynamic(
	async () => import('../card-pricing/PricingCardCustom')
);

function CardPriceDotBackground() {
	const t = useTranslations('Index');
	return (
		<section
			className='relative flex min-h-screen w-full  items-center justify-center bg-background bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]'
			id='pricing'
		>
			{/* Radial gradient for the container to give a faded look */}
			<div
				className='pointer-events-none absolute inset-0 flex items-center justify-center bg-background
		 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black'
			/>
			{/* <p className='relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl'>
				Backgrounds
			</p> */}
			<div className='relative z-10 my-10 flex flex-col items-center justify-center'>
				<i className='text-xl text-foreground shadow-foreground-700 text-shadow-lg md:text-2xl'>
					{t('pricingTitle1')}
				</i>
				<h3 className='bg-gradient-to-b from-neutral-700 to-neutral-900 bg-clip-text py-4 text-center text-5xl font-bold text-transparent shadow-neutral-500 text-shadow-lg md:text-6xl lg:text-7xl'>
					{t('pricingTitle2')}
				</h3>
				<p className='text-balance text-center text-xl text-foreground-700 shadow-foreground-400 text-shadow-lg md:text-2xl'>
					{t('pricingTitle3')}
				</p>
				<div className='mt-20 flex flex-col gap-20 md:flex-row '>
					<CardRegular />
					<CardCustom />
				</div>
			</div>
		</section>
	);
}
export default CardPriceDotBackground;
