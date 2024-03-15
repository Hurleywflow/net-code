import NavBar from '@/components/cc/navbar/navbar';
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
// import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
// import GoogleAnalytics from '@bradgarropy/next-google-analytics';
import { Inter } from 'next/font/google';
// import { getTranslations } from 'next-intl/server';
import Script from 'next/script';
import './globals.css';
// const Navbar = dynamic(async () => import('@/components/cc/navbar/navbar'));

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter'
});

// const t = useTranslations('Index');
export const metadata: Metadata = {
	metadataBase: new URL('https://netcodedev.com'),
	alternates: {
		canonical: 'https://netcodedev.com'
	},
	openGraph: {
		images: '/opengraph-image.png'
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	},
	title: 'Web Development Melbourne | Thiết kế website - NetCode',
	description:
		'Looking for professional web development services? Our skilled developers can assist in crafting a top-notch, responsive site tailored to your business needs.',
	generator: 'Next.js',
	applicationName: 'NetCode',
	referrer: 'origin-when-cross-origin',
	keywords: [
		'Web Development',
		'Web Design Melbourne',
		'Web Development Melbourne',
		'Web Designer',
		'Melbourne Website Developers',
		'Web Developer',
		'Phát Triển Website',
		'Thiết kế Website'
	],
	authors: [
		{ name: 'Nguyen' },
		{ name: 'Hurley', url: 'https://netcodedev.com' }
	],
	creator: 'Hurley Nguyen',
	publisher: 'Hurley Nguyen',
	formatDetection: {
		email: false,
		address: false,
		telephone: false
	}
};
export const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1
	// userScalable: 'no',
	// Also supported by less commonly used
	// interactiveWidget: 'resizes-visual',
};

// export async function generateMetadata({
// 	params: { locale },
// }: { params: { locale: string } }) {
// 	const t = await getTranslations({
// 		locale: locale,
// 		namespace: 'Metadata' as 'Index',
// 	});

// 	return {
// 		metadataBase: new URL('https://netcodedev.com'),
// 		alternates: {
// 			canonical: '/',
// 			// languages: {
// 			// 	en: '/en',
// 			// 	vn: '/vn',
// 			// },
// 		},
// 		openGraph: {
// 			images: '/opengraph-image.png',
// 		},
// 		title: t('title'),
// 		description: t('description'),
// 	};
// }
interface RootLayoutProps {
	children: React.ReactNode;
	params: { locale: string };
}
export default function RootLayout({
	children,
	params: { locale }
}: Readonly<RootLayoutProps>) {
	return (
		<html lang={locale}>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased m-0 p-0',
					inter.variable
				)}
			>
				<NavBar />
				{children}
				<Toaster />
				{/* <SpeedInsights /> */}
			</body>
			{/* Google Analytics */}
			{/* <!-- Google tag (gtag.js) --> */}
			<Script
				strategy='afterInteractive'
				defer
				src='https://www.googletagmanager.com/gtag/js?id=G-9LZ03P2LHT'
				// src='https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'
			/>
			<Script
				id='google-analytics'
				strategy='afterInteractive'
			>
				{` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9LZ03P2LHT');`}
				{/* gtag('config', 'G-XXXXXXXXXX');`} */}
			</Script>
			{/* Google Analytics npm packages*/}
			{/* <GoogleAnalytics measurementId='G-XXXXXXXXXX' /> */}
		</html>
	);
}
