<p align="center">
  <a href="https://www.lekoarts.de/en">
    <img alt="LekoArts" src="https://img.lekoarts.de/gatsby/lekoarts-monogram.svg" width="80" />
  </a>
</p>
<h1 align="center">
  Free & Open Source Gatsby Themes by LekoArts
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-themes/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@lekoarts/gatsby-themes is released under the MIT license." />
  </a>
  <a href="https://circleci.com/gh/LekoArts/gatsby-themes">
    <img src="https://circleci.com/gh/LekoArts/gatsby-themes.svg?style=svg" alt="CircleCI Status" />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
    <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
  </a>
</p>

Get **high-quality** and **customizable** Gatsby themes to quickly bootstrap your website! Choose from many professionally created and impressive designs with a wide variety of features and customization options. Use Gatsby Themes to take your project to the next level and let you and your customers take advantage of the many benefits Gatsby has to offer.

## 🎨 Themes Overview

[![Themes Preview Banner](https://img.lekoarts.de/gatsby/thin_banner.jpg)](https://themes.lekoarts.de)

## 💼 Contents

This repository is a collection of my Gatsby themes, managed as a [monorepo](https://trunkbaseddevelopment.com/monorepos/) with [Lerna](https://github.com/lerna/lerna) and [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/).

- `.circleci`: Contains the configuration file for CircleCI
- `.github`: GitHub actions, templates for issues, and FUNDING file
- `cypress`: Contains the Cypress tests for `examples`
- `examples`: Contains the corresponding example sites for the `themes`. These projects can and should be used as a starter and will be copied over to their own repository. Hence they contain example data and additional Gatsby plugins (e.g. `gatsby-plugin-manifest` and `gatsby-plugin-offline`). The folder names are the contents after `gatsby-theme-*`
- `jest`: Primarily files for mocking functions/files in Jest tests
- `plop-templates`: Template for [plop.js](https://plopjs.com/)
- `scripts`: In order to run the tests on CircleCI some utility bash scripts are needed which are located here
- `themes`: Contains the themes themselves. They should only have the bare minimum of plugins installed (as `examples` can expand them) and also use `Theme UI` for styling. The naming of the folders must be `gatsby-theme-[name-with-dashes]` and the package name under the scope of `@lekoarts`
- `www`: Contains the source code for [themes.lekoarts.de](http://themes.lekoarts.de)

## 🤝 How to Contribute

Make sure that you have `yarn` installed on your machine (as it's mandatory for `yarn workspaces`). Fork this repository, clone it and run `yarn` in the root directory.

To launch the development server of an example site, use:

```sh
yarn workspace [examples/name] develop
```

Or for a build:

```sh
yarn workspace [examples/name] build
```

In the case of `examples/emma` this command would be `yarn workspace emma develop`. Now you can make changes to the respective theme and see them via Hot-Reloading.

Commit your changes to a feature branch of your fork and open up a PR against this repository. The PR will have checks in place (unit and end-to-end tests) which you can also run on your machine in preparation for the PR.

Have a look at the [contributing guide](CONTRIBUTING.md) to learn more.

## 🤩 Newsletter

If you want to receive monthly updates on my themes and all things related to Gatsby themes (relevant blog posts from me and other people, articles about Theme UI) you can [subscribe to my newsletter](https://leko.io/newsletter-themes).

## 🎓 Learning Gatsby Themes

### Articles from lekoarts.de

- [How I used Theme UI to build my Gatsby Themes library](https://www.lekoarts.de/en/blog/how-i-used-theme-ui-to-build-my-gatsby-themes-library)
- [Setting up a Gatsby Themes workspace with TypeScript, ESLint & Cypress](https://www.lekoarts.de/en/blog/setting-up-a-gatsby-themes-workspace-with-typescript-eslint-and-cypress)
- [Specimens for Gatsby powered Design Systems](https://www.lekoarts.de/en/blog/specimens-for-gatsby-powered-design-systems)
- [Creating your own Status Dashboard with Gatsby](https://www.lekoarts.de/en/blog/creating-your-own-status-dashboard-with-gatsby)

### Official resources

- [Gatsbyjs.org - Gatsby Themes](https://www.gatsbyjs.org/docs/themes/)
- [Building a Theme](https://www.gatsbyjs.org/tutorial/building-a-theme)
- [Free egghead.io "Gatsby Theme Authoring" course](https://egghead.io/courses/gatsby-theme-authoring)

### Paid resources

- [Composable Gatsby Themes](https://egghead.io/courses/composable-gatsby-themes)


<p align="center">
  <a href="https://themes.lekoarts.de">
    <img alt="Gatsby Theme" src="https://img.lekoarts.de/gatsby/gatsby-themes-illustration.png" />
  </a>
</p>
<h1 align="center">
  @lekoarts/gatsby-theme-minimal-blog
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-themes/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@lekoarts/gatsby-theme-minimal-blog is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/@lekoarts/gatsby-theme-minimal-blog">
    <img src="https://img.shields.io/npm/v/@lekoarts/gatsby-theme-minimal-blog.svg" alt="Current npm package version." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-minimal-blog?minimal=true">
    <img src="https://img.shields.io/npm/dm/@lekoarts/gatsby-theme-minimal-blog.svg" alt="Downloads per month on npm." />
  </a>
  <a href="https://npmcharts.com/compare/@lekoarts/gatsby-theme-minimal-blog?minimal=true">
    <img src="https://img.shields.io/npm/dt/@lekoarts/gatsby-theme-minimal-blog.svg" alt="Total downloads on npm." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
      <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
    </a>
</p>

Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.

[![Live Preview](https://img.lekoarts.de/gatsby/preview.svg)](https://minimal-blog.lekoarts.de) [![View Design on Figma](https://img.lekoarts.de/gatsby/view_design.svg)](https://www.figma.com/file/sq2VwMy8579ioDTXjUdlYr/gatsby-theme-minimal-blog?node-id=0%3A1)

Read the [Source Code](https://github.com/LekoArts/gatsby-starter-minimal-blog).

Also be sure to checkout other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de)

## Features

- MDX
- Theme UI-based theming
- Light Mode / Dark Mode
- Typography driven, minimal style
- Tags/Categories support
- Code highlighting with [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer) and [react-live](https://github.com/FormidableLabs/react-live) support. Also allows adding line numbers, line highlighting, language tabs, and file titles.
- RSS Feed for blog posts

## Installation

```sh
npm install @lekoarts/gatsby-theme-minimal-blog
```

### Install as a starter

This will generate a new site that pre-configures use of the theme.

```sh
gatsby new minimal-blog LekoArts/gatsby-starter-minimal-blog
```

[**View the starter's code**](https://github.com/LekoArts/gatsby-starter-minimal-blog)

## Usage

### Theme options

| Key               | Default Value   | Description                                                                                               |
| ----------------- | --------------- | --------------------------------------------------------------------------------------------------------- |
| `basePath`        | `/`             | Root url for the theme                                                                                    |
| `blogPath`        | `/blog`         | url for the blog post overview page                                                                       |
| `tagsPath`        | `/tags`         | url for the tags overview page and prefix for tags (e.g. `/tags/my-tag`)                                  |
| `postsPath`       | `content/posts` | Location of posts                                                                                         |
| `pagesPath`       | `content/pages` | Location of additional pages (optional)                                                                   |
| `mdx`             | `true`          | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass `false` to turn this off) |
| `showLineNumbers` | `true`          | Show line numbers in code blocks                                                                          |
| `navigation`      | `[]`            | Add links to your internal sites to the left part of the header                                           |
| `externalLinks`   | `[]`            | Add links to your external sites to the right part of the header                                          |

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        showLineNumbers: false,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`
          },
          {
            title: `About`,
            slug: `/about`
          }
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/lekoarts_de`
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/lekoarts.de/`
          }
        ]
      }
    }
  ]
};
```

#### Additional configuration

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.js`

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Lupin`,
    // Default title of the page
    siteTitleAlt: `Minimal Blog - @lekoarts/gatsby-theme-minimal-blog`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Minimal Blog - Gatsby Theme from @lekoarts`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://minimal-blog.lekoarts.de`,
    // Used for SEO
    siteDescription: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@lekoarts_de`,
    // Links displayed in the header on the right side
    externalLinks: [
      {
        name: `Twitter`,
        url: `https://twitter.com/lekoarts_de`
      },
      {
        name: `Instagram`,
        url: `https://www.instagram.com/lekoarts.de/`
      }
    ],
    // Navigation links
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`
      }
    ]
  }
};
```

If you want to add additional items to the navigation or external links (left and right side of header), add objects in the shape shown above to the arrays.

### Code Highlighting

Since this theme ships with [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer) and [react-live](https://github.com/FormidableLabs/react-live) certain additional features were added to code blocks. You can find an overview / usage example in the [example repository](https://github.com/LekoArts/gatsby-themes/tree/master/examples/minimal-blog/content/posts/fantastic-beasts-and-where-to-find-them/index.mdx)! If you want to change certain code styles or add additional language tabs, you need to shadow the file `src/@lekoarts/gatsby-theme-minimal-blog/styles/code.js`.

**Language tabs:**

When you add a language (such as e.g. `js` or `javascript`) to the code block, a little tab will appear at the top left corner.

````
```js
// code goes here
```
````

**Code titles:**

You can display a title (e.g. the file path) above the code block.

````
```jsx:title=your-title
// code goes here
```
````

Or without a specific language:

````
```:title=your-title
// code goes here
```
````

**Line highlighting:**

You can highlight single or multiple (or both) lines in a code block. You need to add a language.

````
```js {2,4-5}
const test = 3
const foo = 'bar'
const harry = 'potter'
const hermione = 'granger'
const ron = 'weasley'
```
````

**Hide line numbers:**

If you want to hide line numbers you can either globally disable them (see Theme options) or on a block-by-block basis. You can also combine that with the other attributes.

````
```noLineNumbers
// code goes here
```
````

**react-live:**

Add `react-live` to the code block (and render the component) to see a preview below it.

````
```js react-live
const onClick = () => {
  alert("You opened me");
};
render(<button onClick={onClick}>Alohomora!</button>);
```
````

### Shadowing

Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/) to understand how to customize the this theme! Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-minimal-blog/` to shadow/override files.

### Adding content

#### Adding a new blog post

New blog posts will be shown on the index page (the three most recent ones) of this theme and on the blog overview page. They can be added by creating MDX files inside `content/posts`. General setup:

1. Create a new folder inside `content/posts`
1. Create a new `index.mdx` file, and add the frontmatter
1. Add images to the created folder (from step 1) you want to reference in your blog post
1. Reference an image as your `banner` in the frontmatter
1. Write your content below the frontmatter
1. Add a `slug` to the frontmatter to use a custom slug, e.g. `slug: "/my-slug"` (Optional)

**Frontmatter reference:**

```md
---
title: Introduction to "Defence against the Dark Arts"
date: 2019-11-07
description: Defence Against the Dark Arts (abbreviated as DADA) is a subject taught at Hogwarts School of Witchcraft and Wizardry and Ilvermorny School of Witchcraft and Wizardry.
tags:
  - Tutorial
  - Dark Arts
banner: ./defence-against-the-dark-arts.jpg
---
```

**The fields `description` and `banner` are optional!** If no description is provided, an excerpt of the blog post will be used. If no banner is provided, the default `siteImage` (from `siteMetadata`) is used.

The `date` field has to be written in the format `YYYY-MM-DD`!

#### Adding a new page

Additional pages can be created by placing MDX files inside `contents/pages`, e.g. an "About" or "Contact" page. You'll manually need to link to those pages, for example by adding them to the navigation (in `siteMetadata`). General instructions:

1. Create a new folder inside `content/pages`
1. Create a new `index.mdx` file, and add the frontmatter
1. Write your content below the frontmatter
1. Optionally add files/images to the folder you want to reference from the page

**Frontmatter reference:**

```md
---
title: About
slug: "/about"
---
```

#### Changing the "Hero" text

To edit the hero text ("Hi, I'm Lupin...), create a file at `src/@lekoarts/gatsby-theme-minimal-blog/texts/hero.mdx` to edit the text.

#### Changing the "Projects" part

To edit the projects part below "Latest posts", create a file at `src/@lekoarts/gatsby-theme-minimal-blog/texts/bottom.mdx` to edit the contents.

## 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [Patreon](https://www.patreon.com/lekoarts)!

If you want to hire me for **contract/freelance work**, you can do so! [Get in touch with me!](https://www.lekoarts.de/en/contact)


<p align="center">
  <a href="https://minimal-blog.lekoarts.de">
    <img alt="LekoArts" src="https://img.lekoarts.de/gatsby/gatsby-site-illustration.png" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter: Minimal Blog
</h1>

<p align="center">
  <a href="https://github.com/LekoArts/gatsby-starter-minimal-blog/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Minimal Blog is released under the MIT license." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://twitter.com/intent/follow?screen_name=lekoarts_de">
    <img src="https://img.shields.io/twitter/follow/lekoarts_de.svg?label=Follow%20@lekoarts_de" alt="Follow @lekoarts_de" />
  </a>
  <a href="https://app.netlify.com/sites/minimal-blog/deploys">
    <img src="https://api.netlify.com/api/v1/badges/f466015c-14f4-440d-a92b-0b0e30de609a/deploy-status" alt="Netlify Status" />
  </a>
</p>

Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting. Using the Gatsby Theme [`@lekoarts/gatsby-theme-minimal-blog`](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog).

[**Demo Website**](https://minimal-blog.lekoarts.de)

Also be sure to checkout other [Free & Open Source Gatsby Themes](https://themes.lekoarts.de)

## ✨ Features

- MDX
- Fully customizable through the usage of Gatsby Themes (and Theme UI)
- Light Mode / Dark Mode
- Typography driven, minimal style
- Tags/Categories support
- Code highlighting with [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer) and [react-live](https://github.com/FormidableLabs/react-live) support. Also allows adding line numbers, line highlighting, language tabs, and file titles.
- RSS Feed for blog posts
- Google Analytics Support
- SEO (Sitemap, OpenGraph tags, Twitter tags)
- Offline Support & WebApp Manifest

## 🚀 Getting Started

1. **Create a Gatsby site.**

Use the Gatsby CLI to create a new site, specifying this project

```sh
gatsby new project-name https://github.com/LekoArts/gatsby-starter-minimal-blog
```

2. **Start developing.**

Navigate into your new site's directory and start it up.

```sh
cd project-name
gatsby develop
```

3. **Open the code and start customizing!**

Your site is now running at `http://localhost:8000`!

If you want to learn more about how you can use a Gatsby starter that is configured with a Gatsby theme, you can checkout this [shorter](https://www.gatsbyjs.org/docs/themes/using-a-gatsby-theme/) or [longer](https://www.gatsbyjs.org/tutorial/using-a-theme/) tutorial. The tutorials don't exactly apply to this starter however the concepts are the same.

## 📝 Using and modifying this starter

**Important Note:** Please read the guide [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/) to understand how to customize the underlying theme!

This starter creates a new Gatsby site that installs and configures the theme [`@lekoarts/gatsby-theme-minimal-blog`](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog).

Have a look at the theme's README and files to see what options are available and how you can shadow the various components including Theme UI. Generally speaking you will want to place your files into `src/@lekoarts/gatsby-theme-minimal-blog/` to shadow/override files. The Theme UI config can be configured by shadowing its files in `src/gatsby-plugin-theme-ui/`.

### Code Highlighting

Since the underlying theme ships with [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer) and [react-live](https://github.com/FormidableLabs/react-live) certain additional features were added to code blocks. You can find an overview / usage example in the [example repository](https://github.com/LekoArts/gatsby-themes/tree/master/examples/minimal-blog/content/posts/fantastic-beasts-and-where-to-find-them/index.mdx)! If you want to change certain code styles or add additional language tabs, you need to shadow the file `src/@lekoarts/gatsby-theme-minimal-blog/styles/code.js`.

**Language tabs:**

When you add a language (such as e.g. `js` or `javascript`) to the code block, a little tab will appear at the top left corner.

````
```js
// code goes here
```
````

**Code titles:**

You can display a title (e.g. the file path) above the code block.

````
```jsx:title=your-title
// code goes here
```
````

Or without a specific language:

````
```:title=your-title
// code goes here
```
````

**Line highlighting:**

You can highlight single or multiple (or both) lines in a code block. You need to add a language.

````
```js {2,4-5}
const test = 3
const foo = 'bar'
const harry = 'potter'
const hermione = 'granger'
const ron = 'weasley'
```
````

**Hide line numbers:**

If you want to hide line numbers you can either globally disable them (see Theme options) or on a block-by-block basis. You can also combine that with the other attributes.

````
```noLineNumbers
// code goes here
```
````

**react-live:**

Add `react-live` to the code block (and render the component) to see a preview below it.

````
```js react-live
const onClick = () => {
  alert("You opened me");
};
render(<button onClick={onClick}>Alohomora!</button>);
```
````

### Adding content

#### Adding a new blog post

New blog posts will be shown on the index page (the three most recent ones) of this theme and on the blog overview page. They can be added by creating MDX files inside `content/posts`. General setup:

1. Create a new folder inside `content/posts`
1. Create a new `index.mdx` file, and add the frontmatter
1. Add images to the created folder (from step 1) you want to reference in your blog post
1. Reference an image as your `banner` in the frontmatter
1. Write your content below the frontmatter

**Frontmatter reference:**

```md
---
title: Introduction to "Defence against the Dark Arts"
date: 2019-11-07
description: Defence Against the Dark Arts (abbreviated as DADA) is a subject taught at Hogwarts School of Witchcraft and Wizardry and Ilvermorny School of Witchcraft and Wizardry.
tags:
  - Tutorial
  - Dark Arts
banner: ./defence-against-the-dark-arts.jpg
---
```

**The fields `description` and `banner` are optional!** If no description is provided, an excerpt of the blog post will be used. If no banner is provided, the default `siteImage` (from `siteMetadata`) is used.

The `date` field has to be written in the format `YYYY-MM-DD`!

#### Adding a new page

Additional pages can be created by placing MDX files inside `contents/pages`, e.g. an "About" or "Contact" page. You'll manually need to link to those pages, for example by adding them to the navigation (in `navigation` option of the theme). General instructions:

1. Create a new folder inside `content/pages`
1. Create a new `index.mdx` file, and add the frontmatter
1. Write your content below the frontmatter
1. Optionally add files/images to the folder you want to reference from the page

**Frontmatter reference:**

```md
---
title: About
slug: "/about"
---
```

#### Changing the "Hero" text

To edit the hero text ("Hi, I'm Lupin...), create a file at `src/@lekoarts/gatsby-theme-minimal-blog/texts/hero.mdx` to edit the text.

#### Changing the "Projects" part

To edit the projects part below "Latest posts", create a file at `src/@lekoarts/gatsby-theme-minimal-blog/texts/bottom.mdx` to edit the contents.

### Change your `static` folder

The `static` folder contains the icons, social media images and robots.txt. Don't forget to change these files, too!

## 🤔 Questions or problems?

Please open up an issue on the main repository: [LekoArts/gatsby-themes](https://github.com/LekoArts/gatsby-themes). Thanks!

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on Gatsby's website](https://www.gatsbyjs.org/).

### Themes

- To learn more about Gatsby themes specifically, we recommend checking out the [theme docs](https://www.gatsbyjs.org/docs/themes/).

### General

- **For most developers, I recommend starting with the [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to Gatsby's documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Reference Guides_ and _Gatsby API_ sections in the sidebar.

## 🌟 Supporting me

Thanks for using this project! I'm always interested in seeing what people do with my projects, so don't hesitate to tag me on [Twitter](https://twitter.com/lekoarts_de) and share the project with me.

Please star this project, share it on Social Media or consider supporting me on [Patreon](https://www.patreon.com/lekoarts)!

If you want to hire me for **contract/freelance work**, you can do so! [Get in touch with me!](https://www.lekoarts.de/en/contact)
