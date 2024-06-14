import type { NextPage } from "next";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";

export type MainContentType = {
  className?: string;
  data?: any;
};

const BookYourTicketCard: NextPage<MainContentType> = ({
  data,
  className = "",
}) => {
  return (
    <section className={[styles.mainContent, className].join(" ")}>
      <div className={styles.contentLeft}>
        <div className={styles.cargoCard}>
          <div className={styles.cargoInfo}>
            <div className={styles.infographics}>
              <div className={styles.infographicsInner}>
                <div className={styles.frameParent}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt="goods"
                    src={UPLOADS_BASE_URL + data?.image}
                  />
                </div>
              </div>
            </div>
            <div className={styles.cargoDescription}>
              <div className={styles.lookingForSendYourPackageParent}>
                <h2 className={styles.lookingForSend}>{data?.heading}</h2>
                <p className={styles.loremIpsumDolor}>{data?.content}</p>
              </div>
            </div>
          </div>
          <div className={styles.cargoButton}>
            <a
              href="https://www.tsrtconline.in/oprs-web/"
              rel="noopener noreferrer"
              target="_blank"
              className={styles.button}
            >
              <div className={styles.applyNow}>{data?.buttonText}</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookYourTicketCard;
