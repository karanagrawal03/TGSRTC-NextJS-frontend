import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Cards2 from "../cards2";
import styles from "./index.module.css";
import { OTHER_BUS_PASSES, VIEW_MORE } from "../../constants";
import { cards3Data } from "../../constants/bus-pass-other-options";
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

  const displayedCards = showAll ? cards3Data : cards3Data.slice(0, 4);

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
