import type { NextPage } from "next";
import Cards3 from "../HomePageCard/HomePageCard";
import styles from "./HomeBookYourServices.module.css";

export type HomeBookYourServicesType = {
  className?: string;
};

const HomeBookYourServices: NextPage<HomeBookYourServicesType> = ({
  className = "",
}) => {
  return (
    <>
      <div className={styles.busframeContainer}>
        <img
          className={styles.busframe}
          loading="lazy"
          alt=""
          src="/horizontal-bus.png"
        />
      </div>
      <section className={[styles.homeBookYourServices, className].join(" ")}>
        <div className={styles.frameParent}>
          <div className={styles.bookYourServicesWrapper}>
            <h1 className={styles.bookYourServices}>{"Book Your Services"}</h1>
          </div>
          <p className={styles.telanganaStateRoad}>
            Telangana State Road Transport Corporation (TGSRTC) boasts a fleet
            of over 10,000 buses, serving major routes within Telangana and
            across states like Andhra Pradesh, Karnataka, Tamil Nadu, and
            Maharashtra. With operations spanning 36,593 routes in India, TSRTC
            is dedicated to offering top-notch facilities, punctual services,
            and affordable ticket prices for a safe and comfortable journey.
            Secure your TSRTC online booking today! 
          </p>
        </div>
        <div className={styles.bookYourServiceCards}>
          <Cards3
            srcIcon="/group-10000133211@2x.png"
            busPasses="Bus Passes"
            dedicatedToDeliveringTopN="Dedicated to delivering top-notch services through teamwork, aiming for passenger satisfaction and a leading position in the transport sector. Additionally, TSRTC offers a range of bus passes to cater to various passenger needs."
          />
          <Cards3
            srcIcon="/logistic-icon.svg"
            busPasses="TGSRTC Logistics"
            dedicatedToDeliveringTopN="TGSRTC introduced Cargo and Parcel Services in June 2020, offering transportation of goods across the state and neighboring areas. With designated counters at key locations and appointed agents, consignors can conveniently book their shipments at any TGSRTC bus station, ensuring efficient delivery to their desired destinations for collection by the consignee."
          />
          <Cards3
            srcIcon="/group-1000013325.svg"
            busPasses="Hire Bus"
            dedicatedToDeliveringTopN="TGSRTC offers bus rental services for weddings, events, and special occasions at competitive rates. Opt for their chartered service for a safe and enjoyable journey."
            ellipseDivTop="393px"
            ellipseDivLeft="4px"
            busPassesPadding="var(--padding-mid-4) var(--padding-xs)"
            busPassesGap="0.1px"
            dedicatedToDeliveringTransform="scale(1.241)"
            propMarginLeft="unset"
            propMarginRight="-15.799999999995634px"
            buttonsContainerDisplay="inline-block"
            buttonsContainerMinWidth="105px"
            buttonsContainerMargin="unset"
          />
          <Cards3
            srcIcon="/group-1000013341@2x.png"
            busPasses="TGSRTC Hospital"
            dedicatedToDeliveringTopN="TGSRTC Tarnaka Hospital stands out for its commitment to providing essential healthcare services to the community. With a focus on efficient diagnosis, treatment, and care, TSRTC Tarnaka Hospital serves as a vital resource for affordable and reliable medical assistance."
            ellipseDivTop="393px"
            ellipseDivLeft="463px"
            busPassesPadding="var(--padding-3xs) var(--padding-10xs)"
            busPassesGap="unset"
            dedicatedToDeliveringTransform="scale(1.212)"
            propMarginLeft="unset"
            propMarginRight="-6.799999999995634px"
            buttonsContainerDisplay="unset"
            buttonsContainerMinWidth="unset"
            buttonsContainerMargin="0"
          />
        </div>
      </section>
    </>
  );
};

export default HomeBookYourServices;
