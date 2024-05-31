import type { NextPage } from "next";
import { useState, useEffect } from "react";
import BusPassOptionsCard from "../bus-pass-options-card.tsx";
import styles from "./index.module.css";
import { OTHER_BUS_PASSES, VIEW_MORE } from "../../constants";
import { cards3Data } from "../../constants/bus-pass-other-options";
import useFetch from "../../services/service.js";
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

  const { data, doFetch, error, loading } = useFetch();

  useEffect(() => {
    console.log("Fetching API data...");
    doFetch(`/buss-pass-landing-pages?populate[busPassOptions]populate=*`);
  }, []);

  console.log({ data }, "Bus pass data");

  return (
    <section className={[styles.busPassOtherBusPasses, className].join(" ")}>
      <h1 className={styles.otherBusPasses}>{OTHER_BUS_PASSES}</h1>
      <div className={styles.cardsContainer}>
      {data !== null ? (
        data.data[0]?.attributes?.otherBusPasses.map((card: any, index: number) => {
          console.log("Rendering card:", card);
          return (
            <BusPassOptionsCard
            key={index}
            heading={card.heading}
            description={card.description}
          />
          );
        })
      ) : (
        <p>No bus pass options available.</p>
      )}
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

