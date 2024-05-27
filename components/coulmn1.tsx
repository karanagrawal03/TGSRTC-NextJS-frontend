import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./coulmn1.module.css";

export type Coulmn1Type = {
  className?: string;
  name1?: string;
  name2?: string;
  name3?: string;
  name4?: string;
  name5?: string;
  cells?: boolean;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propPadding?: CSSProperties["padding"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
  propMinWidth3?: CSSProperties["minWidth"];
  propHeight?: CSSProperties["height"];
  propPadding1?: CSSProperties["padding"];
  propDisplay?: CSSProperties["display"];
  propMinWidth4?: CSSProperties["minWidth"];
};

const Coulmn1: NextPage<Coulmn1Type> = ({
  className = "",
  name1,
  name2,
  name3,
  name4,
  name5,
  cells,
  propMinWidth,
  propPadding,
  propMinWidth1,
  propMinWidth2,
  propMinWidth3,
  propHeight,
  propPadding1,
  propDisplay,
  propMinWidth4,
}) => {
  const nameStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const cellsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const name1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const name2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const name3Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  const cells1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding1,
    };
  }, [propHeight, propPadding1]);

  const name4Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth4,
    };
  }, [propDisplay, propMinWidth4]);

  return (
    <div className={[styles.coulmn2, className].join(" ")}>
      <div className={styles.cells}>
        <b className={styles.name} style={nameStyle}>
          {name1}
        </b>
      </div>
      <div className={styles.contentCell}>
        <div className={styles.cells1} style={cellsStyle}>
          <div className={styles.bg} />
          <div className={styles.name1} style={name1Style}>
            {name2}
          </div>
        </div>
        <div className={styles.cells2}>
          <div className={styles.bg1} />
          <div className={styles.name2} style={name2Style}>
            {name3}
          </div>
        </div>
        <div className={styles.cells3}>
          <div className={styles.bg2} />
          <div className={styles.name3} style={name3Style}>
            {name4}
          </div>
        </div>
        {!cells && (
          <div className={styles.cells4} style={cells1Style}>
            <div className={styles.bg3} />
            <div className={styles.name4} style={name4Style}>
              {name5}
            </div>
          </div>
        )}
        <div className={styles.cells5}>
          <div className={styles.bg4} />
          <div className={styles.name5}>Item</div>
        </div>
        <div className={styles.cells6}>
          <div className={styles.bg5} />
          <div className={styles.name6}>Item</div>
        </div>
        <div className={styles.cells7}>
          <div className={styles.bg6} />
          <div className={styles.name7}>Item</div>
        </div>
        <div className={styles.cells8}>
          <div className={styles.bg7} />
          <div className={styles.name8}>Item</div>
        </div>
        <div className={styles.cells9}>
          <div className={styles.bg8} />
          <div className={styles.name9}>Item</div>
        </div>
        <div className={styles.cells10}>
          <div className={styles.bg9} />
          <div className={styles.name10}>Item</div>
        </div>
        <div className={styles.cells11}>
          <div className={styles.bg10} />
          <div className={styles.name11}>Item</div>
        </div>
        <div className={styles.cells12}>
          <div className={styles.bg11} />
          <div className={styles.name12}>Item</div>
        </div>
        <div className={styles.cells13}>
          <div className={styles.bg12} />
          <div className={styles.name13}>Item</div>
        </div>
        <div className={styles.cells14}>
          <div className={styles.bg13} />
          <div className={styles.name14}>Item</div>
        </div>
        <div className={styles.cells15}>
          <div className={styles.bg14} />
          <div className={styles.name15}>Item</div>
        </div>
        <div className={styles.cells16}>
          <div className={styles.bg15} />
          <div className={styles.name16}>Item</div>
        </div>
      </div>
    </div>
  );
};

export default Coulmn1;
