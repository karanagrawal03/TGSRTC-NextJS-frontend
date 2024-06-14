import { ISpecialBusesOffers } from "../../constants/reservation-booking-service-ho";
import { UPLOADS_BASE_URL } from "../../services/service";
import BulletPoints from "../bullet-points";
import styles from "./index.module.css";
import { useEffect, useRef } from 'react';

interface SpecialBusesOffersCardProps {
  item: ISpecialBusesOffers;
}
const SpecialBusesOffersCard : React.FC<SpecialBusesOffersCardProps> = ({ item }) => {

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardElements = Array.from(document.querySelectorAll(`.${styles.specialBusContainer}`));
    let maxHeight = 0;

    cardElements.forEach(card => {
      const cardHeight = card.getBoundingClientRect().height;
      if (cardHeight > maxHeight) {
        maxHeight = cardHeight;
      }
    });

    cardElements.forEach(card => {
      (card as HTMLElement).style.height = `${maxHeight }px`;
    });
  }, []);

  return (
    <>
      <div className={styles.specialBusContainer}> 
        <div className={styles.image}>
          <img className={styles.img} loading="lazy" alt="special bus offer image" src={UPLOADS_BASE_URL + item?.image} />
        </div>
        <div className={styles.specialBusDesc}>
          <div className={styles.route}>
            <div className={styles.place}>{item?.from}</div>
            <div>
              <img src="/directionIcon.svg" alt="direction"  className={styles.arrow} loading="lazy"/>
            </div>
            <div className={styles.place}>{item?.to}</div>
          </div>
          <div className={styles.title}>{item?.title}</div>
          <div className={styles.list}>
            <BulletPoints items={item?.list} containerClassName={styles.bulletPoints}/>
          </div>
        </div>
      </div>
    </>
  );
};
export default SpecialBusesOffersCard;
