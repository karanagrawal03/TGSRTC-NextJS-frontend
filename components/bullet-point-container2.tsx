import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./bullet-point-container2.module.css";

export type BulletPointContainer2Type = {
  className?: string;
  guidingPrinciplesOfTSRTC?: string;
  monthlySeasonTicketsAreIs?: string;
  monthlySeasonTicketsAreIs1?: string;
  monthlySeasonTicketsAreIs2?: string;
  monthlySeasonTicketsAreIs3?: string;
  bulletPoint?: boolean;
  bulletPoint1?: boolean;
  bulletPoint2?: boolean;
  bulletPoint3?: boolean;
  bulletPoint4?: boolean;
  bulletPoint5?: boolean;

  /** Style props */
  monthlySeasonTicketsMinHeight?: CSSProperties["minHeight"];
  bulltetPointPlaceholderPadding?: CSSProperties["padding"];
  monthlySeasonTicketsMinHeight1?: CSSProperties["minHeight"];
  bulletPointHeight?: CSSProperties["height"];
  bulltetPointPlaceholderPadding1?: CSSProperties["padding"];
  monthlySeasonTicketsMinHeight2?: CSSProperties["minHeight"];
  bulletPointHeight1?: CSSProperties["height"];
  bulltetPointPlaceholderPadding2?: CSSProperties["padding"];
  monthlySeasonTicketsMinHeight3?: CSSProperties["minHeight"];
  bulletPointHeight2?: CSSProperties["height"];
  bulltetPointPlaceholderPadding3?: CSSProperties["padding"];
  monthlySeasonTicketsMinHeight4?: CSSProperties["minHeight"];
  bulletPointHeight3?: CSSProperties["height"];
  bulltetPointPlaceholderPadding4?: CSSProperties["padding"];
  monthlySeasonTicketsMinHeight5?: CSSProperties["minHeight"];
  bulletPointHeight4?: CSSProperties["height"];
  bulltetPointPlaceholderPadding5?: CSSProperties["padding"];
  monthlySeasonTicketsMinHeight6?: CSSProperties["minHeight"];
  bulletPointHeight5?: CSSProperties["height"];
};

