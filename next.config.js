const withOffline = require('next-offline');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
	workboxOpts: {
		swDest: 'static/service-worker.js',
		runtimeCaching: [
			{
				urlPattern: /^https?.*/,
				handler: 'networkFirst',
				options: {
					cacheName: 'https-calls',
					networkTimeoutSeconds: 15,
					expiration: {
						maxEntries: 150,
						maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
					},
					cacheableResponse: {
						statuses: [0, 200]
					}
				}
			}
		]
	}
};

module.exports = withCSS(withFonts(withOptimizedImages(withOffline(nextConfig))));
