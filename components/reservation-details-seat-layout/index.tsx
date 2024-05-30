import type { NextPage } from "next";
import styles from "./index.module.css";
import { LADIES, MLA, PHYSICALLY_CHALLENGED, PRESIDENTS_MANDAL, SEAT_LAYOUT_OF_TGSRTC, SEAT_LAYOUT_OF_TGSRTC_PARA, SENIOR_CITIZENS } from "../../constants";
import BulletPoints from "../bullet-points";
import { LADIES_BULLET_POINTS, MLA_MP_BULLET_POINTS, PHYSICALLY_CHALLENGED_BULLET_POINTS, PRESIDENTS_BULLET_POINTS, SENIOR_CITIZENS_BULLET_POINTS } from "../../constants/reservation-bus-details";

export type SeatLayoutOfTGSRTCContaineType = {
  className?: string;
};

const SeatLayoutOfTGSRTCContaine: NextPage<SeatLayoutOfTGSRTCContaineType> = ({
  className = "",
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
        <h3 className={styles.seatLayoutOfTgsrtc}>{SEAT_LAYOUT_OF_TGSRTC}</h3>
        <p
          className={styles.theCorporationHas}
        >{SEAT_LAYOUT_OF_TGSRTC_PARA}</p>
      </div>
       <div className={styles.seatLayoutBulletPoints}>
        <div className={styles.bulletPointContainer}>
          <div className={styles.title}>
            <b className={styles.guidingPrinciplesOf}>{MLA}</b>
          </div>
            <BulletPoints items={MLA_MP_BULLET_POINTS} containerClassName={styles.bulletPointChange}/>
        </div>
        <div className={styles.bulletPointContainer}>
          <div className={styles.title}>
            <b className={styles.guidingPrinciplesOf}>{LADIES} </b>
          </div>
            <BulletPoints items={LADIES_BULLET_POINTS} containerClassName={styles.bulletPointChange}/>
        </div>
        <div className={styles.bulletPointContainer}>
          <div className={styles.title}>
            <b className={styles.guidingPrinciplesOf}>{PHYSICALLY_CHALLENGED}</b>
          </div>
            <BulletPoints items={PHYSICALLY_CHALLENGED_BULLET_POINTS} containerClassName={styles.bulletPointChange}/>
        </div>
        <div className={styles.bulletPointContainer}>
          <div className={styles.title}>
            <b className={styles.guidingPrinciplesOf}>{SENIOR_CITIZENS}</b>
          </div>
            <BulletPoints items={SENIOR_CITIZENS_BULLET_POINTS} containerClassName={styles.bulletPointChange}/>
        </div>
        <div className={styles.bulletPointContainer}>
          <div className={styles.title}>
            <b className={styles.guidingPrinciplesOf}>{PRESIDENTS_MANDAL}</b>
          </div>
            <BulletPoints items={PRESIDENTS_BULLET_POINTS} containerClassName={styles.bulletPointChange}/>
        </div>
      <img
        className={styles.busDust}
        loading="lazy"
        alt="Bus"
        src="/reservation-details-bus-dust-web.png"
      />
      </div>
    </div>
   
  );
};

export default SeatLayoutOfTGSRTCContaine;
