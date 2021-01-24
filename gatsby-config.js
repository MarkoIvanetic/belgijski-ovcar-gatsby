require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_DELIVERY_TOKEN,
  downloadLocal: true,
};

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error('Contentful spaceId and the access token need to be provided.');
}

// const {
//   NODE_ENV,
//   URL: NETLIFY_SITE_URL = 'https://www.example.com',
//   DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
//   CONTEXT: NETLIFY_ENV = NODE_ENV,
// } = process.env;
// const isNetlifyProduction = NETLIFY_ENV === 'production';
// const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: `My Awesome Blog`,
    description: `An awesome blog displaying my awesome posts.`,
    author: `Marko Ivanetic`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     resolveEnv: () => NETLIFY_ENV,
    //     env: {
    //       production: {
    //         policy: [{ userAgent: '*' }],
    //       },
    //       'branch-deploy': {
    //         policy: [{ userAgent: '*', disallow: ['/'] }],
    //         sitemap: null,
    //         host: null,
    //       },
    //       'deploy-preview': {
    //         policy: [{ userAgent: '*', disallow: ['/'] }],
    //         sitemap: null,
    //         host: null,
    //       },
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`hr`, `en`, `de`],
        defaultLanguage: `hr`,
        redirect: true,
        redirectComponent: require.resolve(`./src/components/redirect.js`),
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Crimson Text`,
            variants: [`400`],
            subsets: [`latin`],
          },
          {
            family: `IBM Plex Sans`,
            variants: [`400`],
            subsets: [`latin`],
          },
          {
            family: `Source Serif Pro`,
            variants: [`400`],
            subsets: [`latin`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `intl`,
        path: `${__dirname}/src/intl`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marko tester`,
        short_name: `tester`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `${__dirname}/static/site/favicon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
