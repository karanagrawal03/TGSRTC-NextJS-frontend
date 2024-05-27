import type { NextPage } from "next";
import styles from "./tabs-about-hyderabad-to-yada.module.css";

export type TabsAboutHyderabadToYadaType = {
  className?: string;
};

const TabsAboutHyderabadToYada: NextPage<TabsAboutHyderabadToYadaType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.tabsAboutHyderabadToYada, className].join(" ")}>
      <div className={styles.tabs}>
        <h2 className={styles.whichBusTimings}>
          Which bus timings do you want to view?
        </h2>
        <div className={styles.topTabs}>
          <div className={styles.tabs1}>
            <div className={styles.text}>Muchintala</div>
          </div>
          <div className={styles.tabs2}>
            <div className={styles.text1}>Airport Pushpak</div>
          </div>
          <div className={styles.tabs3}>
            <b className={styles.text2}>Hyderabad to Yadagirigutta</b>
          </div>
          <div className={styles.tabs4}>
            <div className={styles.text3}>Yadagirigutta to Hyderabad</div>
          </div>
        </div>
      </div>
      <p className={styles.afterMoreThanContainer}>
        <span className={styles.afterMoreThan}>
          After more than five years of renovation and reconstruction,
          Telangana’s Yadadri (Yadagirigutta) temple has transformed from a
          small hill shrine into a magnificent and sprawling pilgrimage centre.
          To help pilgrims reach the shrine, TGSRTC has started special buses
          that go to Yadadri. Now you have 104 buses from Hyderabad to Yadadri
          (Yadagirigutta). JBS to Yadagirigutta bus timings and MGBS to
          Yadagirigutta bus timings are set up in such a way that there are
          ample options for pilgrims to choose from.
        </span>
        <span className={styles.blankLine}>&nbsp;</span>
        <span className={styles.locatedAbout60}>
          Located about 60 km from Hyderabad, it has undergone a complete
          transformation in line with Chief Minister K. Chandrasekhar Rao’s
          ambitious vision. To realize his vision, Yadagirigutta bus timings and
          also Yadagirigutta ticket price are carefully planned so as to provide
          citizens with cheap, safe and secure travelling service. Be it JBS to
          Yadagirigutta bus ticket price or MGBS to Yadagirigutta ticket price,
          TGSRTC is determined to provide cost-effective, pocket-friendly and
          the best service.
        </span>
        <span className={styles.blankLine1}>&nbsp;</span>
        <span className={styles.chooseTgsrtcmakeHyderabad}>
          Choose TGSRTCMake Hyderabad to Yadadri journey safe, secure and simpl
        </span>
      </p>
    </div>
  );
};

export default TabsAboutHyderabadToYada;
