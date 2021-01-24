import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { IntlContextConsumer } from 'gatsby-plugin-intl';

const News = ({ children, intl }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "dogbanner.png" }) {
        childImageSharp {
          screen: fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
          mobile: fixed(width: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <IntlContextConsumer>{({ language: currentLocale }) => <div>{currentLocale}</div>}</IntlContextConsumer>;
};

News.propTypes = {
  children: PropTypes.node.isRequired,
  intl: PropTypes.shape({
    locale: PropTypes.string,
    formatMessage: PropTypes.func,
  }),
};

export default News;
