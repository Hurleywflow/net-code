/* eslint-disable tailwindcss/no-contradicting-classname */
'use client';

import Magnetic from '@/components/cc/common/Magnetic';
import Rounded from '@/components/cc/common/RoundedButton';
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
import { useState } from 'react';
import ProfileForm from '../booking-form/booking-form';

const Contact = () => {
	// const [snap, setSnap] = useState<number | string | null>(0.7);
	const [open, setOpen] = useState(false);
	const isDesktop = useMediaQuery('(min-width: 768px)');
	if (isDesktop) {
		return (
			<section
				className=' mb-5 mt-28 flex h-[100svh] w-full flex-col flex-wrap items-center justify-center gap-4'
				id='contact'
			>
				{/* <section className='mb-[17svh] mt-[50svh]  flex size-full flex-col flex-wrap items-center justify-center gap-4 md:mt-[-35svh] md:pt-[80svh] lg:pt-[50svh]'> */}
				<div className=' text-wrap   p-5  text-[5rem]  md:text-8xl lg:text-[12rem] xl:text-[14rem]'>
					Let's work together
				</div>
				<div className='relative flex h-[30vw] w-full items-center  p-5 md:h-[20vw] 2xl:h-[15vw]'>
					<hr className='w-full border-2 border-destructive ' />
					<Dialog open={open} onOpenChange={setOpen}>
						<DialogTrigger asChild>
							<Button
								className='absolute inset-y-0 right-0 mr-10 size-[30vw] justify-center overflow-hidden text-wrap rounded-full p-1 text-lg font-semibold md:size-[20vw] md:text-2xl md:font-bold lg:text-3xl 2xl:size-[15vw]'
								size='lg'
							>
								<Rounded>Get in touch</Rounded>
							</Button>
						</DialogTrigger>
						<DialogContent className=' sm:max-w-[425px]'>
							<DialogHeader className='px-2'>
								<DialogTitle>Get in touch</DialogTitle>
								<DialogDescription>
									We are always happy to stay connected with you.
								</DialogDescription>
							</DialogHeader>
							{/* form booking data */}
							<ProfileForm className='px-2' />
						</DialogContent>
					</Dialog>
				</div>
				<div className='flex flex-row gap-10'>
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
			className=' mb-5 mt-28 flex h-[100svh] w-full flex-col flex-wrap items-center justify-center gap-4'
			id='contact'
		>
			{/* <section className='mb-[17svh] mt-[50svh]  flex size-full flex-col flex-wrap items-center justify-center gap-4 md:mt-[-35svh] md:pt-[80svh] lg:pt-[50svh]'> */}
			<div className='animate-slowpan text-wrap  bg-[url("/images/c.jpeg")] bg-clip-text p-5  text-[5rem] text-transparent md:text-8xl lg:text-[12rem] xl:text-[14rem]'>
				Let's work together
			</div>
			<div className='relative flex h-[30vw] w-full items-center  p-5 md:h-[20vw] 2xl:h-[15vw]'>
				<hr className='w-full border-2 border-destructive ' />

				<Drawer
					open={open}
					onOpenChange={setOpen}
					// snapPoints={[0.7, 1]}
					// // snapPoints={[0.5, 0.8, 1]}
					// activeSnapPoint={snap}
					// setActiveSnapPoint={setSnap}
				>
					<DrawerTrigger asChild>
						<div className=''>
							<Button
								className='absolute inset-y-0 right-0 mr-10 hidden size-[30vw] justify-center overflow-hidden text-wrap rounded-full p-1 text-lg font-semibold md:size-[20vw] md:text-2xl md:font-bold lg:block lg:text-3xl 2xl:size-[15vw]'
								size='lg'
							>
								<Rounded>Get in touch</Rounded>
							</Button>
							{/*show up  on mobile devices */}
							<Button
								className='absolute inset-y-0 right-0 mr-10 size-[30vw] justify-center overflow-hidden text-wrap rounded-full p-1 text-lg font-semibold md:size-[20vw] md:text-2xl md:font-bold lg:hidden lg:text-3xl 2xl:size-[15vw]'
								size='lg'
							>
								Get in touch
							</Button>
						</div>
					</DrawerTrigger>
					<DrawerContent>
						{/* <div
							className={cn('', {
								'overflow-y-auto': snap === 1,
								'overflow-hidden': snap !== 1,
							})}
						> */}
						<DrawerHeader className='px-5 text-left'>
							<DrawerTitle>Get in touch</DrawerTitle>
							<DrawerDescription>
								We are always happy to stay connected with you.
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
			<div className='flex flex-row gap-10'>
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
