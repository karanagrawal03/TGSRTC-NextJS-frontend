import type { NextPage } from "next";
import Cards1 from "../cards1";
import styles from "./index.module.css";
import { BUS_PASS_OPTIONS } from "../../constants";
import Cards3 from "../cards3";

export type BusPassOptionsType = {
  className?: string;
};

const BusPassOptions: NextPage<BusPassOptionsType> = ({ className = "" }) => {
  const card2Data = [
    {
      heading: "Student Passes",
      description:
        "Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor incididunt ut. adipiscing elit. sed do eiusmod.",
    },
    {
      heading: "General Commuters",
      description:
        "Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor incididunt ut. adipiscing elit. sed do eiusmod.",
    },
    {
      heading: "Spouses Martyrs",
      description:
        "Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor incididunt ut. adipiscing elit. sed do eiusmod.",
    },
  ];
  return (
    <section className={[styles.busPassOptions, className].join(" ")}>
      <div className={styles.busPassOptionsWrapper}>
        <h1 className={styles.busPassOptions1}>{BUS_PASS_OPTIONS}</h1>
      </div>
      <div className={styles.cardsContainer}>
        {card2Data.map((card, index) => (
          <Cards3
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
