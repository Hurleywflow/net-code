import { BentoGrid, BentoGridItem } from '@/components/cc/bento-grid/bentoGrid';
import {
	IconArrowWaveRightUp,
	IconBoxAlignRightFilled,
	IconBoxAlignTopLeft,
	IconClipboardCopy,
	IconFileBroken,
	IconSignature,
	IconTableColumn,
} from '@tabler/icons-react';
import Image from 'next/image';

export function BentoGridProjects() {
	return (
		<BentoGrid className='mx-auto w-[90vw] max-w-6xl'>
			{items.map((item, i) => (
				<BentoGridItem
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					icon={item.icon}
					link={item.link}
					className={i === 3 || i === 6 ? 'col-span-2' : ''}
					// className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
				/>
			))}
		</BentoGrid>
	);
}
const Skeleton = ({ img }: { img: string }) => (
	<div className='relative mb-2 flex size-full h-[8rem] flex-1 overflow-hidden rounded-xl md:h-[13rem]'>
		<Image
			src={img}
			alt={img}
			fill
			sizes={'(max-width: 768px) 45vw, 30vw'}
			className='object-cover object-center hover:scale-105 hover:transition-all hover:duration-300 hover:ease-linear '
		/>
	</div>
);
const items = [
	{
		title: 'Hurley Portfolio 1',
		description: '',
		link: 'https://portfoliohurley.vercel.app/',
		header: <Skeleton img='/images/projects/hlp1.jpeg' />,
		icon: <IconClipboardCopy className='size-4 text-neutral-300' />,
	},
	{
		title: 'Hurley Portfolio 2',
		description: '',
		link: 'https://hurleyportfolio1.vercel.app/',
		header: <Skeleton img='/images/projects/hlp2.jpeg' />,
		icon: <IconFileBroken className='size-4 text-neutral-300' />,
	},
	{
		title: 'Bank Design',
		description: '',
		link: 'https://hurley-bank.vercel.app',
		header: <Skeleton img='/images/projects/b.jpeg' />,
		icon: <IconTableColumn className='size-4 text-neutral-300' />,
	},
	{
		title: 'Villa Trung Nghia',
		description: '',
		link: 'https://www.villadalat.online',
		header: <Skeleton img='/images/projects/vltn.jpeg' />,
		icon: <IconArrowWaveRightUp className='size-4 text-neutral-300' />,
	},
	{
		title: 'NailStudioPro',
		description: '',
		link: 'https://www.nailstudiopro.com',
		header: <Skeleton img='/images/projects/nsp.jpeg' />,
		icon: <IconSignature className='size-4 text-neutral-300' />,
	},
	{
		title: 'RealEstate',
		description: '',
		link: 'https://real-estate-api-alpha.vercel.app',
		header: <Skeleton img='/images/projects/rs.jpeg' />,
		icon: <IconBoxAlignTopLeft className='size-4 text-neutral-300' />,
	},
	{
		title: 'Hurley Portfolio 2',
		description: '',
		link: 'https://hurleyportfolio1.vercel.app/',
		header: <Skeleton img='/images/projects/hlp2.jpeg' />,
		icon: <IconBoxAlignRightFilled className='size-4 text-neutral-300' />,
	},
];
