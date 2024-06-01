import type { NextPage } from "next";
import styles from "./index.module.css";
import { APPLY_NOW, VIEW_DETAILS } from "../../constants";
import { UPLOADS_BASE_URL } from "../../services/service";

export type Cards3Type = {
  className?: string;
  heading: string;
  description: string;
  image: string;
  viewAll: string;
  applyNow: string;
};

const OtherBusPassesCard: NextPage<Cards3Type> = ({
  className = "",
  heading,
  description,
  image,
  viewAll,
  applyNow,
}) => {
  return (
    <div className={[styles.cards, className].join(" ")}>
      <div className={styles.infographicContainer}>
        <div className={styles.infographics}>
          <div className={styles.wrapperGroup1000013321}>
            <img
              className={styles.wrapperGroup1000013321Child}
              loading="lazy"
              alt="cards-image"
              src={UPLOADS_BASE_URL+image}
            />
          </div>
          <div className={styles.infographicsChild} />
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.texts}>
          <h2 className={styles.busPasses}>{heading}</h2>
          <div className={styles.loremIpsumDolor}>{description}</div>
        </div>
        <div className={styles.lineSeparater}>
          <img
            className={styles.lineSeparatorIcon}
            alt="line-saperator"
            src="/line-separator.svg"
            loading="lazy"
          />
        </div>
        <div className={styles.buttonsContainer}>
          <div className={styles.button1}>
            <div className={styles.viewDetails}>{viewAll}</div>
          </div>
          <button className={styles.button2}>
            <div className={styles.applyNow}>{applyNow}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtherBusPassesCard;
