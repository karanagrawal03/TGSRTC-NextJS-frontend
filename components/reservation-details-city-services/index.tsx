import type { NextPage } from "next";
import ImageCards from "../logistics-business-image-card";
import styles from "./index.module.css";
import { CITY_SERVICES, Electric_BUSES, Electric_BUSES_PARA, METRO_DELUX, METRO_DELUX_COACH, METRO_DELUX_COACH_PARA, METRO_EXPRESS, METRO_LUXURY_AC, SALIENT_FEATURES } from "../../constants";
import { electricBusesBulletPoints, metroDeluxBulletPoints } from "../../constants/reservation-bus-details";
import BulletPoints from "../bullet-points";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <div className={[styles.cityServicesParent, className].join(" ")}>
      <h3 className={styles.cityServices}>{CITY_SERVICES}</h3>
      <div className={styles.cityServicesSection}>
        <div className={styles.cityServicesTypes}>
          <b className={styles.electricBuses}>{Electric_BUSES}</b>
          <p className={styles.theFollowingFacilities}>
           {Electric_BUSES_PARA}
          </p>
        </div>
        <div>
        <div className={styles.guidingPrinciplesOf}>{SALIENT_FEATURES}</div>
        <BulletPoints items={electricBusesBulletPoints} containerClassName={styles.bulletPointChange}/>
        </div>
        <div className={styles.cityServicesTypes1}>
          <h3 className={styles.metroDeluxeCoach}>{METRO_DELUX_COACH}</h3>
          <p className={styles.metroDeluxeCoaches}>{METRO_DELUX_COACH_PARA}</p>
        </div>
        <div>
        <div className={styles.guidingPrinciplesOf}>
        {SALIENT_FEATURES}
            </div>
            <BulletPoints items={metroDeluxBulletPoints} containerClassName={styles.bulletPointChange}/>
            </div>
        <div className={styles.metroLuxuryAcParent}>
          <h3 className={styles.metroLuxuryAc}>{METRO_LUXURY_AC}</h3>
          <div className={styles.imageCardsParent}>
            <ImageCards pictures="/metro-luxury-ac.png" />
            <div className={styles.metroTypes}>
              <div className={styles.metroDeluxeParent}>
                <b className={styles.metroDeluxe}>{METRO_DELUX}</b>
                <div className={styles.imageCards}>
                  <div className={styles.imageText}>
                    <div className={styles.imagePlaceholder}>
                      <img
                        className={styles.picturesIcon}
                        alt="metro-delux"
                        src="/metro-delux.png"
                      />
                      <div className={styles.imagePlaceholderChild} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.metroExpressParent}>
                <h3 className={styles.metroExpress}>{METRO_EXPRESS}</h3>
                <div className={styles.imageCards}>
                  <div className={styles.imageText}>
                    <div className={styles.imagePlaceholder}>
                      <img
                        className={styles.picturesIcon}
                        alt="metro-express"
                        src="/metro-express.png"
                      />
                      <div className={styles.imagePlaceholderItem} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
