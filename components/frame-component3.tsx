import type { NextPage } from "next";
import styles from "./frame-component3.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.businessContentWrapper, className].join(" ")}>
      <div className={styles.businessContent}>
        <div className={styles.businessTitleContainerParent}>
          <div className={styles.businessTitleContainer}>
            <h1 className={styles.tsrtcLogisticsBusiness}>
              TSRTC Logistics Business
            </h1>
          </div>
          <div
            className={styles.tsrtcAsTransportation}
          >{`TSRTC As transportation of bulk goods demand has grown significantly in the state, we have moved towards Logistics sector bulk luggage through our separate Cargo Transport closed Vehicles which can carry up to 10 tones. We also transport Parcels and deliver at the quickest With Effect From 19.06.2020 services with 150 cargo bus were operated through private the task of freight management pricing. `}</div>
        </div>
        <div className={styles.businessImageContainer}>
          <div className={styles.logisticsBusImage}>
            <img
              className={styles.image677Icon}
              loading="lazy"
              alt=""
              src="/image-677@2x.png"
            />
          </div>
        </div>
        <div className={styles.cargoTransportDescription}>
          <div className={styles.cargoTransportvehicleTsrtc}>
            CARGO TRANSPORTVEHICLE TSRTC LOGISTICS BUSINESS As transportation of
            bulk goods demand has grown significantly in the towards Logistics
            sector also with a view to transport bulk luggage through our
            separate Cargo Transport closed Vehicles which can and Courier the
            goods within and outside possible time. 19.06.2020 TSRTC has
            introduced Parcel bus services. Earlier, the cargo and parcel were
            operated through private agencies. However, TSRTC has now management
            under its brand with a highly As transportation of bulk goods demand
            has grown significantly in the view to transport bulk luggage
            through our separate Cargo Transport closed Vehicles which can
            outside the state and Cargo parcel services However, TSRTC has now
            taken up competitive
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
