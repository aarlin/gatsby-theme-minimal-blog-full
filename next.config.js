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
      ...oldBlogPosts.map((post) => ({
        source: post,
        destination: `${OLD_BLOG_URL}${post}`,
        permanent: true,
      })),
      {
        source: '/twitch',
        destination: 'https://twitch.tv/',
        permanent: true,
      },
    ];
  },
};

module.exports = moduleExports;
