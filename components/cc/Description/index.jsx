/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './style.module.scss';
function Description() {
	const slideUp = {
		initial: {
			y: '100%',
		},
		open: (i) => ({
			y: '0%',
			transition: { duration: 0.5, delay: 0.01 * i },
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
		'Our team of skilled and versatile developers specialize in a wide range of custom web development services. Whether you require a basic website or a complex web application, we can provide high-quality solutions that align with your business objectives. We have a proven track record in designing visually appealing and user-friendly websites. Our team can build scalable websites from scratch that seamlessly integrate with design. A professionally designed website is a powerful marketing tool that establishes credibility and confidence, attracting and engaging potential customers. Choosing professional website development services is a strategic decision that promotes business growth.';
	const description = useRef(null);
	const isInView = useInView(description);
	return (
		<div ref={description} className={styles.description}>
			<div className={styles.body}>
				<p>
					{phrase.split(' ').map((word, index) => {
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
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
			</div>
		</div>
	);
}
export default Description;
