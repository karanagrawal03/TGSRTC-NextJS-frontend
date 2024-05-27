import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./column1.module.css";

export type Column1Type = {
  className?: string;
  name1?: string;
  name2?: string;
  name3?: string;
  name4?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  propWidth1?: CSSProperties["width"];
  propMinWidth2?: CSSProperties["minWidth"];
  propMinWidth3?: CSSProperties["minWidth"];
  propWidth2?: CSSProperties["width"];
  propMinWidth4?: CSSProperties["minWidth"];
};

const Column1: NextPage<Column1Type> = ({
  className = "",
  name1,
  name2,
  name3,
  name4,
  propWidth,
  propFlex,
  propMinWidth,
  propAlignSelf,
  propDisplay,
  propMinWidth1,
  propWidth1,
  propMinWidth2,
  propMinWidth3,
  propWidth2,
  propMinWidth4,
}) => {
  const column3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  const cells2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const name5Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  const bGStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const name6Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const name7Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  const bG1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const name8Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth4,
    };
  }, [propMinWidth4]);

  return (
    <div className={[styles.column3, className].join(" ")} style={column3Style}>
      <div className={styles.cells} style={cells2Style}>
        <div className={styles.name} style={name5Style}>
          {name1}
        </div>
      </div>
      <div className={styles.contentCell}>
        <div className={styles.cells1}>
          <div className={styles.bg} style={bGStyle} />
          <div className={styles.name1} style={name6Style}>
            {name2}
          </div>
        </div>
        <div className={styles.cells2}>
          <div className={styles.bg1} />
          <div className={styles.name2} style={name7Style}>
            {name3}
          </div>
        </div>
        <div className={styles.cells3}>
          <div className={styles.bg2} style={bG1Style} />
          <div className={styles.name3} style={name8Style}>
            {name4}
          </div>
        </div>
        <div className={styles.cells4}>
          <div className={styles.bg3} />
          <div className={styles.name4}>Item</div>
        </div>
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

export default Column1;
