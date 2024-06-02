import { ISpecialBusesOffers } from "../../constants/reservation-booking-service-ho";
import styles from "./index.module.css";
interface SpecialBusesOffersCardProps {
  item: ISpecialBusesOffers;
}
const SpecialBusesOffersCard : React.FC<SpecialBusesOffersCardProps> = ({ item }) => {
  return (
    <>
      <div className={styles.specialBusContainer}>
        <div className={styles.image}>
          <img className={styles.img} loading="lazy" alt="special bus offer image" src={item?.image} />
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
            {item?.list?.map((each: any, index: number) => (
              <div className={styles.row}>
                <div className={styles.dot}></div>
                <div className={styles.listItem} key={index}>
                  {each?.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default SpecialBusesOffersCard;
