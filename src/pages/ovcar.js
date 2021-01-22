import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import get from 'lodash.get';

import { FormattedMessage } from 'gatsby-plugin-intl';
import Layout from '../components/layout';
import styles from '../styles/index.module.scss';

const Ovcar = ({ data }) => {
  const imageFluid = get(data, 'contentfulAsset.fluid');
  return (
    <Layout>
      <div className={styles.imageContainer}>
        <Img fluid={imageFluid} />
      </div>

      <div className={styles.articleContainer}>
        <h3>
          <FormattedMessage id="ovcar_h5" />
        </h3>
        <p>
          <FormattedMessage id="ovcar_p1" />
        </p>
        <p>
          <FormattedMessage id="ovcar_p2" />
        </p>
        <p>
          <FormattedMessage id="ovcar_p3" />
        </p>
        <p>
          <FormattedMessage id="ovcar_p4" />
        </p>
      </div>
    </Layout>
  );
};

export default Ovcar;

Ovcar.propTypes = {
  data: PropTypes.shape({
    contentfulAsset: PropTypes.object,
  }),
};

export const query = graphql`
  {
    contentfulAsset(file: { fileName: { eq: "belgijski_ovcar.jpg" } }) {
      fluid {
        base64
        aspectRatio
        src
        srcSet
        sizes
      }
    }
  }
`;
