import React from "react";
import styles from "./index.module.css";
import Tables from "../tables";
interface BulletPointsProps {
  items: string[];
}
const BulletPoints: React.FC<BulletPointsProps> = ({ items }) => {
  return (
    <div>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li className={styles.listItems} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletPoints;
