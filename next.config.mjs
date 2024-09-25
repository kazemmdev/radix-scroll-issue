import withPWA from "next-pwa"

const isProd = process.env.NODE_ENV === "production"

/** @type {import("next").NextConfig} */
const globalConfig = {
    output: isProd ? "standalone" : "",
    swcMinify: isProd,
    reactStrictMode: isProd,
    i18n: {
        locales: ["fa"],
        defaultLocale: "fa"
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            },
            {
                protocol: "http",
                hostname: "**"
            }
        ]
    },
    webpack(config, options) {
        const { isServer } = options
        config.module = config.module || {}
        config.module.rules = config.module.rules || []
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        })
        if (!isServer) {
            config.resolve.fallback = {
                ...(config.resolve.fallback || {}),
                fs: false,
                module: false,
                path: false,
                os: false,
                crypto: false
            }
        }

        return config
    },
    headers() {
        return [
            {
                source: "/api/v1/manifest",
                headers: [
                    {
                        key: "Content-Type",
                        value: "application/json"
                    }
                ]
            }
        ]
    }
}

const pwaConfig = {
    dest: "public",
    disable: !isProd,
    register: isProd,
    dynamicStartUrl: isProd,
    skipWaiting: isProd,
    sw: "sw.js",
}

const nextConfig = withPWA(pwaConfig)(globalConfig)

export default nextConfig
