/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Navbar from '@/components/cc/navbar/navbar';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
// import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
// import GoogleAnalytics from '@bradgarropy/next-google-analytics';
import { Inter } from 'next/font/google';
// import { getTranslations } from 'next-intl/server';
import Script from 'next/script';
import { Toaster as Toast } from 'react-hot-toast';
import './globals.css';
import Head from 'next/head';
import { useTranslations } from 'next-intl';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

// const t = useTranslations('Index');
export const metadata: Metadata = {
	metadataBase: new URL('https://netcodedev.com'),
	alternates: {
		canonical: '/',
	},
	openGraph: {
		images: '/opengraph-image.png',
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
			'max-snippet': -1,
		},
	},
	title: 'Web Developers Growing Business | Phát Triển Web - NetCode',
	description:
		'Looking for professional web development services? Our skilled developers can assist in crafting a top-notch, responsive site tailored to your business needs.',
	generator: 'Next.js',
	applicationName: 'NetCode',
	referrer: 'origin-when-cross-origin',
	keywords: [
		'Next.js',
		'React',
		'JavaScript',
		'Web Development',
		'Web Developer',
		'Phát Triển Web',
		'Lập Trình Web',
	],
	authors: [
		{ name: 'Nguyen' },
		{ name: 'Hurley', url: 'https://netcodedev.com' },
	],
	creator: 'Hurley Nguyen',
	publisher: 'Hurley Nguyen',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
};
export const viewport = {
	width: 'device-width',
	initialScale: 1,
	// maximumScale: 1,
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
	params: { locale },
}: RootLayoutProps) {
		const t = useTranslations('Index');
	return (
		<html lang={locale}>
			<Head>
				<link rel='alternate' hrefLang='en' href='https://netcodedev.com' />
				<link rel='alternate' hrefLang='en' href='https://netcodedev.com/en' />
				<link rel='alternate' hrefLang='vn' href='https://netcodedev.com/vn' />
			</Head>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					inter.variable,
				)}
			>
				<Toast />
				<Navbar />
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
			<Script id='google-analytics' strategy='afterInteractive'>
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
