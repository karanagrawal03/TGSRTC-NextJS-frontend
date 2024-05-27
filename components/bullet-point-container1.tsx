import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./bullet-point-container1.module.css";

export type BulletPointContainer1Type = {
  className?: string;
  guidingPrinciplesOfTGSRTC?: string;
  monthlySeasonTicketsAreIs?: string;
  monthlySeasonTicketsAreIs1?: string;

  /** Style props */
  bulltetPointPlaceholderPadding?: CSSProperties["padding"];
  bulletPointFlex?: CSSProperties["flex"];
  bulletPointWidth?: CSSProperties["width"];
  bulltetPointPlaceholderFlexWrap?: CSSProperties["flexWrap"];
  bulltetPointPlaceholderPadding1?: CSSProperties["padding"];
  monthlySeasonTicketsMinHeight?: CSSProperties["minHeight"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const BulletPointContainer1: NextPage<BulletPointContainer1Type> = ({
  className = "",
  guidingPrinciplesOfTGSRTC,
  monthlySeasonTicketsAreIs,
  monthlySeasonTicketsAreIs1,
  bulltetPointPlaceholderPadding,
  bulletPointFlex,
  bulletPointWidth,
  bulltetPointPlaceholderFlexWrap,
  bulltetPointPlaceholderPadding1,
  monthlySeasonTicketsMinHeight,
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const bulletPoint5Style: CSSProperties = useMemo(() => {
    return {
      padding: bulltetPointPlaceholderPadding,
    };
  }, [bulltetPointPlaceholderPadding]);

  const monthlySeasonTickets5Style: CSSProperties = useMemo(() => {
    return {
      flex: bulletPointFlex,
      width: bulletPointWidth,
    };
  }, [bulletPointFlex, bulletPointWidth]);

  const bulletPoint6Style: CSSProperties = useMemo(() => {
    return {
      flexWrap: bulltetPointPlaceholderFlexWrap,
      padding: bulltetPointPlaceholderPadding1,
    };
  }, [bulltetPointPlaceholderFlexWrap, bulltetPointPlaceholderPadding1]);

  const bulltetPointPlaceholder6Style: CSSProperties = useMemo(() => {
    return {
      minHeight: monthlySeasonTicketsMinHeight,
    };
  }, [monthlySeasonTicketsMinHeight]);

  const monthlySeasonTickets6Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  return (
    <div className={[styles.bulletPointContainer, className].join(" ")}>
      <div className={styles.title}>
        <div className={styles.guidingPrinciplesOf}>
          {guidingPrinciplesOfTGSRTC}
        </div>
      </div>
      <div className={styles.bulletPoints}>
        <div className={styles.bulletPoint} style={bulletPoint5Style}>
          <img
            className={styles.bulltetPointPlaceholder}
            loading="lazy"
            alt=""
            src="/bulltet-point-placeholder.svg"
          />
          <p
            className={styles.monthlySeasonTickets}
            style={monthlySeasonTickets5Style}
          >
            {monthlySeasonTicketsAreIs}
          </p>
        </div>
        <div className={styles.bulletPoint1} style={bulletPoint6Style}>
          <img
            className={styles.bulltetPointPlaceholder1}
            alt=""
            src="/bulltet-point-placeholder.svg"
            style={bulltetPointPlaceholder6Style}
          />
          <p
            className={styles.monthlySeasonTickets1}
            style={monthlySeasonTickets6Style}
          >
            {monthlySeasonTicketsAreIs1}
          </p>
        </div>
        <div className={styles.bulletPoint2}>
          <img className={styles.bulltetPointPlaceholder2} alt="" />
          <div className={styles.monthlySeasonTickets2}>
            To strive towards financial self-reliance in regard to performance
            and growth.
          </div>
        </div>
        <div className={styles.bulletPoint3}>
          <img className={styles.bulltetPointPlaceholder3} alt="" />
          <div className={styles.monthlySeasonTickets3}>
            To attain a position of reputation and respect in the society.
          </div>
        </div>
        <div className={styles.bulletPoint4}>
          <img className={styles.bulltetPointPlaceholder4} alt="" />
          <div className={styles.monthlySeasonTickets4}>
            To regularly and constantly improve the capabilities of employees
            for higher productivity.
          </div>
        </div>
        <div className={styles.bulletPoint5}>
          <img className={styles.bulltetPointPlaceholder5} alt="" />
          <div className={styles.monthlySeasonTickets5}>
            To focus on service conditions and welfare of the employees and
            their families consistent with their worth to the Corporation.
          </div>
        </div>
        <div className={styles.bulletPoint6}>
          <img className={styles.bulltetPointPlaceholder6} alt="" />
          <div className={styles.monthlySeasonTickets6}>
            To fulfill its obligation to the State and Central governments by
            optimizing return on investment.
          </div>
        </div>
        <div className={styles.bulletPoint7}>
          <img className={styles.bulltetPointPlaceholder7} alt="" />
          <div className={styles.monthlySeasonTickets7}>
            To emphasize environmental and community concerns in the form of
            reducing air and noise pollution.
          </div>
        </div>
        <div className={styles.bulletPoint8}>
          <img className={styles.bulltetPointPlaceholder8} alt="" />
          <div className={styles.monthlySeasonTickets8}>
            To consciously conform to the policy guidelines of the State in its
            business operations.
          </div>
        </div>
        <div className={styles.bulletPoint9}>
          <img className={styles.bulltetPointPlaceholder9} alt="" />
          <div className={styles.monthlySeasonTickets9}>
            To reach a position of pre-eminence in bus transport business.
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

export default BulletPointContainer1;
