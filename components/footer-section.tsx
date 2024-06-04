import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./footer-section.module.css";
import {
  ABOUT_LINK,
  ABOUT_US,
  BUS_PASSES,
  BUS_PASS_LINK,
  CAREERS,
  CONTACT_US,
  FAQS,
  FEEDBACK,
  INFORMATION,
  PRIVACY_POLICIES,
  QUICKLINKS,
  RESERVATIONS,
  RESERVATIONS_LINK,
  ROAD_SAFETY,
  RTI_ACT,
  SITE_MAP
} from "../constants";

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
            className={styles.tsrtcFooterLogo}
            loading="lazy"
            alt="TSRTC-logo"
            src="/tsrtc-footer-logo@2x.png"
          />
          <div className={styles.logoTextGroup}>
            <img
              className={styles.icon}
              loading="lazy"
              alt="tsrtc-telugu-title-logo"
              src="/tsrtc-telugu-title-logo.svg"
            />
            <img
              className={styles.telanganaStateRoadTransport}
              alt="telangana-state-road-transport-corporation-icon"
              src="/telangana-state-road-transport-corporation-11.svg"
              loading="lazy"
            />
          </div>
        </div>
      </a>
      <div className={styles.footerLogoSection}>
        <img
          className={styles.footerLogoImage}
          loading="lazy"
          alt="mobile-footer-logo"
          src="/mobile-footer-logo.png"
        />
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.quicklinksSection}>
          <b className={styles.quicklinks}>{QUICKLINKS}</b>
          <a className={styles.careers} href="/careers">{CAREERS}</a>
          <a className={styles.siteMap} style={siteMapStyle} href="/">
            {SITE_MAP}
          </a>
          <a className={styles.aboutUs} href={ABOUT_LINK}>{ABOUT_US}</a>
          <a className={styles.contactUs} href="/contact-us">{CONTACT_US}</a>
        </div>
        <div className={styles.informationSection}>
          <b className={styles.information}>{INFORMATION}</b>
          <a className={styles.rtiAct2005} href="/rti-act">{RTI_ACT}</a>
          <a className={styles.roadSafety} href="/road-safety">{ROAD_SAFETY}</a>
          <a className={styles.privacyPolicies} href="/privacy-policy">{PRIVACY_POLICIES}</a>
          <a className={styles.feedback} href="/">{FEEDBACK}</a>
        </div>
        <div className={styles.faqsSection}>
          <b className={styles.faqs}>{FAQS}</b>
          <a className={styles.reservations} href={RESERVATIONS_LINK}>{RESERVATIONS}</a>
          <a className={styles.busPasses} href={BUS_PASS_LINK}>{BUS_PASSES}</a>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
