/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { motion, useAnimation, useInView, type Variant } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

function TextRevealGenerate() {
	const pathname = usePathname();
	return (
		<div className=''>
			<div className='mx-auto max-w-6xl '>
				{/* <section className='h-screen'>
					<p className='text-4xl md:text-[200px] md:leading-relaxed'>
						Scroll down...
					</p>
				</section>
				<section className='flex h-[150vh] flex-col items-center justify-center'>
					<AnimatedText
						once
						text='Hello you'
						el='h1'
						className='text-[200px]'
					/>
					Scroll down more...
				</section> */}

				<div className='flex flex-col items-center justify-center'>
					<AnimatedText
						el='h2'
						text={
							pathname.includes('/vn')
								? [
										'Chúng tôi sẽ lên lịch một cuộc gọi hoặc cuộc họp xác định phạm với bạn để thảo luận yêu cầu của bạn và xác định các giải pháp thích hợp, thường mất tới 45 phút. Trong cuộc gọi, chúng tôi sẽ hỏi một số câu hỏi để thu thập thông tin về đối tượng mục tiêu của bạn, bao quát trang web, hướng thiết kế, v.v. Sau cuộc gọi, chúng tôi sẽ chuẩn bị một đề xuất kèm theo báo giá chi tiết. Quá trình này là cần thiết để sản phẩm bàn giao và chi phí trả trước, đảm bảo rằng tất cả chúng ta đều đồng ý, giúp tránh bất kỳ những điều bất ngờ trong quá trình thực hiện dự án.'
								  ]
								: [
										"We'll schedule a free scoping call or meeting with you to discuss your requirements and determine the appropriate solutions, which usually takes up to 45 minutes. During the call, we'll ask a series of questions to collect information about your intended audience, website vision, competitors, design direction, and more. After the call, we'll prepare a proposal with a detailed quote. The scoping process is essential to ensure that we are all in agreement regarding deliverables and upfront costs, which helps avoid any surprises during the project."
								  ]

							//   [
							// 	'Chúng tôi sẽ lên lịch một cuộc gọi hoặc cuộc họp xác định phạm với bạn để thảo luận yêu cầu của bạn và xác định các giải pháp thích hợp, thường mất tới 45 phút.',
							// 	'Trong cuộc gọi, chúng tôi sẽ hỏi một số câu hỏi để thu thập thông tin về đối tượng mục tiêu của bạn, bao quát trang web, hướng thiết kế, v.v. Sau cuộc gọi, chúng tôi sẽ chuẩn bị một đề xuất kèm theo báo giá chi tiết.',
							// 	'Quá trình này là cần thiết để sản phẩm bàn giao và chi phí trả trước, đảm bảo rằng tất cả chúng ta đều đồng ý, giúp tránh bất kỳ những điều bất ngờ trong quá trình thực hiện dự án.'
							// ]
						}
						className='text-balance text-xl text-foreground-700 shadow-foreground-400 text-shadow-lg md:text-2xl'
						repeatDelay={10000}
					/>
				</div>
			</div>
		</div>
	);
}

type AnimatedTextProps = {
	text: string | string[];
	el?: keyof JSX.IntrinsicElements;
	className?: string;
	once?: boolean;
	repeatDelay?: number;
	animation?: {
		hidden: Variant;
		visible: Variant;
	};
};

const defaultAnimations = {
	hidden: {
		opacity: 0,
		y: 20
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.2
		}
	}
};

export const AnimatedText = ({
	text,
	el: Wrapper = 'p',
	className,
	once,
	repeatDelay,
	animation = defaultAnimations
}: AnimatedTextProps) => {
	const controls = useAnimation();
	const textArray = Array.isArray(text) ? text : [text];
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.2, once });

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		let timeout: NodeJS.Timeout;
		const show = () => {
			controls.start('visible');
			if (repeatDelay) {
				timeout = setTimeout(async () => {
					await controls.start('hidden');
					controls.start('visible');
				}, repeatDelay);
			}
		};

		if (isInView) {
			show();
		} else {
			controls.start('hidden');
		}

		return () => clearTimeout(timeout);
	}, [controls, isInView, repeatDelay]);

	return (
		<Wrapper className={className}>
			<span className='sr-only'>{textArray.join(' ')}</span>
			<motion.span
				ref={ref}
				initial='hidden'
				animate={controls}
				variants={{
					visible: { transition: { staggerChildren: 0.03 } },
					hidden: {}
				}}
				aria-hidden
			>
				{textArray.map((line, lineIndex) => (
					<span
						className='block'
						key={`${line}-${
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							lineIndex
						}`}
					>
						{line.split(' ').map((word, wordIndex) => (
							<span
								className='inline-block'
								key={`${word}-${
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									wordIndex
								}`}
							>
								{word.split('').map((char, charIndex) => (
									<motion.span
										key={`${char}-${
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											charIndex
										}`}
										className='inline-block'
										variants={animation}
									>
										{char}
									</motion.span>
								))}
								<span className='inline-block'>&nbsp;</span>
							</span>
						))}
					</span>
				))}
			</motion.span>
		</Wrapper>
	);
};

export default TextRevealGenerate;
