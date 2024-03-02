/* eslint-disable tailwindcss/no-contradicting-classname */
'use client';

import Magnetic from '@/components/cc/common/Magnetic';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import useMediaQuery from '@/hooks/useMediaQuery';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ProfileForm from '../booking-form/booking-form';

const Contact = () => {
	// const [snap, setSnap] = useState<number | string | null>(0.7);
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	const isDesktop = useMediaQuery('(min-width: 768px)');
	if (isDesktop) {
		return (
			<section
				className='mb-20 flex h-screen w-full flex-col flex-wrap items-center justify-end gap-4'
				id='contact'
			>
				{/* <section className='mb-[17svh] mt-[50svh]  flex size-full flex-col flex-wrap items-center justify-center gap-4 md:mt-[-35svh] md:pt-[80svh] lg:pt-[50svh]'> */}
				<div className='animate-slowpan text-wrap bg-[url("/images/c.webp")] bg-clip-text  p-5 text-[5rem] text-transparent  shadow-neutral-600 text-shadow-lg md:text-8xl lg:text-[12rem] xl:text-[14rem]'>
					{/* Let's work together */}
					{pathname.includes('/vn')
						? 'Hãy cùng cộng tác.'
						: "Let's work together"}
				</div>
				<div className='relative my-5 flex h-32 w-full  items-center p-5 md:h-40'>
					<hr className=' w-full overflow-hidden border-2 border-border ' />
					<Dialog open={open} onOpenChange={setOpen}>
						<DialogTrigger asChild>
							<Button
								variant='default'
								className='absolute right-1/2 h-32 w-[80vw] max-w-screen-lg translate-x-1/2 overflow-hidden rounded-full border-4 border-border font-semibold drop-shadow-2xl md:h-40 md:font-bold'
								size='lg'
							>
								{/* <Rounded> */}
								<div className='flex flex-col items-center justify-center gap-2'>
									<h3 className='text-center text-2xl font-bold md:text-4xl'>
										{pathname.includes('/vn') ? 'Đặt Hẹn' : 'Get in touch'}
									</h3>
									<p className='text-center text-sm font-light italic'>
										{pathname.includes('/vn')
											? 'Chúng tôi luôn sẵn lòng kết nối.  '
											: "Let's see if we are good fit for you."}
									</p>
								</div>
								{/* </Rounded> */}
							</Button>
						</DialogTrigger>
						<DialogContent className=' sm:max-w-[425px]'>
							<DialogHeader className='px-2'>
								<DialogTitle>
									{pathname.includes('/vn') ? 'Đặt Hẹn' : 'Get in touch'}
								</DialogTitle>
								<DialogDescription>
									{pathname.includes('/vn')
										? 'Chúng tôi luôn sẵn lòng kết nối.'
										: 'We are always happy to stay connected with you.'}
								</DialogDescription>
							</DialogHeader>
							{/* form booking data, h-50 is adjusting height of the dialog */}
							<ProfileForm className='h-70 px-2' />
							{/* <ProfileForm className='h-50 px-2' /> */}
						</DialogContent>
					</Dialog>
				</div>
				<div className='flex flex-row gap-5'>
					<Link href='mailto:hurleywflow@gmail.com' target='_blank'>
						<Magnetic>
							<Button
								variant='default'
								className='w-[43vw] rounded-full font-semibold xl:w-[30vw]'
								size='lg'
							>
								hurleywflow@gmail.com
							</Button>
						</Magnetic>
					</Link>
					<Link href='tel:+61423099677'>
						<Magnetic>
							<Button
								variant='secondary'
								className='w-[43vw] rounded-full font-semibold xl:w-[30vw]'
								size='lg'
							>
								(+61) 0423 099 677
							</Button>
						</Magnetic>
					</Link>
				</div>
			</section>
		);
	}
	return (
		<section
			className='mb-20 flex h-screen w-full flex-col flex-wrap items-center justify-end gap-4'
			id='contact'
		>
			{/* <section className='mb-[17svh] mt-[50svh]  flex size-full flex-col flex-wrap items-center justify-center gap-4 md:mt-[-35svh] md:pt-[80svh] lg:pt-[50svh]'> */}
			<div className='animate-slowpan text-wrap bg-[url("/images/c.webp")] bg-clip-text  p-5 text-[5rem] text-transparent  shadow-neutral-600 text-shadow-lg md:text-8xl lg:text-[12rem] xl:text-[14rem]'>
				{pathname.includes('/vn')
					? 'Hãy cùng cộng tác.'
					: "Let's work together"}
			</div>
			<div className='relative my-5 flex h-32 w-full  items-center p-5 md:h-40'>
				<hr className=' w-full overflow-hidden border-2 border-border ' />

				<Drawer
					open={open}
					onOpenChange={setOpen}
					// snapPoints={[0.7, 1]}
					// // snapPoints={[0.5, 0.8, 1]}
					// activeSnapPoint={snap}
					// setActiveSnapPoint={setSnap}
				>
					<DrawerTrigger asChild>
						<Button
							variant='default'
							className='absolute right-1/2 h-32 w-[80vw] max-w-screen-lg translate-x-1/2  rounded-full border-4 border-border font-semibold drop-shadow-2xl md:h-40 md:font-bold '
							size='lg'
						>
							{/* <Rounded> */}
							<div className='flex flex-col items-center justify-center gap-2'>
								<h3 className='text-center text-2xl font-bold md:text-4xl'>
									{pathname.includes('/vn') ? 'Đặt Hẹn' : 'Get in touch'}
								</h3>
								<p className='text-center text-sm font-light italic'>
									{pathname.includes('/vn')
										? 'Chúng tôi luôn sẵn lòng kết nối.'
										: "Let's see if we are good fit for you."}
								</p>
							</div>
							{/* </Rounded> */}
						</Button>

						{/* </Magnetic> */}
					</DrawerTrigger>
					{/* h-[80svh] is adjusting height of the drawer */}
					<DrawerContent>
						{/* <DrawerContent className='h-[80svh]'> */}
						{/* <div
							className={cn('', {
								'overflow-y-auto': snap === 1,
								'overflow-hidden': snap !== 1,
							})}
						> */}
						<DrawerHeader className='px-5 text-left'>
							<DrawerTitle>
								{pathname.includes('/vn') ? 'Đặt Hẹn' : 'Get in touch'}
							</DrawerTitle>
							<DrawerDescription>
								{pathname.includes('/vn')
									? 'Chúng tôi luôn sẵn lòng kết nối.'
									: 'We are always happy to stay connected with you.'}
							</DrawerDescription>
						</DrawerHeader>
						<ProfileForm className='px-5' />
						<DrawerFooter className='pt-2'>
							<DrawerClose asChild>
								<Button variant='outline'>Cancel</Button>
							</DrawerClose>
						</DrawerFooter>
						{/* </div> */}
					</DrawerContent>
				</Drawer>
			</div>
			<div className='flex flex-row gap-5'>
				<Link href='mailto:hurleywflow@gmail.com' target='_blank'>
					<Magnetic>
						<Button
							variant='default'
							className='w-[43vw] rounded-full font-semibold xl:w-[30vw]'
							size='lg'
						>
							hurleywflow@gmail.com
						</Button>
					</Magnetic>
				</Link>
				<Link href='tel:+61423099677'>
					<Magnetic>
						<Button
							variant='secondary'
							className='w-[43vw] rounded-full font-semibold xl:w-[30vw]'
							size='lg'
						>
							(+61) 0423 099 677
						</Button>
					</Magnetic>
				</Link>
			</div>
		</section>
	);
};

export default Contact;
