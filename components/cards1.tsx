import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./cards1.module.css";

export type Cards1Type = {
  className?: string;
  group1000013321?: string;
  busPasses?: string;
  lineSeparator?: string;
  applyNow?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propTransform?: CSSProperties["transform"];
  propMarginLeft?: CSSProperties["marginLeft"];
  propMarginRight?: CSSProperties["marginRight"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const Cards1: NextPage<Cards1Type> = ({
  className = "",
  group1000013321,
  busPasses,
  lineSeparator,
  applyNow,
  propTop,
  propLeft,
  propPadding,
  propGap,
  propTransform,
  propMarginLeft,
  propMarginRight,
  propDisplay,
  propMinWidth,
  propMinWidth1,
}) => {
  const cardsStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const infographicsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      transform: propTransform,
    };
  }, [propTransform]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
      marginRight: propMarginRight,
    };
  }, [propMarginLeft, propMarginRight]);

  const busPassesStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const applyNowStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={[styles.cards, className].join(" ")} style={cardsStyle}>
      <div className={styles.cardItems}>
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
          <h2 className={styles.busPasses} style={busPassesStyle}>
            {busPasses}
          </h2>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor
            incididunt ut. adipiscing elit. sed do eiusmod tempor incididunt ut.
          </div>
        </div>
        <div className={styles.lineSeparater}>
          <img
            className={styles.lineSeparatorIcon}
            alt=""
            src={lineSeparator}
          />
        </div>
        <button className={styles.buttonsContainer}>
          <div className={styles.button1}>
            <div className={styles.applyNow}>Apply Now</div>
          </div>
          <div className={styles.button2}>
            <div className={styles.applyNow1} style={applyNowStyle}>
              {applyNow}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Cards1;
