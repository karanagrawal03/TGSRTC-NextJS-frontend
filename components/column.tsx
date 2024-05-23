import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./column.module.css";

export type ColumnType = {
  className?: string;
  name1?: string;
  name2?: string;
  name3?: string;
  name4?: string;
  name5?: string;
  name6?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
  propMinWidth1?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
  propMinWidth2?: CSSProperties["minWidth"];
  propDisplay1?: CSSProperties["display"];
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propPadding2?: CSSProperties["padding"];
};

const Column: NextPage<ColumnType> = ({
  className = "",
  name1,
  name2,
  name3,
  name4,
  name5,
  name6,
  propWidth,
  propFlex,
  propMinWidth,
  propAlignSelf,
  propWidth1,
  propMinWidth1,
  propDisplay,
  propMinWidth2,
  propDisplay1,
  propPadding,
  propPadding1,
  propPadding2,
}) => {
  const column4Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  const cellsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const bGStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const nameStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      display: propDisplay,
    };
  }, [propMinWidth1, propDisplay]);

  const name1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
      display: propDisplay1,
    };
  }, [propMinWidth2, propDisplay1]);

  const cells1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const cells2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const cells3Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div className={[styles.column4, className].join(" ")} style={column4Style}>
      <div className={styles.cells} style={cellsStyle}>
        <div className={styles.name}>{name1}</div>
      </div>
      <div className={styles.contentCell}>
        <div className={styles.cells1}>
          <div className={styles.bg} style={bGStyle} />
          <div className={styles.name1} style={nameStyle}>
            {name2}
          </div>
        </div>
        <div className={styles.cells2}>
          <div className={styles.bg1} />
          <div className={styles.name2} style={name1Style}>
            {name3}
          </div>
        </div>
        <div className={styles.cells3} style={cells1Style}>
          <div className={styles.bg2} />
          <div className={styles.name3}>{name4}</div>
        </div>
        <div className={styles.cells4} style={cells2Style}>
          <div className={styles.bg3} />
          <div className={styles.name4}>{name5}</div>
        </div>
        <div className={styles.cells5} style={cells3Style}>
          <div className={styles.bg4} />
          <div className={styles.name5}>{name6}</div>
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

export default Column;
