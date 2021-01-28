import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styles from '../style/gallery.module.scss';

const ThumbGrid = ({ images, thumbSize, colWidth, gutter, imgClass, handleOpen }) => {
  return (
    <div className={styles.imageRow}>
      {images.map(({ id, title, thumb, thumbAlt }, thumbIndex) => {
        return (
          <div
            className={styles.imageWrap}
            style={{ minWidth: thumbSize || '250px' }}
            width={colWidth}
            key={id}
            onClick={() => {
              handleOpen(thumbIndex);
            }}>
            <div style={{ margin: gutter }}>
              {title && <h3>{title}</h3>}
              <Img fluid={thumb} className={imgClass} alt={thumbAlt} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

ThumbGrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      full: PropTypes.object,
      thumb: PropTypes.object,
      thumbAlt: PropTypes.string,
      title: PropTypes.node,
    }),
  ),
  handleOpen: PropTypes.func,
  thumbSize: PropTypes.number,
  colWidth: PropTypes.number,
  mdColWidth: PropTypes.number,
  gutter: PropTypes.string,
  imgClass: PropTypes.string,
};

export default ThumbGrid;
