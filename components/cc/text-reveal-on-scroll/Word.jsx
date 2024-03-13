/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './style.module.scss';

export default function Paragraph({ paragraph }) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start 0.3', 'start 0.2']
	});

	const words = paragraph.split(' ');
	return (
		<p
			ref={container}
			className='flex w-full max-w-screen-xl flex-wrap p-10 text-justify text-xl leading-none shadow-foreground-700 text-shadow-lg md:text-2xl lg:text-3xl'
		>
			{words.map((word, i) => {
				const start = i / words.length;
				const end = start + 1 / words.length;
				return (
					<Word
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={i}
						progress={scrollYProgress}
						range={[start, end]}
					>
						{word}
					</Word>
				);
			})}
		</p>
	);
}

const Word = ({ children, progress, range }) => {
	const opacity = useTransform(progress, range, [0, 1]);
	return (
		<span className={styles.word}>
			<span className={styles.shadow}>{children}</span>
			<motion.span style={{ opacity: opacity }}>{children}</motion.span>
		</span>
	);
};
