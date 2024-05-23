import type { NextPage } from "next";
import Header from "../components/header";
import HomeHero from "../components/home-hero";
import BookYourTicket from "../components/book-your-ticket";
import HomeBookYourServices from "../components/home-book-your-services";
import HomeGamyamApp from "../components/home-gamyam-app";
import HomeAboutTSRTC from "../components/home-about-t-s-r-t-c";
import HomeNewsUpdates from "../components/home-news-updates";
import FooterSection from "../components/footer-section";
import RecognitionAndSocialMediaC from "../components/recognition-and-social-media-c";
import styles from "./index.module.css";

const Homepage: NextPageHomepageType = () => {
  return (
    <div className={styles.homepage}>
      <Header />
      <HomeHero />
      <BookYourTicket />
      <HomeBookYourServices />
      <HomeGamyamApp />
      <HomeAboutTSRTC />
      <HomeNewsUpdates />
      <section className={styles.footer}>
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
        <RecognitionAndSocialMediaC />
        <div className={styles.copyrightWrapper}>
          <div className={styles.copyright2021Tsrtc}>
            Copyright © 2021 TSRTC, All Rights Reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
