import React from 'react';
import PropTypes from 'prop-types';

import styles from './ImageItem.scss';

const ImageItem = ({ url, alt }) => (
  <div className={styles.imageItem}>
    <img className={styles.image} src={url} alt={alt} />
  </div>
);

ImageItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageItem;
