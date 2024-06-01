import type { NextPage } from "next";
import ImageCards from "../logistics-business-image-card";
import styles from "./index.module.css";
import { CITY_SERVICES, Electric_BUSES, Electric_BUSES_PARA, METRO_DELUX, METRO_DELUX_COACH, METRO_DELUX_COACH_PARA, METRO_EXPRESS, METRO_LUXURY_AC, SALIENT_FEATURES } from "../../constants";
import { electricBusesBulletPoints, metroDeluxBulletPoints } from "../../constants/reservation-bus-details";
import BulletPoints from "../bullet-points";
import { UPLOADS_BASE_URL } from "../../services/service";

export type FrameComponent4Type = {
  data?:any,
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ data,className = "" }) => {
  return (
    <div className={[styles.cityServicesParent, className].join(" ")}>
      <h3 className={styles.cityServices}>{data?.cityServicesTitle}</h3>
      <div className={styles.cityServicesSection}>
        <div className={styles.cityServicesTypes}>
          <b className={styles.electricBuses}>{data?.electricBusData?.title}</b>
          <p className={styles.theFollowingFacilities}>
           {data?.electricBusData?.content}
          </p>
        </div>
        <div>
        <div className={styles.guidingPrinciplesOf}>{data?.electricBusData?.salientHeading}</div>
        <BulletPoints items={data?.electricBusData?.electricBusesBulletPoints} containerClassName={styles.bulletPointChange}/>
        </div>
        <div className={styles.cityServicesTypes1}>
          <h3 className={styles.metroDeluxeCoach}>{data?.metroLuxuryData?.title}</h3>
          <p className={styles.metroDeluxeCoaches}>{data?.metroLuxuryData?.content}</p>
        </div>
        <div>
        <div className={styles.guidingPrinciplesOf}>
        {data?.metroLuxuryData?.salientHeading}
            </div>
            <BulletPoints items={data?.metroDeluxData?.metroDeluxBulletPoints} containerClassName={styles.bulletPointChange}/>
            </div>
        <div className={styles.metroLuxuryAcParent}>
          <h3 className={styles.metroLuxuryAc}>{data?.metroLuxuryTitle}</h3>
          <div className={styles.imageCardsParent}>
            <ImageCards pictures={`${UPLOADS_BASE_URL}${data?.metroLuxuryImage?.data.attributes.url}`} />
            <div className={styles.metroTypes}>
              <div className={styles.metroDeluxeParent}>
                <b className={styles.metroDeluxe}>{data?.metroDeluxTitle}</b>
                <div className={styles.imageCards}>
                  <div className={styles.imageText}>
                    <div className={styles.imagePlaceholder}>
                      <img
                        className={styles.picturesIcon}
                        loading="lazy"
                        alt="metro-delux"
                        src={`${UPLOADS_BASE_URL}${data?.metroDeluxImage?.data.attributes.url}`} 
                      />
                      <div className={styles.imagePlaceholderChild} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.metroExpressParent}>
                <h3 className={styles.metroExpress}>{data?.metroExpressTitle}</h3>
                <div className={styles.imageCards}>
                  <div className={styles.imageText}>
                    <div className={styles.imagePlaceholder}>
                      <img
                        className={styles.picturesIcon}
                        loading="lazy"
                        alt="metro-express"
                        src={`${UPLOADS_BASE_URL}${data?.metroExpressImage?.data.attributes.url}`} 
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
