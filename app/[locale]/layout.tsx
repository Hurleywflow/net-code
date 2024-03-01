/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Navbar from '@/components/cc/navbar/navbar';
import { Toaster } from '@/components/ui/toaster';
// import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
// import { getTranslations } from 'next-intl/server';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Toaster as Toast } from 'react-hot-toast';
import './globals.css';

// import GoogleAnalytics from '@bradgarropy/next-google-analytics';

const inter = Inter({ subsets: ['latin'] });

// const t = useTranslations('Index');
export const metadata: Metadata = {
	metadataBase: new URL('https://netcodedev.com'),
	alternates: {
		canonical: '/',
	},
	openGraph: {
		images: '/opengraph-image.png',
	},
	title: 'Web Developers Growing Business | Phát Triển Web - NetCode',
	description:
		'Looking for professional web development services? Our skilled developers can assist in crafting a top-notch, responsive site tailored to your business needs.',
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
}: Readonly<RootLayoutProps>) {
	return (
		<html lang={locale}>
			<body className={`m-0 box-border p-0 ${inter.className}`}>
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