const BulletPointContainer2: NextPage<BulletPointContainer2Type> = ({
  className = "",
  guidingPrinciplesOfTSRTC,
  monthlySeasonTicketsAreIs,
  monthlySeasonTicketsAreIs1,
  monthlySeasonTicketsAreIs2,
  monthlySeasonTicketsAreIs3,
  bulletPoint,
  bulletPoint1,
  bulletPoint2,
  bulletPoint3,
  bulletPoint4,
  bulletPoint5,
  monthlySeasonTicketsMinHeight,
  bulltetPointPlaceholderPadding,
  monthlySeasonTicketsMinHeight1,
  bulletPointHeight,
  bulltetPointPlaceholderPadding1,
  monthlySeasonTicketsMinHeight2,
  bulletPointHeight1,
  bulltetPointPlaceholderPadding2,
  monthlySeasonTicketsMinHeight3,
  bulletPointHeight2,
  bulltetPointPlaceholderPadding3,
  monthlySeasonTicketsMinHeight4,
  bulletPointHeight3,
  bulltetPointPlaceholderPadding4,
  monthlySeasonTicketsMinHeight5,
  bulletPointHeight4,
  bulltetPointPlaceholderPadding5,
  monthlySeasonTicketsMinHeight6,
  bulletPointHeight5,
}) => {
  const bulltetPointPlaceholder2Style: CSSProperties = useMemo(() => {
    return {
      minHeight: monthlySeasonTicketsMinHeight,
    };
  }, [monthlySeasonTicketsMinHeight]);

  const bulletPoint2Style: CSSProperties = useMemo(() => {
    return {
      padding: bulltetPointPlaceholderPadding,
    };
  }, [bulltetPointPlaceholderPadding]);

  const bulltetPointPlaceholder3Style: CSSProperties = useMemo(() => {
    return {
      minHeight: monthlySeasonTicketsMinHeight1,
    };
  }, [monthlySeasonTicketsMinHeight1]);

  const monthlySeasonTickets2Style: CSSProperties = useMemo(() => {
    return {
      height: bulletPointHeight,
    };
  }, [bulletPointHeight]);

  const bulletPoint3Style: CSSProperties = useMemo(() => {
    return {
      padding: bulltetPointPlaceholderPadding1,
    };
  }, [bulltetPointPlaceholderPadding1]);

  const bulltetPointPlaceholder4Style: CSSProperties = useMemo(() => {
    return {
      minHeight: monthlySeasonTicketsMinHeight2,
    };
  }, [monthlySeasonTicketsMinHeight2]);

  const monthlySeasonTickets3Style: CSSProperties = useMemo(() => {
    return {
      height: bulletPointHeight1,
    };
  }, [bulletPointHeight1]);

  const bulletPoint4Style: CSSProperties = useMemo(() => {
    return {
      padding: bulltetPointPlaceholderPadding2,
    };
  }, [bulltetPointPlaceholderPadding2]);

  const bulltetPointPlaceholder5Style: CSSProperties = useMemo(() => {
    return {
      minHeight: monthlySeasonTicketsMinHeight3,
    };
  }, [monthlySeasonTicketsMinHeight3]);

  const monthlySeasonTickets4Style: CSSProperties = useMemo(() => {
    return {
      height: bulletPointHeight2,
    };
  }, [bulletPointHeight2]);

  const bulletPoint5Style: CSSProperties = useMemo(() => {
    return {
      padding: bulltetPointPlaceholderPadding3,
    };
  }, [bulltetPointPlaceholderPadding3]);

  const bulltetPointPlaceholder6Style: CSSProperties = useMemo(() => {
    return {
      minHeight: monthlySeasonTicketsMinHeight4,
    };
  }, [monthlySeasonTicketsMinHeight4]);

  const monthlySeasonTickets5Style: CSSProperties = useMemo(() => {
    return {
      height: bulletPointHeight3,
    };
  }, [bulletPointHeight3]);

  const bulletPoint6Style: CSSProperties = useMemo(() => {
    return {
      padding: bulltetPointPlaceholderPadding4,
    };
  }, [bulltetPointPlaceholderPadding4]);

  const bulltetPointPlaceholder7Style: CSSProperties = useMemo(() => {
    return {
      minHeight: monthlySeasonTicketsMinHeight5,
    };
  }, [monthlySeasonTicketsMinHeight5]);

  const monthlySeasonTickets6Style: CSSProperties = useMemo(() => {
    return {
      height: bulletPointHeight4,
    };
  }, [bulletPointHeight4]);

  const bulletPoint7Style: CSSProperties = useMemo(() => {
    return {
      padding: bulltetPointPlaceholderPadding5,
    };
  }, [bulltetPointPlaceholderPadding5]);

  const bulltetPointPlaceholder8Style: CSSProperties = useMemo(() => {
    return {
      minHeight: monthlySeasonTicketsMinHeight6,
    };
  }, [monthlySeasonTicketsMinHeight6]);

  const monthlySeasonTickets7Style: CSSProperties = useMemo(() => {
    return {
      height: bulletPointHeight5,
    };
  }, [bulletPointHeight5]);

  return (
    <div className={[styles.bulletPointContainer, className].join(" ")}>
      <div className={styles.title}>
        <h3 className={styles.guidingPrinciplesOf}>
          {guidingPrinciplesOfTSRTC}
        </h3>
      </div>
      <div className={styles.bulletPoints}>
        <div className={styles.bulletPoint}>
          <img
            className={styles.bulltetPointPlaceholder}
            loading="lazy"
            alt=""
            src="/bulltet-point-placeholder.svg"
          />
          <div className={styles.monthlySeasonTickets}>
            {monthlySeasonTicketsAreIs}
          </div>
        </div>
        <div className={styles.bulletPoint1}>
          <img
            className={styles.bulltetPointPlaceholder1}
            alt=""
            src="/bulltet-point-placeholder.svg"
          />
          <div className={styles.monthlySeasonTickets1}>
            {monthlySeasonTicketsAreIs1}
          </div>
        </div>
        <div className={styles.bulletPoint2}>
          <img
            className={styles.bulltetPointPlaceholder2}
            alt=""
            src="/bulltet-point-placeholder.svg"
          />
          <div className={styles.monthlySeasonTickets2}>
            {monthlySeasonTicketsAreIs2}
          </div>
        </div>
        <div className={styles.bulletPoint3}>
          <img
            className={styles.bulltetPointPlaceholder3}
            alt=""
            src="/bulltet-point-placeholder.svg"
            style={bulltetPointPlaceholder2Style}
          />
          <div className={styles.monthlySeasonTickets3}>
            {monthlySeasonTicketsAreIs3}
          </div>
        </div>
        {!bulletPoint && (
          <div className={styles.bulletPoint4} style={bulletPoint2Style}>
            <img
              className={styles.bulltetPointPlaceholder4}
              alt=""
              style={bulltetPointPlaceholder3Style}
            />
            <div
              className={styles.monthlySeasonTickets4}
              style={monthlySeasonTickets2Style}
            >
              To regularly and constantly improve the capabilities of employees
              for higher productivity.
            </div>
          </div>
        )}
        {!bulletPoint1 && (
          <div className={styles.bulletPoint5} style={bulletPoint3Style}>
            <img
              className={styles.bulltetPointPlaceholder5}
              alt=""
              style={bulltetPointPlaceholder4Style}
            />
            <div
              className={styles.monthlySeasonTickets5}
              style={monthlySeasonTickets3Style}
            >
              To focus on service conditions and welfare of the employees and
              their families consistent with their worth to the Corporation.
            </div>
          </div>
        )}
        {!bulletPoint2 && (
          <div className={styles.bulletPoint6} style={bulletPoint4Style}>
            <img
              className={styles.bulltetPointPlaceholder6}
              alt=""
              style={bulltetPointPlaceholder5Style}
            />
            <div
              className={styles.monthlySeasonTickets6}
              style={monthlySeasonTickets4Style}
            >
              To fulfill its obligation to the State and Central governments by
              optimizing return on investment.
            </div>
          </div>
        )}
        {!bulletPoint3 && (
          <div className={styles.bulletPoint7} style={bulletPoint5Style}>
            <img
              className={styles.bulltetPointPlaceholder7}
              alt=""
              style={bulltetPointPlaceholder6Style}
            />
            <div
              className={styles.monthlySeasonTickets7}
              style={monthlySeasonTickets5Style}
            >
              To emphasize environmental and community concerns in the form of
              reducing air and noise pollution.
            </div>
          </div>
        )}
        {!bulletPoint4 && (
          <div className={styles.bulletPoint8} style={bulletPoint6Style}>
            <img
              className={styles.bulltetPointPlaceholder8}
              alt=""
              style={bulltetPointPlaceholder7Style}
            />
            <div
              className={styles.monthlySeasonTickets8}
              style={monthlySeasonTickets6Style}
            >
              To consciously conform to the policy guidelines of the State in
              its business operations.
            </div>
          </div>
        )}
        {!bulletPoint5 && (
          <div className={styles.bulletPoint9} style={bulletPoint7Style}>
            <img
              className={styles.bulltetPointPlaceholder9}
              alt=""
              style={bulltetPointPlaceholder8Style}
            />
            <div
              className={styles.monthlySeasonTickets9}
              style={monthlySeasonTickets7Style}
            >
              To reach a position of pre-eminence in bus transport business.
            </div>
          </div>
        )}
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

export default BulletPointContainer2;
