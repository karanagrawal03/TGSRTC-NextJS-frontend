import type { NextPage } from "next";
import styles from "./cards3.module.css";

export type Cards3Type = {
  className?: string;
  busPasses?: string;
};

const Cards3: NextPage<Cards3Type> = ({ className = "", busPasses }) => {
  return (
    <div className={[styles.cards, className].join(" ")}>
      <div className={styles.infographicContainer}>
        <div className={styles.infographics}>
          <div className={styles.wrapperGroup1000013321}>
            <img
              className={styles.wrapperGroup1000013321Child}
              loading="lazy"
              alt=""
              src="/group-10000133211@2x.png"
            />
          </div>
          <div className={styles.infographicsChild} />
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.texts}>
          <h2 className={styles.busPasses}>{busPasses}</h2>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor
            incididunt ut. adipiscing elit. sed do eiusmod.
          </div>
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
            <div className={styles.viewDetails}>View Details</div>
          </div>
          <button className={styles.button2}>
            <div className={styles.applyNow}>Apply Now</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards3;
