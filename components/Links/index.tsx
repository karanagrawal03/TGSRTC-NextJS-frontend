import React from 'react';
import styles from './index.module.css'
interface LinksProps {
  text: string;
}

const Links: React.FC<LinksProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      <p className={styles.linkText}>{text}</p>
    </div>
  );
};

export default Links;
