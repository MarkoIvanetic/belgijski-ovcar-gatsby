import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { Col, Row } from './grid';

const ThumbGrid = ({ images, colWidth, mdColWidth, gutter, imgClass, handleOpen }) => {
  return (
    <Row>
      {images.map(({ id, title, thumb, thumbAlt }, thumbIndex) => {
        return (
          <Col
            width={colWidth}
            md={mdColWidth}
            key={id}
            onClick={() => {
              handleOpen(thumbIndex);
            }}>
            <div style={{ margin: gutter }}>
              {title ? <h3>{title}</h3> : null}
              <Img fluid={thumb} className={imgClass} alt={thumbAlt} />
            </div>
          </Col>
        );
      })}
    </Row>
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

ThumbGrid.defaultProps = {
  images: [],
  gutter: '0.25rem',
  colWidth: 100 / 3,
  mdColWidth: 100 / 4,
  imgClass: '',
};

export default ThumbGrid;
