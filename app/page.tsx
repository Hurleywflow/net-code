import { Container } from '@/components/cc/container/container';
import Footer from '@/components/cc/footer/footer';
import HeroBeam from '@/components/cc/heroBeam/heroBeam';
import { ProjectParallaxProducts } from '@/components/cc/project-parallax/project-parallax-products';
import { TitleSpotlight } from '@/components/cc/title-spotlight/title-spotlight';
import { TracingBeam } from '@/components/cc/tracing-beam/tracing-beam';

export default function Home() {
	return (
		<main className='m-0 box-border flex min-h-[100svh] min-w-full items-center justify-center p-0'>
			<Container>
				<TracingBeam>
					<HeroBeam />
					<ProjectParallaxProducts />
					<TitleSpotlight />
					{/* <QuestionAnswers /> */}
					<Footer />
				</TracingBeam>
			</Container>
		</main>
	);
}
