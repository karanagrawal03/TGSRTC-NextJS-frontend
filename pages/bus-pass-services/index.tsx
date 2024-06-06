"use client";
import { useEffect, useState } from "react";
import BusPassOptions from "../../components/bus-pass-options";
import BusPassOtherBusPasses from "../../components/bus-pass-other-bus-passes";
import { APPLY_AND_RENEW, BUS_PASS_SERVICES } from "../../constants";
import styles from "./index.module.css";
import useFetch, { BASE_URL, UPLOADS_BASE_URL } from "../../services/service";

const BusPassServices = () => {
  const { data, doFetch } = useFetch();

  useEffect(() => {
    doFetch(`/buss-pass-landing-pages?populate=*`);
  }, []);

  const [width, setWidth] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth > 750);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      console.log(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.busPassServices}>
      <section className={styles.busPassHeroBusPassService}>
        {width ? (
          <img
            className={styles.bgIcon}
            alt="bus-pass-main-section"
            src={`${UPLOADS_BASE_URL}${data?.heroSection[0]?.webImage}`}
            loading="lazy"
          />
        ) : (
          <img
            className={styles.bgIconmobile}
            alt="mobile-image"
            src={`${UPLOADS_BASE_URL}${data?.heroSection[0]?.mobileImage}`}
            loading="lazy"
          />
        )}
        <div className={styles.busPassContent}>
          <h1 className={styles.busPassServices1}>{data?.heroSection[0]?.title}</h1>
          <h2 className={styles.applyRenew}>{data?.heroSection[0]?.subTitle}</h2>
        </div>
      </section>
      <p style={{ display: visible ? 'block' : 'none', border: "10px solid" }}>hello</p>
      <img className={styles.animation} src='/busAnimation.svg' />
      <BusPassOptions options={data?.bussPassOptions} title={data?.busPassOptionsTitle} />
      <BusPassOtherBusPasses options={data?.otherBusPasses} title={data?.otherBusPassOptionsTitle} />
    </div>
  );
};

export default BusPassServices;
