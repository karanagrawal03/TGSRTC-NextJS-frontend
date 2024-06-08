import type { NextPage } from "next";
import styles from "./index.module.css";
import { LADIES, MLA, PHYSICALLY_CHALLENGED, PRESIDENTS_MANDAL, SEAT_LAYOUT_OF_TGSRTC, SEAT_LAYOUT_OF_TGSRTC_PARA, SENIOR_CITIZENS } from "../../constants";
import BulletPoints from "../bullet-points";
// import {  SEAT_LAYOUT_DATA } from "../../constants/reservation-bus-details";

export type SeatLayoutOfTGSRTCContaineType = {
  className?: string;
  data: {
    seatLayout: string;
    seatLayoutContent: string;
    seatLayoutData: Array<{
      title: string;
      bulletPoints: string[];
    }>;
  };
};


const SeatLayoutOfTGSRTCContaine: NextPage<SeatLayoutOfTGSRTCContaineType> = ({ className = "", data }) => {
  return (
    <div className={[styles.seatLayoutOfTgsrtcContaine, className].join(" ")}>
      <div className={styles.seatLayoutOfTgsrtcTexts}>
        <h3 className={styles.seatLayoutOfTgsrtc}>{data?.seatLayout}</h3>
        <p className={styles.theCorporationHas}>{data?.seatLayoutContent}</p>
      </div>
      <div className={styles.seatLayoutBulletPoints}>
        {data?.seatLayoutData.map((section, index) => (
          <div key={index} className={styles.bulletPointContainer}>
            <div className={styles.title}>
              <b className={styles.guidingPrinciplesOf}>{section.title}</b>
            </div>
            <BulletPoints items={section.bulletPoints} containerClassName={styles.bulletPointChange} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatLayoutOfTGSRTCContaine;
