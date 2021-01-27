import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import News from '../components/news';
import { FormattedMessage } from 'gatsby-plugin-intl';

import Layout from '../components/layout';
import styles from '../styles/index.module.scss';

const IndexPage = ({ data }) => {
  const { img_1, img_2, img_3, img_4, img_5 } = data;

  return (
    <Layout>
      <div>
        <News />
        <div className={styles.root}>
          <div className={styles.imagesContainer}>
            <div className={styles.imagePanelMid}>
              <Img className={styles.gridImage} fluid={img_1.fluid} alt={img_1.title} />
              <Img className={styles.gridImage} fluid={img_2.fluid} alt={img_2.title} />
            </div>
            <div className={styles.imagePanelLarge}>
              <Img className={styles.gridImage} fixed={img_3.fixed} alt={img_3.title} />
              <Img className={styles.gridImage} fixed={img_4.fixed} alt={img_4.title} />
              <Img className={styles.gridImage} fixed={img_5.fixed} alt={img_5.title} />
            </div>
          </div>
          <div className={styles.articleContainer}>
            <h3>
              <FormattedMessage id="home_h5" />
            </h3>
            <div>
              <div className={styles.imagePanelSmall}>
                <Img className={`${styles.gridImage} wrapped-image`} fixed={img_3.fixed} alt={img_3.title} />
              </div>
              <p>
                <FormattedMessage id="home_p1" />
              </p>
            </div>
            <p>
              <FormattedMessage id="home_p2" />
            </p>
            <p>
              <FormattedMessage id="home_p3" />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query MyQuery {
    img_1: contentfulAsset(title: { eq: "nikola 1" }) {
      title
      fluid(maxWidth: 455) {
        base64
        aspectRatio
        src
        srcSet
        sizes
      }
    }
    img_2: contentfulAsset(title: { eq: "nikola 2" }) {
      title
      fluid(maxWidth: 455) {
        base64
        aspectRatio
        src
        srcSet
        sizes
      }
    }
    img_3: contentfulAsset(title: { eq: "nikola 3" }) {
      title
      fixed(width: 275) {
        base64
        width
        height
        src
        srcSet
      }
    }
    img_4: contentfulAsset(title: { eq: "nikola 4" }) {
      title
      fixed(width: 275) {
        base64
        width
        height
        src
        srcSet
      }
    }
    img_5: contentfulAsset(title: { eq: "nikola 5" }) {
      title
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

export default IndexPage;
