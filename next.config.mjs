/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/calling',
        destination: '/features/calling',
        permanent: false,
      },
      {
        source: '/channels',
        destination: '/features/channels',
        permanent: false,
      },
      {
        source: '/meta-ai',
        destination: '/features/meta-ai',
        permanent: false,
      },
      {
        source: '/status',
        destination: '/features/status',
        permanent: false,
      },
      {
        source: '/security',
        destination: '/features/security',
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
