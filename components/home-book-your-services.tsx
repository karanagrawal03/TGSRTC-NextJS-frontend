import type { NextPage } from "next";
import Cards1 from "./cards1";
import styles from "./home-book-your-services.module.css";

export type HomeBookYourServicesType = {
  className?: string;
};

const HomeBookYourServices: NextPage<HomeBookYourServicesType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.homeBookYourServices, className].join(" ")}>
      <div className={styles.servicesContainer}>
        <div className={styles.serviceDescriptionContainerParent}>
          <div className={styles.serviceDescriptionContainer}>
            <h1 className={styles.bookYourServices}>Book Your Services</h1>
          </div>
          <div className={styles.loremIpsumDolor}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, adipiscing elit. sed do eiusmod tempor incididunt
            ut.
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        <Cards1
          group1000013321="/group-1000013321@2x.png"
          busPasses="Bus Passes"
          lineSeparator="pending_I1:1172;717:27579;717:25512"
          applyNow="Book Here"
        />
        <div className={styles.cards1}>
          <div className={styles.infographicContainerWrapper}>
            <div className={styles.infographicContainer}>
              <div className={styles.infographics}>
                <div className={styles.infographicsInner}>
                  <div className={styles.frameParent}>
                    <img
                      className={styles.frameChild}
                      loading="lazy"
                      alt=""
                      src="/group-1000013273.svg"
                    />
                    <img
                      className={styles.frameItem}
                      loading="lazy"
                      alt=""
                      src="/group-1000013268.svg"
                    />
                  </div>
                </div>
                <div className={styles.infographicsChild} />
              </div>
            </div>
          </div>
          <div className={styles.bodyContainer}>
            <div className={styles.texts}>
              <h2 className={styles.busPasses}>TSRTC Logistics</h2>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod
                tempor incididunt ut. adipiscing elit. sed do eiusmod tempor
                incididunt ut.
              </div>
            </div>
            <div className={styles.lineSeparater}>
              <img className={styles.lineSeparatorIcon} alt="" />
            </div>
            <button className={styles.buttonsContainer}>
              <div className={styles.button1}>
                <div className={styles.applyNow}>Apply Now</div>
              </div>
              <div className={styles.button2}>
                <div className={styles.applyNow1}>Book Here</div>
              </div>
            </button>
          </div>
        </div>
        <Cards1
          group1000013321="/group-1000013325.svg"
          busPasses="Hire Bus"
          lineSeparator="pending_I1:1174;717:27579;717:25512"
          applyNow="Book Here"
          propTop="391px"
          propLeft="4px"
          propPadding="var(--padding-mid-4) var(--padding-xs)"
          propGap="0.1px"
          propTransform="scale(1.241)"
          propMarginLeft="-15.800000000000182px"
          propMarginRight="unset"
          propDisplay="inline-block"
          propMinWidth="105px"
          propMinWidth1="76px"
        />
        <Cards1
          group1000013321="/group-1000013341@2x.png"
          busPasses="TSRTC Hospital"
          lineSeparator="pending_I1:1175;717:27579;717:25512"
          applyNow="Know More"
          propTop="391px"
          propLeft="463px"
          propPadding="var(--padding-3xs) var(--padding-10xs)"
          propGap="unset"
          propTransform="scale(1.212)"
          propMarginLeft="unset"
          propMarginRight="-6.800000000000182px"
          propDisplay="unset"
          propMinWidth="unset"
          propMinWidth1="83px"
        />
      </div>
    </section>
  );
};

export default HomeBookYourServices;
