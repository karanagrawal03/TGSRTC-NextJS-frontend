import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { UPLOADS_BASE_URL, doFetch } from "../../services/service";
import CustomTable from "../../components/table-view-details";
import { NextPage } from "next";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

export async function getStaticProps() {
  const data = await doFetch("/logistic-contacts?populate=*");

  return {
    props: {
      data,
    },
  };
};

type LogisticContactsType = {
  className?: string;
};

const LogisticContacts: NextPage<LogisticContactsType> = ({
  className = "",
  data
}) => {
  const [width, setWidth] = useState<boolean>(false);

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

  return (
    <>
      <section className={styles.logisticContactsHero}>
        {width ? (
          <img
            className={styles.bgIcon}
            alt="bus-pass-main-section"
            src={UPLOADS_BASE_URL + data?.heroWebImage?.data?.attributes?.url}
            loading="lazy"
          />
        ) : (
          <img
            className={styles.bgIconMobile}
            alt="mobile-image"
            src={
              UPLOADS_BASE_URL + data?.heroMobileImage?.data?.attributes?.url
            }
            loading="lazy"
          />
        )}
        <div className={styles.logisticsContentWrapper}>
          <h1 className={styles.heroTitleStyles}>{data?.heroTitle}</h1>
          <p className={styles.heroSubTitleStyles}>{data?.heroSubTitle}</p>
        </div>
      </section>
      <AnimationBus />
      <AnimationBusMobile />
      <section className={[styles.tableSection, className].join(" ")}>
        <h2 className={styles.title}>{data?.logisticsContactsTitle}</h2>
        <CustomTable rowsClassName={styles.rowClass} rows={data?.logisticsContactsTableData} Links={data?.logisticsContractsLinks} />
      </section>
    </>
  );
};

export default LogisticContacts;
