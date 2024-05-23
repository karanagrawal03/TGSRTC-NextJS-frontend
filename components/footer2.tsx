import type { NextPage } from "next";
import FooterSection from "./footer-section";
import RecognitionAndSocialMediaC from "./recognition-and-social-media-c";
import styles from "./footer2.module.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <FooterSection />
      <div className={styles.lineSeparater}>
        <img
          className={styles.lineSeparatorIcon}
          alt=""
          src="/line-separator.svg"
        />
      </div>
      <RecognitionAndSocialMediaC />
      <div className={styles.copyright2021Tsrtc}>
        Copyright © 2021 TSRTC, All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
