import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import get from 'lodash.get';

import Layout from '../components/layout';
import Gallery from '../components/gallery';

const Rodovnice = ({ data }) => {
  const pedigreeImages = get(data, 'allContentfulRodovnica.nodes').map((ped) => {
    const { id, name: thumbAlt, name: caption, image } = ped;
    return {
      ...image,
      id,
      title: thumbAlt,
      thumbAlt,
      caption,
    };
  });

  return (
    <Layout location="nav_3">
      <Gallery images={pedigreeImages} />;
    </Layout>
  );
};

Rodovnice.propTypes = {
  data: PropTypes.object,
};

export default Rodovnice;

export const query = graphql`
  {
    allContentfulRodovnica {
      nodes {
        name
        id
        image {
          thumb: fluid(maxWidth: 280, maxHeight: 280) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
          full: fluid(maxWidth: 1024) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  }
`;
