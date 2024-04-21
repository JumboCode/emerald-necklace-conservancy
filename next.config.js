/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			// Basic redirect
			{
				source: '/admin',
				destination: '/admin/popups',
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig
