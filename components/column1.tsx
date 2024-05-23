import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./column1.module.css";

export type Column1Type = {
  className?: string;
  name1?: string;
  name2?: string;
  cNT?: string;
  cNT1?: string;
  name3?: string;
  name4?: string;
  name5?: string;
  name6?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth1?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propWidth2?: CSSProperties["width"];
  propMinWidth1?: CSSProperties["minWidth"];
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
  propDisplay?: CSSProperties["display"];
  propPadding2?: CSSProperties["padding"];
};

const Column1: NextPage<Column1Type> = ({
  className = "",
  name1,
  name2,
  cNT,
  cNT1,
  name3,
  name4,
  name5,
  name6,
  propWidth,
  propAlignSelf,
  propMinWidth,
  propWidth1,
  propAlignSelf1,
  propWidth2,
  propMinWidth1,
  propPadding,
  propPadding1,
  propHeight,
  propFlex,
  propDisplay,
  propPadding2,
}) => {
  const column3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const cells4Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const name2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const bG1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const cells5Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const bG2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const name3Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const cells6Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const cells7Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const name4Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
      display: propDisplay,
    };
  }, [propHeight, propFlex, propDisplay]);

  const cells8Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div className={[styles.column3, className].join(" ")} style={column3Style}>
      <button className={styles.cells} style={cells4Style}>
        <div className={styles.name} style={name2Style}>
          {name1}
        </div>
      </button>
      <div className={styles.contentCell}>
        <div className={styles.cells1}>
          <div className={styles.bg} style={bG1Style} />
          <div className={styles.name1}>{name2}</div>
        </div>
        <div className={styles.cells2} style={cells5Style}>
          <div className={styles.bg1} />
          <div className={styles.name2}>
            <p className={styles.cnt}>{cNT}</p>
          </div>
        </div>
        <div className={styles.cells3}>
          <div className={styles.bg2} style={bG2Style} />
          <div className={styles.name3}>
            <p className={styles.cnt1}>{cNT1}</p>
          </div>
        </div>
        <button className={styles.cells4}>
          <div className={styles.bg3} />
          <div className={styles.name4} style={name3Style}>
            {name3}
          </div>
        </button>
        <div className={styles.cells5} style={cells6Style}>
          <div className={styles.bg4} />
          <div className={styles.name5}>{name4}</div>
        </div>
        <div className={styles.cells6} style={cells7Style}>
          <div className={styles.bg5} />
          <div className={styles.name6} style={name4Style}>
            {name5}
          </div>
        </div>
        <div className={styles.cells7} style={cells8Style}>
          <div className={styles.bg6} />
          <div className={styles.name7}>{name6}</div>
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

export default Column1;
