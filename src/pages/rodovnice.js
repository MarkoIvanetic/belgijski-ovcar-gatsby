import React from 'react';
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
    <Layout>
      <Gallery images={pedigreeImages} />;
    </Layout>
  );
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
