import Contact from '../Contact/contact';
import { Container } from '../container/container';

function GridBackgroundDemoLight() {
	return (
		<section
			className='relative flex h-fit w-full  items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2]'
			id='projects'
		>
			{/* Radial gradient for the container to give a faded look */}
			{/* <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-foreground [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black' /> */}
			{/* <p className='relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl'>
				Backgrounds
			</p> */}
			<Container className='z-20'>
				<Contact />
			</Container>
		</section>
	);
}
export default GridBackgroundDemoLight;
