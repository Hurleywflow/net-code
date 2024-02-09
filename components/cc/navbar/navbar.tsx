'use client';
import { Button } from '@/components/ui/button';
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
import React, { useState } from 'react';
import { Tabs } from '../tab/tabs';
import { AcmeLogo } from './Logo.jsx';

export default function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

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
			className='mix-blend-difference backdrop-blur-sm'
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
					<AcmeLogo />
					<p className='font-bold text-inherit'>ACME</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className='hidden gap-4 sm:flex' justify='center'>
				<NavbarBrand>
					<AcmeLogo />
					<p className='font-bold text-inherit'>NetCode</p>
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
				<NavbarItem>
					<Link
						href='https://www.linkedin.com/in/netcodedev/'
						target='#Contact'
					>
						<Button variant='default' className='rounded-full'>
							Keep in touch
						</Button>
					</Link>
				</NavbarItem>
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
