import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./index.module.css";

export type Cards4Type = {
  className?: string;
  image?: string;
  busPasses?: string;

  /** Style props */
  applyNowPadding?: CSSProperties["padding"];
};

const Cards4: NextPage<Cards4Type> = ({
  className = "",
  image,
  busPasses,
  applyNowPadding,
}) => {
  const infographics1Style: CSSProperties = useMemo(() => {
    return {
      padding: applyNowPadding,
    };
  }, [applyNowPadding]);

  return (
    <div className={[styles.cards, className].join(" ")}>
      <div className={styles.infographicContainer}>
        <div className={styles.infographics} style={infographics1Style}>
          <div className={styles.wrapperGroup1000013498}>
            <img
              className={styles.wrapperGroup1000013498Child}
              loading="lazy"
              alt=""
              src={image}
            />
          </div>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.texts}>
          <h2 className={styles.busPasses}>{busPasses}</h2>
          <p className={styles.loremIpsumDolor}>
            We deliver your goods with extra care .
          </p>
        </div>
        <div className={styles.lineSeparater}>
          <img className={styles.lineSeparatorIcon} alt="" />
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

export default Cards4;
