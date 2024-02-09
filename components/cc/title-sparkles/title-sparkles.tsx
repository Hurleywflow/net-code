import dynamic from 'next/dynamic';
// add dynamic import for SparklesCore

async function getSparkles() {
	return import('@/components/cc/title-sparkles/sparkles');
}
const SparklesCore = dynamic(getSparkles);

export function TitleSparkles() {
	return (
		<div
			className='flex h-[20rem] w-screen  max-w-screen-2xl flex-col items-center justify-center overflow-hidden rounded-md bg-foreground lg:w-full'
			id='intro'
		>
			<h1 className='relative z-20 text-wrap bg-gradient-to-b from-neutral-500  to-neutral-950 bg-clip-text p-5 text-center text-7xl text-transparent md:text-8xl  lg:text-[9rem] xl:text-[10rem] 2xl:text-[11rem]'>
				NetCode
			</h1>
			<div className='relative h-40 w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[40vw]'>
				{/* Gradients */}
				<div className='absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm' />
				<div className='absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
				<div className='absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm' />
				<div className='absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent' />

				{/* Core component */}
				<SparklesCore
					background='transparent'
					minSize={0.4}
					maxSize={1}
					particleDensity={1200}
					className='size-full'
					particleColor='#FFFFFF'
				/>

				{/* Radial Gradient to prevent sharp edges */}
				<div className='absolute inset-0 size-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]' />
			</div>
		</div>
	);
}
