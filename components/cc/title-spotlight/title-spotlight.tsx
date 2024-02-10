import { Button } from '@/components/ui/button';
import Link from 'next/link';
import CircleContainer from '../circle-container/circle-container';
import { Meteors } from '../meteors/meteors';
import { QuestionAnswers } from '../question-answer/question-answer';
import { Spotlight } from './spotlight';

export function TitleSpotlight() {
	return (
		<section className='relative z-10 flex size-full h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-foreground '>
			<div className='bg-grid-white/[0.02] relative mx-auto flex size-full items-center justify-center overflow-hidden rounded-md antialiased '>
				<Spotlight
					className='-top-40 left-0 md:-top-20 md:left-[20rem] lg:left-[30rem] xl:left-[40rem] 2xl:left-[50rem]'
					fill='white'
				/>
				<div className=' mx-auto flex   max-w-7xl flex-col gap-5 p-4'>
					{/* <!-- Element 1 --> */}
					<div className='animate-slidein opacity-0 [--slidein-delay:500ms]'>
						<div className='relative  bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center font-sans text-3xl  font-bold text-transparent md:text-4xl lg:text-5xl'>
							It's time to establish a connection.
						</div>
					</div>
					{/* <!-- Element 2 --> */}
					<h1 className='relative  animate-slidein bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text  text-center font-sans text-6xl font-bold text-transparent  opacity-0 [--slidein-delay:500ms] md:text-7xl lg:text-8xl xl:text-9xl'>
						NetCode is a superior approach to product development.
					</h1>
					{/* <!-- Element 3 --> */}
					<p className='relative  mx-auto my-2 max-w-lg animate-slidein text-center text-medium font-normal text-neutral-200 opacity-0 [--slidein-delay:700ms] lg:text-xl'>
						Our team of experienced developers provide custom web development
						solutions that meet industry standards at an affordable price.
					</p>
					{/* <!-- Element 4 --> */}
					<div className='relative  mx-auto my-2 max-w-lg animate-slidein text-center text-medium text-neutral-500 opacity-0 [--slidein-delay:900ms]'>
						<Link href='#contact'>
							<Button
								className='rounded-full text-medium font-semibold'
								size={'lg'}
								variant={'secondary'}
							>
								Get in touch
							</Button>
						</Link>
					</div>
				</div>
			</div>
			{/* meteors hero section background */}
			<Meteors number={60} />
		</section>
	);
}
