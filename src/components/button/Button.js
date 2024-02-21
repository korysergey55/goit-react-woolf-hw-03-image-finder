import React from 'react';
import styles from './styles.module.css'

const Button = ({ showMore }) => {
  return (
    <button className={styles.button} onClick={() => showMore()}>
      Show More
    </button>
  );
};

export default Button;