import React from 'react';
import animationData from '../../public/web-bus-animation.json';
import styles from './index.module.css';
import Lottie from 'react-lottie';

const ScrollAnimation: React.FC = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className={styles.animationContainer}>
      <Lottie 
        options={defaultOptions}
      />
    </div>
  );
};

export default ScrollAnimation;
