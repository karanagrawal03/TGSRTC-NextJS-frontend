import type { NextPage } from "next";
import styles from "./index.module.css";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";
import { useEffect } from "react";
import Carousal from "../../components/Carosal";
import RoadSafetyCard from "../../components/road-safety-card";

const RoadSafety: NextPageRoadSafetyType = () => {
  const { data, doFetch } = useFetch();

  useEffect(() => {
    doFetch(`/road-safeties?populate=*`);
  }, []);

  const RoadSafetySection = data?.roadSafetyImages?.map((item: any, index: number) => (
    <RoadSafetyCard key={index} webImage={item.webImg} mobileImage={item.mobileImg}/>
  )) || [];

  return (
    <div className={styles.roadSafety}>
      <main className={styles.roadSafetyContainer}>
        <h1 className={styles.roadSafetyTitle}>{data?.roadSafetyTitle}</h1>
        <div className={styles.roadSafetyCarousel}>
          <Carousal children={RoadSafetySection}  />
        </div>
      </main>
    </div>
  );
};

export default RoadSafety;