import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import get from 'lodash.get';

import Layout from '../components/layout';
import Gallery from '../components/gallery';
import { useMemo } from 'react';
import { injectIntl } from 'gatsby-plugin-intl';

const parseGallery = (gallery, locale) => {
  let title;

  try {
    title = gallery[`title_${locale}`];
  } catch (error) {
    title = gallery.title || '';
    console.warn('Title missing from gallery:', gallery);
  }

  return { ...gallery, title };
};

function Galerije({ data, intl }) {
  const galleries = get(data, 'allContentfulGallery.nodes').filter((gallery) => {
    if (!gallery.images?.length) {
      console.warn(`Gallery ${gallery.title_hr} has no images!`);
      return false;
    }
    if (!gallery.title_hr) {
      console.warn(`Gallery ${gallery.title_hr} is missing a title!`);
      return false;
    }
    return true;
  });

  const formatedGalleries = useMemo(() => {
    return galleries.map((gallery) => parseGallery(gallery, intl.locale));
  }, [galleries, intl.locale]);

  return (
    <Layout location="nav_2">
      <div>
        {formatedGalleries.map(({ id, title, thumbAlt, images }, i) => {
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
  intl: PropTypes.object,
};

export default injectIntl(Galerije);

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
        title_en
        title_de
        title_hr
      }
    }
  }
`;
