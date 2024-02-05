'use client';
import {
	Button,
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
					<p className='font-bold text-inherit'>ACME</p>
				</NavbarBrand>
				<NavbarItem>
					<Link color='foreground' href='#'>
						Features
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link href='#' aria-current='page'>
						Customers
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#'>
						Integrations
					</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify='end'>
				<NavbarItem>
					<Button
						as={Link as React.ElementType}
						color='warning'
						href='#'
						variant='flat'
					>
						ORDER
					</Button>
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
