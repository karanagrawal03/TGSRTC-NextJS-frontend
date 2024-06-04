import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./HomePageCard.module.css";
import { APPLY_NOW, BUS_PASS_LINK, HOSPITAL_LINK, KNOW_MORE_LABEL, LOGISTICS_LINK } from "../../constants";
import { useRouter } from "next/router";

export type BookYourServiceCardType = {
  className?: string;
  srcIcon?: string;
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
  index: number;
};

const BookYourServiceCards: NextPage<BookYourServiceCardType> = ({
  className = "",
  srcIcon,
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
  index,
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

  const router = useRouter();
  const handleClick = (index: number) => {
    if (index === 0) {
      router.push(BUS_PASS_LINK);
    } else if (index === 1) {
      router.push(LOGISTICS_LINK);
    } else if (index === 2) {
      router.push("/");
    } else {
      router.push(HOSPITAL_LINK);
    }
  };

  return (
    <div className={[styles.cards, className].join(" ")} style={cardsStyle}>
      <div className={styles.infographicContainerWrapper}>
        <div className={styles.infographicContainer}>
          <div className={styles.infographics} style={infographicsStyle}>
            <div className={styles.wrapperGroup1000013321}>
              <img
                className={styles.wrapperGroup1000013321Child}
                loading="lazy"
                alt="service cards image"
                src={srcIcon}
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
          <img className={styles.lineSeparatorIcon} alt="line seperator" loading="lazy"/>
        </div>
        <button className={styles.buttonsContainer}>
          <div className={styles.button1}>
            <div className={styles.applyNow}>{APPLY_NOW}</div>
          </div>
          <div className={styles.button2} onClick={() => handleClick(index)}>
            <b className={styles.applyNow1}>{KNOW_MORE_LABEL}</b>
          </div>
        </button>
      </div>
    </div>
  );
};

export default BookYourServiceCards;
