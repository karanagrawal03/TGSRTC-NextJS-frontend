import type { NextPage } from "next";
import HomeHero from "../components/home-hero";
import BookYourTicket1 from "../components/book-your-ticket1";
import HomeBookYourServices from "../components/home-book-your-services";
import HomeGamyamApp from "../components/home-gamyam-app";
import HomeNewsUpdates from "../components/home-news-updates";
import styles from "./index.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

const Homepage: NextPageHomepageType = () => {
  return (
    <div className={styles.homepage}>
      <HomeHero />
      <img className={styles.busDust} alt="" src="/bus--dust-1@2x.png" />
      <BookYourTicket1 />
      <HomeBookYourServices />
      <HomeGamyamApp />
      <section className={styles.homeAboutTsrtc}>
        <div className={styles.contentSection}>
          <div className={styles.logo}>
            <img
              className={styles.tsrtcLogoIcon1}
              alt=""
              src="/tsrtc-logo@2x.png"
            />
          </div>
          <div className={styles.texts}>
            <div className={styles.aboutTgsrtc}>About TGSRTC</div>
            <div className={styles.sinceItsInception}>
              Since its inception in 2014, Telangana State Road Transport
              Corporation (TGSRTC) TGSRTC has remained committed to excellence
              in bus transport. Our focus on safety, environmental
              sustainability, and top-notch service ensures passenger
              satisfaction and industry leadership.
            </div>
          </div>
        </div>
        <div className={styles.wrapperAboutTsrtcImage}>
          <img
            className={styles.aboutTsrtcImage}
            alt=""
            src="/about-tsrtc-image@2x.png"
          />
        </div>
      </section>
      <HomeNewsUpdates />
    </div>
  );
};

export default Homepage;
