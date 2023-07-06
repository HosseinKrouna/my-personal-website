const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	reactStrictMode: true,
	images: {
		domains: ["res.cloudinary.com"],
	},
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		if (!isServer) {
			config.resolve.fallback = {
				...config.resolve.fallback,
				fs: false,
			};
		}

		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};

module.exports = nextConfig;
