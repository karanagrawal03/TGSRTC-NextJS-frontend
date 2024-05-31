"use client";
import { useEffect, useState } from "react";
import BusPassOptions from "../../components/bus-pass-options";
import BusPassOtherBusPasses from "../../components/bus-pass-other-bus-passes";
import { APPLY_AND_RENEW, BUS_PASS_SERVICES } from "../../constants";
import styles from "./index.module.css";
const BusPassServices = () => {
  const [width, setWidth] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth > 750);
      console.log(width);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.busPassServices}>
      <section className={styles.busPassHeroBusPassService}>
        {width ? (
          <img
            className={styles.bgIcon}
            alt="bus-pass-main-section"
            src="/bus-passes-services-web.png"
            loading="lazy"
          />
        ) : (
          <img
            className={styles.bgIconmobile}
            alt="mobile-image"
            src="/bus-pass-services-mobile.png"
            loading="lazy"
          />
        )}
        <div className={styles.busPassContent}>
          <h1 className={styles.busPassServices1}>{BUS_PASS_SERVICES}</h1>
          <h2 className={styles.applyRenew}>{APPLY_AND_RENEW}</h2>
        </div>
      </section>
      <BusPassOptions />
      <BusPassOtherBusPasses />
    </div>
  );
};

export default BusPassServices;
