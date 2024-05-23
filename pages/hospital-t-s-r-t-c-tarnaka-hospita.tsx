import type { NextPage } from "next";
import Header from "../components/header";
import HospitalAboutWhatServiceWe from "../components/hospital-about-what-service-we";
import HospitalContact from "../components/hospital-contact";
import FooterSection from "../components/footer-section";
import RecognitionAndSocialMediaC from "../components/recognition-and-social-media-c";
import styles from "./hospital-t-s-r-t-c-tarnaka-hospita.module.css";

const HospitalTSRTCTarnakaHospita: NextPageHospitalTSRTCTarnakaHospitaType =
  () => {
    return (
      <div className={styles.hospitalTsrtcTarnakaHospita}>
        <Header />
        <section className={styles.hospitalHero}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
          <h1 className={styles.tsrtcTarnakaHospital}>
            TSRTC Tarnaka Hospital
          </h1>
          <h2 className={styles.yourGatewayTo}>
            Your Gateway to Quality Health Care
          </h2>
        </section>
        <HospitalAboutWhatServiceWe />
        <HospitalContact />
        <section className={styles.footer}>
          <FooterSection />
          <div className={styles.lineSeparater}>
            <img
              className={styles.lineSeparatorIcon}
              alt=""
              src="/line-separator5.svg"
            />
          </div>
          <RecognitionAndSocialMediaC />
          <div className={styles.copyright2021TsrtcAllRiWrapper}>
            <div className={styles.copyright2021Tsrtc}>
              Copyright © 2021 TSRTC, All Rights Reserved.
            </div>
          </div>
        </section>
      </div>
    );
  };

export default HospitalTSRTCTarnakaHospita;
