import React from 'react'
import styles from "./index.module.css";
interface DynamicContentProps {
  number: number;
  ContentComponent: React.ComponentType;
  backgroundColor: string;
}
const DynamicContent=({ number, ContentComponent, backgroundColor }:DynamicContentProps)=> {
  return (
    <div className={styles.contentItem} style={{ backgroundColor }}>
      <div className={styles.sequence}>{`${number.toString().padStart(2, '0')}`}</div>
     <ContentComponent/>
    </div>
  )
}
export default DynamicContent;
