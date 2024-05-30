import type { NextPage } from "next";
import styles from "./index.module.css";
import Header from "../../components/header";
import { TARNAKA_HOSPITAL, TARNAKA_HOSPITAL_TAGLINE } from "../../constants";
import HospitalServices from "../../components/hospital-services";
import HospitalContact from "../../components/hospital-contact";
import Footer from "../../components/footer";


const HospitalTSRTCTarnakaHospita: NextPageHospitalTSRTCTarnakaHospitaType =
  () => {
    return (
      <div className={styles.hospitalTsrtcTarnakaHospita}>
        <section className={styles.hospitalHero}>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt="hospital-banner-image"
            src="/hospital-banner-image@2x.png"
          />
          <img
            className={styles.maskGroupIconMobile}
            loading="lazy"
            alt="hospital-banner-image-mobile"
            src="/hospital-banner-image-mobile@2x.png"
          />
          <div  className={styles.content}>
            <h1 className={styles.tgsrtcTarnakaHospital}>
              {TARNAKA_HOSPITAL}
            </h1>
            <h2 className={styles.yourGatewayTo}>
              {TARNAKA_HOSPITAL_TAGLINE}
            </h2>
          </div>
        </section>
        <HospitalServices />
        <HospitalContact />
      </div>
    );
  };

export default HospitalTSRTCTarnakaHospita;
