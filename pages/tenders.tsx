import type { NextPage } from "next";
import Header from "../components/header";
import Content from "../components/content";
import FooterSection from "../components/footer-section";
import RecognitionAndSocialMediaC from "../components/recognition-and-social-media-c";
import styles from "./tenders.module.css";

const Tenders: NextPageTendersType = () => {
  return (
    <div className={styles.tenders}>
      <Header />
      <section className={styles.tendersHero}>
        <img
          className={styles.tendersHeroChild}
          alt=""
          src="/group-1000013599@2x.png"
        />
        <h1 className={styles.tenders1}>Tenders</h1>
        <h2
          className={styles.applyRenew}
        >{`Apply, Renew & Travel effortlessly with TGSRTC`}</h2>
      </section>
      <Content />
      <footer className={styles.footer}>
        <FooterSection />
        <div className={styles.lineSeparater}>
          <img
            className={styles.lineSeparatorIcon}
            alt=""
            src="/line-separator-2.svg"
          />
        </div>
        <RecognitionAndSocialMediaC />
        <div className={styles.copyrightContainer}>
          <div className={styles.copyright2021Tgsrtc}>
            Copyright © 2021 TGSRTC, All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Tenders;
