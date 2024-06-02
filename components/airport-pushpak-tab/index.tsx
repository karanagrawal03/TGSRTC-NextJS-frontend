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
interface PuspakData {
  airportPushpakParagraph1: string;
  airportPushpakParagraph2: string;
  airportPushpakTableHeading: string;
  airportPushpakTableData: any;
  tgstrcMiyapurText: string;
  tgsrtcAirPortPushpakBusTimingsHeading: string;
  airPortPushpakBustimingsTowardsRGIAData:any;
  airPushpakBusPointControllersTableHeading:string;
  airPushpakBusPointControllers:any;
}
const AirPortPushpak: React.FC<PuspakData> = ({
  airportPushpakParagraph1,
  airportPushpakParagraph2,
  airportPushpakTableHeading,
  airportPushpakTableData,
  tgstrcMiyapurText,
  tgsrtcAirPortPushpakBusTimingsHeading,
  airPortPushpakBustimingsTowardsRGIAData,
  airPushpakBusPointControllersTableHeading,
  airPushpakBusPointControllers
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.paragraphTexts}>
        <p className={styles.paragraph}>{airportPushpakParagraph1}</p>
        <p className={styles.paragraph}>{airportPushpakParagraph2}</p>
      </div>
      <div className={styles.lowerInnerContainer}>
        <p className={styles.tableHeading}>{airportPushpakTableHeading}</p>
        <Tables
          rows={airportPushpakTableData}
          containerClassName={styles.table}
        />
      </div>
      <div>
        <p className={styles.table2Heading}>{airPushpakBusPointControllersTableHeading}</p>
        <Tables rows={airPushpakBusPointControllers} containerClassName={styles.table} />
      </div>
      <div className={styles.lowerContainer}>
        <p className={styles.TSRTCtext}>{tgstrcMiyapurText}</p>
        <p className={styles.pushpakTimings}>
          {tgsrtcAirPortPushpakBusTimingsHeading}
        </p>
        <TimingsTab timingsRGIAData={airPortPushpakBustimingsTowardsRGIAData} />
      </div>
    </div>
  );
};
export default AirPortPushpak;
