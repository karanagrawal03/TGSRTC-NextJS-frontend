import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./cards3.module.css";

export type Cards3Type = {
  className?: string;
  group1000013321?: string;
  busPasses?: string;
  dedicatedToDeliveringTopN?: string;

  /** Style props */
  ellipseDivTop?: CSSProperties["top"];
  ellipseDivLeft?: CSSProperties["left"];
  busPassesPadding?: CSSProperties["padding"];
  busPassesGap?: CSSProperties["gap"];
  dedicatedToDeliveringTransform?: CSSProperties["transform"];
  propMarginLeft?: CSSProperties["marginLeft"];
  propMarginRight?: CSSProperties["marginRight"];
  buttonsContainerDisplay?: CSSProperties["display"];
  buttonsContainerMinWidth?: CSSProperties["minWidth"];
  buttonsContainerMargin?: CSSProperties["margin"];
};

const Cards3: NextPage<Cards3Type> = ({
  className = "",
  group1000013321,
  busPasses,
  dedicatedToDeliveringTopN,
  ellipseDivTop,
  ellipseDivLeft,
  busPassesPadding,
  busPassesGap,
  dedicatedToDeliveringTransform,
  propMarginLeft,
  propMarginRight,
  buttonsContainerDisplay,
  buttonsContainerMinWidth,
  buttonsContainerMargin,
}) => {
  const cardsStyle: CSSProperties = useMemo(() => {
    return {
      top: ellipseDivTop,
      left: ellipseDivLeft,
    };
  }, [ellipseDivTop, ellipseDivLeft]);

  const infographicsStyle: CSSProperties = useMemo(() => {
    return {
      padding: busPassesPadding,
      gap: busPassesGap,
    };
  }, [busPassesPadding, busPassesGap]);

  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      transform: dedicatedToDeliveringTransform,
    };
  }, [dedicatedToDeliveringTransform]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
      marginRight: propMarginRight,
    };
  }, [propMarginLeft, propMarginRight]);

  const busPasses1Style: CSSProperties = useMemo(() => {
    return {
      display: buttonsContainerDisplay,
      minWidth: buttonsContainerMinWidth,
      margin: buttonsContainerMargin,
    };
  }, [
    buttonsContainerDisplay,
    buttonsContainerMinWidth,
    buttonsContainerMargin,
  ]);

  return (
    <div className={[styles.cards, className].join(" ")} style={cardsStyle}>
      <div className={styles.infographicContainerWrapper}>
        <div className={styles.infographicContainer}>
          <div className={styles.infographics} style={infographicsStyle}>
            <div className={styles.wrapperGroup1000013321}>
              <img
                className={styles.wrapperGroup1000013321Child}
                loading="lazy"
                alt=""
                src={group1000013321}
                style={groupIconStyle}
              />
            </div>
            <div className={styles.infographicsChild} style={ellipseDivStyle} />
          </div>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.texts}>
          <b className={styles.busPasses} style={busPasses1Style}>
            {busPasses}
          </b>
          <p className={styles.loremIpsumDolorContainer}>
            <span className={styles.dedicatedToDelivering}>
              {dedicatedToDeliveringTopN}
            </span>
          </p>
        </div>
        <div className={styles.lineSeparater}>
          <img className={styles.lineSeparatorIcon} alt="" />
        </div>
        <button className={styles.buttonsContainer}>
          <div className={styles.button1}>
            <div className={styles.applyNow}>Apply Now</div>
          </div>
          <div className={styles.button2}>
            <b className={styles.applyNow1}>Know More</b>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Cards3;
