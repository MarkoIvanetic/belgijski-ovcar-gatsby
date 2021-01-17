import React from 'react';
import PropTypes from 'prop-types';
import RaLightbox from 'react-image-lightbox';

const Lightbox = ({ images, selectedImage, handleClose, handlePrevRequest, handleNextRequest }) => {
  const fullArray = images.filter((image) => image.full !== undefined).map(({ full }) => full.src);
  const { length } = fullArray;

  const lightboxOptions = {};
  return (
    <RaLightbox
      mainSrc={fullArray[selectedImage]}
      nextSrc={fullArray[selectedImage + 1]}
      prevSrc={fullArray[selectedImage - 1]}
      onCloseRequest={handleClose}
      onMovePrevRequest={handlePrevRequest(selectedImage, length)}
      onMoveNextRequest={handleNextRequest(selectedImage, length)}
      imageTitle={images[selectedImage].title}
      imageCaption={images[selectedImage].caption}
      {...lightboxOptions}
    />
  );
};

Lightbox.propTypes = {
  selectedImage: PropTypes.number,
  images: PropTypes.array,
  handleClose: PropTypes.func,
  handlePrevRequest: PropTypes.func,
  handleNextRequest: PropTypes.func,
  intl: PropTypes.shape({
    locale: PropTypes.string,
    formatMessage: PropTypes.func,
  }),
};

export default Lightbox;
