/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
'use client';

import { MotionDiv } from '@/lib/framer';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

type Tab = {
	title: string;
	value: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	content?: string | React.ReactNode | any;
};

export const Tabs = ({
	tabs: propTabs,
	containerClassName,
	activeTabClassName,
	tabClassName,
	contentClassName,
}: {
	tabs: Tab[];
	containerClassName?: string;
	activeTabClassName?: string;
	tabClassName?: string;
	contentClassName?: string;
}) => {
	const [active, setActive] = useState<Tab>(propTabs[0]);
	const [tabs, setTabs] = useState<Tab[]>(propTabs);

	const moveSelectedTabToTop = (idx: number) => {
		const newTabs = [...propTabs];
		const selectedTab = newTabs.splice(idx, 1);
		newTabs.unshift(selectedTab[0]);
		setTabs(newTabs);
		setActive(newTabs[0]);
	};

	const [hovering, setHovering] = useState(false);

	return (
		<>
			<div
				className={cn(
					'flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full',
					containerClassName,
				)}
			>
				{propTabs.map((tab, idx) => (
					<Link key={tab.title} href={tab.content ?? ''}>
						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
						<button
							// key={tab.title}
							onClick={() => {
								moveSelectedTabToTop(idx);
							}}
							onMouseEnter={() => setHovering(true)}
							onMouseLeave={() => setHovering(false)}
							className={cn('relative px-4 py-2 rounded-full', tabClassName)}
							style={{
								transformStyle: 'preserve-3d',
							}}
						>
							{active.value === tab.value && (
								<MotionDiv
									layoutId='clickedbutton'
									transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
									className={cn(
										'absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full ',
										activeTabClassName,
									)}
								/>
							)}
							<span className='relative block text-black dark:text-white'>
								{tab.title}
							</span>
						</button>
					</Link>
				))}
			</div>
			<FadeInDiv
				tabs={tabs}
				active={active}
				key={active.value}
				hovering={hovering}
				className={cn('mt-32', contentClassName)}
			/>
		</>
	);
};

export const FadeInDiv = ({
	className,
	tabs,
	hovering,
}: {
	className?: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	key?: any;
	tabs: Tab[];
	active: Tab;
	hovering?: boolean;
}) => {
	const isActive = (tab: Tab) => {
		return tab.value === tabs[0].value;
	};
	return (
		<div className='relative size-full'>
			{tabs.map((tab, idx) => (
				<MotionDiv
					key={tab.value}
					layoutId={tab.value}
					style={{
						scale: 1 - idx * 0.1,
						top: hovering ? idx * -50 : 0,
						zIndex: -idx,
						opacity: idx < 3 ? 1 - idx * 0.1 : 0,
					}}
					animate={{
						y: isActive(tab) ? [0, 40, 0] : 0,
					}}
					className={cn('w-full h-full absolute top-0 left-0', className)}
				>
					{/* {tab.content} */}
				</MotionDiv>
			))}
		</div>
	);
};
