import Navbar from '@/components/cc/navbar/navbar';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Toaster as Toast } from 'react-hot-toast';
import './globals.css';

// import GoogleAnalytics from '@bradgarropy/next-google-analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('https://netcodedev.com'),
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US',
		},
	},
	openGraph: {
		images: '/opengraph-image.png',
	},
	title: 'Website Development | Web Developers Growing Business - NetCode',
	description:
		'Looking for professional web development services? Our skilled developers can assist in crafting a top-notch, responsive site tailored to your business needs.',
	// verification: {
	// 	google: '3008361373778677',
	// },
};
export const viewport = {
	width: 'device-width',
	initialScale: 1,
	// maximumScale: 1,
	// userScalable: 'no',
	// Also supported by less commonly used
	// interactiveWidget: 'resizes-visual',
};

interface RootLayoutProps {
	children: React.ReactNode;
}
export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
	return (
		<html lang='en'>
			<body className={`m-0 box-border p-0 ${inter.className}`}>
				<Toast />
				<Navbar />
				{children}
				<Toaster />
			</body>
			{/* Google Analytics */}
			{/* <!-- Google tag (gtag.js) --> */}
			<Script
				strategy='afterInteractive'
				async
				defer
				src='https://www.googletagmanager.com/gtag/js?id=G-9LZ03P2LHT'
				// src='https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'
			/>
			<Script id='google-analytics' strategy='afterInteractive' defer>
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
