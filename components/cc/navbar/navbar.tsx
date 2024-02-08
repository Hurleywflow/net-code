'use client';
import { Button } from '@/components/ui/button';
import {
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from '@nextui-org/react';
import React, { useState } from 'react';
import { AcmeLogo } from './Logo.jsx';

export default function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = [
		'Profile',
		'Dashboard',
		'Activity',
		'Analytics',
		'System',
		'Deployments',
		'My Settings',
		'Team Settings',
		'Help & Feedback',
		'Log Out',
	];

	return (
		<Navbar
			isBordered={false}
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			className='mix-blend-difference backdrop-blur-sm'
		>
			<NavbarContent className='sm:hidden' justify='start'>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				/>
			</NavbarContent>

			<NavbarContent className='pr-3 sm:hidden' justify='center'>
				<NavbarBrand>
					<AcmeLogo />
					<p className='font-bold text-inherit'>ACME</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className='hidden gap-4 sm:flex' justify='center'>
				<NavbarBrand>
					<AcmeLogo />
					<p className='font-bold text-inherit'>NetCode</p>
				</NavbarBrand>
				<NavbarItem>
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
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify='end'>
				<NavbarItem>
					<Link
						href='https://www.linkedin.com/in/netcodedev/'
						target='#Contact'
					>
						<Button variant='default'>ORDER</Button>
					</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem
						key={`${item}-${
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
							href='#'
							size='lg'
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
