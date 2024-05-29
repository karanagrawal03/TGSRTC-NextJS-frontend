import React from 'react';
import styles from './index.module.css'
interface AccordiansHeadingProps {
  heading: string;
}

const AccordiansHeading: React.FC<AccordiansHeadingProps> = ({ heading }) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{heading}</p>
    </div>
  );
};

export default AccordiansHeading;
