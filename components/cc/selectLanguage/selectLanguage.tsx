'use client';
// import { Button } from '@/components/cc/moving-border/movingBorder';
import { Button } from '@/components/ui/button';
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { Link } from '@/navigation';
import { Globe } from 'lucide-react';
import { usePathname } from 'next/navigation';

function SelectLanguage() {
	const pathname = usePathname();
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					className='rounded-full bg-secondary text-medium font-semibold'
					size={'lg'}
					variant={'secondary'}
				>
					<Globe className='mr-2 text-medium font-semibold' />
					{pathname.includes('/vn') ? 'Language' : 'Ngôn ngữ'}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-fit'>
				<div className='flex h-5 items-center space-x-4 text-sm'>
					{/* You can override the `locale` to switch to another language */}
					<Link
						href='/'
						locale='vn'
					>
						<div className='cursor-pointer hover:scale-105 hover:font-bold'>
							VietNamese
						</div>
					</Link>
					<Separator orientation='vertical' />
					<Link
						href='/'
						locale='en'
					>
						<div className='cursor-pointer hover:scale-105 hover:font-bold'>
							English
						</div>
					</Link>
				</div>
			</PopoverContent>
		</Popover>
	);
}

export default SelectLanguage;
