import type { NextPage } from "next";
import styles from "./hospital-t-s-r-t-c-tarnaka-hospita.module.css";
import Header from "../components/header";
import HospitalContact from "../components/hospital-contact";
import HospitalServices from "../components/hospital-services";
import Footer from "../components/footer";
import { TARNAKA_HOSPITAL,TARNAKA_HOSPITAL_TAGLINE } from "../constants";

const HospitalTSRTCTarnakaHospita: NextPageHospitalTSRTCTarnakaHospitaType =
  () => {
    return (
      <div className={styles.hospitalTsrtcTarnakaHospita}>
        <Header />
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
        <Footer />
      </div>
    );
  };

export default HospitalTSRTCTarnakaHospita;
