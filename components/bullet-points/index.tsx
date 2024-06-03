import React, { ReactElement } from "react";
import styles from "./index.module.css";

interface BulletPointsProps {
  items: (string | React.ReactElement)[];
  containerClassName?: string;
}

const extractUrl = (text: string): string | null => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const match = text.match(urlRegex);
  return match ? match[0] : null;
};

const BulletPoints: React.FC<BulletPointsProps> = ({
  items,
  containerClassName,
}) => {
  return (
    <div>
      <ul className={`${styles.list} ${containerClassName}`}>
        {items?.map((item, index) => {
          if (typeof item === "string") {
            const url = extractUrl(item);
            if (url) {
              const textBeforeUrl = item.split(url)[0];
              const textAfterUrl = item.split(url)[1];
              return (
                <li className={styles.listItems} key={index}>
                  {textBeforeUrl}
                  <span className={styles.link} key={`link_${index}`}>
                    <a
                      href={url}
                      className={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {url}
                    </a>
                  </span>
                  {textAfterUrl}
                </li>
              );
            } else {
              return (
                <li className={styles.listItems} key={index}>
                  {item}
                </li>
              );
            }
          } else {
            return (
              <li className={styles.listItems} key={index}>
                {item}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default BulletPoints;
