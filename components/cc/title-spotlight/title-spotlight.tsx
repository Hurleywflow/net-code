import Magnetic from '@/components/cc/common/Magnetic';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Meteors } from '../meteors/meteors';
import { Spotlight } from './spotlight';

export function TitleSpotlight() {
	return (
		<header className='relative z-10 flex size-full h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-foreground '>
			<div className='relative mx-auto flex size-full items-center justify-center overflow-hidden rounded-md bg-foreground antialiased '>
				<Spotlight
					className='-top-40 left-0 md:-top-20 md:left-[20rem] lg:left-[30rem] xl:left-[40rem] 2xl:left-[50rem]'
					fill='white'
				/>
				<div className=' mx-auto flex   max-w-7xl flex-col gap-5 p-4'>
					{/* <!-- Element 1 --> */}
					<div className='animate-slidein opacity-0 [--slidein-delay:100ms]'>
						<h2 className='relative  bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center font-sans text-2xl  font-semibold italic text-transparent md:text-4xl lg:text-5xl'>
							It's time to establish a connection.
						</h2>
					</div>
					{/* <!-- Element 2 --> */}
					<h1 className='relative  animate-slidein bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text  text-center text-5xl font-bold text-transparent  opacity-0 [--slidein-delay:300ms] md:text-7xl lg:text-8xl'>
						Boost your business with superior web development that drives leads
						and revenue.
					</h1>
					{/* <!-- Element 3 --> */}
					<p className='relative  mx-auto my-2 max-w-xl animate-slidein text-center text-medium font-normal text-neutral-200 opacity-0 [--slidein-delay:500ms] lg:text-xl'>
						NetCode provides tailored web development solutions at an affordable
						rate. Our experienced developers set industry standards at an
						affordable price.
					</p>
					{/* <!-- Element 4 --> */}
					<div className='relative  mx-auto my-2 max-w-lg animate-slidein text-center text-medium text-neutral-500 opacity-0 [--slidein-delay:700ms]'>
						<Link href='#faqs'>
							<Magnetic>
								<Button
									className='rounded-full bg-secondary text-medium font-semibold'
									size={'lg'}
									variant={'gooeyLeft'}
								>
									FAQs
								</Button>
							</Magnetic>
						</Link>
					</div>
				</div>
			</div>
			{/* meteors hero section background */}
			<Meteors number={80} />
		</header>
	);
}
