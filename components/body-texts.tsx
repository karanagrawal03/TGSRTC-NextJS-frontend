import type { NextPage } from "next";
import BulletPointContainer2 from "./bullet-point-container2";
import styles from "./body-texts.module.css";

export type BodyTextsType = {
  className?: string;
};

const BodyTexts: NextPage<BodyTextsType> = ({ className = "" }) => {
  return (
    <section className={[styles.bodyTexts, className].join(" ")}>
      <BulletPointContainer2
        guidingPrinciplesOfTSRTC="Corporate Philosophy"
        monthlySeasonTicketsAreIs="To provide safe, clean, comfortable, punctual and courteous commuter service at an economic fare."
        monthlySeasonTicketsAreIs1="To provide employee satisfaction in financial and humanistic terms."
        monthlySeasonTicketsAreIs2="To strive towards financial self-reliance in regard to performance and growth."
        monthlySeasonTicketsAreIs3="To attain a position of reputation and respect in the society."
        bulletPoint={false}
        bulletPoint1={false}
        bulletPoint2={false}
        bulletPoint3={false}
        bulletPoint4={false}
        bulletPoint5={false}
      />
      <div className={styles.lineSeparater}>
        <img
          className={styles.lineSeparatorIcon}
          alt=""
          src="/line-separator7.svg"
        />
      </div>
      <BulletPointContainer2
        guidingPrinciplesOfTSRTC="Guiding Principles of TSRTC"
        monthlySeasonTicketsAreIs="To provide efficient, effective, ethical management of the business."
        monthlySeasonTicketsAreIs1="To assist the State administration in attaining good governance."
        monthlySeasonTicketsAreIs2="To treat the customer, i.e. passenger, as a central concern of the Corporation's business and provide the best possible service."
        monthlySeasonTicketsAreIs3="To explore and exploit technological, financial and managerial opportunities and developments and render the business cost effective at all times."
        bulletPoint
        bulletPoint1
        bulletPoint2
        bulletPoint3
        bulletPoint4
        bulletPoint5
        monthlySeasonTicketsMinHeight="unset"
        bulltetPointPlaceholderPadding="0px 0px 0px 0px"
        monthlySeasonTicketsMinHeight1="26px"
        bulletPointHeight="unset"
        bulltetPointPlaceholderPadding1="0px 0px 0px 0px"
        monthlySeasonTicketsMinHeight2="26px"
        bulletPointHeight1="unset"
        bulltetPointPlaceholderPadding2="0px 0px 0px 0px"
        monthlySeasonTicketsMinHeight3="26px"
        bulletPointHeight2="unset"
        bulltetPointPlaceholderPadding3="0px 0px 0px 0px"
        monthlySeasonTicketsMinHeight4="26px"
        bulletPointHeight3="unset"
        bulltetPointPlaceholderPadding4="0px 0px 0px 0px"
        monthlySeasonTicketsMinHeight5="26px"
        bulletPointHeight4="unset"
        bulltetPointPlaceholderPadding5="0px 0px 0px 0px"
        monthlySeasonTicketsMinHeight6="26px"
        bulletPointHeight5="unset"
      />
    </section>
  );
};

export default BodyTexts;
