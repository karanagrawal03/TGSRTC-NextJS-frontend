import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./cards.module.css";

export type CardsType = {
  className?: string;
  internationalWomensDay?: string;

  /** Style props */
  lineSeparatorIconMargin?: CSSProperties["margin"];
};

const Cards: NextPage<CardsType> = ({
  className = "",
  internationalWomensDay,
  lineSeparatorIconMargin,
}) => {
  const internationalWomensDayStyle: CSSProperties = useMemo(() => {
    return {
      margin: lineSeparatorIconMargin,
    };
  }, [lineSeparatorIconMargin]);

  return (
    <div className={[styles.cards, className].join(" ")}>
      <div className={styles.imageWeb}>
        <img className={styles.picturesIcon} alt="" />
      </div>
      <div className={styles.imageMobile}>
        <img className={styles.picturesIcon1} alt="" />
      </div>
      <div className={styles.cardTextHolder}>
        <div className={styles.texts}>
          <h2
            className={styles.internationalWomensDay}
            style={internationalWomensDayStyle}
          >
            {internationalWomensDay}
          </h2>
          <p className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor
            incididunt ut. adipiscing elit. sed do eiusmod tempor incididunt ut.
          </p>
        </div>
        <div className={styles.lineSeparater}>
          <img
            className={styles.lineSeparatorIcon}
            alt=""
            src="/line-separator-3.svg"
          />
        </div>
        <div className={styles.buttonHolder}>
          <b className={styles.viewDetails}>View Details</b>
          <button className={styles.button2}>
            <b className={styles.applyNow}>Apply Now</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
