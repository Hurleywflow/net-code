import { ImageResponse } from 'next/og';
import { getTranslations } from 'next-intl/server';

export default async function generateMetadata({
	params: { locale },
}: { params: { locale: string } }) {
	const t = await getTranslations({
		locale: locale,
		namespace: 'Metadata' as 'Index',
	});

	return new ImageResponse(<div style={{ fontSize: 128 }}>{t('title')}</div>);
}
