import { cn } from '@/lib/utils';
import Link from 'next/link';

export const BentoGrid = ({
	className,
	children
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				'grid md:auto-rows-[18rem] grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto ',
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	header,
	icon,
	link
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	header?: React.ReactNode;
	icon?: React.ReactNode;
	link?: string;
}) => {
	return (
		<div
			className={cn(
				'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-foreground border border-transparent justify-between flex flex-col space-y-4',
				className
			)}
		>
			<Link
				href={link ? link : '/'}
				target='_blank'
				rel='noopener noreferrer'
			>
				{header}
				<div className='transition duration-200 group-hover/bento:translate-x-2'>
					{icon}
					<div className='my-2 font-sans font-bold text-neutral-200 dark:text-neutral-200'>
						{title}
					</div>
					<div className='font-sans text-xs font-normal text-neutral-300 dark:text-neutral-300'>
						{description}
					</div>
				</div>
			</Link>
		</div>
	);
};
