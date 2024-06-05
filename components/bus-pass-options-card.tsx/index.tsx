import { useRouter } from "next/router";
import type { NextPage } from "next";
import styles from "./index.module.css";

export type Cards2Type = {
  className?: string;
  heading: string;
  description: string;
  viewAll: string;
  applyNow: string;
  index: number; 
};

const BusPassOptionsCard: NextPage<Cards2Type> = ({
  className = "",
  heading,
  description,
  viewAll,
  applyNow,
  index,
}) => {
  const router = useRouter();
  

  const handleViewAllClick = (index: number) => {
    router.push(`/other-passes?index=${index}`);
  };

  return (
    <div className={[styles.cards, className].join(" ")}>
      <div className={styles.cardTextHolder}>
        <div className={styles.texts}>
          <div className={styles.internationalWomensDay}>{heading}</div>
          <div className={styles.loremIpsumDolor}>{description}</div>
        </div>
        <div className={styles.lineSeparater}>
          <img
            className={styles.lineSeparatorIcon}
            alt="line-saperator"
            src="/line-separator.svg"
            loading="lazy"
          />
        </div>
        <div className={styles.buttonHolder}>
          <div
            className={styles.viewDetails}
            onClick={() => handleViewAllClick(index)}
          >
            {viewAll}
          </div>
          <div className={styles.button2}>
            <div className={styles.applyNow}>{applyNow}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusPassOptionsCard;
