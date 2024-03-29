import { getRequestConfig } from 'next-intl/server';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { notFound } from 'next/navigation';

// Can be imported from a shared config
const locales = ['en', 'vn'];

export default getRequestConfig(async ({ locale }) => {
	// Validate that the incoming `locale` parameter is valid
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	// biome-ignore lint/style/useBlockStatements: <explanation>
	if (!locales.includes(locale as any)) notFound();

	return {
		messages: (await import(`./messages/${locale}.json`)).default
	};
});
