import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./column2.module.css";

export type ColumnType = {
  className?: string;
  name1?: string;
  name2?: string;
  aA?: string;
  aC?: string;
  name3?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth1?: CSSProperties["width"];
  propMinWidth1?: CSSProperties["minWidth"];
  propWidth2?: CSSProperties["width"];
  propMinWidth2?: CSSProperties["minWidth"];
  propWidth3?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth4?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propWidth5?: CSSProperties["width"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propWidth6?: CSSProperties["width"];
  propAlignSelf3?: CSSProperties["alignSelf"];
  propWidth7?: CSSProperties["width"];
  propAlignSelf4?: CSSProperties["alignSelf"];
  propWidth8?: CSSProperties["width"];
  propAlignSelf5?: CSSProperties["alignSelf"];
  propWidth9?: CSSProperties["width"];
  propAlignSelf6?: CSSProperties["alignSelf"];
  propWidth10?: CSSProperties["width"];
  propAlignSelf7?: CSSProperties["alignSelf"];
  propWidth11?: CSSProperties["width"];
  propAlignSelf8?: CSSProperties["alignSelf"];
  propWidth12?: CSSProperties["width"];
  propAlignSelf9?: CSSProperties["alignSelf"];
  propWidth13?: CSSProperties["width"];
  propAlignSelf10?: CSSProperties["alignSelf"];
  propWidth14?: CSSProperties["width"];
  propAlignSelf11?: CSSProperties["alignSelf"];
};

const Column: NextPage<ColumnType> = ({
  className = "",
  name1,
  name2,
  aA,
  aC,
  name3,
  propWidth,
  propMinWidth,
  propWidth1,
  propMinWidth1,
  propWidth2,
  propMinWidth2,
  propWidth3,
  propAlignSelf,
  propWidth4,
  propAlignSelf1,
  propWidth5,
  propAlignSelf2,
  propWidth6,
  propAlignSelf3,
  propWidth7,
  propAlignSelf4,
  propWidth8,
  propAlignSelf5,
  propWidth9,
  propAlignSelf6,
  propWidth10,
  propAlignSelf7,
  propWidth11,
  propAlignSelf8,
  propWidth12,
  propAlignSelf9,
  propWidth13,
  propAlignSelf10,
  propWidth14,
  propAlignSelf11,
}) => {
  const column5Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const name5Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const bG3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const name6Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const bG4Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const name7Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const cells9Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
      alignSelf: propAlignSelf,
    };
  }, [propWidth3, propAlignSelf]);

  const cells10Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth4,
      alignSelf: propAlignSelf1,
    };
  }, [propWidth4, propAlignSelf1]);

  const cells11Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth5,
      alignSelf: propAlignSelf2,
    };
  }, [propWidth5, propAlignSelf2]);

  const cells12Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth6,
      alignSelf: propAlignSelf3,
    };
  }, [propWidth6, propAlignSelf3]);

  const cells13Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth7,
      alignSelf: propAlignSelf4,
    };
  }, [propWidth7, propAlignSelf4]);

  const cells14Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth8,
      alignSelf: propAlignSelf5,
    };
  }, [propWidth8, propAlignSelf5]);

  const cells15Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth9,
      alignSelf: propAlignSelf6,
    };
  }, [propWidth9, propAlignSelf6]);

  const cells16Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth10,
      alignSelf: propAlignSelf7,
    };
  }, [propWidth10, propAlignSelf7]);

  const cells17Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth11,
      alignSelf: propAlignSelf8,
    };
  }, [propWidth11, propAlignSelf8]);

  const cells18Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth12,
      alignSelf: propAlignSelf9,
    };
  }, [propWidth12, propAlignSelf9]);

  const cells19Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth13,
      alignSelf: propAlignSelf10,
    };
  }, [propWidth13, propAlignSelf10]);

  const cells20Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth14,
      alignSelf: propAlignSelf11,
    };
  }, [propWidth14, propAlignSelf11]);

  return (
    <div className={[styles.column5, className].join(" ")} style={column5Style}>
      <button className={styles.cells}>
        <div className={styles.name} style={name5Style}>
          {name1}
        </div>
      </button>
      <div className={styles.contentCell}>
        <div className={styles.cells1}>
          <div className={styles.bg} style={bG3Style} />
          <div className={styles.name1} style={name6Style}>
            {name2}
          </div>
        </div>
        <div className={styles.cells2}>
          <div className={styles.bg1} />
          <div className={styles.name2}>
            <p className={styles.aa}>{aA}</p>
          </div>
        </div>
        <div className={styles.cells3}>
          <div className={styles.bg2} style={bG4Style} />
          <div className={styles.name3}>
            <p className={styles.ac}>{aC}</p>
          </div>
        </div>
        <div className={styles.cells4}>
          <div className={styles.bg3} />
          <div className={styles.name4} style={name7Style}>
            {name3}
          </div>
        </div>
        <div className={styles.cells5} style={cells9Style}>
          <div className={styles.bg4} />
          <div className={styles.name5}>Item</div>
        </div>
        <div className={styles.cells6} style={cells10Style}>
          <div className={styles.bg5} />
          <div className={styles.name6}>Item</div>
        </div>
        <div className={styles.cells7} style={cells11Style}>
          <div className={styles.bg6} />
          <div className={styles.name7}>Item</div>
        </div>
        <div className={styles.cells8} style={cells12Style}>
          <div className={styles.bg7} />
          <div className={styles.name8}>Item</div>
        </div>
        <div className={styles.cells9} style={cells13Style}>
          <div className={styles.bg8} />
          <div className={styles.name9}>Item</div>
        </div>
        <div className={styles.cells10} style={cells14Style}>
          <div className={styles.bg9} />
          <div className={styles.name10}>Item</div>
        </div>
        <div className={styles.cells11} style={cells15Style}>
          <div className={styles.bg10} />
          <div className={styles.name11}>Item</div>
        </div>
        <div className={styles.cells12} style={cells16Style}>
          <div className={styles.bg11} />
          <div className={styles.name12}>Item</div>
        </div>
        <div className={styles.cells13} style={cells17Style}>
          <div className={styles.bg12} />
          <div className={styles.name13}>Item</div>
        </div>
        <div className={styles.cells14} style={cells18Style}>
          <div className={styles.bg13} />
          <div className={styles.name14}>Item</div>
        </div>
        <div className={styles.cells15} style={cells19Style}>
          <div className={styles.bg14} />
          <div className={styles.name15}>Item</div>
        </div>
        <div className={styles.cells16} style={cells20Style}>
          <div className={styles.bg15} />
          <div className={styles.name16}>Item</div>
        </div>
      </div>
    </div>
  );
};

export default Column;
