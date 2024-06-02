import type { NextPage } from "next";
import styles from "./index.module.css";
import HospitalHero from "../../components/hospital-hero";
import HospitalServices from "../../components/hospital-services";
import HospitalContact from "../../components/hospital-contact";
import { useEffect } from "react";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";

const HospitalTSRTCTarnakaHospita: NextPageHospitalTSRTCTarnakaHospitaType = () => {
  const { data, doFetch } = useFetch();

  useEffect(() => {
    doFetch(`/hospital-landings?populate=*`);
  }, []);
  // console.log({ data }, "hospital data", UPLOADS_BASE_URL);

  return (
    <div className={styles.hospitalTsrtcTarnakaHospita}>
      <HospitalHero  
        heroTitle={data?.heroTitle} 
        heroSubTitle={data?.heroSubTitle} 
        heroWebImage={data?.bannerWebImage} 
        heroMobileImage={data?.bannerMobileImage}
      />
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
        phoneNumber2={data?.phoneNumber2}
        hospitalEmail={data?.hospitalEmail}
        bookButton={data?.bookButton}
        doctorsWebImage={data?.doctorsWebImage}
        doctorsMobileImage={data?.doctorsMobileImage}
      />
    </div>
  );
};

export default HospitalTSRTCTarnakaHospita;
