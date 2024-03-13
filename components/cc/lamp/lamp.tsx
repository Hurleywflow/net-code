/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
import { MotionDiv } from '@/lib/framer';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import type React from 'react';
import { QuestionAnswers } from '../question-answer/question-answer';

export default function LampDemo() {
	const t = useTranslations('Index');
	return (
		<section
			id='faqs'
			className='m-0 flex items-center justify-center  bg-foreground p-0'
		>
			<LampContainer>
				<MotionDiv
					initial={{ opacity: 0.5, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: 'easeInOut'
					}}
					className='mt-64 flex w-screen flex-col items-center justify-center'
				>
					<h2 className='mt-8 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-5xl font-bold text-transparent md:text-6xl lg:text-7xl '>
						{' '}
						{t('questionTitle')}
					</h2>
					<QuestionAnswers />
				</MotionDiv>
			</LampContainer>
		</section>
	);
}

const LampContainer = ({
	children,
	className
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				'relative flex min-h-[150vh] md:min-h-[120vh] lg:min-h-screen flex-col items-center justify-center overflow-hidden bg-foreground w-screen z-0 pt-96',
				className
			)}
		>
			<div className='relative isolate z-0 flex w-screen flex-1 scale-y-125 items-center justify-center '>
				<MotionDiv
					initial={{ opacity: 0.5, width: '15rem' }}
					whileInView={{ opacity: 1, width: '30rem' }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: 'easeInOut'
					}}
					style={{
						// biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
						backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`
					}}
					className='bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]'
				>
					<div className='absolute  bottom-0 left-0 z-20 h-40 w-[100%] bg-foreground [mask-image:linear-gradient(to_top,white,transparent)]' />
					<div className='absolute  bottom-0 left-0 z-20 h-[100%]  w-40 bg-foreground [mask-image:linear-gradient(to_right,white,transparent)]' />
				</MotionDiv>
				<MotionDiv
					initial={{ opacity: 0.5, width: '15rem' }}
					whileInView={{ opacity: 1, width: '30rem' }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: 'easeInOut'
					}}
					style={{
						backgroundImage:
							'conic-gradient(var(--conic-position), var(--tw-gradient-stops))'
					}}
					className='bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[30rem] from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]'
				>
					<div className='absolute  bottom-0 right-0 z-20 h-[100%]  w-40 bg-foreground [mask-image:linear-gradient(to_left,white,transparent)]' />
					<div className='absolute  bottom-0 right-0 z-20 h-40 w-[100%] bg-foreground [mask-image:linear-gradient(to_top,white,transparent)]' />
				</MotionDiv>
				<div className='absolute top-1/2 h-48 w-screen translate-y-12 scale-x-150 bg-foreground blur-2xl' />
				<div className='absolute top-1/2 z-50 h-48 w-screen bg-transparent opacity-10 backdrop-blur-md' />
				<div className='absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl' />
				<MotionDiv
					initial={{ width: '8rem' }}
					whileInView={{ width: '16rem' }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: 'easeInOut'
					}}
					className='absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl'
				/>
				<MotionDiv
					initial={{ width: '15rem' }}
					whileInView={{ width: '30rem' }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: 'easeInOut'
					}}
					className='absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 '
				/>

				<div className='absolute inset-auto z-40 h-44 w-screen -translate-y-[12.5rem] bg-foreground ' />
			</div>

			<div className='relative z-50 flex -translate-y-80 flex-col items-center px-5'>
				{children}
			</div>
		</div>
	);
};
