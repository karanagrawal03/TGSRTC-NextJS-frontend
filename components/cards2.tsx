import type { NextPage } from "next";
import styles from "./cards2.module.css";

export type Cards2Type = {
  className?: string;
  pictures?: string;
  pictures1?: string;
  internationalWomensDay?: string;
};

const Cards2: NextPage<Cards2Type> = ({
  className = "",
  pictures,
  pictures1,
  internationalWomensDay,
}) => {
  return (
    <div className={[styles.cards, className].join(" ")}>
      <div className={styles.imageWeb}>
        <img className={styles.picturesIcon} alt="" src={pictures} />
      </div>
      <div className={styles.imageMobile}>
        <img className={styles.picturesIcon1} alt="" src={pictures1} />
      </div>
      <div className={styles.cardTextHolder}>
        <div className={styles.texts}>
          <div className={styles.internationalWomensDay}>
            {internationalWomensDay}
          </div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor
            incididunt ut. adipiscing elit. sed do eiusmod tempor incididunt ut.
          </div>
        </div>
        <div className={styles.lineSeparater}>
          <img
            className={styles.lineSeparatorIcon}
            alt=""
            src="/line-separator2.svg"
          />
        </div>
        <div className={styles.buttonHolder}>
          <div className={styles.viewDetails}>View Details</div>
          <div className={styles.button2}>
            <div className={styles.applyNow}>Apply Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards2;
