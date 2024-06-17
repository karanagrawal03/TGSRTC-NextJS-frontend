import type { NextPage } from "next";
import styles from "./index.module.css";
import {
  BUS_PASS_GENERAL_LINK,
  BUS_PASS_LINK,
  BUS_PASS_STUDENT_LINK,
} from "../../constants";
import { UPLOADS_BASE_URL } from "../../services/service";
import { useRouter } from "next/router";

export type Cards3Type = {
  className?: string;
  heading: string;
  description: string;
  image: string;
  viewAll: string;
  applyNow: string;
  index: number;
};

const OtherBusPassesCard: NextPage<Cards3Type> = ({
  className = "",
  heading,
  description,
  image,
  viewAll,
  applyNow,
  index,
}) => {
  const router = useRouter();
  const handleClick = (index: number) => {
    if (index === 0) {
      router.push(BUS_PASS_GENERAL_LINK);
    } else if (index === 1) {
      router.push(BUS_PASS_STUDENT_LINK);
    } else if (index === 2) {
      router.push(BUS_PASS_GENERAL_LINK);
    } else {
      router.push(BUS_PASS_LINK);
    }
  };
  return (
    <div className={[styles.cards, className].join(" ")}>
      <div className={styles.infographicContainer}>
        <div className={styles.infographics}>
          <div className={styles.wrapperGroup1000013321}>
            <img
              className={styles.wrapperGroup1000013321Child}
              loading="lazy"
              alt="cards-image"
              src={UPLOADS_BASE_URL + image}
            />
          </div>
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
            src="/lineSeparator.svg"
            loading="lazy"
          />
        </div>
        <div className={styles.buttonsContainer}>
          <div className={styles.button1}>
            <div
              className={styles.viewDetails}
              onClick={() => handleClick(index)}
            >
              {viewAll}
            </div>
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
