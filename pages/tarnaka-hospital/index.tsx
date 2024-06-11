import type { NextPage } from "next";
import styles from "./index.module.css";
import HospitalHero from "../../components/hospital-hero";
import HospitalServices from "../../components/hospital-services";
import HospitalContact from "../../components/hospital-contact";
import { useEffect } from "react";
import useFetch from "../../services/service";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

const HospitalTSRTCTarnakaHospita: NextPageHospitalTSRTCTarnakaHospitaType = () => {
  const { data, doFetch } = useFetch();

  useEffect(() => {
    doFetch(`/hospital-landings?populate=*`);
  }, []);

  return (
    <div className={styles.hospitalTsrtcTarnakaHospita}>
      <HospitalHero  
        heroTitle={data?.heroTitle} 
        heroSubTitle={data?.heroSubTitle} 
        heroWebImage={data?.bannerWebImage} 
        heroMobileImage={data?.bannerMobileImage}
      />
      <AnimationBus/>
      <AnimationBusMobile/>
      <HospitalServices 
        aboutHospitalTitle={data?.aboutHospitalTitle}
        aboutHospitalImage={data?.aboutHospitalImage}
        aboutHospitalContent={data?.aboutHospitalContent}
        whatServicesTitle={data?.whatServicesTitle}
        whatServicesCards={data?.whatServicesCards}
      />
      <HospitalContact 
        weAreAvailableTitle={data?.weAreAvailableTitle}
        phoneNumber1={data?.phoneNumber1}
        tgsrtcEmp={data?.tgsrtcEmp}
        phoneNumber2={data?.phoneNumber2}
        nonTgsrtcEmp={data?.nonTgsrtcEmp}
        hospitalEmail={data?.hospitalEmail}
        bookButton={data?.bookButton}
        doctorsWebImage={data?.doctorsWebImage}
        doctorsMobileImage={data?.doctorsMobileImage}
      />
    </div>
  );
};

export default HospitalTSRTCTarnakaHospita;
