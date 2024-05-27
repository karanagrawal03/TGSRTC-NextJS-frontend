import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./cards1.module.css";

export type Cards1Type = {
  className?: string;
  busPasses?: string;

  /** Style props */
  button1Margin?: CSSProperties["margin"];
};

const Cards1: NextPage<Cards1Type> = ({
  className = "",
  busPasses,
  button1Margin,
}) => {
  const busPassesStyle: CSSProperties = useMemo(() => {
    return {
      margin: button1Margin,
    };
  }, [button1Margin]);

  return (
    <div className={[styles.cards, className].join(" ")}>
      <div className={styles.infographicContainer}>
        <div className={styles.infographics}>
          <div className={styles.wrapperGroup1000013321}>
            <img
              className={styles.wrapperGroup1000013321Child}
              loading="lazy"
              alt=""
              src="/group-1000013321@2x.png"
            />
          </div>
          <div className={styles.infographicsChild} />
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.texts}>
          <b className={styles.busPasses} style={busPassesStyle}>
            {busPasses}
          </b>
          <p className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor
            incididunt ut. adipiscing elit. sed do eiusmod.
          </p>
        </div>
        <div className={styles.lineSeparater}>
          <img
            className={styles.lineSeparatorIcon}
            loading="lazy"
            alt=""
            src="/line-separator.svg"
          />
        </div>
        <div className={styles.buttonsContainer}>
          <div className={styles.button1}>
            <b className={styles.viewDetails}>View Details</b>
          </div>
          <button className={styles.button2}>
            <b className={styles.applyNow}>Apply Now</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards1;
