import type { NextPage } from "next";
import Cards4 from "../cards4";
import styles from "./index.module.css";
import { ABOUT_LOGISTICS, ABOUT_LOGISTICS_PARA_1, ABOUT_LOGISTICS_PARA_2, ABOUT_LOGISTICS_PARA_2_CONTENT } from "../../constants";

const cardData = [
  {
    image: "/logistics-safe-reliable.svg",
    busPasses: "Safe and Reliable",
  },
  {
    image: "/group-1000013527.svg",
    busPasses: "Safe and Reliable",
    applyNowPadding: "var(--padding-7xs-5) 0px",
  },
  {
   image: "/logistics-on-time-delivery.svg",
    busPasses: "On Time Delivery",
    applyNowPadding: "var(--padding-5xs-5) 0px",
  },
];

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
              href="https://www.tsrtc.telangana.gov.in/"
              target="_blank"
            >
              <span className={styles.wwwtgsrtctelanganagovin1}>
                www.TGSRTC.telangana.gov.in
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
