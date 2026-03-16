import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	experimental: {
		turbopackUseSystemTlsCerts: true,
	},
	output: 'standalone',
}

export default nextConfig
