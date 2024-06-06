import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../public/web-bus-animation.json';
import mobileAnimationData from '../../public/mobile-banner-animation.json';
import styles from './index.module.css';

const ScrollAnimation: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 599);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 599);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: isMobile ? mobileAnimationData : animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className={styles.animationContainer}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default ScrollAnimation;
