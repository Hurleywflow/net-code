import Navbar from '@/components/cc/navbar/navbar';
import { TailwindIndicator } from '@/components/cc/tailwind-indicator/tailwind-indicator';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import toast, { Toaster as Toast } from 'react-hot-toast';

// import GoogleAnalytics from '@bradgarropy/next-google-analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('https://netcodedev.com'),
	title: 'Web Development - Net Code',
	description:
		'Looking for professional web development services? Our skilled developers can assist in crafting a top-notch, responsive site tailored to your business needs.',
	// verification: {
	// 	google: '3008361373778677',
	// },
};
export const viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: 1,
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
				<TailwindIndicator />
				<Toaster />
			</body>
			{/* Google Analytics */}
			{/* <!-- Google tag (gtag.js) --> */}
			<Script
				strategy='afterInteractive'
				async
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
