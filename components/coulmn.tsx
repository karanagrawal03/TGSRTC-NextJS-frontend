import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./coulmn.module.css";

export type CoulmnType = {
  className?: string;
  name1?: string;
  name2?: string;
  name3?: string;
  name4?: string;
  name5?: string;
  name6?: string;
  showCoulmn2?: boolean;
  cells?: boolean;
  cells1?: boolean;
  cells2?: boolean;
  cells3?: boolean;
  cells4?: boolean;
  cells5?: boolean;
  cells6?: boolean;
  cells7?: boolean;
  cells8?: boolean;
  cells9?: boolean;
  cells10?: boolean;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propWidth2?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propHeight1?: CSSProperties["height"];
  propDisplay1?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  coulmn2AlignSelf?: CSSProperties["alignSelf"];
  nameHeight?: CSSProperties["height"];
  nameFlex?: CSSProperties["flex"];
  cellsPadding?: CSSProperties["padding"];
  nameHeight1?: CSSProperties["height"];
  nameFlex1?: CSSProperties["flex"];
  nameDisplay?: CSSProperties["display"];
};

const Coulmn: NextPage<CoulmnType> = ({
  className = "",
  name1,
  name2,
  name3,
  name4,
  name5,
  name6,
  showCoulmn2,
  cells,
  cells1,
  cells2,
  cells3,
  cells4,
  cells5,
  cells6,
  cells7,
  cells8,
  cells9,
  cells10,
  propWidth,
  propHeight,
  propAlignSelf,
  propWidth1,
  propDisplay,
  propMinWidth,
  propAlignSelf1,
  propWidth2,
  propPadding,
  propHeight1,
  propDisplay1,
  propMinWidth1,
  coulmn2AlignSelf,
  nameHeight,
  nameFlex,
  cellsPadding,
  nameHeight1,
  nameFlex1,
  nameDisplay,
}) => {
  const coulmn2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
      alignSelf: coulmn2AlignSelf,
    };
  }, [propWidth, propHeight, coulmn2AlignSelf]);

  const cells4Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth1,
    };
  }, [propAlignSelf, propWidth1]);

  const name20Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      height: nameHeight,
      flex: nameFlex,
    };
  }, [propDisplay, propMinWidth, nameHeight, nameFlex]);

  const contentCellStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth2,
    };
  }, [propAlignSelf1, propWidth2]);

  const cells5Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      height: propHeight1,
    };
  }, [propPadding, propHeight1]);

  const name21Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  const cells6Style: CSSProperties = useMemo(() => {
    return {
      padding: cellsPadding,
    };
  }, [cellsPadding]);

  const name22Style: CSSProperties = useMemo(() => {
    return {
      height: nameHeight1,
      flex: nameFlex1,
      display: nameDisplay,
    };
  }, [nameHeight1, nameFlex1, nameDisplay]);

  return (
    showCoulmn2 && (
      <div
        className={[styles.coulmn2, className].join(" ")}
        style={coulmn2Style}
      >
        <div className={styles.cells} style={cells4Style}>
          <b className={styles.name} style={name20Style}>
            {name1}
          </b>
        </div>
        <div className={styles.contentCell} style={contentCellStyle}>
          <div className={styles.cells1} style={cells5Style}>
            <div className={styles.bg} />
            <div className={styles.name1} style={name21Style}>
              {name2}
            </div>
          </div>
          {!cells && (
            <div className={styles.cells2} style={cells6Style}>
              <div className={styles.bg1} />
              <div className={styles.name2} style={name22Style}>
                {name3}
              </div>
            </div>
          )}
          {!cells1 && (
            <div className={styles.cells3}>
              <div className={styles.bg2} />
              <div className={styles.name3}>{name4}</div>
            </div>
          )}
          {!cells2 && (
            <div className={styles.cells4}>
              <div className={styles.bg3} />
              <div className={styles.name4}>{name5}</div>
            </div>
          )}
          {!cells3 && (
            <div className={styles.cells5}>
              <div className={styles.bg4} />
              <div className={styles.name5}>{name6}</div>
            </div>
          )}
          {!cells4 && (
            <div className={styles.cells6}>
              <div className={styles.bg5} />
              <div className={styles.name6}>Item</div>
            </div>
          )}
          {!cells5 && (
            <div className={styles.cells7}>
              <div className={styles.bg6} />
              <div className={styles.name7}>Item</div>
            </div>
          )}
          {!cells6 && (
            <div className={styles.cells8}>
              <div className={styles.bg7} />
              <div className={styles.name8}>Item</div>
            </div>
          )}
          {!cells7 && (
            <div className={styles.cells9}>
              <div className={styles.bg8} />
              <div className={styles.name9}>Item</div>
            </div>
          )}
          {!cells8 && (
            <div className={styles.cells10}>
              <div className={styles.bg9} />
              <div className={styles.name10}>Item</div>
            </div>
          )}
          {!cells9 && (
            <div className={styles.cells11}>
              <div className={styles.bg10} />
              <div className={styles.name11}>Item</div>
            </div>
          )}
          {!cells10 && (
            <div className={styles.cells12}>
              <div className={styles.bg11} />
              <div className={styles.name12}>Item</div>
            </div>
          )}
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
    )
  );
};

export default Coulmn;
