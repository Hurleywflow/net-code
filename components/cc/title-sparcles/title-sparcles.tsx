'use client';
import SparklesCore from './sparkles';

export function TitleSparkles() {
	return (
		<div className='flex h-[20rem] w-full max-w-screen-2xl flex-col items-center justify-center overflow-hidden rounded-md bg-black'>
			<h1 className='relative z-20 text-center text-3xl font-bold text-white md:text-7xl lg:text-9xl'>
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
