import type { NextPage } from "next";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";

export type LogisticBookYourCargoSectionCardType = {
  className?: string;
  cards: Array<{
    image: string;
    cardHeading: string;
    content: string;
    button: string;
  }>;
};

const LogisticBookYourCargoSectionCard: NextPage<
  LogisticBookYourCargoSectionCardType
> = ({ className = "", cards = [] }) => {
  return (
    <section
      className={[styles.logisticBookYourCargoSecti, className].join(" ")}
    >
      <h1 className={styles.bookYourCargo}>{`Book Your Cargo `}</h1>
      <div className={styles.cardContainer}>
        {cards?.map((card, index) => (
          <div key={index} className={styles.cards}>
            <div className={styles.infographicContainerWrapper}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt={card.cardHeading}
                src={UPLOADS_BASE_URL + card?.image}
              />
            </div>
            <div className={styles.bodyContainer}>
              <div className={styles.texts}>
                <h2 className={styles.busPasses}>
                  <p className={styles.bulkCtvCargo}>{card?.cardHeading}</p>
                </h2>
                <p className={styles.loremIpsumDolor}>{card?.content}</p>
              </div>
              <button className={styles.buttonsContainer}>
                <div className={styles.button1}>
                  <b className={styles.applyNow}>{card?.button}</b>
                </div>
                <div className={styles.button2}>
                  <div className={styles.applyNow1}>{card?.button}</div>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogisticBookYourCargoSectionCard;
