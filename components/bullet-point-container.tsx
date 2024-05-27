import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./bullet-point-container.module.css";

export type BulletPointContainerType = {
  className?: string;
  guidingPrinciplesOfTGSRTC?: string;
  monthlySeasonTicketsAreIs?: string;
  monthlySeasonTicketsAreIs1?: string;
  monthlySeasonTicketsAreIs2?: string;
  monthlySeasonTicketsAreIs3?: string;
  monthlySeasonTicketsAreIs4?: string;
  monthlySeasonTicketsAreIs5?: string;
  monthlySeasonTicketsAreIs6?: string;
  monthlySeasonTicketsAreIs7?: string;
  monthlySeasonTicketsAreIs8?: string;
  monthlySeasonTicketsAreIs9?: string;
  showBulletPoint?: boolean;
  bulletPointVisible?: boolean;
  bulletPointVisible1?: boolean;
  bulletPointVisible2?: boolean;
  bulletPointVisible3?: boolean;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinHeight?: CSSProperties["minHeight"];
  propPadding?: CSSProperties["padding"];
  propMinHeight1?: CSSProperties["minHeight"];
  propMargin?: CSSProperties["margin"];
  propHeight?: CSSProperties["height"];
  propPadding1?: CSSProperties["padding"];
  propMinHeight2?: CSSProperties["minHeight"];
  propMargin1?: CSSProperties["margin"];
  propHeight1?: CSSProperties["height"];
  propPadding2?: CSSProperties["padding"];
  propMinHeight3?: CSSProperties["minHeight"];
  propMargin2?: CSSProperties["margin"];
  propHeight2?: CSSProperties["height"];
  propPadding3?: CSSProperties["padding"];
  propMinHeight4?: CSSProperties["minHeight"];
  propMargin3?: CSSProperties["margin"];
  propHeight3?: CSSProperties["height"];
  propPadding4?: CSSProperties["padding"];
  propMinHeight5?: CSSProperties["minHeight"];
  propMargin4?: CSSProperties["margin"];
  propHeight4?: CSSProperties["height"];
};

const BulletPointContainer: NextPage<BulletPointContainerType> = ({
  className = "",
  guidingPrinciplesOfTGSRTC,
  monthlySeasonTicketsAreIs,
  monthlySeasonTicketsAreIs1,
  monthlySeasonTicketsAreIs2,
  monthlySeasonTicketsAreIs3,
  monthlySeasonTicketsAreIs4,
  monthlySeasonTicketsAreIs5,
  monthlySeasonTicketsAreIs6,
  monthlySeasonTicketsAreIs7,
  monthlySeasonTicketsAreIs8,
  monthlySeasonTicketsAreIs9,
  showBulletPoint,
  bulletPointVisible,
  bulletPointVisible1,
  bulletPointVisible2,
  bulletPointVisible3,
  propDisplay,
  propMinWidth,
  propMinHeight,
  propPadding,
  propMinHeight1,
  propMargin,
  propHeight,
  propPadding1,
  propMinHeight2,
  propMargin1,
  propHeight1,
  propPadding2,
  propMinHeight3,
  propMargin2,
  propHeight2,
  propPadding3,
  propMinHeight4,
  propMargin3,
  propHeight3,
  propPadding4,
  propMinHeight5,
  propMargin4,
  propHeight4,
}) => {
  const guidingPrinciplesOfStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const bulltetPointPlaceholderStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const bulletPointStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const bulltetPointPlaceholder1Style: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight1,
    };
  }, [propMinHeight1]);

  const monthlySeasonTicketsStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
      height: propHeight,
    };
  }, [propMargin, propHeight]);

  const bulletPoint1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const bulltetPointPlaceholder2Style: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight2,
    };
  }, [propMinHeight2]);

  const monthlySeasonTickets1Style: CSSProperties = useMemo(() => {
    return {
      margin: propMargin1,
      height: propHeight1,
    };
  }, [propMargin1, propHeight1]);

  const bulletPoint2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const bulltetPointPlaceholder3Style: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight3,
    };
  }, [propMinHeight3]);

  const monthlySeasonTickets2Style: CSSProperties = useMemo(() => {
    return {
      margin: propMargin2,
      height: propHeight2,
    };
  }, [propMargin2, propHeight2]);

  const bulletPoint3Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding3,
    };
  }, [propPadding3]);

  const bulltetPointPlaceholder4Style: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight4,
    };
  }, [propMinHeight4]);

  const monthlySeasonTickets3Style: CSSProperties = useMemo(() => {
    return {
      margin: propMargin3,
      height: propHeight3,
    };
  }, [propMargin3, propHeight3]);

  const bulletPoint4Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding4,
    };
  }, [propPadding4]);

  const bulltetPointPlaceholder5Style: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight5,
    };
  }, [propMinHeight5]);

  const monthlySeasonTickets4Style: CSSProperties = useMemo(() => {
    return {
      margin: propMargin4,
      height: propHeight4,
    };
  }, [propMargin4, propHeight4]);

  return (
    <div className={[styles.bulletPointContainer, className].join(" ")}>
      <div className={styles.title}>
        <b
          className={styles.guidingPrinciplesOf}
          style={guidingPrinciplesOfStyle}
        >
          {guidingPrinciplesOfTGSRTC}
        </b>
      </div>
      <div className={styles.bulletPoints}>
        <div className={styles.bulletPoint}>
          <img
            className={styles.bulltetPointPlaceholder}
            alt=""
            src="/bulltet-point-placeholder.svg"
            style={bulltetPointPlaceholderStyle}
          />
          <p className={styles.monthlySeasonTickets}>
            {monthlySeasonTicketsAreIs}
          </p>
        </div>
        {showBulletPoint && (
          <div className={styles.bulletPoint1} style={bulletPointStyle}>
            <img
              className={styles.bulltetPointPlaceholder1}
              alt=""
              src="/bulltet-point-placeholder.svg"
              style={bulltetPointPlaceholder1Style}
            />
            <p
              className={styles.monthlySeasonTickets1}
              style={monthlySeasonTicketsStyle}
            >
              {monthlySeasonTicketsAreIs1}
            </p>
          </div>
        )}
        {bulletPointVisible && (
          <div className={styles.bulletPoint2} style={bulletPoint1Style}>
            <img
              className={styles.bulltetPointPlaceholder2}
              alt=""
              src="/bulltet-point-placeholder.svg"
              style={bulltetPointPlaceholder2Style}
            />
            <p
              className={styles.monthlySeasonTickets2}
              style={monthlySeasonTickets1Style}
            >
              {monthlySeasonTicketsAreIs2}
            </p>
          </div>
        )}
        {bulletPointVisible1 && (
          <div className={styles.bulletPoint3} style={bulletPoint2Style}>
            <img
              className={styles.bulltetPointPlaceholder3}
              alt=""
              src="/bulltet-point-placeholder.svg"
              style={bulltetPointPlaceholder3Style}
            />
            <p
              className={styles.monthlySeasonTickets3}
              style={monthlySeasonTickets2Style}
            >
              {monthlySeasonTicketsAreIs3}
            </p>
          </div>
        )}
        {bulletPointVisible2 && (
          <div className={styles.bulletPoint4} style={bulletPoint3Style}>
            <img
              className={styles.bulltetPointPlaceholder4}
              alt=""
              src="/bulltet-point-placeholder.svg"
              style={bulltetPointPlaceholder4Style}
            />
            <p
              className={styles.monthlySeasonTickets4}
              style={monthlySeasonTickets3Style}
            >
              {monthlySeasonTicketsAreIs4}
            </p>
          </div>
        )}
        {bulletPointVisible3 && (
          <div className={styles.bulletPoint5} style={bulletPoint4Style}>
            <img
              className={styles.bulltetPointPlaceholder5}
              alt=""
              src="/bulltet-point-placeholder.svg"
              style={bulltetPointPlaceholder5Style}
            />
            <p
              className={styles.monthlySeasonTickets5}
              style={monthlySeasonTickets4Style}
            >
              {monthlySeasonTicketsAreIs5}
            </p>
          </div>
        )}
        <div className={styles.bulletPoint6}>
          <img className={styles.bulltetPointPlaceholder6} alt="" />
          <div className={styles.monthlySeasonTickets6}>
            {monthlySeasonTicketsAreIs6}
          </div>
        </div>
        <div className={styles.bulletPoint7}>
          <img className={styles.bulltetPointPlaceholder7} alt="" />
          <div className={styles.monthlySeasonTickets7}>
            {monthlySeasonTicketsAreIs7}
          </div>
        </div>
        <div className={styles.bulletPoint8}>
          <img className={styles.bulltetPointPlaceholder8} alt="" />
          <div className={styles.monthlySeasonTickets8}>
            {monthlySeasonTicketsAreIs8}
          </div>
        </div>
        <div className={styles.bulletPoint9}>
          <img className={styles.bulltetPointPlaceholder9} alt="" />
          <div className={styles.monthlySeasonTickets9}>
            {monthlySeasonTicketsAreIs9}
          </div>
        </div>
        <div className={styles.bulletPoint10}>
          <img className={styles.bulltetPointPlaceholder10} alt="" />
          <div className={styles.monthlySeasonTickets10}>
            To reach a position of pre-eminence in bus transport business.
          </div>
        </div>
        <div className={styles.bulletPoint11}>
          <img className={styles.bulltetPointPlaceholder11} alt="" />
          <div className={styles.monthlySeasonTickets11}>
            To reach a position of pre-eminence in bus transport business.
          </div>
        </div>
        <div className={styles.bulletPoint12}>
          <img className={styles.bulltetPointPlaceholder12} alt="" />
          <div className={styles.monthlySeasonTickets12}>
            To reach a position of pre-eminence in bus transport business.
          </div>
        </div>
        <div className={styles.bulletPoint13}>
          <img className={styles.bulltetPointPlaceholder13} alt="" />
          <div className={styles.monthlySeasonTickets13}>
            To reach a position of pre-eminence in bus transport business.
          </div>
        </div>
        <div className={styles.bulletPoint14}>
          <img className={styles.bulltetPointPlaceholder14} alt="" />
          <div className={styles.monthlySeasonTickets14}>
            To reach a position of pre-eminence in bus transport business.
          </div>
        </div>
        <div className={styles.bulletPoint15}>
          <img className={styles.bulltetPointPlaceholder15} alt="" />
          <div className={styles.monthlySeasonTickets15}>
            To reach a position of pre-eminence in bus transport business.
          </div>
        </div>
        <div className={styles.bulletPoint16}>
          <img className={styles.bulltetPointPlaceholder16} alt="" />
          <div className={styles.monthlySeasonTickets16}>
            To reach a position of pre-eminence in bus transport business.
          </div>
        </div>
        <div className={styles.bulletPoint17}>
          <img className={styles.bulltetPointPlaceholder17} alt="" />
          <div className={styles.monthlySeasonTickets17}>
            To reach a position of pre-eminence in bus transport business.
          </div>
        </div>
        <div className={styles.bulletPoint18}>
          <img className={styles.bulltetPointPlaceholder18} alt="" />
          <div className={styles.monthlySeasonTickets18}>
            To reach a position of pre-eminence in bus transport business.
          </div>
        </div>
        <div className={styles.bulletPoint19}>
          <img className={styles.bulltetPointPlaceholder19} alt="" />
          <div className={styles.monthlySeasonTickets19}>
            To reach a position of pre-eminence in bus transport business.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulletPointContainer;
