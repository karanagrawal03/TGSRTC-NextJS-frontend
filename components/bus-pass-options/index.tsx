import type { NextPage } from "next";
import { BUS_PASS_OPTIONS } from "../../constants";
import { card2Data } from "../../constants/bus-pass-options";
import OtherBusPassesCard from "../other-bus-passes-card";
import styles from "./index.module.css";
export type BusPassOptionsType = {
  className?: string;
};

const BusPassOptions: NextPage<BusPassOptionsType> = ({ className = "" }) => {
  return (
    <section className={[styles.busPassOptions, className].join(" ")}>
      <div className={styles.busPassOptionsWrapper}>
        <h1 className={styles.busPassOptions1}>{BUS_PASS_OPTIONS}</h1>
      </div>
      <div className={styles.cardsContainer}>
        {card2Data.map((card, index) => (
          <OtherBusPassesCard
            key={index}
            heading={card.heading}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default BusPassOptions;
