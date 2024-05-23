import type { NextPage } from "next";
import Header from "../components/header";
import Content from "../components/content";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import FooterSection from "../components/footer-section";
import RecognitionAndSocialMediaC from "../components/recognition-and-social-media-c";
import styles from "./logistics-t-s-r-t-c-home.module.css";

const LogisticsTSRTCHome: NextPageLogisticsTSRTCHomeType = () => {
  return (
    <div className={styles.logisticsTsrtcHome}>
      <Header />
      <Content />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <section className={styles.footer}>
        <FooterSection />
        <div className={styles.lineSeparater}>
          <img
            className={styles.lineSeparatorIcon}
            alt=""
            src="/line-separator.svg"
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

export default LogisticsTSRTCHome;
