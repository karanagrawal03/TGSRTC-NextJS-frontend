import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./column2.module.css";

export type Column2Type = {
  className?: string;
  name1?: string;
  name2?: string;
  namePlaceholder?: string;
  name3?: string;
  name4?: string;
  name5?: string;
  name6?: string;
  name7?: string;
  name8?: string;
  name9?: string;
  name10?: string;
  name11?: string;
  name12?: string;
  name13?: string;
  name14?: string;
  name15?: string;
  name16?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
  propMinWidth1?: CSSProperties["minWidth"];
  propWidth2?: CSSProperties["width"];
  propWidth3?: CSSProperties["width"];
  propMinWidth2?: CSSProperties["minWidth"];
  propWidth4?: CSSProperties["width"];
  propWidth5?: CSSProperties["width"];
  propMinWidth3?: CSSProperties["minWidth"];
  propWidth6?: CSSProperties["width"];
  propMinWidth4?: CSSProperties["minWidth"];
  propWidth7?: CSSProperties["width"];
  propMinWidth5?: CSSProperties["minWidth"];
  propWidth8?: CSSProperties["width"];
  propMinWidth6?: CSSProperties["minWidth"];
  propMinWidth7?: CSSProperties["minWidth"];
  propWidth9?: CSSProperties["width"];
  propMinWidth8?: CSSProperties["minWidth"];
};

const Column2: NextPage<Column2Type> = ({
  className = "",
  name1,
  name2,
  namePlaceholder,
  name3,
  name4,
  name5,
  name6,
  name7,
  name8,
  name9,
  name10,
  name11,
  name12,
  name13,
  name14,
  name15,
  name16,
  propWidth,
  propFlex,
  propMinWidth,
  propAlignSelf,
  propWidth1,
  propMinWidth1,
  propWidth2,
  propWidth3,
  propMinWidth2,
  propWidth4,
  propWidth5,
  propMinWidth3,
  propWidth6,
  propMinWidth4,
  propWidth7,
  propMinWidth5,
  propWidth8,
  propMinWidth6,
  propMinWidth7,
  propWidth9,
  propMinWidth8,
}) => {
  const column5Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  const cells7Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const bG8Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const name23Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const name24Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const bG9Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const name25Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const bG10Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  const bG11Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth5,
    };
  }, [propWidth5]);

  const name26Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  const bG12Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth6,
    };
  }, [propWidth6]);

  const name27Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth4,
    };
  }, [propMinWidth4]);

  const bG13Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth7,
    };
  }, [propWidth7]);

  const name28Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth5,
    };
  }, [propMinWidth5]);

  const bG14Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth8,
    };
  }, [propWidth8]);

  const name29Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth6,
    };
  }, [propMinWidth6]);

  const name30Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth7,
    };
  }, [propMinWidth7]);

  const bG15Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth9,
    };
  }, [propWidth9]);

  const name31Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth8,
    };
  }, [propMinWidth8]);

  return (
    <div className={[styles.column5, className].join(" ")} style={column5Style}>
      <div className={styles.cells} style={cells7Style}>
        <div className={styles.name}>{name1}</div>
      </div>
      <div className={styles.contentCell}>
        <div className={styles.cells1}>
          <div className={styles.bg} style={bG8Style} />
          <div className={styles.name1} style={name23Style}>
            {name2}
          </div>
        </div>
        <div className={styles.cells2}>
          <div className={styles.bg1} />
          <input
            className={styles.name2}
            placeholder={namePlaceholder}
            type="text"
            style={name24Style}
          />
        </div>
        <div className={styles.cells3}>
          <div className={styles.bg2} style={bG9Style} />
          <div className={styles.name3} style={name25Style}>
            {name3}
          </div>
        </div>
        <div className={styles.cells4}>
          <div className={styles.bg3} />
          <div className={styles.name4}>{name4}</div>
        </div>
        <div className={styles.cells5}>
          <div className={styles.bg4} style={bG10Style} />
          <div className={styles.name5}>{name5}</div>
        </div>
        <div className={styles.cells6}>
          <div className={styles.bg5} />
          <div className={styles.name6}>{name6}</div>
        </div>
        <div className={styles.cells7}>
          <div className={styles.bg6} style={bG11Style} />
          <div className={styles.name7}>{name7}</div>
        </div>
        <div className={styles.cells8}>
          <div className={styles.bg7} />
          <div className={styles.name8} style={name26Style}>
            {name8}
          </div>
        </div>
        <div className={styles.cells9}>
          <div className={styles.bg8} style={bG12Style} />
          <div className={styles.name9}>{name9}</div>
        </div>
        <div className={styles.cells10}>
          <div className={styles.bg9} />
          <div className={styles.name10} style={name27Style}>
            {name10}
          </div>
        </div>
        <div className={styles.cells11}>
          <div className={styles.bg10} style={bG13Style} />
          <div className={styles.name11} style={name28Style}>
            {name11}
          </div>
        </div>
        <div className={styles.cells12}>
          <div className={styles.bg11} />
          <div className={styles.name12}>{name12}</div>
        </div>
        <div className={styles.cells13}>
          <div className={styles.bg12} style={bG14Style} />
          <div className={styles.name13} style={name29Style}>
            {name13}
          </div>
        </div>
        <div className={styles.cells14}>
          <div className={styles.bg13} />
          <div className={styles.name14} style={name30Style}>
            {name14}
          </div>
        </div>
        <div className={styles.cells15}>
          <div className={styles.bg14} style={bG15Style} />
          <div className={styles.name15} style={name31Style}>
            {name15}
          </div>
        </div>
        <div className={styles.cells16}>
          <div className={styles.bg15} />
          <div className={styles.name16}>{name16}</div>
        </div>
      </div>
    </div>
  );
};

export default Column2;
