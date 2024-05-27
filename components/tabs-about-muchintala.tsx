import type { NextPage } from "next";
import styles from "./tabs-about-muchintala.module.css";

export type TabsAboutMuchintalaType = {
  className?: string;
};

const TabsAboutMuchintala: NextPage<TabsAboutMuchintalaType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.tabsAboutMuchintala, className].join(" ")}>
      <div className={styles.tabs}>
        <h2 className={styles.whichBusTimings}>
          Which bus timings do you want to view?
        </h2>
        <div className={styles.topTabs}>
          <div className={styles.tabs1}>
            <b className={styles.text}>Muchintala</b>
          </div>
          <div className={styles.tabs2}>
            <div className={styles.text1}>Airport Pushpak</div>
          </div>
          <div className={styles.tabs3}>
            <div className={styles.text2}>Hyderabad to Yadagirigutta</div>
          </div>
          <div className={styles.tabs4}>
            <div className={styles.text3}>Yadagirigutta to Hyderabad</div>
          </div>
        </div>
      </div>
      <p className={styles.muchintalaVillageInContainer}>
        <span className={styles.muchintalaVillageIn}>
          Muchintala village in Ranga Reddy district is now an international
          destination. Taking forward Sri Ramanuja’s ideals and philosophy, Sri
          Chinna Jeeyar Swamy has dreamt of a larger-than-life statue, the
          statue of equality, and a vast campus of worship for pilgrims. To help
          people reach the destination, TGSRTC has arranged special buses to the
          statue of equality and has prepared a schedule for statue of equality
          bus timings.
        </span>
        <span className={styles.blankLine}>&nbsp;</span>
        <span className={styles.muchintalaBusTimings}>
          Muchintala bus timings are convenient and available. Now, the journey
          to Muchintala is easy and simple with TGSRTCFor TGSRTC buses to
          Muchintala refer to the below schedule. Have a safe and secure journey
          with TGSRTC
        </span>
      </p>
    </div>
  );
};

export default TabsAboutMuchintala;
