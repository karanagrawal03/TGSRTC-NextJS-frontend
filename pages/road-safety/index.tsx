import type { NextPage } from "next";
import styles from "./index.module.css";
import { doFetch } from "../../services/service";
import Carousal from "../../components/Carosal";
import RoadSafetyCard from "../../components/road-safety-card";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";


export async function getStaticProps() {
  const data = await doFetch("/road-safeties?populate=*");

  return {
    props: {
      data,
    },
  };
};

const RoadSafety: NextPageRoadSafetyType = ({data}) => {

  const RoadSafetySection =
    data?.roadSafetyImages?.map((item: any, index: number) => (
      <RoadSafetyCard
        key={index}
        webImage={item.webImg}
        mobileImage={item.mobileImg}
      />
    )) || [];

  return (
    <>
      <AnimationBus />
      <AnimationBusMobile />
      <div className={styles.roadSafety}>
        <main className={styles.roadSafetyContainer}>
          <h1 className={styles.roadSafetyTitle}>{data?.roadSafetyTitle}</h1>
          <div className={styles.roadSafetyCarousel}>
            <Carousal children={RoadSafetySection} />
          </div>
        </main>
      </div>
    </>
  );
};

export default RoadSafety;
