import type { NextPage } from "next";
import Cards4 from "../about-logistics-card";
import styles from "./index.module.css";
import { ABOUT_LOGISTICS, ABOUT_LOGISTICS_PARA_1, ABOUT_LOGISTICS_PARA_2, ABOUT_LOGISTICS_PARA_2_CONTENT, TGSRTC_LINK, TGSRTC_LINK_NAME } from "../../constants";
import { cardData } from "../../constants/logistics-home-about-logistics";

export type ContentRightType = {
  className?: string;
  data: any;
};

const ContentRight: NextPage<ContentRightType> = ({ data,className = "" }) => {
  return (
    <section className={[styles.contentRight, className].join(" ")}>
      <div className={styles.logisticAboutSection}>
        <div className={styles.logisticAboutTexts}>
          <h1 className={styles.aboutLogistics}>{data?.aboutLogisticsTitle}</h1>
          <p
            className={styles.telanganaStateRoad}
          >{data?.aboutLogisticsPara1}</p>
          <p className={styles.theConsignorsCanContainer}>
           {data?.aboutLogisticsPara2Start} 
            <a
              className={styles.wwwtgsrtctelanganagovin}
              href={data?.aboutLogisticsPara2Link}
              target="_blank"
            >
              <span className={styles.wwwtgsrtctelanganagovin1}>
               {data?.aboutLogisticsPara2Link}
              </span>
            </a>
             {data?.aboutLogisticsPara2End}
          </p>
        </div>
        <div className={styles.logisticsInfographicCardCon}>
        {data?.aboutLogisticsCards.map((card:any, index:number) => (
        <Cards4
          key={index}
          image={card.image}
          busPasses={card.busPasses}
          applyNowPadding=""
        />
      ))}
        </div>
      </div>
    </section>
  );
};

export default ContentRight;
