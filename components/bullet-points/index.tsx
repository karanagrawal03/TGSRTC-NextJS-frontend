import React from "react";
import styles from "./index.module.css";

interface BulletPointsProps {
  items: string[];
  containerClassName?: string;
}
const BulletPoints: React.FC<BulletPointsProps> = ({
  items,
  containerClassName,
}) => {
  return (
    <div>
      <ul className={`${styles.list} ${containerClassName}`}>
        {items?.map((item, index) => (
          <li className={styles.listItems} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletPoints;
