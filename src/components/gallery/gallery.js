import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ThumbGrid from './thumbnails';
import LightBox from './lightbox';
import { Root } from './grid';

const Gallery = ({ lightboxOptions, ...rest }) => {
  const { images, title } = rest;
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (i) => {
    setShowLightbox(true);
    setSelectedImage(i);
  };

  const handleClose = () => {
    setShowLightbox(false);
    setSelectedImage(null);
  };

  const handlePrevRequest = (i, length) => (e) => {
    setSelectedImage((i - 1 + length) % length);
  };

  const handleNextRequest = (i, length) => (e) => {
    setSelectedImage((i + 1) % length);
  };

  return (
    <Root>
      <h3>{title}</h3>
      <ThumbGrid {...rest} handleOpen={handleOpen} />
      {showLightbox && selectedImage !== null && (
        <LightBox
          images={images}
          handleClose={handleClose}
          handleNextRequest={handleNextRequest}
          handlePrevRequest={handlePrevRequest}
          selectedImage={selectedImage}
          lightboxOptions={lightboxOptions}
        />
      )}
    </Root>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      full: PropTypes.object,
      thumb: PropTypes.object,
      thumbAlt: PropTypes.string,
      title: PropTypes.node,
      caption: PropTypes.node,
    }),
  ),
  colWidth: PropTypes.number,
  mdColWidth: PropTypes.number,
  gutter: PropTypes.string,
  imgClass: PropTypes.string,
  lightboxOptions: PropTypes.object,
};

Gallery.defaultProps = {
  images: [],
  gutter: '0.25rem',
  colWidth: 100 / 3,
  mdColWidth: 100 / 4,
  imgClass: '',
  lightboxOptions: {},
};

export default Gallery;
