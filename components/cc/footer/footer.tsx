import { Button } from '@/components/ui/button';
import Link from 'next/link';

/* eslint-disable react/react-in-jsx-scope */
const Footer = (): JSX.Element => {
	const year = new Date().getFullYear();
	return (
		<footer className=' min-h-fit w-[100vw] bg-slate-200 py-4 text-center text-slate-950 dark:bg-foreground dark:text-slate-100'>
			<small className='mb-2 block text-xs'>
				Copyright &copy; {year} NetCode. All rights reserved.
			</small>
			<p className='mb-3 text-xs'>
				<span className='font-semibold'>About this website:</span> Designed and
				built by
				<Link href='https://netcodedev.com' target='_blank'>
					<Button variant='ghost' className='m-1 p-0'>
						NetCode
					</Button>
				</Link>
			</p>
		</footer>
	);
};
export default Footer;
