import type { NextPage } from "next";
import FrameComponent7 from "../../components/logistics-home-banner";
import MainContent from "../../components/logistics-home-book-your-cargo";
import ContentRight from "../../components/logistics-home-about-logistics";
import FrameComponent6 from "../../components/logistics-home-business";
import styles from "./index.module.css";
import { useEffect } from "react";
import useFetch from "../../services/service";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

const LogisticsTSRTCHome: NextPage = () => {
  const { data, doFetch } = useFetch();

  useEffect(() => {
    doFetch(`/logistics-landings?populate=*`);
  }, []);

  return (
    <div className={styles.logisticsTsrtcHome}>
      <FrameComponent7 
        heroTitle={data?.heroTitle} 
        heroSubTitle={data?.heroSubTitle} 
        heroSectionLogo={data?.heroSectionLogo} 
        heroImageMobile={data?.heroImageMobile} 
        heroImageWeb={data?.heroImageWeb}
      />
      <AnimationBus/>
      <AnimationBusMobile/>
      <MainContent  
        bookYourCargoTitle={data?.bookYourCargoTitle} 
        bookYourCargoImage={data?.bookYourCargoImage} 
        bookYourCargoSubtitle={data?.bookYourCargoSubtitle} 
        bookYourCargoContent={data?.bookYourCargoContent} 
        bookYourCargoButtonText={data?.bookYourCargoButtonText}
      />
      <ContentRight 
        data={{
          aboutLogisticsTitle: data?.aboutLogisticsTitle,
          aboutLogisticsPara1: data?.aboutLogisticsPara1,
          aboutLogisticsPara2Start: data?.aboutLogisticsPara2Start,
          aboutLogisticsPara2Link: data?.aboutLogisticsPara2Link,
          aboutLogisticsPara2End: data?.aboutLogisticsPara2End,
          aboutLogisticsCards: data?.aboutLogisticsCards || [],
        }} 
      />
      <FrameComponent6 
        data={{
          logisticsBusiness: data?.logisticsBusiness,
          logisticsBusinesspara1: data?.logisticsBusinesspara1,
          logisticsBusinessImage: data?.logisticsBusinessImage,
          logisticsBusinessImageMobile: data?.logisticsBusinessImageMobile,
          logisticsBusinesspara2: data?.logisticsBusinesspara2,
        }} 
      />
    </div>
  );
};

export default LogisticsTSRTCHome;
