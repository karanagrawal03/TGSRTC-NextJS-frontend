import type { NextPage } from "next";
import styles from "./index.module.css";
import HospitalHero from "../../components/hospital-hero";
import HospitalServices from "../../components/hospital-services";
import HospitalContact from "../../components/hospital-contact";
import { useEffect } from "react";
import useFetch from "../../services/service";

const HospitalTSRTCTarnakaHospita: NextPageHospitalTSRTCTarnakaHospitaType = () => {
  const { data, doFetch } = useFetch();

  useEffect(() => {
    doFetch(`/hospital-landings?populate=*`);
  }, []);
  // console.log({ data }, "hospital data", UPLOADS_BASE_URL);

  return (
    <div className={styles.hospitalTsrtcTarnakaHospita}>
      <HospitalHero data={data} />
      <HospitalServices data={data} />
      <HospitalContact data={data} />
    </div>
  );
};

export default HospitalTSRTCTarnakaHospita;
