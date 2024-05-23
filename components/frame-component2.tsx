import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.bookingContentWrapper, className].join(" ")}>
      <div className={styles.bookingContent}>
        <div className={styles.bookYourCargoWrapper}>
          <h1 className={styles.bookYourCargo}>{`Book Your Cargo `}</h1>
        </div>
        <div className={styles.cargoContainer}>
          <div className={styles.cargoContainer1}>
            <div className={styles.cargoElementsWrapper}>
              <div className={styles.cargoElements}>
                <div className={styles.cargoShapes}>
                  <div className={styles.frameParent}>
                    <div className={styles.frameWrapper}>
                      <img
                        className={styles.frameChild}
                        loading="lazy"
                        alt=""
                        src="/group-10000132731.svg"
                      />
                    </div>
                    <img
                      className={styles.frameItem}
                      loading="lazy"
                      alt=""
                      src="/group-10000132681.svg"
                    />
                  </div>
                </div>
                <div className={styles.cargoElementsChild} />
              </div>
            </div>
            <div className={styles.packageDescription}>
              <h2 className={styles.lookingForSend}>
                Looking for send your package ?
              </h2>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod
                tempor incididunt ut. adipiscing elit.
              </div>
            </div>
          </div>
          <div className={styles.applyButtonContainer}>
            <button className={styles.button}>
              <div className={styles.applyNow}>Send A Parcel</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
