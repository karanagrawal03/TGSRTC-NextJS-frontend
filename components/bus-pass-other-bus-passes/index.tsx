import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Cards2 from "../cards2";
import styles from "./index.module.css";
import { OTHER_BUS_PASSES, VIEW_MORE } from "../../constants";

export type BusPassOtherBusPassesType = {
  className?: string;
};

const BusPassOtherBusPasses: NextPage<BusPassOtherBusPassesType> = ({
  className = "",
}) => {
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setShowAll(window.innerWidth >= 600);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards3 = [
    {
      heading: "Monthly Season Tickets",
      description:
        "Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor incididunt ut. adipiscing elit. sed do eiusmod tempor incididunt ut.",
    },
    {
      heading: "Physically Challenged",
      description:
        "Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor incididunt ut. adipiscing elit. sed do eiusmod tempor incididunt ut.",
    },
    {
      heading: "NGO's Bus Pass.",
      description:
        "Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor incididunt ut. adipiscing elit. sed do eiusmod tempor incididunt ut.",
    },
    {
      heading: "Unemployed Youth",
      description:
        "Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor incididunt ut. adipiscing elit. sed do eiusmod tempor incididunt ut.",
    },
    {
      heading: "Journalists",
      description:
        "Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor incididunt ut. adipiscing elit. sed do eiusmod tempor incididunt ut.",
    },
    {
      heading: "Freedom Fighters",
      description:
        "Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor incididunt ut. adipiscing elit. sed do eiusmod tempor incididunt ut.",
    },
    {
      heading: "Dialysis Patients",
      description:
        "Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor incididunt ut. adipiscing elit. sed do eiusmod tempor incididunt ut.",
    },
    {
      heading: "MLAs, MPs, MLCs and Spouses",
      description:
        "Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor incididunt ut. adipiscing elit. sed do eiusmod tempor incididunt ut.",
    },
  ];

  const displayedCards = showAll ? cards3 : cards3.slice(0, 4);

  return (
    <section className={[styles.busPassOtherBusPasses, className].join(" ")}>
      <h1 className={styles.otherBusPasses}>{OTHER_BUS_PASSES}</h1>
      <div className={styles.cardsContainer}>
        {displayedCards.map((card, index) => (
          <Cards2
            key={index}
            heading={card.heading}
            description={card.description}
          />
        ))}
      </div>
      {!showAll && (
        <p className={styles.viewMoreButton} onClick={() => setShowAll(true)}>
          {VIEW_MORE}
        </p>
      )}
    </section>
  );
};

export default BusPassOtherBusPasses;
