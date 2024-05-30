import type { NextPage } from "next";
import BulletPointContainer from "./bullet-point-container";
import styles from "./body-texts.module.css";

export type BodyTextsType = {
  className?: string;
};

const BodyTexts: NextPage<BodyTextsType> = ({ className = "" }) => {
  return (
    <section className={[styles.bodyTexts, className].join(" ")}>
      {/* <BulletPointContainer
        guidingPrinciplesOfTGSRTC="Corporate Philosophy"
        monthlySeasonTicketsAreIs="To provide safe, clean, comfortable, punctual and courteous commuter service at an economic fare."
        monthlySeasonTicketsAreIs1="To provide employee satisfaction in financial and humanistic terms."
        monthlySeasonTicketsAreIs2="To strive towards financial self-reliance in regard to performance and growth."
        monthlySeasonTicketsAreIs3="To attain a position of reputation and respect in the society."
        bulltetPointPlaceholder4="pending_I321:49692;717:23309;121:4116"
        bulltetPointPlaceholder5="pending_I321:49692;717:23310;121:4116"
        bulltetPointPlaceholder6="pending_I321:49692;717:23311;121:4116"
        bulltetPointPlaceholder7="pending_I321:49692;717:23312;121:4116"
        bulltetPointPlaceholder8="pending_I321:49692;717:23313;121:4116"
        bulltetPointPlaceholder9="pending_I321:49692;717:23314;121:4116"
        bulltetPointPlaceholder10="pending_I321:49692;717:23361;121:4116"
        bulltetPointPlaceholder11="pending_I321:49692;717:23366;121:4116"
        bulltetPointPlaceholder12="pending_I321:49692;717:23371;121:4116"
        bulltetPointPlaceholder13="pending_I321:49692;717:23376;121:4116"
        bulltetPointPlaceholder14="pending_I321:49692;717:23381;121:4116"
        bulltetPointPlaceholder15="pending_I321:49692;717:23386;121:4116"
        bulltetPointPlaceholder16="pending_I321:49692;717:23391;121:4116"
        bulltetPointPlaceholder17="pending_I321:49692;717:23396;121:4116"
        bulltetPointPlaceholder18="pending_I321:49692;717:23401;121:4116"
        bulltetPointPlaceholder19="pending_I321:49692;717:23356;121:4116"
        bulletPoint={false}
        bulletPoint1={false}
        bulletPoint2={false}
        bulletPoint3={false}
        bulletPoint4={false}
        bulletPoint5={false}
      /> */}
      <div className={styles.lineSeparater}>
        <img
          className={styles.lineSeparatorIcon}
          alt=""
          src="/line-separator4.svg"
        />
      </div>
      {/* <BulletPointContainer
        guidingPrinciplesOfTGSRTC="Guiding Principles of TGSRTC"
        monthlySeasonTicketsAreIs="To provide efficient, effective, ethical management of the business."
        monthlySeasonTicketsAreIs1="To assist the State administration in attaining good governance."
        monthlySeasonTicketsAreIs2="To treat the customer, i.e. passenger, as a central concern of the Corporation's business and provide the best possible service."
        monthlySeasonTicketsAreIs3="To explore and exploit technological, financial and managerial opportunities and developments and render the business cost effective at all times."
        bulltetPointPlaceholder4="/bulltet-point-placeholder.svg"
        bulltetPointPlaceholder5="/bulltet-point-placeholder.svg"
        bulltetPointPlaceholder6="/bulltet-point-placeholder.svg"
        bulltetPointPlaceholder7="/bulltet-point-placeholder.svg"
        bulltetPointPlaceholder8="/bulltet-point-placeholder.svg"
        bulltetPointPlaceholder9="/bulltet-point-placeholder.svg"
        bulltetPointPlaceholder10="pending_I321:49694;717:23361;121:4116"
        bulltetPointPlaceholder11="pending_I321:49694;717:23366;121:4116"
        bulltetPointPlaceholder12="pending_I321:49694;717:23371;121:4116"
        bulltetPointPlaceholder13="pending_I321:49694;717:23376;121:4116"
        bulltetPointPlaceholder14="pending_I321:49694;717:23381;121:4116"
        bulltetPointPlaceholder15="pending_I321:49694;717:23386;121:4116"
        bulltetPointPlaceholder16="pending_I321:49694;717:23391;121:4116"
        bulltetPointPlaceholder17="pending_I321:49694;717:23396;121:4116"
        bulltetPointPlaceholder18="pending_I321:49694;717:23401;121:4116"
        bulltetPointPlaceholder19="pending_I321:49694;717:23356;121:4116"
        bulletPoint
        bulletPoint1
        bulletPoint2
        bulletPoint3
        bulletPoint4
        bulletPoint5
        bulltetPointPlaceholderMinHeight="unset"
        bulletPointWidth="unset"
        bulletPointAlignSelf="stretch"
        bulletPointPadding="0px 0px 0px 0px"
        bulltetPointPlaceholderMinHeight1="26px"
        monthlySeasonTicketsHeight="unset"
        monthlySeasonTicketsMargin="0"
        bulletPointWidth1="unset"
        bulletPointAlignSelf1="stretch"
        bulletPointPadding1="0px 0px 0px 0px"
        bulltetPointPlaceholderMinHeight2="26px"
        monthlySeasonTicketsHeight1="unset"
        monthlySeasonTicketsMargin1="0"
        propWidth="unset"
        propAlignSelf="stretch"
        propPadding="0px 0px 0px 0px"
        propMinHeight="26px"
        propHeight="unset"
        propMargin="0"
        propWidth1="unset"
        propAlignSelf1="stretch"
        propPadding1="0px 0px 0px 0px"
        propMinHeight1="26px"
        propHeight1="unset"
        propMargin1="0"
        propWidth2="unset"
        propAlignSelf2="stretch"
        propPadding2="0px 0px 0px 0px"
        propMinHeight2="26px"
        propHeight2="unset"
        propMargin2="0"
        propWidth3="unset"
        propAlignSelf3="stretch"
        propPadding3="0px 0px 0px 0px"
        propMinHeight3="26px"
        propHeight3="unset"
        propMargin3="0"
      /> */}
    </section>
  );
};

export default BodyTexts;
