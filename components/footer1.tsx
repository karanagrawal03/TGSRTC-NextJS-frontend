import type { NextPage } from "next";
import FooterSection from "./footer-section";
import SocialMediaContainer from "./social-media-container";
import styles from "./footer1.module.css";

export type Footer1Type = {
  className?: string;
};

const Footer1: NextPage<Footer1Type> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <FooterSection
        prop="/----12.svg"
        tELANGANASTATEROADTRANSPO="/telangana-state-road-transport-corporation-1.svg"
      />
      <div className={styles.lineSeparater}>
        <img
          className={styles.lineSeparatorIcon}
          alt=""
          src="/line-separator.svg"
        />
      </div>
      <div className={styles.recognitionAndSocialMediaC}>
        <div className={styles.recognitionContainerWrapper}>
          <div className={styles.recognitionContainer}>
            <div className={styles.recognition1}>
              <img
                className={styles.image462Icon}
                alt=""
                src="/image-462@2x.png"
              />
              <img
                className={styles.image474Icon}
                loading="lazy"
                alt=""
                src="/image-474@2x.png"
              />
            </div>
            <button className={styles.recognition2Wrapper}>
              <img
                className={styles.recognition2Icon}
                alt=""
                src="/recognition-2@2x.png"
              />
            </button>
          </div>
        </div>
        <SocialMediaContainer />
      </div>
      <div className={styles.copyright2021TsrtcAllRiWrapper}>
        <div className={styles.copyright2021Tsrtc}>
          Copyright © 2021 TSRTC, All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
