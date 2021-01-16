import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash.get';

import Layout from '../components/layout';
import styles from '../styles/gallery.module.scss';

import Gallery from '@browniebroke/gatsby-image-gallery';
import '@browniebroke/gatsby-image-gallery/dist/style.css';

export default function Photos({ data }) {
  console.log(get(data, 'allContentfulGallery.nodes'));
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

  console.log(galleries);

  return (
    <Layout>
      <div>
        {galleries.map(({ id, title, thumbAlt, images }, i) => {
          return (
            <div className={styles.gallery} key={id}>
              <h3 className={styles.galleryTitle}>{title}</h3>
              <Gallery images={images} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

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
