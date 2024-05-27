import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component10.module.css";

export type FrameComponentType = {
  className?: string;
  separator?: string;
  separator1?: string;
  separator2?: string;
  separator3?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  separator,
  separator1,
  separator2,
  separator3,
  propFlex,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={[styles.buttonCellsParent, className].join(" ")}
      style={frameDiv2Style}
    >
      <div className={styles.buttonCells}>
        <div className={styles.bg} />
        <div className={styles.actions}>
          <div className={styles.button}>
            <div className={styles.viewDetails}>View Details</div>
          </div>
          <img className={styles.separatorIcon} alt="" src={separator} />
          <div className={styles.button1}>
            <div className={styles.viewDetails1}>View Details</div>
          </div>
          <img className={styles.separatorIcon1} alt="" src={separator1} />
        </div>
      </div>
      <div className={styles.buttonCells1}>
        <div className={styles.bg1} />
        <div className={styles.actions1}>
          <div className={styles.button2}>
            <div className={styles.viewDetails2}>View Details</div>
          </div>
          <img className={styles.separatorIcon2} alt="" src={separator2} />
          <div className={styles.button3}>
            <div className={styles.viewDetails3}>View Details</div>
          </div>
          <img className={styles.separatorIcon3} alt="" src={separator3} />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
