import type { NextPage } from "next";
import styles from "./index.module.css";
import { PACKAGE_TOUR_WILL ,PLACES_COVERED,TOURISM_TIME,TOURISM_PICKUP, BOOK_NOW} from "../../constants";
import TourismCardChip from "../tourism-card-chip";
import Button from '../button';

export type TourismCardType = {
  placeName?: string;
  image?: string;
  places: string[];
};

const TourismCard: NextPage<TourismCardType> = ({placeName,image,places}) => {
  return (
    <div className={styles.tourismCard}>
      <div className={styles.imageText}>
        <h2 className={styles.tourisamPlace}>{placeName}</h2>
        <div className={styles.imagePlaceholder}>
          <img
            className={styles.picturesIcon}
            loading="lazy"
            alt="tourism-card-image"
            src={image}
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
              <div className={styles.tourismTime}>{TOURISM_TIME}</div>
            </div>
            <div className={styles.pickup}>
              <img
                className={styles.pickupBusIcon}
                loading="lazy"
                alt="pickup-bus-icon"
                src="/pickup-bus-icon.svg"
              />
              <div className={styles.tourismPickup}>{TOURISM_PICKUP}</div>
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.placesCovered}>{PLACES_COVERED}</div>
            <div className={styles.chipsAndText}>
              <div className={styles.chips}>
                {places.map((place) => (
                  <TourismCardChip  place={place} />
                ))}
              </div>
              <p className={styles.packageTourWill}>{PACKAGE_TOUR_WILL}</p>
            </div>
          </div>
        </div>
        <Button text={BOOK_NOW} className={styles.button} textClassName={styles.bookNow} />
      </div>
    </div>
  );
};

export default TourismCard;