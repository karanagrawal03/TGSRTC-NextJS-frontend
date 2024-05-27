import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./bullet-point-container2.module.css";

export type BulletPointContainerType = {
  className?: string;
  guidingPrinciplesOfTGSRTC?: string;
  monthlySeasonTicketsAreIs?: string;
  monthlySeasonTicketsAreIs1?: string;
  monthlySeasonTicketsAreIs2?: string;
  monthlySeasonTicketsAreIs3?: string;
  bulltetPointPlaceholder4?: string;
  bulltetPointPlaceholder5?: string;
  bulltetPointPlaceholder6?: string;
  bulltetPointPlaceholder7?: string;
  bulltetPointPlaceholder8?: string;
  bulltetPointPlaceholder9?: string;
  bulltetPointPlaceholder10?: string;
  bulltetPointPlaceholder11?: string;
  bulltetPointPlaceholder12?: string;
  bulltetPointPlaceholder13?: string;
  bulltetPointPlaceholder14?: string;
  bulltetPointPlaceholder15?: string;
  bulltetPointPlaceholder16?: string;
  bulltetPointPlaceholder17?: string;
  bulltetPointPlaceholder18?: string;
  bulltetPointPlaceholder19?: string;
  bulletPoint?: boolean;
  bulletPoint1?: boolean;
  bulletPoint2?: boolean;
  bulletPoint3?: boolean;
  bulletPoint4?: boolean;
  bulletPoint5?: boolean;

  /** Style props */
  bulltetPointPlaceholderMinHeight?: CSSProperties["minHeight"];
  bulletPointWidth?: CSSProperties["width"];
  bulletPointAlignSelf?: CSSProperties["alignSelf"];
  bulletPointPadding?: CSSProperties["padding"];
  bulltetPointPlaceholderMinHeight1?: CSSProperties["minHeight"];
  monthlySeasonTicketsHeight?: CSSProperties["height"];
  monthlySeasonTicketsMargin?: CSSProperties["margin"];
  bulletPointWidth1?: CSSProperties["width"];
  bulletPointAlignSelf1?: CSSProperties["alignSelf"];
  bulletPointPadding1?: CSSProperties["padding"];
  bulltetPointPlaceholderMinHeight2?: CSSProperties["minHeight"];
  monthlySeasonTicketsHeight1?: CSSProperties["height"];
  monthlySeasonTicketsMargin1?: CSSProperties["margin"];
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propMinHeight?: CSSProperties["minHeight"];
  propHeight?: CSSProperties["height"];
  propMargin?: CSSProperties["margin"];
  propWidth1?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propPadding1?: CSSProperties["padding"];
  propMinHeight1?: CSSProperties["minHeight"];
  propHeight1?: CSSProperties["height"];
  propMargin1?: CSSProperties["margin"];
  propWidth2?: CSSProperties["width"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propPadding2?: CSSProperties["padding"];
  propMinHeight2?: CSSProperties["minHeight"];
  propHeight2?: CSSProperties["height"];
  propMargin2?: CSSProperties["margin"];
  propWidth3?: CSSProperties["width"];
  propAlignSelf3?: CSSProperties["alignSelf"];
  propPadding3?: CSSProperties["padding"];
  propMinHeight3?: CSSProperties["minHeight"];
  propHeight3?: CSSProperties["height"];
  propMargin3?: CSSProperties["margin"];
};

const BulletPointContainer: NextPage<BulletPointContainerType> = ({
  className = "",
  guidingPrinciplesOfTGSRTC,
  monthlySeasonTicketsAreIs,
  monthlySeasonTicketsAreIs1,
  monthlySeasonTicketsAreIs2,
  monthlySeasonTicketsAreIs3,
  bulltetPointPlaceholder4,
  bulltetPointPlaceholder5,
  bulltetPointPlaceholder6,
  bulltetPointPlaceholder7,
  bulltetPointPlaceholder8,
  bulltetPointPlaceholder9,
  bulltetPointPlaceholder10,
  bulltetPointPlaceholder11,
  bulltetPointPlaceholder12,
  bulltetPointPlaceholder13,
  bulltetPointPlaceholder14,
  bulltetPointPlaceholder15,
  bulltetPointPlaceholder16,
  bulltetPointPlaceholder17,
  bulltetPointPlaceholder18,
  bulltetPointPlaceholder19,
  bulletPoint,
  bulletPoint1,
  bulletPoint2,
  bulletPoint3,
  bulletPoint4,
  bulletPoint5,
  bulltetPointPlaceholderMinHeight,
  bulletPointWidth,
  bulletPointAlignSelf,
  bulletPointPadding,
  bulltetPointPlaceholderMinHeight1,
  monthlySeasonTicketsHeight,
  monthlySeasonTicketsMargin,
  bulletPointWidth1,
  bulletPointAlignSelf1,
  bulletPointPadding1,
  bulltetPointPlaceholderMinHeight2,
  monthlySeasonTicketsHeight1,
  monthlySeasonTicketsMargin1,
  propWidth,
  propAlignSelf,
  propPadding,
  propMinHeight,
  propHeight,
  propMargin,
  propWidth1,
  propAlignSelf1,
  propPadding1,
  propMinHeight1,
  propHeight1,
  propMargin1,
  propWidth2,
  propAlignSelf2,
  propPadding2,
  propMinHeight2,
  propHeight2,
  propMargin2,
  propWidth3,
  propAlignSelf3,
  propPadding3,
  propMinHeight3,
  propHeight3,
  propMargin3,
}) => {
  const bulltetPointPlaceholder7Style: CSSProperties = useMemo(() => {
    return {
      minHeight: bulltetPointPlaceholderMinHeight,
    };
  }, [bulltetPointPlaceholderMinHeight]);

  const bulletPoint7Style: CSSProperties = useMemo(() => {
    return {
      width: bulletPointWidth,
      alignSelf: bulletPointAlignSelf,
      padding: bulletPointPadding,
    };
  }, [bulletPointWidth, bulletPointAlignSelf, bulletPointPadding]);

  const bulltetPointPlaceholder8Style: CSSProperties = useMemo(() => {
    return {
      minHeight: bulltetPointPlaceholderMinHeight1,
    };
  }, [bulltetPointPlaceholderMinHeight1]);

  const monthlySeasonTickets7Style: CSSProperties = useMemo(() => {
    return {
      height: monthlySeasonTicketsHeight,
      margin: monthlySeasonTicketsMargin,
    };
  }, [monthlySeasonTicketsHeight, monthlySeasonTicketsMargin]);

  const bulletPoint8Style: CSSProperties = useMemo(() => {
    return {
      width: bulletPointWidth1,
      alignSelf: bulletPointAlignSelf1,
      padding: bulletPointPadding1,
    };
  }, [bulletPointWidth1, bulletPointAlignSelf1, bulletPointPadding1]);

  const bulltetPointPlaceholder9Style: CSSProperties = useMemo(() => {
    return {
      minHeight: bulltetPointPlaceholderMinHeight2,
    };
  }, [bulltetPointPlaceholderMinHeight2]);

  const monthlySeasonTickets8Style: CSSProperties = useMemo(() => {
    return {
      height: monthlySeasonTicketsHeight1,
      margin: monthlySeasonTicketsMargin1,
    };
  }, [monthlySeasonTicketsHeight1, monthlySeasonTicketsMargin1]);

  const bulletPoint9Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
      padding: propPadding,
    };
  }, [propWidth, propAlignSelf, propPadding]);

  const bulltetPointPlaceholder10Style: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const monthlySeasonTickets9Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      margin: propMargin,
    };
  }, [propHeight, propMargin]);

  const bulletPoint10Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      alignSelf: propAlignSelf1,
      padding: propPadding1,
    };
  }, [propWidth1, propAlignSelf1, propPadding1]);

  const bulltetPointPlaceholder11Style: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight1,
    };
  }, [propMinHeight1]);

  const monthlySeasonTickets10Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      margin: propMargin1,
    };
  }, [propHeight1, propMargin1]);

  const bulletPoint11Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
      alignSelf: propAlignSelf2,
      padding: propPadding2,
    };
  }, [propWidth2, propAlignSelf2, propPadding2]);

  const bulltetPointPlaceholder12Style: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight2,
    };
  }, [propMinHeight2]);

  const monthlySeasonTickets11Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight2,
      margin: propMargin2,
    };
  }, [propHeight2, propMargin2]);

  const bulletPoint12Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
      alignSelf: propAlignSelf3,
      padding: propPadding3,
    };
  }, [propWidth3, propAlignSelf3, propPadding3]);

  const bulltetPointPlaceholder13Style: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight3,
    };
  }, [propMinHeight3]);

  const monthlySeasonTickets12Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight3,
      margin: propMargin3,
    };
  }, [propHeight3, propMargin3]);

  return (
    <div className={[styles.bulletPointContainer, className].join(" ")}>
      <div className={styles.title}>
        <h2 className={styles.guidingPrinciplesOf}>
          {guidingPrinciplesOfTGSRTC}
        </h2>
      </div>
      <div className={styles.bulletPoints}>
        <div className={styles.bulletPoint}>
          <img
            className={styles.bulltetPointPlaceholder}
            loading="lazy"
            alt=""
            src="/bulltet-point-placeholder.svg"
          />
          <p className={styles.monthlySeasonTickets}>
            {monthlySeasonTicketsAreIs}
          </p>
        </div>
        <div className={styles.bulletPoint1}>
          <img
            className={styles.bulltetPointPlaceholder1}
            alt=""
            src="/bulltet-point-placeholder.svg"
          />
          <p className={styles.monthlySeasonTickets1}>
            {monthlySeasonTicketsAreIs1}
          </p>
        </div>
        <div className={styles.bulletPoint2}>
          <img
            className={styles.bulltetPointPlaceholder2}
            alt=""
            src="/bulltet-point-placeholder.svg"
          />
          <p className={styles.monthlySeasonTickets2}>
            {monthlySeasonTicketsAreIs2}
          </p>
        </div>
        <div className={styles.bulletPoint3}>
          <img
            className={styles.bulltetPointPlaceholder3}
            alt=""
            src="/bulltet-point-placeholder.svg"
            style={bulltetPointPlaceholder7Style}
          />
          <p className={styles.monthlySeasonTickets3}>
            {monthlySeasonTicketsAreIs3}
          </p>
        </div>
        {!bulletPoint && (
          <div className={styles.bulletPoint4} style={bulletPoint7Style}>
            <img
              className={styles.bulltetPointPlaceholder4}
              alt=""
              src={bulltetPointPlaceholder4}
              style={bulltetPointPlaceholder8Style}
            />
            <div
              className={styles.monthlySeasonTickets4}
              style={monthlySeasonTickets7Style}
            >
              To regularly and constantly improve the capabilities of employees
              for higher productivity.
            </div>
          </div>
        )}
        {!bulletPoint1 && (
          <div className={styles.bulletPoint5} style={bulletPoint8Style}>
            <img
              className={styles.bulltetPointPlaceholder5}
              alt=""
              src={bulltetPointPlaceholder5}
              style={bulltetPointPlaceholder9Style}
            />
            <div
              className={styles.monthlySeasonTickets5}
              style={monthlySeasonTickets8Style}
            >
              To focus on service conditions and welfare of the employees and
              their families consistent with their worth to the Corporation.
            </div>
          </div>
        )}
        {!bulletPoint2 && (
          <div className={styles.bulletPoint6} style={bulletPoint9Style}>
            <img
              className={styles.bulltetPointPlaceholder6}
              alt=""
              src={bulltetPointPlaceholder6}
              style={bulltetPointPlaceholder10Style}
            />
            <div
              className={styles.monthlySeasonTickets6}
              style={monthlySeasonTickets9Style}
            >
              To fulfill its obligation to the State and Central governments by
              optimizing return on investment.
            </div>
          </div>
        )}
        {!bulletPoint3 && (
          <div className={styles.bulletPoint7} style={bulletPoint10Style}>
            <img
              className={styles.bulltetPointPlaceholder7}
              alt=""
              src={bulltetPointPlaceholder7}
              style={bulltetPointPlaceholder11Style}
            />
            <div
              className={styles.monthlySeasonTickets7}
              style={monthlySeasonTickets10Style}
            >
              To emphasize environmental and community concerns in the form of
              reducing air and noise pollution.
            </div>
          </div>
        )}
        {!bulletPoint4 && (
          <div className={styles.bulletPoint8} style={bulletPoint11Style}>
            <img
              className={styles.bulltetPointPlaceholder8}
              alt=""
              src={bulltetPointPlaceholder8}
              style={bulltetPointPlaceholder12Style}
            />
            <div
              className={styles.monthlySeasonTickets8}
              style={monthlySeasonTickets11Style}
            >
              To consciously conform to the policy guidelines of the State in
              its business operations.
            </div>
          </div>
        )}
        {!bulletPoint5 && (
          <div className={styles.bulletPoint9} style={bulletPoint12Style}>
            <img
              className={styles.bulltetPointPlaceholder9}
              alt=""
              src={bulltetPointPlaceholder9}
              style={bulltetPointPlaceholder13Style}
            />
            <div
              className={styles.monthlySeasonTickets9}
              style={monthlySeasonTickets12Style}
            >
              To reach a position of pre-eminence in bus transport business.
            </div>
          </div>
        )}
        <div className={styles.bulletPoint10}>
          <img
            className={styles.bulltetPointPlaceholder10}
            alt=""
            src={bulltetPointPlaceholder10}
          />
          <div className={styles.monthlySeasonTickets10}>
            To reach a position of pre-eminence in bus transport business.
          </div>
        </div>
        <div className={styles.bulletPoint11}>
          <img
            className={styles.bulltetPointPlaceholder11}
            alt=""
            src={bulltetPointPlaceholder11}
          />
          <div className={styles.monthlySeasonTickets11}>
            To reach a position of pre-eminence in bus transport business.
          </div>
        </div>
        <div className={styles.bulletPoint12}>
          <img
            className={styles.bulltetPointPlaceholder12}
            alt=""
            src={bulltetPointPlaceholder12}
          />
          <div className={styles.monthlySeasonTickets12}>
            To reach a position of pre-eminence in bus transport business.
          </div>
        </div>
        <div className={styles.bulletPoint13}>
          <img
            className={styles.bulltetPointPlaceholder13}
            alt=""
            src={bulltetPointPlaceholder13}
          />
          <div className={styles.monthlySeasonTickets13}>
            To reach a position of pre-eminence in bus transport business.
          </div>
        </div>
        <div className={styles.bulletPoint14}>
          <img
            className={styles.bulltetPointPlaceholder14}
            alt=""
            src={bulltetPointPlaceholder14}
          />
          <div className={styles.monthlySeasonTickets14}>
            To reach a position of pre-eminence in bus transport business.
          </div>
        </div>
        <div className={styles.bulletPoint15}>
          <img
            className={styles.bulltetPointPlaceholder15}
            alt=""
            src={bulltetPointPlaceholder15}
          />
          <div className={styles.monthlySeasonTickets15}>
            To reach a position of pre-eminence in bus transport business.
          </div>
        </div>
        <div className={styles.bulletPoint16}>
          <img
            className={styles.bulltetPointPlaceholder16}
            alt=""
            src={bulltetPointPlaceholder16}
          />
          <div className={styles.monthlySeasonTickets16}>
            To reach a position of pre-eminence in bus transport business.
          </div>
        </div>
        <div className={styles.bulletPoint17}>
          <img
            className={styles.bulltetPointPlaceholder17}
            alt=""
            src={bulltetPointPlaceholder17}
          />
          <div className={styles.monthlySeasonTickets17}>
            To reach a position of pre-eminence in bus transport business.
          </div>
        </div>
        <div className={styles.bulletPoint18}>
          <img
            className={styles.bulltetPointPlaceholder18}
            alt=""
            src={bulltetPointPlaceholder18}
          />
          <div className={styles.monthlySeasonTickets18}>
            To reach a position of pre-eminence in bus transport business.
          </div>
        </div>
        <div className={styles.bulletPoint19}>
          <img
            className={styles.bulltetPointPlaceholder19}
            alt=""
            src={bulltetPointPlaceholder19}
          />
          <div className={styles.monthlySeasonTickets19}>
            To reach a position of pre-eminence in bus transport business.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulletPointContainer;
