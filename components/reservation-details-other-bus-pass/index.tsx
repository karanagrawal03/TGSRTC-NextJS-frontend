import type { NextPage } from "next";
import styles from "./index.module.css";
import { OTHER_BUS_PASSES, OTHER_BUS_PASSES_PARA } from "../../constants";
import { busDetails } from "../../constants/reservation-bus-details";

export type OtherCityServicesSectionType = {
  className?: string;
};


const OtherCityServicesSection: NextPage<OtherCityServicesSectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.otherCityServicesSection, className].join(" ")}>
      <div className={styles.otherCityBusesParent}>
        <h3 className={styles.otherCityBuses}>{OTHER_BUS_PASSES}</h3>
        <p className={styles.theFollowingFacilities}>
          {OTHER_BUS_PASSES_PARA}
        </p>
      </div>
     
        <div className={styles.otherBusesImages}>
        {busDetails.map((bus) => (
          <div key={bus.type} className={styles.deluxe}>
            <b className={styles.deluxe1}>{bus.type}</b>
            <div className={styles.imageCards}>
              <div className={styles.imageText}>
                <div className={styles.imagePlaceholder}>
                  <img
                    className={styles.picturesIcon}
                    alt={bus.type}
                    src={bus.imageSrc}
                    loading="lazy"
                  />
                  <div className={styles.imagePlaceholderChild} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherCityServicesSection;
