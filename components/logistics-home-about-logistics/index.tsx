import type { NextPage } from "next";
import Cards4 from "../about-logistics-card";
import styles from "./index.module.css";
import { ABOUT_LOGISTICS, ABOUT_LOGISTICS_PARA_1, ABOUT_LOGISTICS_PARA_2, ABOUT_LOGISTICS_PARA_2_CONTENT, TGSRTC_LINK, TGSRTC_LINK_NAME } from "../../constants";
import { cardData } from "../../constants/logistics-home-about-logistics";

export type ContentRightType = {
  className?: string;
};

const ContentRight: NextPage<ContentRightType> = ({ className = "" }) => {
  return (
    <section className={[styles.contentRight, className].join(" ")}>
      <div className={styles.logisticAboutSection}>
        <div className={styles.logisticAboutTexts}>
          <h1 className={styles.aboutLogistics}>{ABOUT_LOGISTICS}</h1>
          <p
            className={styles.telanganaStateRoad}
          >{ABOUT_LOGISTICS_PARA_1}</p>
          <p className={styles.theConsignorsCanContainer}>
           {ABOUT_LOGISTICS_PARA_2} 
            <a
              className={styles.wwwtgsrtctelanganagovin}
              href={TGSRTC_LINK}
              target="_blank"
            >
              <span className={styles.wwwtgsrtctelanganagovin1}>
               {TGSRTC_LINK_NAME}
              </span>
            </a>
             {ABOUT_LOGISTICS_PARA_2_CONTENT}
          </p>
        </div>
        <div className={styles.logisticsInfographicCardCon}>
        {cardData.map((card, index) => (
        <Cards4
          key={index}
          image={card.image}
          busPasses={card.busPasses}
          applyNowPadding={card.applyNowPadding}
        />
      ))}
        </div>
      </div>
    </section>
  );
};

export default ContentRight;
