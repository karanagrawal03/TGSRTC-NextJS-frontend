import type { NextPage } from "next";
import Cards from "./cards";
import styles from "./bus-pass-other-bus-passes.module.css";

export type BusPassOtherBusPassesType = {
  className?: string;
};

const BusPassOtherBusPasses: NextPage<BusPassOtherBusPassesType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.busPassOtherBusPasses, className].join(" ")}>
      <h1 className={styles.otherBusPasses}>Other Bus Passes</h1>
      <div className={styles.cardsContainer}>
        <Cards internationalWomensDay=" Monthly Season Tickets" />
        <Cards
          internationalWomensDay="Physically Challenged"
          lineSeparatorIconMargin="unset"
        />
        <Cards
          internationalWomensDay="NGO's Bus Pass."
          lineSeparatorIconMargin="0"
        />
        <Cards
          internationalWomensDay="Unemployed Youth"
          lineSeparatorIconMargin="0"
        />
        <Cards
          internationalWomensDay="Journalists"
          lineSeparatorIconMargin="0"
        />
        <Cards
          internationalWomensDay="Freedom Fighters"
          lineSeparatorIconMargin="unset"
        />
        <Cards
          internationalWomensDay="Dialysis Patients"
          lineSeparatorIconMargin="unset"
        />
        <div className={styles.cards}>
          <div className={styles.imageWeb}>
            <img className={styles.picturesIcon} alt="" />
          </div>
          <div className={styles.imageMobile}>
            <img className={styles.picturesIcon1} alt="" />
          </div>
          <div className={styles.cardTextHolder}>
            <div className={styles.texts}>
              <h2 className={styles.internationalWomensDayContainer}>
                <p className={styles.mlasMpsMlcs}>{`MLAs, MPs, MLCs `}</p>
                <p className={styles.andSpouses}>and Spouses</p>
              </h2>
              <p
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor incididunt ut.  adipiscing elit. sed do eiusmod tempor `}</p>
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
      </div>
    </section>
  );
};

export default BusPassOtherBusPasses;
