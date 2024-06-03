import ReservationHeroTourism from "../../components/reservation-tourism";
import styles from "./index.module.css";
import Tables from "../../components/tables";

const LogisticContacts = () => {
  return (
    <div className={styles.logisticContacts}>
      {/* <img className={styles.busDust} alt="" src="/bus--dust@2x.png" /> */}
      <ReservationHeroTourism />
      <Tables rows={[]} />
    </div>
  );
};

export default LogisticContacts;
