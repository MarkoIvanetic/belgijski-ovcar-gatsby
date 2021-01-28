import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import get from 'lodash.get';

import Layout from '../components/layout';
import Gallery from '../components/gallery';

export default function Galerije({ data }) {
  const galleries = get(data, 'allContentfulGallery.nodes').filter((gallery) => {
    if (!gallery.images?.length) {
      console.warn(`Gallery ${gallery.title} has no images!`);
      return false;
    }
    if (!gallery.title) {
      console.warn(`Gallery ${gallery.title} is missing a title!`);
      return false;
    }
    return true;
  });

  return (
    <Layout>
      <div>
        {galleries.map(({ id, title, thumbAlt, images }, i) => {
          return (
            <div key={id} className="callout-left">
              <Gallery images={images} title={title} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

Galerije.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  {
    allContentfulGallery {
      nodes {
        images {
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
          thumbAlt: title
          caption: title
        }
        id
        title
      }
    }
  }
`;
