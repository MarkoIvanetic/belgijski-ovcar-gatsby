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

const intl = {
  title: {
    hr: `Belgijski Ovčar - Uzgajivačnica Belgijskih Ovčara "Od Slunja"`,
    en: `Belgian Shepard - Kennels "Od Slunja", Malinois training`,
    de: `Belgischen Schäferhunde - Zwinger "Od Slunja", Malinois Ausbildung`,
  },
  title_short: {
    hr: `Belgijski Ovčar`,
    en: `Belgian Shepard`,
    de: `Belgischen Schäferhunde`,
  },
  desc: {
    hr: `Uzgoj, savjeti i dresura Belgijskih Ovčara Malinoa (Malinois). Trenirani pod vodstvom bivšeg zapovjednika voda zaštitno-tragačih pasa Nikole Pauliča`,
    en: `Breeding, tips and training of Belgian Shepherds Malinois. Trained under the leadership of former platoon commander of protective-search dogs Nikola Paulič`,
    de: `Zucht, Tipps und Training der Belgischen Schäferhunde Malinois. Ausbildung unter der Leitung des ehemaligen Zugführers der Schutzhunde Nikola Paulič`,
  },
};

module.exports = {
  siteMetadata: {
    title_hr: intl.title.hr,
    title_en: intl.title.en,
    title_de: intl.title.de,
    description_hr: intl.desc.hr,
    description_en: intl.desc.en,
    description_de: intl.desc.de,
    author: `Marko Ivanetic`,
    siteUrl: `https://objective-euclid-682845.netlify.app/`,
    image: `/site/dogbanner.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
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
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
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
        name: intl.title.hr,
        short_name: intl.title_short.hr,
        description: intl.desc.hr,
        background_color: `#fff`,
        theme_color: `#fff`,
        lang: `hr`,
        start_url: `/hr/`,
        display: `standalone`,
        icon: `${__dirname}/static/site/favicon.png`,
        icon_options: {
          purpose: `maskable`,
        },
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
            name: intl.title.en,
            short_name: intl.title_short.en,
            description: intl.desc.en,
          },
          {
            start_url: `/de/`,
            lang: `de`,
            name: intl.title.de,
            short_name: intl.title_short.de,
            description: intl.desc.de,
          },
        ],
      },
    },
  ],
};
