import type { NextPage } from "next";
import OtherAccordions from "./other-accordions";
import styles from "./miyapur-depot-card.module.css";

export type MiyapurDepotCardType = {
  className?: string;
};

const MiyapurDepotCard: NextPage<MiyapurDepotCardType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.miyapurDepotCard3, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.routeParent}>
          <div className={styles.route}>Route</div>
          <b className={styles.am}>AM</b>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.fromWrapper}>
              <div className={styles.from}>From</div>
            </div>
            <div className={styles.to}>To</div>
            <div className={styles.via}>Via</div>
          </div>
          <div className={styles.secbadParent}>
            <b className={styles.secbad}>SEC’BAD</b>
            <b className={styles.rgia}>RGIA</b>
            <h3 className={styles.secretariatLakdiKapool}>
              Secretariat, Lakdi Kapool, Masab Tank, NMDC, Aramghar
            </h3>
          </div>
        </div>
      </div>
      <OtherAccordions />
    </div>
  );
};

export default MiyapurDepotCard;
