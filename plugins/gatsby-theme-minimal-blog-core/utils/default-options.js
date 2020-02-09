module.exports = themeOptions => {
  const basePath = themeOptions.basePath || `/`
  const blogPath = themeOptions.blogPath || `/blog`
  const postsPath = themeOptions.postsPath || `content/posts`
  const pagesPath = themeOptions.pagesPath || `content/pages`
  const tagsPath = themeOptions.tagsPath || `/tags`
  const externalLinks = themeOptions.externalLinks || 
  [{
    title: `Blog`,
    slug: `/blog`
  },
  {
    title: `About`,
    slug: `/about`
  }]
  const navigation = themeOptions.navigation || 
  [{
    name: `Github`,
    url: `https://github.com/aarlin`
  }]
  const showLineNumbers = themeOptions.showLineNumbers || true

  return {
    basePath,
    blogPath,
    postsPath,
    pagesPath,
    tagsPath,
    externalLinks,
    navigation,
    showLineNumbers,
  }
}
