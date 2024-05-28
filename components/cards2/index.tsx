import type { NextPage } from "next";
import styles from "./index.module.css";
import { APPLY_NOW, VIEW_DETAILS } from "../../constants";

export type Cards2Type = {
  className?: string;
  heading: string;
  description: string;
};

const Cards2: NextPage<Cards2Type> = ({
  className = "",
  heading,
  description,
}) => {
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
            alt=""
            src="/line-separator.svg"
          />
        </div>
        <div className={styles.buttonHolder}>
          <div className={styles.viewDetails}>{VIEW_DETAILS}</div>
          <div className={styles.button2}>
            <div className={styles.applyNow}>{APPLY_NOW}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards2;
