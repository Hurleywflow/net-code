import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Contact = () => {
	return (
		<section className='mb-5 mt-28 flex h-[100svh] w-full flex-col flex-wrap items-center justify-center gap-4'>
			{/* <section className='mb-[17svh] mt-[50svh]  flex size-full flex-col flex-wrap items-center justify-center gap-4 md:mt-[-35svh] md:pt-[80svh] lg:pt-[50svh]'> */}
			<div className='text-wrap bg-gradient-to-b  from-neutral-500 to-neutral-950 bg-clip-text p-5 text-7xl text-transparent md:text-8xl  lg:text-[12rem] xl:text-[14rem]'>
				Let's work together
			</div>
			<div className='relative flex h-[20vw] w-full items-center p-5'>
				<hr className='w-full border-2 border-destructive ' />
				<Button
					className='absolute inset-y-0 right-0 mr-10 size-[20vw] justify-center text-wrap rounded-full p-1 text-lg font-semibold md:text-2xl md:font-bold lg:text-3xl'
					size='lg'
				>
					Get in touch
				</Button>
			</div>
			<div className='flex flex-row gap-10'>
				<Link href='https://www.linkedin.com/in/netcodedev/' target='_blank'>
					<Button
						variant='default'
						className='w-[40vw] font-semibold xl:w-[30vw]'
						size='lg'
					>
						hurleywflow@gmail.com
					</Button>
				</Link>
				<Link href='https://www.linkedin.com/in/netcodedev/' target='_blank'>
					<Button
						variant='secondary'
						className='w-[40vw] font-semibold xl:w-[30vw]'
						size='lg'
					>
						(+61) 0423 099 677
					</Button>
				</Link>
			</div>
		</section>
	);
};

export default Contact;
