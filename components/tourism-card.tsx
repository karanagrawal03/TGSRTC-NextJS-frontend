import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./tourism-card.module.css";

export type TourismCardType = {
  className?: string;
  hyderabadDarshan?: string;
  pictures?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propTop?: CSSProperties["top"];
};

const TourismCard: NextPage<TourismCardType> = ({
  className = "",
  hyderabadDarshan,
  pictures,
  propLeft,
  propTop,
}) => {
  const tourismCardStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div
      className={[styles.tourismCard, className].join(" ")}
      style={tourismCardStyle}
    >
      <div className={styles.imageText}>
        <h2 className={styles.hyderabadDarshan}>{hyderabadDarshan}</h2>
        <div className={styles.imagePlaceholder}>
          <img
            className={styles.picturesIcon}
            loading="lazy"
            alt=""
            src={pictures}
          />
          <div className={styles.imagePlaceholderChild} />
        </div>
      </div>
      <div className={styles.tourismCardContent}>
        <div className={styles.contents}>
          <div className={styles.content1}>
            <div className={styles.calendar}>
              <img
                className={styles.calenderIcon}
                loading="lazy"
                alt=""
                src="/calender-icon.svg"
              />
              <div className={styles.amTo0800}>
                08:30 am to 08:00 pm (Weekends)
              </div>
            </div>
            <div className={styles.pickup}>
              <img
                className={styles.pickupBusIcon}
                loading="lazy"
                alt=""
                src="/pickup-bus-icon.svg"
              />
              <div className={styles.pickupAlpha}>
                Pickup - Alpha Hotel Secundarabad
              </div>
            </div>
          </div>
          <div className={styles.content2}>
            <div
              className={styles.placesCovered}
            >{`Places covered & description`}</div>
            <div className={styles.chipsTexts}>
              <div className={styles.chips}>
                <div className={styles.chips1}>
                  <div className={styles.golkonda}>Birla Mandir</div>
                </div>
                <div className={styles.chips2}>
                  <div className={styles.golkonda1}>Golkonda</div>
                </div>
                <div className={styles.chips3}>
                  <div className={styles.golkonda2}>Taramati Baradari</div>
                </div>
                <div className={styles.chips4}>
                  <div className={styles.golkonda3}>Chowmahalla Palace</div>
                </div>
                <div className={styles.chips5}>
                  <div className={styles.golkonda4}>Durgam Cheruvu Park</div>
                </div>
                <div className={styles.chips6}>
                  <div className={styles.golkonda5}>Cable Bridge</div>
                </div>
                <div className={styles.chips7}>
                  <div className={styles.golkonda6}>Lumbini Park</div>
                </div>
              </div>
              <p
                className={styles.packageTourWill}
              >{`Package tour will be starting from alpha hotel sec-bad @08:30am and take you to birla mandir, golkonda fort, taramati baradari,where you can have lunch {at your own cost} chowmahala palace, charminar, lumbini park & back to alpha hotel.`}</p>
            </div>
          </div>
        </div>
        <button className={styles.button}>
          <b className={styles.applyNow}>Book Now</b>
        </button>
      </div>
    </div>
  );
};

export default TourismCard;
