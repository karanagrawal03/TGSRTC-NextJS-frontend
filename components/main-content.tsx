import type { NextPage } from "next";
import styles from "./main-content.module.css";

export type MainContentType = {
  className?: string;
};

const MainContent: NextPage<MainContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.mainContent, className].join(" ")}>
      <div className={styles.contentLeft}>
        <div className={styles.bookYourCargoWrapper}>
          <h1 className={styles.bookYourCargo}>{`Book Your Cargo `}</h1>
        </div>
        <div className={styles.cargoCard}>
          <div className={styles.cargoInfo}>
            <div className={styles.infographics}>
              <div className={styles.infographicsInner}>
                <div className={styles.frameParent}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/group-10000132731.svg"
                  />
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/group-1000013268.svg"
                  />
                </div>
              </div>
              <div className={styles.illustrationShape} />
            </div>
            <div className={styles.cargoDescription}>
              <div className={styles.lookingForSendYourPackageParent}>
                <h2 className={styles.lookingForSend}>
                  Looking for send your package ?
                </h2>
                <p className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod
                  tempor incididunt ut. adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.cargoButton}>
            <button className={styles.button}>
              <div className={styles.applyNow}>Send A Parcel</div>
            </button>
          </div>
        </div>
      </div>
      <img
        className={styles.busDust}
        loading="lazy"
        alt=""
        src="/bus--dust-1@2x.png"
      />
    </section>
  );
};

export default MainContent;
