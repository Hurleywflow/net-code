'use client';
import { Card } from '@/components/ui/card';
import { BellRing, CheckSquare, Star } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from '@/components/ui/drawer';
import useMediaQuery from '@/hooks/useMediaQuery';

import {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ProfileForm from '../booking-form/booking-form';

const notifications = [
	{
		title: 'React, Nextjs based and SEO-friendly website with a modern design',
		description: '1 hour ago'
	},
	{
		title:
			'Mobile responsive content blocks with relational content functionality',
		description: '1 hour ago'
	},
	{
		title:
			'Customised with your logo, brand colours and content within the confines of your chosen theme',
		description: '1 hour ago'
	},
	{
		title: 'Secure hosting',
		description: '1 hour ago'
	},
	{
		title: 'Re-usable some page templates',
		description: '2 hours ago'
	}
];
const notificationsVN = [
	{
		title:
			'Trang web dựa trên React, Nextjs và SEO tối ưu với thiết kế hiện đại',
		description: '1 hour ago'
	},
	{
		title:
			'Nội dung đáp ứng trên thiết bị di động với chức năng liên quan đến nhau',
		description: '1 hour ago'
	},
	{
		title:
			'Được tùy chỉnh với logo, màu sắc thương hiệu và nội dung trong giới hạn chủ đề đã chọn',
		description: '1 hour ago'
	},
	{
		title: 'Lưu trữ an toàn',
		description: '1 hour ago'
	},
	{
		title: 'Sử dụng một số trang mẫu',
		description: '2 hours ago'
	}
];

type CardProps = React.ComponentProps<typeof Card>;

function CardRegular({ className, ...props }: CardProps) {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	// const [snap, setSnap] = useState<number | string | null>(0.7);
	const [open, setOpen] = useState(false);
	const isDesktop = useMediaQuery('(min-width: 768px)');
	return (
		<>
			{pathname.includes('/vn') ? (
				<Card
					className={cn(
						'w-[380px] h-full bg-foreground text-background border-background hover:ring-2 hover:ring-ring hover:ring-offset-2 relative ',
						className
					)}
					{...props}
				>
					<Badge
						variant='outline'
						className=' absolute left-1/2 right-0 top-0 flex -translate-x-1/2  -translate-y-1/2 items-center justify-center gap-2 bg-accent text-lg text-foreground  '
					>
						<Star className='text-destructive' /> Phổ biến nhất
					</Badge>
					<CardHeader
						className='
			text-center
	'
					>
						<CardTitle>Web thông dụng</CardTitle>
						<CardDescription className='text-muted-background text-sm'>
							Trang web thiết kế đặc biệt phù hợp cho các cơ sở kinh doanh vừa
							và nhỏ, phục vụ nhiều mục đích và yêu cầu đơn giản nhưng hiện đại.
							Các tùy chọn thiết kế có sẵn làm tiêu chuẩn và phát triển theo yêu
							cầu. Không phục vụ cho thiết kế tùy chỉnh hoặc chức năng thương
							mại điện tử.
						</CardDescription>
					</CardHeader>
					<CardContent className='grid gap-4'>
						<div className=' flex items-center space-x-4 rounded-md border bg-accent p-4 text-accent-foreground'>
							<BellRing />
							<div className='flex-1 space-y-1'>
								<p className='text-center text-2xl font-medium md:text-3xl '>
									từ $2,000 <i className='text-xs font-extralight'>AUD</i>
								</p>
								<p className='text-muted-accent text-center text-sm'>+ GST</p>
							</div>
						</div>
						<div>
							{notificationsVN.map((notification, index) => (
								<div
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={index}
									className='mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0'
								>
									<CheckSquare className='mr-2 size-4' />
									<div className='space-y-1'>
										<p className='text-sm font-medium'>{notification.title}</p>
										{/* <p className='text-sm text-muted-foreground'>
									{notification.description}
								</p> */}
									</div>
								</div>
							))}
						</div>
					</CardContent>
					<CardFooter className=' flex flex-col justify-between gap-5'>
						<p className='text-muted-background text-sm italic'>
							Xin lưu ý: Mỗi dự án web là duy nhất, vì vậy, chúng tôi sẽ dành
							thời gian để tìm hiểu nhu cầu của bạn trước khi đưa ra giá cố định
							trả trước dựa trên thời gian, công sức và các sản phẩm đã thỏa
							thuận.
						</p>
						{isDesktop ? (
							<Dialog
								open={open}
								onOpenChange={setOpen}
							>
								<DialogTrigger asChild>
									<Button
										className='w-full'
										variant={'secondary'}
									>
										Đặt Hẹn
									</Button>
								</DialogTrigger>
								<DialogContent className=' sm:max-w-[425px]'>
									<DialogHeader className='px-2'>
										<DialogTitle>
											{pathname.includes('/vn') ? 'Đặt Hẹn' : 'Get in touch'}
										</DialogTitle>
										<DialogDescription>
											{pathname.includes('/vn')
												? 'Chúng tôi luôn sẵn lòng kết nối với bạn.'
												: 'We are always happy to stay connected with you.'}
										</DialogDescription>
									</DialogHeader>
									{/* form booking data, h-50 is adjusting height of the dialog */}
									<ProfileForm className='min-h-64 px-2' />
									{/* <ProfileForm className='h-50 px-2' /> */}
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
									<Button
										className='w-full'
										variant={'secondary'}
									>
										Đặt Hẹn
									</Button>
								</DrawerTrigger>
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
												? 'Chúng tôi luôn sẵn lòng kết nối với bạn.'
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
						)}
					</CardFooter>
				</Card>
			) : (
				<Card
					className={cn(
						'w-[380px]  bg-foreground text-background border-background hover:ring-2 hover:ring-ring hover:ring-offset-2 relative h-full',
						className
					)}
					{...props}
				>
					<Badge
						variant='outline'
						className=' absolute left-1/2 right-0 top-0 flex -translate-x-1/2  -translate-y-1/2 items-center justify-center gap-2 bg-accent text-lg text-foreground  '
					>
						<Star className='text-destructive' /> Most Popular
					</Badge>
					<CardHeader
						className='
			text-center
	'
					>
						<CardTitle>Economic Web</CardTitle>
						<CardDescription className='text-muted-background text-sm'>
							This particular website design is best suited for smaller websites
							that serve multiple purposes and require modern, yet simplistic
							design options. The design options available are standard and do
							not cater to custom design or e-commerce functionality.
						</CardDescription>
					</CardHeader>
					<CardContent className='grid gap-4'>
						<div className=' flex items-center space-x-4 rounded-md border bg-accent p-4 text-accent-foreground'>
							<BellRing />
							<div className='flex-1 space-y-1'>
								<p className='text-center text-2xl font-medium md:text-3xl '>
									from $2,000 <i className='text-xs font-extralight'>AUD</i>
								</p>
								<p className='text-muted-accent text-center text-sm'>+ GST</p>
							</div>
						</div>
						<div>
							{notifications.map((notification, index) => (
								<div
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={index}
									className='mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0'
								>
									<CheckSquare className='mr-2 size-4' />
									<div className='space-y-1'>
										<p className='text-sm font-medium'>{notification.title}</p>
										{/* <p className='text-sm text-muted-foreground'>
									{notification.description}
								</p> */}
									</div>
								</div>
							))}
						</div>
					</CardContent>
					<CardFooter className=' flex flex-col justify-between gap-5'>
						<p className='text-muted-background text-sm italic'>
							Please note: Every web project is unique, so we'll take the time
							to understand your needs before providing an up-front fixed
							proposal based on time, effort and agreed deliverables.
						</p>
						{isDesktop ? (
							<Dialog
								open={open}
								onOpenChange={setOpen}
							>
								<DialogTrigger asChild>
									<Button
										className='w-full'
										variant={'secondary'}
									>
										Book Now
									</Button>
								</DialogTrigger>
								<DialogContent className=' sm:max-w-[425px]'>
									<DialogHeader className='px-2'>
										<DialogTitle>
											{pathname.includes('/vn') ? 'Đặt Hẹn' : 'Get in touch'}
										</DialogTitle>
										<DialogDescription>
											{pathname.includes('/vn')
												? 'Chúng tôi luôn sẵn lòng kết nối với bạn.'
												: 'We are always happy to stay connected with you.'}
										</DialogDescription>
									</DialogHeader>
									{/* form booking data, h-50 is adjusting height of the dialog */}
									<ProfileForm className='min-h-64 px-2' />
									{/* <ProfileForm className='h-50 px-2' /> */}
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
									<Button
										className='w-full'
										variant={'secondary'}
									>
										Book Now
									</Button>
								</DrawerTrigger>
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
												? 'Chúng tôi luôn sẵn lòng kết nối với bạn.'
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
						)}
					</CardFooter>
				</Card>
			)}
		</>
	);
}
export default CardRegular;
