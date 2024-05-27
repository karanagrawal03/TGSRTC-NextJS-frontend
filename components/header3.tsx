import type { NextPage } from "next";
import styles from "./header3.module.css";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.tsrtcLogo}>
        <img
          className={styles.tsrtcLogoIcon}
          loading="lazy"
          alt=""
          src="/tsrtc-logo@2x.png"
        />
        <div className={styles.tsrtcLogo1}>
          <img className={styles.icon} loading="lazy" alt="" src="/---.svg" />
          <img
            className={styles.telanganaStateRoadTransport}
            loading="lazy"
            alt=""
            src="/telangana-state-road-transport-corporation.svg"
          />
        </div>
      </div>
      <div className={styles.tabContainer}>
        <div className={styles.navTabs}>
          <a className={styles.reservations}>Home</a>
        </div>
        <div className={styles.navTabs1}>
          <a className={styles.reservations1}>Reservations</a>
        </div>
        <div className={styles.navTabs2}>
          <a className={styles.reservations2}>Logistics</a>
        </div>
        <div className={styles.navTabs3}>
          <a className={styles.reservations3}>Bus Passes</a>
        </div>
        <div className={styles.navTabs4}>
          <a className={styles.reservations4}>About</a>
        </div>
        <div className={styles.navTabs5}>
          <a className={styles.reservations5}>Tenders</a>
        </div>
        <div className={styles.navTabs6}>
          <a className={styles.reservations6}>TGSRTC Hospital</a>
        </div>
        <div className={styles.navTabs7}>
          <a className={styles.reservations7}>Contact us</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
