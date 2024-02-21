import React from 'react'
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import styles from './styles.module.css'


const ImageGallery = ({ images, taggleModal }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((item) => (
        <ImageGalleryItem image={item} taggleModal={taggleModal} key={item.id} />
      ))}
    </ul>
  );
}

export default ImageGallery;