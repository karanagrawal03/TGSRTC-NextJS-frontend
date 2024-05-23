import type { NextPage } from "next";
import FooterSection from "./footer-section";
import SocialMediaContainer from "./social-media-container";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <FooterSection
        prop="/----11.svg"
        tELANGANASTATEROADTRANSPO="/telangana-state-road-transport-corporation-11.svg"
      />
      <div className={styles.lineSeparater}>
        <img
          className={styles.lineSeparatorIcon}
          alt=""
          src="/line-separator.svg"
        />
      </div>
      <footer className={styles.recognitionAndSocialMediaC}>
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
            <div className={styles.recognition2Wrapper}>
              <img
                className={styles.recognition2Icon}
                alt=""
                src="/recognition-2@2x.png"
              />
            </div>
          </div>
        </div>
        <SocialMediaContainer />
      </footer>
      <div className={styles.copyright2021TsrtcAllRiWrapper}>
        <div className={styles.copyright2021Tsrtc}>
          Copyright © 2021 TSRTC, All Rights Reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
