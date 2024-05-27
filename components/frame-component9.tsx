import type { NextPage } from "next";
import styles from "./frame-component9.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.legacyLetterWrapper, className].join(" ")}>
      <div className={styles.legacyLetter}>
        <div className={styles.wrapperLetterBg}>
          <img className={styles.letterBgIcon} alt="" src="/letter-bg@2x.png" />
        </div>
        <div className={styles.legacyWrapper}>
          <h1 className={styles.legacy}>Legacy</h1>
        </div>
        <div className={styles.image537Parent}>
          <img
            className={styles.image537Icon}
            loading="lazy"
            alt=""
            src="/image-537@2x.png"
          />
          <div className={styles.rtcInTelanganaStateWasFirWrapper}>
            <p className={styles.rtcInTelanganaContainer}>
              <span
                className={styles.rtcInTelangana}
              >{`RTC in Telangana State was first established as NSR-RTD (Nizam State Rail & Road Transport Department), a wing of Nizam State Railway in the erstwhile Hyderabad State, in 1932, with 27 buses and 166 employees.`}</span>
              <span className={styles.blankLine}>&nbsp;</span>
              <span className={styles.andhraPradeshState}>
                Andhra Pradesh State Road Transport Corporation (APSRTC) was
                established on 11th January 1958 in pursuance of the Road
                Transport Corporations Act 1950.
              </span>
              <span className={styles.inTheUndivided}>
                In the undivided Andhra Pradesh, APSRTC has a fleet strength
                more than 22,628 buses which is the largest fleet held by any
                other transport undertaking in the World. Since 1999 APSRTC is
                holding a prestigious place in the Guinness book of world
                records as the owner of the largest fleet of buses.
              </span>
              <span className={styles.consequentUponState}>
                Consequent upon state bifurcation of Andhra Pradesh state into
                Telangana and residual Andhra Pradesh, two separate
                administrative units of RTC in Andhra Pradesh and Telangana
                state were started functioning with effect from 03.06.2015.
              </span>
              <span className={styles.theGovernmentOf}>
                The Government of Telangana has subsequently established
                Telangana State Road Transport Corporation (TGSRTC), on
                27.04.2016, under the Road Transport Corporation Act, 1950.
              </span>
              <span className={styles.afterBifurcationTgsrtc}>
                After bifurcation, TGSRTC started operating buses from 98 depots
                to various destinations of Telangana and also to the neighboring
                states such as Andhra Pradesh, Maharashtra State, Karnataka
                State, Tamilnadu and Chattisgarh transporting around 90 lakhs
                passengers every day. 68% buses are providing rural
                transportation and 32% buses for urban transportation. Now,
                Telangana State Road Transport Corporation is holding a fleet of
                9,384 buses and 46,746 employees as on April 2022 from 98 depots
                administered through 11 Regions. There are 364 bus stations in
                the State.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
