import type { NextPage } from "next";
import styles from "./index.module.css";
import { LADIES, MLA, PHYSICALLY_CHALLENGED, PRESIDENTS_MANDAL, SEAT_LAYOUT_OF_TGSRTC, SEAT_LAYOUT_OF_TGSRTC_PARA, SENIOR_CITIZENS } from "../../constants";
import BulletPoints from "../bullet-points";
// import {  SEAT_LAYOUT_DATA } from "../../constants/reservation-bus-details";

export type SeatLayoutOfTGSRTCContaineType = {
  data?:any;
  className?: string;
};

const SeatLayoutOfTGSRTCContaine: NextPage<SeatLayoutOfTGSRTCContaineType> = ({
  className = "",
  data
}) => {
  return (
    
    <div className={[styles.seatLayoutOfTgsrtcContaine, className].join(" ")}>
      <img
        className={styles.busDustMobile}
        loading="lazy"
        alt="Bus"
        src="/reservation-details-bus-dust-mobile.png"
      />
      <div className={styles.seatLayoutOfTgsrtcTexts}>
        <h3 className={styles.seatLayoutOfTgsrtc}>{data?.seatLayout}</h3>
        <p
          className={styles.theCorporationHas}
        >{data?.seatLayoutContent}</p>
      </div>
      <div className={styles.seatLayoutBulletPoints}>
      {data?.seatLayoutData.map((section:any, index:number) => (
        <div key={index} className={styles.bulletPointContainer}>
          <div className={styles.title}>
            <b className={styles.guidingPrinciplesOf}>{section.title}</b>
          </div>
          <BulletPoints items={section.bulletPoints} containerClassName={styles.bulletPointChange} />
        </div>
      ))}
    </div>
      <img
        className={styles.busDust}
        loading="lazy"
        alt="Bus"
        src="/reservation-details-bus-dust-web.png"
      />
      </div>
   
  );
};

export default SeatLayoutOfTGSRTCContaine;
