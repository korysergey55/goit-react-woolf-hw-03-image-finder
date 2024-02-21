import React from 'react'
import styles from './styles.module.css'

const ImageGalleryItem = ({ image, taggleModal }) => {
  return (
    <li className={styles.galleryItem} key={image.id}>
      <img
        onClick={() => taggleModal(image.largeImageURL)}
        className={styles.galleryImage}
        src={image.webformatURL}
        alt={image.tags}
        id={image.id}
      />
    </li>
  );
}

export default ImageGalleryItem;