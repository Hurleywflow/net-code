'use client';
import { BellRing, CheckSquare } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
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
		title: 'Custom designed page layouts',
		description: '1 hour ago'
	},
	{
		title:
			'Customised with your logo, brand colours and content within the confines of your chosen theme',
		description: '1 hour ago'
	},
	{
		title:
			'Modular, mobile responsive content blocks with relational content functionality and in-built animations',
		description: '1 hour ago'
	},
	{
		title:
			'Re-usable custom templates with simple, no-code content management for pages, blogs, products, events and more',
		description: '2 hours ago'
	},
	{
		title:
			'Secure, durable and blazing fast hosting on a premium server with CDN (Content Delivery Network)',
		description: '2 hours ago'
	},
	{
		title: 'No reliance on third party-developed themes or templates',
		description: '2 hours ago'
	},
	{
		title:
			'Less reliance on plugins and other tools that slow your site down, break over time and cause security issues. Fully compatible with only the most trusted and reliable plugins for SEO, forms, etc',
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
		title: 'Bố cục trang được thiết kế tùy chỉnh',
		description: '1 hour ago'
	},
	{
		title:
			'Được tùy chỉnh với logo, màu sắc thương hiệu và nội dung trong giới hạn chủ đề đã chọn',
		description: '1 hour ago'
	},
	{
		title:
			'Nội dung mang tính mô-đun, đáp ứng trên thiết bị di động với chức năng nội dung liên quan đến nhau và tùy chỉnh tối ưu hóa',
		description: '1 hour ago'
	},
	{
		title:
			'Mẫu tùy chỉnh có thể tái sử dụng với tính năng quản lý nội dung đơn giản, không cần mã cho các trang, blog, sản phẩm, sự kiện, v.v.',
		description: '2 hours ago'
	},
	{
		title:
			'Lưu trữ an toàn, bền bỉ và nhanh chóng trên máy chủ cao cấp với CDN (Mạng phân phối nội dung)',
		description: '2 hours ago'
	},
	{
		title: 'Không phụ thuộc vào các chủ đề hoặc mẫu do bên thứ ba phát triển',
		description: '2 hours ago'
	},
	{
		title:
			'Ít phụ thuộc hơn vào plugin và các công cụ khác khiến trang web của bạn bị chậm, hỏng theo thời gian và gây ra sự cố bảo mật. Hoàn toàn tương thích với các plugin đáng tin cậy nhất cho SEO, biểu mẫu, v.v.',
		description: '2 hours ago'
	}
];

type CardProps = React.ComponentProps<typeof Card>;

function CardCustom({ className, ...props }: CardProps) {
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
						'w-[380px] h-full  hover:ring-2 hover:ring-ring hover:ring-offset-2 ',
						className
					)}
					{...props}
				>
					{/* <Card className={cn('w-[380px]', className)} {...props}> */}
					<CardHeader
						className='
			text-center
			'
					>
						<CardTitle>Web cao cấp</CardTitle>
						<CardDescription>
							Trang web này được thiết kế và phát triển dựa trên thương hiệu và
							nội dung của doanh. Đó là một giải pháp lý tưởng nếu bạn đang tìm
							kiếm trải nghiệm người dùng tuyệt vời trên tất cả các thiết bị
							cũng như nền tảng trực tuyến bền bỉ, linh hoạt và đại diện cho
							thương hiệu và phát triển doanh nghiệp.
						</CardDescription>
					</CardHeader>
					<CardContent className='grid gap-4'>
						<div className=' flex items-center space-x-4 rounded-md border bg-secondary  p-4'>
							<BellRing />
							<div className='flex-1 space-y-1'>
								<p className='text-center text-2xl font-medium md:text-3xl '>
									từ $18,000 <i className='text-xs font-extralight'>AUD</i>
								</p>
								<p className='text-center text-sm text-muted-foreground'>
									+ GST
								</p>
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
					<CardFooter className='flex flex-col justify-between gap-5'>
						<p className='text-sm italic text-muted-foreground'>
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
						'w-[380px] h-full  hover:ring-2 hover:ring-ring hover:ring-offset-2 ',
						className
					)}
					{...props}
				>
					{/* <Card className={cn('w-[380px]', className)} {...props}> */}
					<CardHeader
						className='
			text-center
			'
					>
						<CardTitle>Custom Designed & Developed Websites</CardTitle>
						<CardDescription>
							This website has been designed and developed with your branding
							and content in mind. It is an ideal solution if you are looking
							for a great user experience across all devices, as well as a
							durable and flexible online platform to represent your brand and
							grow your business.
						</CardDescription>
					</CardHeader>
					<CardContent className='grid gap-4'>
						<div className=' flex items-center space-x-4 rounded-md border bg-accent  p-4'>
							<BellRing />
							<div className='flex-1 space-y-1'>
								<p className='text-center text-2xl font-medium md:text-3xl '>
									from $18,000 <i className='text-xs font-extralight'>AUD</i>
								</p>
								<p className='text-center text-sm text-muted-foreground'>
									+ GST
								</p>
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
					<CardFooter className='flex flex-col justify-between gap-5'>
						<p className='text-sm italic text-muted-foreground'>
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
export default CardCustom;
