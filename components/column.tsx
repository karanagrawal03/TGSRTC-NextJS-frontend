import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./column.module.css";

export type ColumnType = {
  className?: string;
  permissible?: string;
  seatingCapacity?: string;
  name1?: string;
  name2?: string;
  name3?: string;
  name4?: string;
  name5?: string;
  name6?: string;
  name7?: string;
  name8?: string;
  name9?: string;
  name10?: string;
  name11?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
  propWidth2?: CSSProperties["width"];
  propMinWidth3?: CSSProperties["minWidth"];
  propMinWidth4?: CSSProperties["minWidth"];
  propWidth3?: CSSProperties["width"];
  propMinWidth5?: CSSProperties["minWidth"];
  propMinWidth6?: CSSProperties["minWidth"];
  propWidth4?: CSSProperties["width"];
  propMinWidth7?: CSSProperties["minWidth"];
  propMinWidth8?: CSSProperties["minWidth"];
  propWidth5?: CSSProperties["width"];
  propMinWidth9?: CSSProperties["minWidth"];
  propMinWidth10?: CSSProperties["minWidth"];
  propWidth6?: CSSProperties["width"];
  propMinWidth11?: CSSProperties["minWidth"];
};

const Column: NextPage<ColumnType> = ({
  className = "",
  permissible,
  seatingCapacity,
  name1,
  name2,
  name3,
  name4,
  name5,
  name6,
  name7,
  name8,
  name9,
  name10,
  name11,
  propWidth,
  propFlex,
  propMinWidth,
  propAlignSelf,
  propWidth1,
  propMinWidth1,
  propMinWidth2,
  propWidth2,
  propMinWidth3,
  propMinWidth4,
  propWidth3,
  propMinWidth5,
  propMinWidth6,
  propWidth4,
  propMinWidth7,
  propMinWidth8,
  propWidth5,
  propMinWidth9,
  propMinWidth10,
  propWidth6,
  propMinWidth11,
}) => {
  const column31Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  const cells3Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const bG2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const name9Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const name10Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const bG3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const name11Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  const name12Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth4,
    };
  }, [propMinWidth4]);

  const bG4Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const name13Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth5,
    };
  }, [propMinWidth5]);

  const name14Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth6,
    };
  }, [propMinWidth6]);

  const bG5Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  const name15Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth7,
    };
  }, [propMinWidth7]);

  const name16Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth8,
    };
  }, [propMinWidth8]);

  const bG6Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth5,
    };
  }, [propWidth5]);

  const name17Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth9,
    };
  }, [propMinWidth9]);

  const name18Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth10,
    };
  }, [propMinWidth10]);

  const bG7Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth6,
    };
  }, [propWidth6]);

  const name19Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth11,
    };
  }, [propMinWidth11]);

  return (
    <div
      className={[styles.column3, className].join(" ")}
      style={column31Style}
    >
      <div className={styles.cells} style={cells3Style}>
        <div className={styles.name}>
          <p className={styles.permissible}>{permissible}</p>
          <p className={styles.seatingCapacity}>{seatingCapacity}</p>
        </div>
      </div>
      <div className={styles.contentCell}>
        <div className={styles.cells1}>
          <div className={styles.bg} style={bG2Style} />
          <div className={styles.name1} style={name9Style}>
            {name1}
          </div>
        </div>
        <div className={styles.cells2}>
          <div className={styles.bg1} />
          <div className={styles.name2} style={name10Style}>
            {name2}
          </div>
        </div>
        <div className={styles.cells3}>
          <div className={styles.bg2} style={bG3Style} />
          <div className={styles.name3} style={name11Style}>
            {name3}
          </div>
        </div>
        <div className={styles.cells4}>
          <div className={styles.bg3} />
          <div className={styles.name4} style={name12Style}>
            {name4}
          </div>
        </div>
        <div className={styles.cells5}>
          <div className={styles.bg4} style={bG4Style} />
          <div className={styles.name5} style={name13Style}>
            {name5}
          </div>
        </div>
        <div className={styles.cells6}>
          <div className={styles.bg5} />
          <div className={styles.name6} style={name14Style}>
            {name6}
          </div>
        </div>
        <div className={styles.cells7}>
          <div className={styles.bg6} style={bG5Style} />
          <div className={styles.name7} style={name15Style}>
            {name7}
          </div>
        </div>
        <div className={styles.cells8}>
          <div className={styles.bg7} />
          <div className={styles.name8} style={name16Style}>
            {name8}
          </div>
        </div>
        <div className={styles.cells9}>
          <div className={styles.bg8} style={bG6Style} />
          <div className={styles.name9} style={name17Style}>
            {name9}
          </div>
        </div>
        <div className={styles.cells10}>
          <div className={styles.bg9} />
          <div className={styles.name10} style={name18Style}>
            {name10}
          </div>
        </div>
        <div className={styles.cells11}>
          <div className={styles.bg10} style={bG7Style} />
          <div className={styles.name11} style={name19Style}>
            {name11}
          </div>
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
