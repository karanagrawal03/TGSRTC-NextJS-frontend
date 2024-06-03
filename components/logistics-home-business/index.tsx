import type { NextPage } from "next";
import ImageCards from "../logistics-business-image-card";
import styles from "./index.module.css";
import { TGSRTC_LOGISTICS_BUSINESS, TGSRTC_LOGISTICS_BUSINESS_PARA_1, TGSRTC_LOGISTICS_BUSINESS_PARA_2 } from "../../constants";
import { UPLOADS_BASE_URL } from "../../services/service";

export type FrameComponent6Type = {
  className?: string;
  data?: {
    logisticsBusiness?: string;
    logisticsBusinesspara1?: string;
    logisticsBusinessImage?: {
      data?: {
        attributes?: {
          url?: string;
        };
      };
    };
    logisticsBusinessImageMobile?: {
      data?: {
        attributes?: {
          url?: string;
        };
      };
    };
    logisticsBusinesspara2?: string;
  };
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ data, className = "" }) => {
  return (
    <section className={[styles.businessContentWrapper, className].join(" ")}>
      <div className={styles.businessContent}>
        <div className={styles.businessDescription}>
          <div className={styles.businessTitleContainer}>
            <h1 className={styles.tgsrtcLogisticsBusiness}>
              {data?.logisticsBusiness}
            </h1>
          </div>
          <p className={styles.tgsrtcAsTransportation}>
            {data?.logisticsBusinesspara1}
          </p>
        </div>
        <div className={styles.businessImage}>
          <ImageCards
            pictures={`${UPLOADS_BASE_URL}${data?.logisticsBusinessImage?.data?.attributes?.url}`}
            propAlignSelf="unset"
            propWidth="838px"
            propHeight="424px"
          />
        </div>
        <div className={styles.businessImageMobile}>
          <ImageCards
            pictures={`${UPLOADS_BASE_URL}${data?.logisticsBusinessImageMobile?.data?.attributes?.url}`}
            propAlignSelf="unset"
            propWidth="312px"
            propHeight="176px"
          />
        </div>
        <div className={styles.imageCaptionContainer}>
          <p className={styles.cargoTransportvehicleTgsrtc}>
            {data?.logisticsBusinesspara2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;