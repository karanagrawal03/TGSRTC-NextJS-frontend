import type { NextPage } from "next";
import styles from "./header1.module.css";

export type Header1Type = {
  className?: string;
  prop?: string;
  tELANGANASTATEROADTRANSPO?: string;
};

const Header1: NextPage<Header1Type> = ({
  className = "",
  prop,
  tELANGANASTATEROADTRANSPO,
}) => {
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
          <img className={styles.icon} loading="lazy" alt="" src={prop} />
          <img
            className={styles.telanganaStateRoadTransport}
            loading="lazy"
            alt=""
            src={tELANGANASTATEROADTRANSPO}
          />
        </div>
      </div>
      <div className={styles.tabContainer}>
        <div className={styles.navTabs}>
          <div className={styles.reservations}>Home</div>
        </div>
        <div className={styles.navTabs1}>
          <div className={styles.reservations1}>Reservations</div>
        </div>
        <div className={styles.navTabs2}>
          <div className={styles.reservations2}>Logistics</div>
        </div>
        <div className={styles.navTabs3}>
          <b className={styles.reservations3}>Bus Passes</b>
        </div>
        <div className={styles.navTabs4}>
          <div className={styles.reservations4}>About</div>
        </div>
        <div className={styles.navTabs5}>
          <div className={styles.reservations5}>Tenders</div>
        </div>
        <div className={styles.navTabs6}>
          <div className={styles.reservations6}>TSRTC Hospital</div>
        </div>
        <div className={styles.navTabs7}>
          <div className={styles.reservations7}>Contact us</div>
        </div>
      </div>
    </header>
  );
};

export default Header1;
