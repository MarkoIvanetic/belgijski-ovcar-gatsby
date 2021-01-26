import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';

const NotFoundPage = ({ data }) => {
  const image = data.contentfulAsset;
  return (
    <Layout>
      <Img fluid={image.fluid} alt={image.title} />
      <h1>
        <FormattedMessage id="404_title" />
      </h1>
      <p>
        <FormattedMessage id="404_subtitle" />
      </p>
    </Layout>
  );
};

export const query = graphql`
  {
    contentfulAsset(file: { fileName: { eq: "404.png" } }) {
      title
      fluid(maxWidth: 700) {
        base64
        aspectRatio
        src
        srcSet
        sizes
      }
    }
  }
`;

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    contentfulAsset: PropTypes.object,
  }),
};

export default NotFoundPage;
