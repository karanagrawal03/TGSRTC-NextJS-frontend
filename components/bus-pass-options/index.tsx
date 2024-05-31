import type { NextPage } from "next";
import { BUS_PASS_OPTIONS } from "../../constants";
import { card2Data } from "../../constants/bus-pass-options";
import OtherBusPassesCard from "../other-bus-passes-card";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import useFetch from "../../services/service";

export type BusPassOptionsType = {
  className?: string;
};

const BusPassOptions: NextPage<BusPassOptionsType> = ({ className = "" }) => {
  const { data, doFetch, error, loading } = useFetch();

  useEffect(() => {
    console.log("Fetching API data...");
    doFetch(`/buss-pass-landing-pages?populate[busPassOptions]populate=*`);
  }, []);

  console.log({ data }, "Bus pass data");

  return (
    <section className={[styles.busPassOptions, className].join(" ")}>
      <div className={styles.busPassOptionsWrapper}>
        <h1 className={styles.busPassOptions1}>{BUS_PASS_OPTIONS}</h1>
      </div>
      <div className={styles.cardsContainer}>
        {data !== null ? (
          data.data[0]?.attributes?.busPassOptions.map((card: any, index: number) => {
            console.log("Rendering card:", card);
            return (
              <OtherBusPassesCard
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
    </section>
  );
};

export default BusPassOptions;