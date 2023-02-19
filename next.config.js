const moduleExports = {
  swcMinify: true,
  images: {
    domains: [
      'img.youtube.com',
      'dl.airtable.com',
      'v5.airtableusercontent.com',
      'opengraph.githubassets.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/twitch',
        destination: 'https://twitch.tv/',
        permanent: true,
      },
    ];
  },
};

module.exports = moduleExports;
