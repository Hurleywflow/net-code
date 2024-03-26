/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
// const MillionCompiler = require('@million/lint');

// const createNextIntlPlugin = require('next-intl/plugin');
// const withNextIntl = createNextIntlPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	images: {
// 		remotePatterns: [
// 			{
// 				protocol: 'https',
// 				hostname: 'aceternity.com',
// 				port: ''
// 				// pathname: '/account123/**',
// 			}
// 		]
// 	}
// };

// module.exports = MillionCompiler.next({ rsc: true })(withNextIntl(nextConfig));

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
const MillionCompiler = require('@million/lint');
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'aceternity.com',
				port: ''
				// pathname: '/account123/**',
			}
		]
	}
};

module.exports = withNextIntl(
	MillionCompiler.next({ rsc: true })(nextConfig)
);
