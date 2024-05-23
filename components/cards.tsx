import type { NextPage } from "next";
import styles from "./cards.module.css";

export type CardsType = {
  className?: string;
  pictures1?: string;
  lineSeparator?: string;
};

const Cards: NextPage<CardsType> = ({
  className = "",
  pictures1,
  lineSeparator,
}) => {
  return (
    <div className={[styles.cards, className].join(" ")}>
      <div className={styles.imageWeb}>
        <img
          className={styles.picturesIcon}
          loading="lazy"
          alt=""
          src="/pictures1@2x.png"
        />
      </div>
      <div className={styles.imageMobile}>
        <img className={styles.picturesIcon1} alt="" src={pictures1} />
      </div>
      <div className={styles.cardTextHolder}>
        <div className={styles.texts}>
          <h2 className={styles.internationalWomensDay}>
            International Women's Day
          </h2>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor
            incididunt ut. adipiscing elit. sed do eiusmod tempor incididunt ut.
          </div>
        </div>
        <div className={styles.lineSeparater}>
          <img
            className={styles.lineSeparatorIcon}
            alt=""
            src={lineSeparator}
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

export default Cards;
