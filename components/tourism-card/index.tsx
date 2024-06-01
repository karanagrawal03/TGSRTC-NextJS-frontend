import type { NextPage } from "next";
import styles from "./index.module.css";
import TourismCardChip from "../tourism-card-chip";
import Button from '../button';
import { UPLOADS_BASE_URL } from "../../services/service";

export type TourismCardType = {
  placeName: string;
  image: string;
  pickupTime: string;
  pickupPoint: string;
  places: string[];
  packageDescription: string;
  button: string;
};

const TourismCard: NextPage<TourismCardType> = ({placeName,image,pickupPoint,pickupTime, places,packageDescription,button}) => {
  return (
    <div className={styles.tourismCard}>
      <div className={styles.imageText}>
        <h2 className={styles.tourisamPlace}>{placeName}</h2>
        <div className={styles.imagePlaceholder}>
          <img
            className={styles.picturesIcon}
            loading="lazy"
            alt="tourism-card-image"
            src={UPLOADS_BASE_URL+image}
          />
        </div>
      </div>
      <div className={styles.tourismCardContent}>
        <div className={styles.contents}>
          <div className={styles.timePlace}>
            <div className={styles.calendar}>
              <img
                className={styles.calenderIcon}
                loading="lazy"
                alt="calender-icon"
                src="/calender-icon.svg"
              />
              <div className={styles.tourismTime}>{pickupTime}</div>
            </div>
            <div className={styles.pickup}>
              <img
                className={styles.pickupBusIcon}
                loading="lazy"
                alt="pickup-bus-icon"
                src="/pickup-bus-icon.svg"
              />
              <div className={styles.tourismPickup}>{pickupPoint}</div>
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.placesCovered}>{}</div>
            <div className={styles.chipsAndText}>
              <div className={styles.chips}>
                {places.map((place) => (
                  <TourismCardChip  place={place} />
                ))}
              </div>
              <p className={styles.packageTourWill}>{packageDescription}</p>
            </div>
          </div>
        </div>
        <Button text={button} className={styles.button} textClassName={styles.bookNow} />
      </div>
    </div>
  );
};

export default TourismCard;