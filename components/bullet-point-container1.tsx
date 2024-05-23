import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./bullet-point-container1.module.css";

export type BulletPointContainer1Type = {
  className?: string;
  guidingPrinciplesOfTSRTC?: string;
  monthlySeasonTicketsAreIs?: string;
  monthlySeasonTicketsAreIs1?: string;
  bulltetPointPlaceholder2?: string;
  bulltetPointPlaceholder3?: string;
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

  /** Style props */
  monthlySeasonTicketsFlexWrap?: CSSProperties["flexWrap"];
  bulletPointMinHeight?: CSSProperties["minHeight"];
  bulltetPointPlaceholderMinWidth?: CSSProperties["minWidth"];
};

const BulletPointContainer1: NextPage<BulletPointContainer1Type> = ({
  className = "",
  guidingPrinciplesOfTSRTC,
  monthlySeasonTicketsAreIs,
  monthlySeasonTicketsAreIs1,
  bulltetPointPlaceholder2,
  bulltetPointPlaceholder3,
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
  monthlySeasonTicketsFlexWrap,
  bulletPointMinHeight,
  bulltetPointPlaceholderMinWidth,
}) => {
  const bulletPointStyle: CSSProperties = useMemo(() => {
    return {
      flexWrap: monthlySeasonTicketsFlexWrap,
    };
  }, [monthlySeasonTicketsFlexWrap]);

  const bulltetPointPlaceholderStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: bulletPointMinHeight,
    };
  }, [bulletPointMinHeight]);

  const monthlySeasonTicketsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: bulltetPointPlaceholderMinWidth,
    };
  }, [bulltetPointPlaceholderMinWidth]);

  return (
    <div className={[styles.bulletPointContainer, className].join(" ")}>
      <div className={styles.title}>
        <div className={styles.guidingPrinciplesOf}>
          {guidingPrinciplesOfTSRTC}
        </div>
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
        <div className={styles.bulletPoint1} style={bulletPointStyle}>
          <img
            className={styles.bulltetPointPlaceholder1}
            alt=""
            src="/bulltet-point-placeholder.svg"
            style={bulltetPointPlaceholderStyle}
          />
          <div
            className={styles.monthlySeasonTickets1}
            style={monthlySeasonTicketsStyle}
          >
            {monthlySeasonTicketsAreIs1}
          </div>
        </div>
        <div className={styles.bulletPoint2}>
          <img
            className={styles.bulltetPointPlaceholder2}
            alt=""
            src={bulltetPointPlaceholder2}
          />
          <div className={styles.monthlySeasonTickets2}>
            To strive towards financial self-reliance in regard to performance
            and growth.
          </div>
        </div>
        <div className={styles.bulletPoint3}>
          <img
            className={styles.bulltetPointPlaceholder3}
            alt=""
            src={bulltetPointPlaceholder3}
          />
          <div className={styles.monthlySeasonTickets3}>
            To attain a position of reputation and respect in the society.
          </div>
        </div>
        <div className={styles.bulletPoint4}>
          <img
            className={styles.bulltetPointPlaceholder4}
            alt=""
            src={bulltetPointPlaceholder4}
          />
          <div className={styles.monthlySeasonTickets4}>
            To regularly and constantly improve the capabilities of employees
            for higher productivity.
          </div>
        </div>
        <div className={styles.bulletPoint5}>
          <img
            className={styles.bulltetPointPlaceholder5}
            alt=""
            src={bulltetPointPlaceholder5}
          />
          <div className={styles.monthlySeasonTickets5}>
            To focus on service conditions and welfare of the employees and
            their families consistent with their worth to the Corporation.
          </div>
        </div>
        <div className={styles.bulletPoint6}>
          <img
            className={styles.bulltetPointPlaceholder6}
            alt=""
            src={bulltetPointPlaceholder6}
          />
          <div className={styles.monthlySeasonTickets6}>
            To fulfill its obligation to the State and Central governments by
            optimizing return on investment.
          </div>
        </div>
        <div className={styles.bulletPoint7}>
          <img
            className={styles.bulltetPointPlaceholder7}
            alt=""
            src={bulltetPointPlaceholder7}
          />
          <div className={styles.monthlySeasonTickets7}>
            To emphasize environmental and community concerns in the form of
            reducing air and noise pollution.
          </div>
        </div>
        <div className={styles.bulletPoint8}>
          <img
            className={styles.bulltetPointPlaceholder8}
            alt=""
            src={bulltetPointPlaceholder8}
          />
          <div className={styles.monthlySeasonTickets8}>
            To consciously conform to the policy guidelines of the State in its
            business operations.
          </div>
        </div>
        <div className={styles.bulletPoint9}>
          <img
            className={styles.bulltetPointPlaceholder9}
            alt=""
            src={bulltetPointPlaceholder9}
          />
          <div className={styles.monthlySeasonTickets9}>
            To reach a position of pre-eminence in bus transport business.
          </div>
        </div>
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

export default BulletPointContainer1;
