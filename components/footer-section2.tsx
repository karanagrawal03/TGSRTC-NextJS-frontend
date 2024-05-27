import type { NextPage } from "next";
import styles from "./footer-section2.module.css";

export type FooterSectionType = {
  className?: string;
};

const FooterSection: NextPage<FooterSectionType> = ({ className = "" }) => {
  return (
    <div className={[styles.footerSection, className].join(" ")}>
      <div className={styles.logo}>
        <img
          className={styles.logo51Icon}
          loading="lazy"
          alt=""
          src="/logo5-1@2x.png"
        />
        <div className={styles.logoTextGroup}>
          <img className={styles.icon} alt="" src="/----16.svg" />
          <img
            className={styles.telanganaStateRoadTransport}
            alt=""
            src="/telangana-state-road-transport-corporation-16.svg"
          />
        </div>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.footerLinks1}>
          <b className={styles.quicklinks}>Quicklinks</b>
          <div className={styles.careers}>{`Careers `}</div>
          <div className={styles.siteMap}>Site Map</div>
          <a className={styles.aboutUs}>About Us</a>
          <div className={styles.contactUs}>Contact us</div>
        </div>
        <div className={styles.footerLinks2}>
          <b className={styles.information}>Information</b>
          <div className={styles.rtiAct2005}>RTI Act, 2005</div>
          <div className={styles.roadSafety}>Road Safety</div>
          <div className={styles.privacyPolicies}>{`Privacy Policies `}</div>
          <div className={styles.feedback}>Feedback</div>
        </div>
        <div className={styles.footerLinks3}>
          <b className={styles.faqs}>FAQs</b>
          <div className={styles.reservations}>Reservations</div>
          <div className={styles.busPasses}>Bus Passes</div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
