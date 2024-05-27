import type { NextPage } from "next";
import OtherAccordions from "./other-accordions";
import styles from "./miyapur-depot-card1.module.css";

export type MiyapurDepotCard1Type = {
  className?: string;
};

const MiyapurDepotCard1: NextPage<MiyapurDepotCard1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.miyapurDepotCard2, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.routeParent}>
            <div className={styles.route}>Route</div>
            <b className={styles.ac}>AC</b>
          </div>
          <div className={styles.fromParent}>
            <div className={styles.from}>From</div>
            <b className={styles.jbs}>JBS</b>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.toParent}>
            <div className={styles.to}>To</div>
            <b className={styles.rgia}>RGIA</b>
          </div>
          <div className={styles.viaParent}>
            <div className={styles.via}>Via</div>
            <p className={styles.yathriNivasParyatak}>
              Yathri Nivas, Paryatak Bhavan, Care Hospital, Aramghar
            </p>
          </div>
        </div>
      </div>
      <OtherAccordions />
    </div>
  );
};

export default MiyapurDepotCard1;
