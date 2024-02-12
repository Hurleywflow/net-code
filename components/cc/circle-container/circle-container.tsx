/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
'use client';
import { MotionDiv } from '@/lib/framer';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
// import styles from './style.module.scss';

export default function CircleContainer() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start'],
	});

	const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
	const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
	const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

	return (
		<div ref={container} className='bg-grid-white/[0.02] antialiased'>
			<MotionDiv
				style={{ height }}
				className='relative flex size-full flex-wrap items-center justify-center bg-[red]'
			>
				<div className='bg-grid-white/[0.02] absolute h-[1550%]  w-screen rounded-[0_0_50%_50%] bg-foreground shadow-[0px_110px_100px_rgba(0,0,0,0.748)]' />
			</MotionDiv>
		</div>
	);
}
