import {
  AIRPORT_PUSHPAK_FIRST_PARAGRAPH,
  AIRPORT_PUSHPAK_SECOND_PARAGRAPH,
  DETAILS_OF_AIRPORT_PUSHPAK_BUSES,
  DETAILS_OF_MUNCHINTALA_BUSES,
  MUNCHINTALA_FIRST_PARAGRAPH,
  MUNCHINTALA_SECOND_PARAGRAPH,
  PUSHPAK_AIRPORT_LINERS,
} from "../../constants";
import BulletPoints from "../bullet-points";
import Tables from "../tables";
import TimingsTab from "../timings-tab";
import styles from "./index.module.css";
const AirPortPushpak = () => {
  const data = [
    {
      sNo: "#",
      afzalgunjTime: "Afzal Gunj to Muchintala Time",
      munchintalaTime: "Muchintala to Afzal Gunj Time",
    },
    {
      sNo: 1,
      afzalgunjTime: "07:20",
      munchintalaTime: "07:00",
    },
    {
      sNo: 2,
      afzalgunjTime: "08:20",
      munchintalaTime: "08:50",
    },
    {
      sNo: 3,
      afzalgunjTime: "11:10",
      munchintalaTime: "09:50",
    },
    {
      sNo: 4,
      afzalgunjTime: "13:50",
      munchintalaTime: "12:30",
    },
  ];
  const data2 = [
    {
      name: "hello guru",
      info: [
        {
          type: "timings",
          data: ["00:40", "01:00", "02:00", "03:00"],
        },
      ],
    },
    {
      name: "hello guru",
      info: [
        {
          type: "timings",
          data: ["00:40", "01:00", "02:00", "03:00"],
        },
      ],
    },
    {
      name: "hello guru",
      info: [
        {
          type: "timings",
          data: ["00:40", "01:00", "02:00", "03:00"],
        },
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.paragraphTexts}>
        <p className={styles.paragraph}>{AIRPORT_PUSHPAK_FIRST_PARAGRAPH}</p>
        <p className={styles.paragraph}>{AIRPORT_PUSHPAK_SECOND_PARAGRAPH}</p>
      </div>
      <div>
        <p className={styles.tableHeading}>
          {DETAILS_OF_AIRPORT_PUSHPAK_BUSES}
        </p>
        <Tables rows={data} containerClassName={styles.table} />
      </div>
      <div>
        <p className={styles.table2Heading}>{PUSHPAK_AIRPORT_LINERS}</p>
        <Tables rows={data} containerClassName={styles.table} />
      </div>
      <div className={styles.lowerContainer}>
        <p className={styles.TSRTCtext}>
          TGSRTC Miyapur -2 Depot Pushpak Service Operations
        </p>
        <p className={styles.pushpakTimings}>
          TGSRTC Airport Pushpak bus timings - Towards RGIA
        </p>

        <TimingsTab data={data2} />
      </div>
    </div>
  );
};
export default AirPortPushpak;
