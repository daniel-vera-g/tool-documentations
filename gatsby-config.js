'use strict';

module.exports = {
  pathPrefix: '/tool-documentations',
  siteMetadata: {
    title: 'Tool documentation',
    sidebarTitle: 'Tool docs',
    description: 'Documentation of my current tools',
    siteUrl: 'https://daniel-vera-g.github.io/tool-documentations/',
    keywords: 'tools, gatsby, documentation, linux',
    author: {
      name: 'Daniel VG',
      url: 'https://github.com/daniel-vera-g/',
      email: 'danielveragi@gmail.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-algolia-docsearch',
      options: {
        apiKey: '7d02a98f3b5cc6d3550fd26d0239c9ac', // required
        indexName: 'daniel-vera-g_tool-documentations', // required
        inputSelector: 'algoliaSearch', // required
        debug: false // (bool) Optional. Default `false`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/docs`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 704,
              quality: 90,
              wrapperStyle: 'margin-top: 32px; margin-bottom: 32px;',
              linkImagesToOriginal: false
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '›'
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-autolink-headers',
          'gatsby-remark-smartypants'
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://grundgesetz-skeleton.netlify.com'
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify'
  ]
};
