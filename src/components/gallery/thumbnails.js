import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styles from '../style/gallery.module.scss';

const ThumbGrid = ({ images, colWidth, gutter, imgClass, handleOpen }) => {
  return (
    <div className={styles.imageRow}>
      {images.map(({ id, title, thumb, thumbAlt }, thumbIndex) => {
        return (
          <div
            className={styles.imageWrap}
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
  colWidth: PropTypes.number,
  mdColWidth: PropTypes.number,
  gutter: PropTypes.string,
  imgClass: PropTypes.string,
};

export default ThumbGrid;
