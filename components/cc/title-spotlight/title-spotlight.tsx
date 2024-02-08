import CircleContainer from '../circle-container/circle-container';
import { QuestionAnswers } from '../question-answer/question-answer';
import { Spotlight } from './spotlight';

export function TitleSpotlight() {
	return (
		<section className='z-10 flex w-full flex-col items-center justify-center bg-foreground '>
			<div className='bg-grid-white/[0.02] relative mx-auto flex min-h-fit w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center '>
				<Spotlight
					className='-top-40 left-0 md:-top-20 md:left-[20rem] lg:left-[30rem] xl:left-[40rem] 2xl:left-[50rem]'
					fill='white'
				/>
				<div className=' relative z-10  mx-auto w-full max-w-7xl  p-4 pt-20'>
					<h1 className=' bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-5xl font-bold text-transparent md:text-7xl'>
						Spotlight <br /> is the new trend.
					</h1>
					<p className='mx-auto mt-4 max-w-lg text-center text-lg font-normal text-neutral-100'>
						Spotlight effect is a great way to draw attention to a specific part
						of the page. Here, we are drawing the attention towards the text
						section of the page. I don&apos;t know why but I&apos;m running out
						of copy.
					</p>
					<QuestionAnswers />
				</div>
			</div>
			<CircleContainer />
		</section>
	);
}
