"use client"
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable no-undef */
import { Variant, motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

type AnimatedTextProps = {
	text: string | string[];
	el?: keyof JSX.IntrinsicElements;
	className?: string;
	once?: boolean;
	repeatDelay?: number;
	animation?: {
		hidden: Variant;
		visible: Variant;
	};
};

const defaultAnimations = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.1,
		},
	},
};

export const AnimatedText = ({
	text,
	el: Wrapper = 'p',
	className,
	once,
	repeatDelay,
	animation = defaultAnimations,
}: AnimatedTextProps) => {
	const controls = useAnimation();
	const textArray = Array.isArray(text) ? text : [text];
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.5, once });

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		let timeout: NodeJS.Timeout;
		const show = () => {
			controls.start('visible');
			if (repeatDelay) {
				timeout = setTimeout(async () => {
					await controls.start('hidden');
					controls.start('visible');
				}, repeatDelay);
			}
		};

		if (isInView) {
			show();
		} else {
			controls.start('hidden');
		}

		return () => clearTimeout(timeout);
	}, [controls, isInView, repeatDelay]);

	return (
		<Wrapper className={className}>
			<span className='sr-only'>{textArray.join(' ')}</span>
			<motion.span
				ref={ref}
				initial='hidden'
				animate={controls}
				variants={{
					visible: { transition: { staggerChildren: 0.1 } },
					hidden: {},
				}}
				aria-hidden
			>
				{textArray.map((line, lineIndex) => (
					<span
						className='block'
						key={`${line}-${
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							lineIndex
						}`}
					>
						{line.split(' ').map((word, wordIndex) => (
							<span
								className='inline-block'
								key={`${word}-${
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									wordIndex
								}`}
							>
								{word.split('').map((char, charIndex) => (
									<motion.span
										key={`${char}-${
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											charIndex
										}`}
										className='inline-block'
										variants={animation}
									>
										{char}
									</motion.span>
								))}
								<span className='inline-block'>&nbsp;</span>
							</span>
						))}
					</span>
				))}
			</motion.span>
		</Wrapper>
	);
};

export default AnimatedText;
