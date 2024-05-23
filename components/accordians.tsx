import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./accordians.module.css";

export type AccordiansType = {
  className?: string;
  name1?: string;
  name2?: string;
  name3?: string;
  name4?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const Accordians: NextPage<AccordiansType> = ({
  className = "",
  name1,
  name2,
  name3,
  name4,
  propPadding,
  propMinWidth,
  propMinWidth1,
}) => {
  const cells21Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const name8Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const name9Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={[styles.accordians2, className].join(" ")}>
      <div className={styles.accordianTitle}>
        <div className={styles.cells}>
          <div className={styles.bg} />
          <div className={styles.name}>{name1}</div>
        </div>
        <div className={styles.contentCell}>
          <div className={styles.cells1} style={cells21Style}>
            <div className={styles.bg1} />
            <div className={styles.name1} style={name8Style}>
              {name2}
            </div>
          </div>
        </div>
        <div className={styles.contentCell1}>
          <div className={styles.cells2}>
            <div className={styles.bg2} />
            <div className={styles.name2} style={name9Style}>
              {name3}
            </div>
          </div>
        </div>
        <div className={styles.contentCell2}>
          <div className={styles.cells3}>
            <div className={styles.bg3} />
            <div className={styles.name3}>RGIA</div>
          </div>
        </div>
        <div className={styles.contentCell3}>
          <div className={styles.cells4}>
            <div className={styles.bg4} />
            <div className={styles.name4}>{name4}</div>
          </div>
        </div>
      </div>
      <div className={styles.pageWiseAccordian}>
        <div className={styles.accordian}>
          <div className={styles.bg5} />
          <input
            className={styles.accordianChild}
            placeholder="Early morning before 6 am (09)"
            type="text"
          />
          <img
            className={styles.accordianDropdowntrueIcon}
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
        <div className={styles.accordian1}>
          <div className={styles.bg6} />
          <input
            className={styles.accordianItem}
            placeholder="Morning 6 am to 12 pm (07)"
            type="text"
          />
          <img
            className={styles.accordianDropdowntrueIcon1}
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
        <div className={styles.accordian2}>
          <div className={styles.bg7} />
          <input
            className={styles.accordianInner}
            placeholder="Afternoon 12 pm to 6 pm (02)"
            type="text"
          />
          <img
            className={styles.accordianDropdowntrueIcon2}
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
        <div className={styles.accordian3}>
          <div className={styles.bg8} />
          <input
            className={styles.frameInput}
            placeholder="Evening after 6 pm (43)"
            type="text"
          />
          <img
            className={styles.accordianDropdowntrueIcon3}
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Accordians;
