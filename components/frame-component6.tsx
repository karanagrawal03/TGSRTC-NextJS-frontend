import type { NextPage } from "next";
import ImageCards from "./image-cards";
import styles from "./frame-component6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <section className={[styles.businessContentWrapper, className].join(" ")}>
      <div className={styles.businessContent}>
        <div className={styles.businessDescription}>
          <div className={styles.businessTitleContainer}>
            <h1 className={styles.tgsrtcLogisticsBusiness}>
              TGSRTC Logistics Business
            </h1>
          </div>
          <p
            className={styles.tgsrtcAsTransportation}
          >{`TGSRTC As transportation of bulk goods demand has grown significantly in the state, we have moved towards Logistics sector bulk luggage through our separate Cargo Transport closed Vehicles which can carry up to 10 tones. We also transport Parcels and deliver at the quickest With Effect From 19.06.2020 services with 150 cargo bus were operated through private the task of freight management pricing. `}</p>
        </div>
        <div className={styles.businessImage}>
          <ImageCards
            pictures="/pictures3@2x.png"
            propAlignSelf="unset"
            propWidth="838px"
            propHeight="424px"
          />
        </div>
        <div className={styles.imageCaptionContainer}>
          <p className={styles.cargoTransportvehicleTgsrtc}>
            CARGO TRANSPORTVEHICLE TGSRTC LOGISTICS BUSINESS As transportation
            of bulk goods demand has grown significantly in the towards
            Logistics sector also with a view to transport bulk luggage through
            our separate Cargo Transport closed Vehicles which can and Courier
            the goods within and outside possible time. 19.06.2020 TGSRTC has
            introduced Parcel bus services. Earlier, the cargo and parcel were
            operated through private agencies. However, TGSRTC has now
            management under its brand with a highly As transportation of bulk
            goods demand has grown significantly in the view to transport bulk
            luggage through our separate Cargo Transport closed Vehicles which
            can outside the state and Cargo parcel services However, TGSRTC has
            now taken up competitive
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
