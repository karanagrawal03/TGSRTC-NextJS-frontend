import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./header21.module.css";

export type Header2Type = {
  className?: string;
  tSRTCLogo?: string;
  prop?: string;
  tELANGANASTATEROADTRANSPO?: string;

  /** Style props */
  tSRTCLogoIconPadding?: CSSProperties["padding"];
  iconPadding?: CSSProperties["padding"];
  reservationsPadding?: CSSProperties["padding"];
  reservationsPadding1?: CSSProperties["padding"];
  reservationsPadding2?: CSSProperties["padding"];
  reservationsPadding3?: CSSProperties["padding"];
  reservationsPadding4?: CSSProperties["padding"];
  reservationsPadding5?: CSSProperties["padding"];
  reservationsPadding6?: CSSProperties["padding"];
  reservationsPadding7?: CSSProperties["padding"];
};

const Header2: NextPage<Header2Type> = ({
  className = "",
  tSRTCLogo,
  prop,
  tELANGANASTATEROADTRANSPO,
  tSRTCLogoIconPadding,
  iconPadding,
  reservationsPadding,
  reservationsPadding1,
  reservationsPadding2,
  reservationsPadding3,
  reservationsPadding4,
  reservationsPadding5,
  reservationsPadding6,
  reservationsPadding7,
}) => {
  const tSRTCLogoStyle: CSSProperties = useMemo(() => {
    return {
      padding: tSRTCLogoIconPadding,
    };
  }, [tSRTCLogoIconPadding]);

  const tSRTCLogo1Style: CSSProperties = useMemo(() => {
    return {
      padding: iconPadding,
    };
  }, [iconPadding]);

  const navTabsStyle: CSSProperties = useMemo(() => {
    return {
      padding: reservationsPadding,
    };
  }, [reservationsPadding]);

  const navTabs1Style: CSSProperties = useMemo(() => {
    return {
      padding: reservationsPadding1,
    };
  }, [reservationsPadding1]);

  const navTabs2Style: CSSProperties = useMemo(() => {
    return {
      padding: reservationsPadding2,
    };
  }, [reservationsPadding2]);

  const navTabs3Style: CSSProperties = useMemo(() => {
    return {
      padding: reservationsPadding3,
    };
  }, [reservationsPadding3]);

  const navTabs4Style: CSSProperties = useMemo(() => {
    return {
      padding: reservationsPadding4,
    };
  }, [reservationsPadding4]);

  const navTabs5Style: CSSProperties = useMemo(() => {
    return {
      padding: reservationsPadding5,
    };
  }, [reservationsPadding5]);

  const navTabs6Style: CSSProperties = useMemo(() => {
    return {
      padding: reservationsPadding6,
    };
  }, [reservationsPadding6]);

  const navTabs7Style: CSSProperties = useMemo(() => {
    return {
      padding: reservationsPadding7,
    };
  }, [reservationsPadding7]);

  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.tsrtcLogo} style={tSRTCLogoStyle}>
        <img
          className={styles.tsrtcLogoIcon}
          loading="lazy"
          alt=""
          src={tSRTCLogo}
        />
        <div className={styles.tsrtcLogo1} style={tSRTCLogo1Style}>
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
        <div className={styles.navTabs} style={navTabsStyle}>
          <div className={styles.reservations}>Home</div>
        </div>
        <div className={styles.navTabs1} style={navTabs1Style}>
          <b className={styles.reservations1}>Reservations</b>
        </div>
        <div className={styles.navTabs2} style={navTabs2Style}>
          <div className={styles.reservations2}>Logistics</div>
        </div>
        <div className={styles.navTabs3} style={navTabs3Style}>
          <div className={styles.reservations3}>Bus Passes</div>
        </div>
        <div className={styles.navTabs4} style={navTabs4Style}>
          <div className={styles.reservations4}>About</div>
        </div>
        <div className={styles.navTabs5} style={navTabs5Style}>
          <div className={styles.reservations5}>Tenders</div>
        </div>
        <div className={styles.navTabs6} style={navTabs6Style}>
          <div className={styles.reservations6}>TSRTC Hospital</div>
        </div>
        <div className={styles.navTabs7} style={navTabs7Style}>
          <div className={styles.reservations7}>Contact us</div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
