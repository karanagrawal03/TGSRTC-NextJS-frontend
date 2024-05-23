import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./cards4.module.css";

export type CardsType = {
  className?: string;
  group1000013498?: string;
  busPasses?: string;
  lineSeparator?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const Cards: NextPage<CardsType> = ({
  className = "",
  group1000013498,
  busPasses,
  lineSeparator,
  propPadding,
}) => {
  const infographics1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={[styles.cards, className].join(" ")}>
      <div className={styles.infographicContainer}>
        <div className={styles.infographics} style={infographics1Style}>
          <div className={styles.wrapperGroup1000013498}>
            <img
              className={styles.wrapperGroup1000013498Child}
              loading="lazy"
              alt=""
              src={group1000013498}
            />
          </div>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.texts}>
          <h2 className={styles.busPasses}>{busPasses}</h2>
          <div className={styles.loremIpsumDolor}>
            We deliver your goods with extra care .
          </div>
        </div>
        <div className={styles.lineSeparater}>
          <img
            className={styles.lineSeparatorIcon}
            alt=""
            src={lineSeparator}
          />
        </div>
        <div className={styles.buttonsContainer}>
          <div className={styles.button1}>
            <div className={styles.applyNow}>Apply Now</div>
          </div>
          <div className={styles.button2}>
            <div className={styles.applyNow1}>Apply Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
