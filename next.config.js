const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
});

module.exports = withMDX({
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	// rehypePlugins: [
	//   require('rehype-autolink-headings'),
	//   require('rehype-slug'),
	//   [
	//     require('rehype-toc'),
	//     {
	//       headings: ['h2', 'h3', 'h4'],
	//       cssClasses: {
	//         toc: 'table-of-contents',
	//       },
	//     },
	//   ],
	// ],
});
