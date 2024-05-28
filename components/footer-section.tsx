import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./footer-section.module.css";

export type FooterSectionType = {
  className?: string;

  /** Style props */
  siteMapTextDecoration?: CSSProperties["textDecoration"];
};

const FooterSection: NextPage<FooterSectionType> = ({
  className = "",
  siteMapTextDecoration,
}) => {
  const siteMapStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: siteMapTextDecoration,
    };
  }, [siteMapTextDecoration]);

  return (
    <div className={[styles.footerSection, className].join(" ")}>
      <a href="/">
        <div className={styles.logo}>
          <img
            className={styles.logo51Icon}
            loading="lazy"
            alt=""
            src="/logo5-1@2x.png"
          />
          <div className={styles.logoTextGroup}>
            <img className={styles.icon} alt="" src="/----11.svg" />
            <img
              className={styles.telanganaStateRoadTransport}
              alt=""
              src="/telangana-state-road-transport-corporation-11.svg"
            />
          </div>
        </div>
      </a>
      <div className={styles.footerLogoSection}>
        <img
          className={styles.footerLogoImage}
          loading="lazy"
          alt=""
          src="/mobileFooterLogo.png"
        />
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.footerLinks1}>
          <b className={styles.quicklinks}>Quicklinks</b>
          <a className={styles.careers} href="/careers">Careers</a>
          <a className={styles.siteMap} style={siteMapStyle} href="">
            Site Map
          </a>
          <a className={styles.aboutUs} href="/about-vision-legacy">About Us</a>
          <a className={styles.contactUs} href="/contact-us">Contact us</a>
        </div>
        <div className={styles.footerLinks2}>
          <b className={styles.information}>Information</b>
          <a className={styles.rtiAct2005} href="">RTI Act, 2005</a>
          <a className={styles.roadSafety} href="">Road Safety</a>
          <a className={styles.privacyPolicies} href="">{`Privacy Policies `}</a>
          <a className={styles.feedback} href="">Feedback</a>
        </div>
        <div className={styles.footerLinks3}>
          <b className={styles.faqs}>FAQs</b>
          <a className={styles.reservations} href="/reservation-booking-service-ho">Reservations</a>
          <a className={styles.busPasses} href="/bus-pass-services">Bus Passes</a>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
