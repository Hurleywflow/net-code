import { useTranslations } from 'next-intl';
import Word from './Word';

// const paragraph =
// 	'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';

export default function TextRevealOnScroll() {
	const t = useTranslations('Index');
	t('hero4').split(' ');
	// paragraph.split(' ');
	return (
		<div>
			<div style={{ height: '2vh' }} />
			{/* <Word paragraph={paragraph} /> */}
			<Word paragraph={t('hero4')} />
			<div style={{ height: '' }} />
		</div>
	);
}
