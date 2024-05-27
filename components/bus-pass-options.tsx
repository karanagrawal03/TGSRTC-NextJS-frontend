import type { NextPage } from "next";
import Cards1 from "./cards1";
import styles from "./bus-pass-options.module.css";

export type BusPassOptionsType = {
  className?: string;
};

const BusPassOptions: NextPage<BusPassOptionsType> = ({ className = "" }) => {
  return (
    <section className={[styles.busPassOptions, className].join(" ")}>
      <div className={styles.busPassOptionsWrapper}>
        <h1 className={styles.busPassOptions1}>Bus pass Options</h1>
      </div>
      <div className={styles.loremIpsumDolor}>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, adipiscing elit. sed do eiusmod tempor incididunt ut.
      </div>
      <div className={styles.cardsContainer}>
        <Cards1 busPasses="Student Passes" />
        <Cards1 busPasses="General Commuters" button1Margin="0" />
        <Cards1 busPasses="Spouses Martyrs" button1Margin="unset" />
      </div>
    </section>
  );
};

export default BusPassOptions;
