import type { NextPage } from "next";
import BookYourServiceCards from "../HomePageCard/HomePageCard";
import styles from "./HomeBookYourServices.module.css";
import { BOOK_YOUR_SERVICE, BOOK_YOUR_SERVICE_PARAGRAPH, BUS_PASSES, BUS_PASSES_PARAGRAPH, HIRE_BUS, HIRE_BUS_PARAGRAPH, TGSRTC_HOSPITAL, TGSRTC_HOSPITAL_PARAGRAPH, TGSRTC_LOGISTICS, TGSRTC_LOGISTICS_PARAGRAPH } from "../../constants";

export type HomeBookYourServicesType = {
  className?: string;
};

const HomeBookYourServices: NextPage<HomeBookYourServicesType> = ({
  className = "",
}) => {
  const serviceCardsData = [
    {
      srcIcon: "/group-10000133211@2x.png",
      busPasses: BUS_PASSES,
      dedicatedToDeliveringTopN: BUS_PASSES_PARAGRAPH,
    },
    {
      srcIcon: "/logistic-icon.svg",
      busPasses: TGSRTC_LOGISTICS,
      dedicatedToDeliveringTopN: TGSRTC_LOGISTICS_PARAGRAPH,
    },
    {
      srcIcon: "/group-1000013325.svg",
      busPasses: HIRE_BUS,
      dedicatedToDeliveringTopN: HIRE_BUS_PARAGRAPH,
      ellipseDivTop: "393px",
      ellipseDivLeft: "4px",
      busPassesPadding: "var(--padding-mid-4) var(--padding-xs)",
      busPassesGap: "0.1px",
      dedicatedToDeliveringTransform: "scale(1.241)",
      propMarginLeft: "unset",
      propMarginRight: "-15.799999999995634px",
      buttonsContainerDisplay: "inline-block",
      buttonsContainerMinWidth: "105px",
      buttonsContainerMargin: "unset",
    },
    {
      srcIcon: "/group-1000013341@2x.png",
      busPasses: TGSRTC_HOSPITAL,
      dedicatedToDeliveringTopN: TGSRTC_HOSPITAL_PARAGRAPH,
      ellipseDivTop: "393px",
      ellipseDivLeft: "463px",
      busPassesPadding: "var(--padding-3xs) var(--padding-10xs)",
      busPassesGap: "unset",
      dedicatedToDeliveringTransform: "scale(1.212)",
      propMarginLeft: "unset",
      propMarginRight: "-6.799999999995634px",
      buttonsContainerDisplay: "unset",
      buttonsContainerMinWidth: "unset",
      buttonsContainerMargin: "0",
    }
  ];
  return (
    <>
      <div className={styles.busframeContainer}>
        <img
          className={styles.busframe}
          loading="lazy"
          alt="horizontal bus"
          src="/horizontal-bus.png"
        />
      </div>
      <section className={[styles.homeBookYourServices, className].join(" ")}>
        <div className={styles.frameParent}>
          <div className={styles.bookYourServicesWrapper}>
            <h1 className={styles.bookYourServices}>{BOOK_YOUR_SERVICE}</h1>
          </div>
          <p className={styles.telanganaStateRoad}>
           {BOOK_YOUR_SERVICE_PARAGRAPH}
          </p>
        </div>
        <div className={styles.bookYourServiceCards}>
          {serviceCardsData.map((cardData, index) => (
            <BookYourServiceCards key={index} {...cardData} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeBookYourServices;
