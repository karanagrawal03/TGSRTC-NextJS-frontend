import type { NextPage } from "next";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";

export type MainContentType = {
  className?: string;
  data: any;
};

const MainContent: NextPage<MainContentType> = ({ data,className = "" }) => {
  return (
    <section className={[styles.mainContent, className].join(" ")}>
      <div className={styles.contentLeft}>
        <div className={styles.bookYourCargoWrapper}>
          <h1 className={styles.bookYourCargo}>{data?.bookYourCargoTitle}</h1>
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
                    src={`${UPLOADS_BASE_URL}${data?.bookYourCargoImage?.data.attributes.url}`}
                  />
                </div>
              </div>
            </div>
            <div className={styles.cargoDescription}>
              <div className={styles.lookingForSendYourPackageParent}>
                <h2 className={styles.lookingForSend}>
                  {data?.bookYourCargoSubtitle}
                </h2>
                <p className={styles.loremIpsumDolor}>
                 {data?.bookYourCargoContent}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.cargoButton}>
            <button className={styles.button}>
              <div className={styles.applyNow}>{data?.bookYourCargoButtonText}</div>
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
