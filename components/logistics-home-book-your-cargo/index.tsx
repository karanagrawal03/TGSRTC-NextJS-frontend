import type { NextPage } from "next";
import styles from "./index.module.css";
import { BOOK_YOUR_CARGO, LOOKING_TO_SEND_PACKAGE, SEND_A_PARCEL } from "../../constants";

export type MainContentType = {
  className?: string;
};

const MainContent: NextPage<MainContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.mainContent, className].join(" ")}>
      <div className={styles.contentLeft}>
        <div className={styles.bookYourCargoWrapper}>
          <h1 className={styles.bookYourCargo}>{BOOK_YOUR_CARGO}</h1>
        </div>
        <div className={styles.cargoCard}>
          <div className={styles.cargoInfo}>
            <div className={styles.infographics}>
              <div className={styles.infographicsInner}>
                <div className={styles.frameParent}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt="goods"
                    src="/logistics-goods.svg"
                  />
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt="truck"
                    src="/logistics-truck.svg"
                  />
                </div>
              </div>
              <div className={styles.illustrationShape} />
            </div>
            <div className={styles.cargoDescription}>
              <div className={styles.lookingForSendYourPackageParent}>
                <h2 className={styles.lookingForSend}>
                  {LOOKING_TO_SEND_PACKAGE}
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
              <div className={styles.applyNow}>{SEND_A_PARCEL}</div>
            </button>
          </div>
        </div>
      </div>
      <img
        className={styles.busDust}
        loading="lazy"
        alt="bus"
        src="/bus--dust-1@2x.png"
      />
      <img
        className={styles.busDustMobile}
        loading="lazy"
        alt="bus"
        src="/bus-dust-mobile.png"
      />
    </section>
  );
};

export default MainContent;
