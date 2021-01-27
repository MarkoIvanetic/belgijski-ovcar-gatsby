import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { FormattedMessage } from 'gatsby-plugin-intl';

import { useWindowSize } from '../utils/hooks';
import Layout from '../components/layout';
import styles from '../styles/ovcar.module.scss';

const Ovcar = ({ data }) => {
  const size = useWindowSize();
  const image = data.contentfulAsset;
  return (
    <Layout>
      {size.width > 991 && (
        <div className={styles.imagesContainer}>
          <Img fluid={image.fluid} alt={image.title} />
        </div>
      )}

      <div className={styles.articleContainer}>
        <h3>
          <FormattedMessage id="ovcar_h5" />
        </h3>
        <p>
          <FormattedMessage id="ovcar_p1" />
        </p>
        <div>
          <p>
            {size.width <= 991 && <Img fixed={image.fixed} alt={image.title} />}
            <FormattedMessage id="ovcar_p2" />
          </p>
        </div>
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
      title
      fluid(maxWidth: 455) {
        base64
        aspectRatio
        src
        srcSet
        sizes
      }
      fixed(width: 275) {
        base64
        width
        height
        src
        srcSet
      }
    }
  }
`;
