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
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';
import ProfileForm from '../booking-form/booking-form';
import { Tabs } from '../tab/tabs';
import { AcmeLogo } from './Logo.jsx';

export default function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	// const [snap, setSnap] = useState<number | string | null>(0.7);
	const [open, setOpen] = useState(false);
	const isDesktop = useMediaQuery('(min-width: 768px)');

	const menuItems = [
		{
			title: 'Home',
			content: '/',
		},
		{
			title: 'Intro',
			content: '#intro',
		},
		{
			title: 'Projects',
			content: '#projects',
		},
		{
			title: 'FAQs',
			content: '#faqs',
		},
		{
			title: 'Contact',
			content: '#contact',
		},
	];
	const tabs = [
		{
			title: 'Home',
			value: 'home',
			content: '/',
		},
		{
			title: 'Intro',
			value: 'intro',
			// content: (
			// 	<div className='relative size-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl'>
			// 		<p>Services tab</p>
			// 	</div>
			// ),
			content: '#intro',
		},
		{
			title: 'Projects',
			value: 'projects',
			// content: (
			// 	<div className='relative size-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl'>
			// 		<p>Playground tab</p>
			// 	</div>
			// ),
			content: '#projects',
		},
		{
			title: 'FAQs',
			value: 'faqs',
			// content: (
			// 	<div className='relative size-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl'>
			// 		<p>Content tab</p>
			// 	</div>
			// ),
			content: '#faqs',
		},
		{
			title: 'Contact',
			value: 'contact',
			// content: (
			// 	<div className='relative size-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl'>
			// 		<p>Random tab</p>
			// 	</div>
			// ),
			content: '#contact',
		},
	];

	return (
		<Navbar
			isBordered={false}
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			className='mx-auto box-border mix-blend-difference  backdrop-blur-sm'
		>
			{/* toggle button */}
			<NavbarContent className='sm:hidden' justify='start'>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				/>
			</NavbarContent>
			{/* starting of the navbar items */}
			<NavbarContent className='pr-3 sm:hidden' justify='center'>
				<NavbarBrand>
					{/* adding logo */}
					<Link href='/'>
						<AcmeLogo />
					</Link>
					<Link href='/'>
						<Magnetic>
							<p className='font-bold text-inherit'>NetCode</p>
						</Magnetic>
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className='hidden gap-4 sm:flex' justify='center'>
				<NavbarBrand>
					<Link href='/'>
						<AcmeLogo />
					</Link>
					<Link href='/'>
						<Magnetic>
							<p className='font-bold text-inherit'>NetCode</p>
						</Magnetic>
					</Link>
				</NavbarBrand>
				{/* <NavbarItem>
					<Link color='foreground' href='/'>
						Home
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link href='#' aria-current='page'>
						Introduction
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#'>
						Projects
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#'>
						FAQs
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#'>
						Contact
					</Link>
				</NavbarItem> */}

				{/* adding tabs component to make this navbar items at center */}
				<NavbarItem>
					<Tabs tabs={tabs} />
				</NavbarItem>
			</NavbarContent>
			{/* end of the navbar items */}
			<NavbarContent justify='end'>
				{isDesktop ? (
					<Dialog open={open} onOpenChange={setOpen}>
						<DialogTrigger asChild>
							<NavbarItem>
								<Magnetic>
									<Button variant='default' className='rounded-full'>
										Keep in touch
									</Button>
								</Magnetic>
							</NavbarItem>
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
				) : (
					<Drawer
						open={open}
						onOpenChange={setOpen}
						// snapPoints={[0.7, 1]}
						// // snapPoints={[0.5, 0.8, 1]}
						// activeSnapPoint={snap}
						// setActiveSnapPoint={setSnap}
					>
						<DrawerTrigger asChild>
							<NavbarItem>
								<Magnetic>
									<Button variant='default' className='rounded-full'>
										Keep in touch
									</Button>
								</Magnetic>
							</NavbarItem>
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
				)}
			</NavbarContent>

			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem
						key={`${item.title}-${
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							index
						}`}
					>
						<Link
							className='w-full'
							color={
								index === 2
									? 'warning'
									: index === menuItems.length - 1
									  ? 'danger'
									  : 'foreground'
							}
							href={item.content}
							// size='lg'
						>
							{item.title}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
