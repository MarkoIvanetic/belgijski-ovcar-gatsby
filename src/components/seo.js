/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, keywords, location }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description_de
            description_en
            description_hr
            title_hr
            title_en
            title_de
            author
            siteUrl
            image
          }
        }
      }
    `,
  );

  const title = site.siteMetadata['title_' + lang] + ' | ' + location;
  const metaDescription = site.siteMetadata['description_' + lang].replace('-', '|');
  const image = `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        { name: 'google-site-verification', content: 'zGRRc9oZkruiMXXucRfA1PRAeHZlvip3CfcKWj5L9Lk' },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : [],
        )
        .concat(meta)}></Helmet>
  );
}

SEO.defaultProps = {
  lang: `hr`,
  meta: [],
  keywords: [
    'belgijski ovcar',
    'malinoa',
    'malinois',
    'ovcar',
    'od slunja',
    'nikola paulić',
    'nikola paulic',
    'uzgajivacnica',
    'kennels',
    'psi',
    'dog',
    'dog breeding',
    'belgian shepard',
  ],
  description: ``,
};

SEO.propTypes = {
  location: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

export default SEO;
