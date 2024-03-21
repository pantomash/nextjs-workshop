/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["naszsklep-api.vercel.app", "static-ourstore.hyperfunctor.com"],
	},
	experimental: {
		workerThreads: false,
		cpus: 1,
	},
};

export default nextConfig;
