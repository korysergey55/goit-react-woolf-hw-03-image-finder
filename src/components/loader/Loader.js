import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
import styles from './styles.module.css'

const Loader = () => {
  return (
    <div className={styles.wripper}>
      <RotatingLines
        visible={true}
        height="100"
        width="100"
        color="#1890ff"
        secondaryColor='#1890ff'
        strokeColor='#1890ff'
        strokeWidth="3"
        animationDuration="0.75"
        ariaLabel="lines-loading"
        wrapperClass={styles.loader}
        timeout={3000} />
    </div>
  );
}

export default Loader;