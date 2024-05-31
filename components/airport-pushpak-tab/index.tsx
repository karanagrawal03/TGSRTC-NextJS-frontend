import {
  AIRPORT_PUSHPAK_FIRST_PARAGRAPH,
  AIRPORT_PUSHPAK_SECOND_PARAGRAPH,
  DETAILS_OF_AIRPORT_PUSHPAK_BUSES,
  DETAILS_OF_MUNCHINTALA_BUSES,
  MUNCHINTALA_FIRST_PARAGRAPH,
  MUNCHINTALA_SECOND_PARAGRAPH,
  PUSHPAK_AIRPORT_LINERS,
  TGSRTC_AIRPORT,
  TGSRTC_MIYAPUR,
} from "../../constants";
import { airportPushpakData } from "../../constants/AirPortPushpakTableData";
import BulletPoints from "../bullet-points";
import Tables from "../tables";
import TimingsTab from "../timings-tab";
import styles from "./index.module.css";
const AirPortPushpak = () => {
  return (
    <div className={styles.container}>
      <div className={styles.paragraphTexts}>
        <p className={styles.paragraph}>{AIRPORT_PUSHPAK_FIRST_PARAGRAPH}</p>
        <p className={styles.paragraph}>{AIRPORT_PUSHPAK_SECOND_PARAGRAPH}</p>
      </div>
      <div className={styles.lowerInnerContainer}>
        <p className={styles.tableHeading}>
          {DETAILS_OF_AIRPORT_PUSHPAK_BUSES}
        </p>
        <Tables rows={airportPushpakData} containerClassName={styles.table} />
      </div>
      <div>
        <p className={styles.table2Heading}>{PUSHPAK_AIRPORT_LINERS}</p>
        <Tables rows={airportPushpakData} containerClassName={styles.table} />
      </div>
      <div className={styles.lowerContainer}>
        <p className={styles.TSRTCtext}>
        {TGSRTC_MIYAPUR}
        </p>
        <p className={styles.pushpakTimings}>
       {TGSRTC_AIRPORT}
        </p>

        <TimingsTab />
      </div>
    </div>
  );
};
export default AirPortPushpak;
