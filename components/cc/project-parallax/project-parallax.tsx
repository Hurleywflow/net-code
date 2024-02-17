'use client';

import { MotionDiv } from '@/lib/framer';
import { MotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const ProjectParallax = ({
	products,
}: {
	products: {
		title?: string;
		link?: string;
		thumbnail?: string;
	}[];
}) => {
	const firstRow = products.slice(0, 3);
	const secondRow = products.slice(3, 6);
	const thirdRow = products.slice(6, 9);
	// const firstRow = products.slice(0, 5);
	// const secondRow = products.slice(5, 10);
	// const thirdRow = products.slice(10, 15);
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	const translateX = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, 1000]),
		springConfig,
	);
	const translateXReverse = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, -1000]),
		springConfig,
	);
	const rotateX = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [15, 0]),
		springConfig,
	);
	const opacity = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
		springConfig,
	);
	const rotateZ = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [20, 0]),
		springConfig,
	);
	const translateY = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
		springConfig,
	);
	return (
		<section
			id='projects'
			ref={ref}
			className='relative flex h-[250svh] w-screen  flex-col self-auto overflow-hidden antialiased [perspective:1000px] [transform-style:preserve-3d]'
		>
			<Header />
			<MotionDiv
				style={{
					rotateX,
					rotateZ,
					translateY,
					opacity,
				}}
				className=''
			>
				<MotionDiv className='mb-20 flex flex-row-reverse space-x-20 space-x-reverse'>
					{firstRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</MotionDiv>
				<MotionDiv className='mb-20 flex  flex-row space-x-20 '>
					{secondRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateXReverse}
							key={product.title}
						/>
					))}
				</MotionDiv>
				<MotionDiv className='flex flex-row-reverse space-x-20 space-x-reverse'>
					{thirdRow.map((product) => (
						<ProductCard
							product={product}
							translate={translateX}
							key={product.title}
						/>
					))}
				</MotionDiv>
			</MotionDiv>
		</section>
	);
};

export const Header = () => {
	return (
		<div className='relative left-0 top-0 mx-auto w-full max-w-7xl px-4  py-20 md:py-40'>
			<h2 className='mt-8 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-5xl font-bold text-transparent md:text-6xl lg:text-7xl '>
				The Ultimate <br /> Development Clients Project.
			</h2>
			<p className='mt-8 max-w-2xl text-lg font-normal text-neutral-100'>
				We are a team of passionate developers and designers who create stunning
				products using the latest technologies and frameworks.
			</p>
		</div>
	);
};

export const ProductCard = ({
	product,
	translate,
}: {
	product: {
		title?: string;
		link?: string;
		thumbnail?: string;
	};
	translate?: MotionValue<number>;
}) => {
	return (
		<MotionDiv
			style={{
				x: translate,
			}}
			whileHover={{
				y: -20,
			}}
			key={product.title}
			className='group/product relative h-96 w-[30rem] shrink-0'
		>
			<Link
				href={product.link ?? ''}
				className='block group-hover/product:shadow-2xl '
			>
				<Image
					src={product.thumbnail ?? ''}
					height='600'
					width='600'
					className='absolute inset-0 size-full object-cover object-left-top'
					alt={product.title ?? ''}
				/>
			</Link>
			<div className='pointer-events-none absolute inset-0 size-full bg-black opacity-0 group-hover/product:opacity-80' />
			<h2 className='absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100'>
				{product.title}
			</h2>
		</MotionDiv>
	);
};
