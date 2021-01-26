import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import styles from '../styles/404.module.scss';

const NotFoundPage = ({ data }) => {
  const image = data.contentfulAsset;
  return (
    <Layout>
      <div className={styles.root}>
        <div>
          <Img fixed={image.fixed} alt={image.title} />
        </div>
        <h1>
          <FormattedMessage id="404_title" />
        </h1>
        <p>
          <FormattedMessage id="404_subtitle" />
        </p>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    contentfulAsset(title: { eq: "404" }) {
      title
      fixed(width: 700) {
        base64
        width
        height
        src
        srcSet
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
