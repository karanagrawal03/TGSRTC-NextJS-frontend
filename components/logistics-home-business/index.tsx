import type { NextPage } from "next";
import ImageCards from "../image-cards";
import styles from "./index.module.css";
import { TGSRTC_LOGISTICS_BUSINESS, TGSRTC_LOGISTICS_BUSINESS_PARA_1, TGSRTC_LOGISTICS_BUSINESS_PARA_2 } from "../../constants";

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
              {TGSRTC_LOGISTICS_BUSINESS}
            </h1>
          </div>
          <p
            className={styles.tgsrtcAsTransportation}
          >{TGSRTC_LOGISTICS_BUSINESS_PARA_1}</p>
        </div>
        <div className={styles.businessImage}>
          <ImageCards
            pictures="/tgsrtc-logistics-business.png"
            propAlignSelf="unset"
            propWidth="838px"
            propHeight="424px"
          />
        </div>
        <div className={styles.businessImageMobile}>
          <ImageCards
            pictures="/tgsrtc-logistics-business-mobile.png"
            propAlignSelf="unset"
            propWidth="312px"
            propHeight="176px"
          />
        </div>
        <div className={styles.imageCaptionContainer}>
          <p className={styles.cargoTransportvehicleTgsrtc}>
            {TGSRTC_LOGISTICS_BUSINESS_PARA_2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
