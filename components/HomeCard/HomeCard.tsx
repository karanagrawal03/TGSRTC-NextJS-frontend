import type { NextPage } from "next";
import styles from "./HomeCard.module.css";

export type Cards2Type = {
  className?: string;
};

const Cards2: NextPage<Cards2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.cards, className].join(" ")}>
      <div className={styles.imageWeb}>
        <img
          className={styles.picturesIcon}
          loading="lazy"
          alt=""
          src="/pictures@2x.png"
        />
      </div>
      <div className={styles.imageMobile}>
        <img className={styles.picturesIcon1} alt="" />
      </div>
      <div className={styles.cardTextHolder}>
        <div className={styles.texts}>
          <h2 className={styles.internationalWomensDay}>
            {"International Women's Day"}
          </h2>
          <p className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor
            incididunt ut. adipiscing elit. sed do eiusmod tempor incididunt ut.
          </p>
        </div>
        <div className={styles.lineSeparater}>
          <img className={styles.lineSeparatorIcon} alt="" />
        </div>
        <div className={styles.buttonHolder}>
          <div className={styles.viewDetails}>{"View Details"}</div>
          <div className={styles.button2}>
            <div className={styles.applyNow}>{"Apply Now"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards2;
