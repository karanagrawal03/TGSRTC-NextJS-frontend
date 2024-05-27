import type { NextPage } from "next";
import styles from "./other-accordions.module.css";

export type OtherAccordionsType = {
  className?: string;
};

const OtherAccordions: NextPage<OtherAccordionsType> = ({ className = "" }) => {
  return (
    <div className={[styles.otherAccordions, className].join(" ")}>
      <div className={styles.accordion}>
        <div className={styles.bg} />
        <p className={styles.before6Am}>Early morning before 6 am (09)</p>
        <img
          className={styles.accordianDropdowntrueIcon}
          alt=""
          src="/accordian-dropdowntrue.svg"
        />
      </div>
      <div className={styles.accordion1}>
        <div className={styles.bg1} />
        <div className={styles.before6Am1}>Morning 6 am to 12 pm (07)</div>
        <img
          className={styles.accordianDropdowntrueIcon1}
          alt=""
          src="/accordian-dropdowntrue.svg"
        />
      </div>
      <div className={styles.accordion2}>
        <div className={styles.bg2} />
        <div className={styles.before6Am2}>Afternoon 12 pm to 6 pm (02)</div>
        <img
          className={styles.accordianDropdowntrueIcon2}
          alt=""
          src="/accordian-dropdowntrue.svg"
        />
      </div>
      <div className={styles.accordion3}>
        <div className={styles.bg3} />
        <div className={styles.before6Am3}>Evening after 6 pm (43)</div>
        <img
          className={styles.accordianDropdowntrueIcon3}
          alt=""
          src="/accordian-dropdowntrue.svg"
        />
      </div>
    </div>
  );
};

export default OtherAccordions;
