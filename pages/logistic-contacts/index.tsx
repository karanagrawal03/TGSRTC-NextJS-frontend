import styles from "./index.module.css";
import { useEffect, useState } from "react";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";
import CustomTable from "../../components/table-view-details";
import { NextPage } from "next";

type LogisticContactsType = {
  className?: string;
};

const LogisticContacts: NextPage<LogisticContactsType> = ({
  className = "",
}) => {
  const { data, doFetch } = useFetch();
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

  useEffect(() => {
    doFetch(`/logistic-contacts?populate=*`);
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
      <section className={[styles.tableSection, className].join(" ")}>
        <h2 className={styles.title}>{data?.logisticsContactsTitle}</h2>
        <CustomTable rows={data?.logisticsContactsTableData} />
      </section>
    </>
  );
};

export default LogisticContacts;
