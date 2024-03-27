'use client';
import { cn } from '@/lib/utils';
import { motion, stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

const TextGenerateEffect = ({
	words,
	className
}: {
	words: string;
	className?: string;
}): JSX.Element => {
	const [scope, animate] = useAnimate();
	const wordsArray = words.split(' ');
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		void animate(
			'span',
			{
				opacity: 1
			},
			{
				duration: 2,
				delay: stagger(0.1)
			}
		);
	}, [animate]);

	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{wordsArray.map((word, idx) => {
					return (
						<motion.span
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={word + idx}
							// changing text format here
							className='text-balance text-xl text-foreground-700 shadow-foreground-400 text-shadow-lg md:text-2xl'
						>
							{word}{' '}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn('font-normal', className)}>
			<div className='mt-4'>
				<div className=' text-2xl leading-snug tracking-wide text-black dark:text-white'>
					{renderWords()}
				</div>
			</div>
		</div>
	);
};

export default TextGenerateEffect;
