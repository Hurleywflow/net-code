/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { motion, useInView } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import styles from './style.module.scss';
function Description() {
	const pathname = usePathname();
	const slideUp = {
		initial: {
			y: '100%',
		},
		open: (i) => ({
			y: '0%',
			transition: { duration: 0.5, delay: 0.02 * i },
		}),
		closed: {
			y: '100%',
			transition: { duration: 0.5 },
		},
	};

	// const opacity = {
	// 	initial: {
	// 		opacity: 0,
	// 	},
	// 	open: {
	// 		opacity: 1,
	// 		transition: { duration: 0.5 },
	// 	},
	// 	closed: {
	// 		opacity: 0,
	// 		transition: { duration: 0.5 },
	// 	},
	// };

	const phrase =
		'We specialize in custom web development services, from basic sites to complex web applications. Our team creates visually appealing and user-friendly websites that seamlessly integrate with design. A professionally designed website is a powerful marketing tool that establishes credibility and confidence, attracting and engaging potential clients.';
	const phraseVn =
		'Chúng tôi chuyên về các dịch vụ phát triển web tùy chỉnh, từ các trang web cơ bản đến các ứng dụng web phức tạp. Nhóm của chúng tôi tạo ra các trang web thân thiện với người dùng và hấp dẫn trực quan, tích hợp liền mạch với thiết kế. Một trang web được thiết kế chuyên nghiệp là một công cụ tiếp thị mạnh mẽ giúp tạo dựng uy tín và sự tự tin, thu hút và thu hút khách hàng tiềm năng.';
	const description = useRef(null);
	const isInView = useInView(description);
	return (
		<div ref={description} className={styles.description}>
			<div className={styles.body}>
				{pathname.includes('/vn') ? (
					<p>
						{phraseVn.split(' ').map((word, index) => {
							return (
								<span
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={index}
									className={`text-balance text-xl text-foreground shadow-foreground-400 text-shadow-lg md:text-2xl lg:text-3xl lg:leading-[1] ${styles.mask}`}
								>
									<motion.span
										variants={slideUp}
										custom={index}
										animate={isInView ? 'open' : 'closed'}
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={index}
									>
										{word}
									</motion.span>
								</span>
							);
						})}
					</p>
				) : (
					<p>
						{phrase.split(' ').map((word, index) => {
							return (
								<span
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={index}
									className={`text-balance text-xl text-foreground shadow-foreground-400 text-shadow-lg md:text-2xl lg:text-3xl lg:leading-[1] ${styles.mask}`}
								>
									<motion.span
										variants={slideUp}
										custom={index}
										animate={isInView ? 'open' : 'closed'}
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={index}
									>
										{word}
									</motion.span>
								</span>
							);
						})}
					</p>
				)}
			</div>
		</div>
	);
}
export default Description;
