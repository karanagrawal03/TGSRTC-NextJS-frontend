import type { NextPage } from "next";
import BulletPointContainer from "./bullet-point-container";
import styles from "./seat-layout-of-t-g-s-r-t-c-containe.module.css";

export type SeatLayoutOfTGSRTCContaineType = {
  className?: string;
};

const SeatLayoutOfTGSRTCContaine: NextPage<SeatLayoutOfTGSRTCContaineType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.seatLayoutOfTgsrtcContaine, className].join(" ")}>
      <div className={styles.seatLayoutOfTgsrtcTexts}>
        <h3 className={styles.seatLayoutOfTgsrtc}>Seat-Layout of TGSRTC</h3>
        <p
          className={styles.theCorporationHas}
        >{`The Corporation has ear marked seats in buses for ladies, physically challenged, MLAs/MPs, Senior Citizens, Presidents of Mandal Parishads & ZPTC members etc. The layout diagrams of each type of bus are shown here.`}</p>
      </div>
      <div className={styles.seatLayoutBulletPoints}>
        <div className={styles.bulletPointContainer}>
          <div className={styles.title}>
            <b className={styles.guidingPrinciplesOf}>MLAs/MPs</b>
          </div>
          <div className={styles.bulletPoints}>
            <div className={styles.bulletPoint}>
              <img
                className={styles.bulltetPointPlaceholder}
                loading="lazy"
                alt=""
                src="/bulltet-point-placeholder.svg"
              />
              <p className={styles.monthlySeasonTickets}>
                4 seats in all types of buses, 2 berths in sleeper coaches.
              </p>
            </div>
            <div className={styles.bulletPoint1}>
              <img className={styles.bulltetPointPlaceholder1} alt="" />
              <div className={styles.monthlySeasonTickets1}>
                To assist the State administration in attaining good governance.
              </div>
            </div>
            <div className={styles.bulletPoint2}>
              <img className={styles.bulltetPointPlaceholder2} alt="" />
              <div className={styles.monthlySeasonTickets2}>
                To treat the customer, i.e. passenger, as a central concern of
                the Corporation's business and provide the best possible
                service.
              </div>
            </div>
            <div className={styles.bulletPoint3}>
              <img className={styles.bulltetPointPlaceholder3} alt="" />
              <div className={styles.monthlySeasonTickets3}>
                To explore and exploit technological, financial and managerial
                opportunities and developments and render the business cost
                effective at all times.
              </div>
            </div>
            <div className={styles.bulletPoint4}>
              <img className={styles.bulltetPointPlaceholder4} alt="" />
              <div className={styles.monthlySeasonTickets4}>
                To regularly and constantly improve the capabilities of
                employees for higher productivity.
              </div>
            </div>
            <div className={styles.bulletPoint5}>
              <img className={styles.bulltetPointPlaceholder5} alt="" />
              <div className={styles.monthlySeasonTickets5}>
                To focus on service conditions and welfare of the employees and
                their families consistent with their worth to the Corporation.
              </div>
            </div>
            <div className={styles.bulletPoint6}>
              <img className={styles.bulltetPointPlaceholder6} alt="" />
              <div className={styles.monthlySeasonTickets6}>
                To fulfill its obligation to the State and Central governments
                by optimizing return on investment.
              </div>
            </div>
            <div className={styles.bulletPoint7}>
              <img className={styles.bulltetPointPlaceholder7} alt="" />
              <div className={styles.monthlySeasonTickets7}>
                To emphasize environmental and community concerns in the form of
                reducing air and noise pollution.
              </div>
            </div>
            <div className={styles.bulletPoint8}>
              <img className={styles.bulltetPointPlaceholder8} alt="" />
              <div className={styles.monthlySeasonTickets8}>
                To consciously conform to the policy guidelines of the State in
                its business operations.
              </div>
            </div>
            <div className={styles.bulletPoint9}>
              <img className={styles.bulltetPointPlaceholder9} alt="" />
              <div className={styles.monthlySeasonTickets9}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
            <div className={styles.bulletPoint10}>
              <img className={styles.bulltetPointPlaceholder10} alt="" />
              <div className={styles.monthlySeasonTickets10}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
            <div className={styles.bulletPoint11}>
              <img className={styles.bulltetPointPlaceholder11} alt="" />
              <div className={styles.monthlySeasonTickets11}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
            <div className={styles.bulletPoint12}>
              <img className={styles.bulltetPointPlaceholder12} alt="" />
              <div className={styles.monthlySeasonTickets12}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
            <div className={styles.bulletPoint13}>
              <img className={styles.bulltetPointPlaceholder13} alt="" />
              <div className={styles.monthlySeasonTickets13}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
            <div className={styles.bulletPoint14}>
              <img className={styles.bulltetPointPlaceholder14} alt="" />
              <div className={styles.monthlySeasonTickets14}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
            <div className={styles.bulletPoint15}>
              <img className={styles.bulltetPointPlaceholder15} alt="" />
              <div className={styles.monthlySeasonTickets15}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
            <div className={styles.bulletPoint16}>
              <img className={styles.bulltetPointPlaceholder16} alt="" />
              <div className={styles.monthlySeasonTickets16}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
            <div className={styles.bulletPoint17}>
              <img className={styles.bulltetPointPlaceholder17} alt="" />
              <div className={styles.monthlySeasonTickets17}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
            <div className={styles.bulletPoint18}>
              <img className={styles.bulltetPointPlaceholder18} alt="" />
              <div className={styles.monthlySeasonTickets18}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
            <div className={styles.bulletPoint19}>
              <img className={styles.bulltetPointPlaceholder19} alt="" />
              <div className={styles.monthlySeasonTickets19}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
          </div>
        </div>
        <BulletPointContainer
          guidingPrinciplesOfTGSRTC="Ladies"
          monthlySeasonTicketsAreIs={`40% seating accommodation i.e. reserved for exclusive use by ladies in all city, Pallevelugu & Express services`}
          monthlySeasonTicketsAreIs1="City: 40 % seats in the front rows behind the driver's cabin."
          monthlySeasonTicketsAreIs2="Pallevelugu: 1st to 7th row seats behind the driver's cabin (21 seats)."
          monthlySeasonTicketsAreIs3="Express: 1st to 7th row seats behind the driver's cabin (21 seats)."
          monthlySeasonTicketsAreIs4="Deluxe: 1st to 2nd row seats behind the driver's cabin (4 seats)."
          monthlySeasonTicketsAreIs5="Super Luxury: 1 st to 2nd row seats behind the driver's cabin (4 seats)."
          monthlySeasonTicketsAreIs6="To fulfill its obligation to the State and Central governments by optimizing return on investment."
          monthlySeasonTicketsAreIs7="To emphasize environmental and community concerns in the form of reducing air and noise pollution."
          monthlySeasonTicketsAreIs8="To consciously conform to the policy guidelines of the State in its business operations."
          monthlySeasonTicketsAreIs9="To reach a position of pre-eminence in bus transport business."
          showBulletPoint
          bulletPointVisible
          bulletPointVisible1
          bulletPointVisible2
          bulletPointVisible3
        />
        <BulletPointContainer
          guidingPrinciplesOfTGSRTC="Physically challenged"
          monthlySeasonTicketsAreIs="One seat at the left side row of the front entrance door in case of city services."
          monthlySeasonTicketsAreIs1="One seat on the left side first row is reserved for the physically challenged persons."
          monthlySeasonTicketsAreIs2="Pallevelugu: 1st to 7th row seats behind the driver's cabin (21 seats)."
          monthlySeasonTicketsAreIs3="Express: 1st to 7th row seats behind the driver's cabin (21 seats)."
          monthlySeasonTicketsAreIs4="Deluxe: 1st to 2nd row seats behind the driver's cabin (4 seats)."
          monthlySeasonTicketsAreIs5="Super Luxury: 1 st to 2nd row seats behind the driver's cabin (4 seats)."
          monthlySeasonTicketsAreIs6="To fulfill its obligation to the State and Central governments by optimizing return on investment."
          monthlySeasonTicketsAreIs7="To emphasize environmental and community concerns in the form of reducing air and noise pollution."
          monthlySeasonTicketsAreIs8="To consciously conform to the policy guidelines of the State in its business operations."
          monthlySeasonTicketsAreIs9="To reach a position of pre-eminence in bus transport business."
          showBulletPoint
          bulletPointVisible={false}
          bulletPointVisible1={false}
          bulletPointVisible2={false}
          bulletPointVisible3={false}
          propDisplay="unset"
          propMinWidth="unset"
          propMinHeight="26px"
          propPadding="0px 0px 0px 0px"
          propMinHeight1="26px"
          propMargin="0"
          propHeight="unset"
          propPadding1="unset"
          propMinHeight2="unset"
          propMargin1="unset"
          propHeight1="26px"
          propPadding2="unset"
          propMinHeight3="unset"
          propMargin2="unset"
          propHeight2="26px"
          propPadding3="unset"
          propMinHeight4="unset"
          propMargin3="unset"
          propHeight3="26px"
          propPadding4="unset"
          propMinHeight5="unset"
          propMargin4="unset"
          propHeight4="26px"
        />
        <BulletPointContainer
          guidingPrinciplesOfTGSRTC="Senior citizens"
          monthlySeasonTicketsAreIs="Left side two seater row behind the seat allotted to physically challenged persons in all types of buses."
          monthlySeasonTicketsAreIs1="One seat on the left side first row is reserved for the physically challenged persons."
          monthlySeasonTicketsAreIs2="Pallevelugu: 1st to 7th row seats behind the driver's cabin (21 seats)."
          monthlySeasonTicketsAreIs3="Express: 1st to 7th row seats behind the driver's cabin (21 seats)."
          monthlySeasonTicketsAreIs4="Deluxe: 1st to 2nd row seats behind the driver's cabin (4 seats)."
          monthlySeasonTicketsAreIs5="Super Luxury: 1 st to 2nd row seats behind the driver's cabin (4 seats)."
          monthlySeasonTicketsAreIs6="To fulfill its obligation to the State and Central governments by optimizing return on investment."
          monthlySeasonTicketsAreIs7="To emphasize environmental and community concerns in the form of reducing air and noise pollution."
          monthlySeasonTicketsAreIs8="To consciously conform to the policy guidelines of the State in its business operations."
          monthlySeasonTicketsAreIs9="To reach a position of pre-eminence in bus transport business."
          showBulletPoint
          bulletPointVisible={false}
          bulletPointVisible1={false}
          bulletPointVisible2={false}
          bulletPointVisible3={false}
          propDisplay="inline-block"
          propMinWidth="105px"
          propMinHeight="26px"
          propPadding="0px 0px 0px 0px"
          propMinHeight1="26px"
          propMargin="0"
          propHeight="unset"
          propPadding1="unset"
          propMinHeight2="unset"
          propMargin1="unset"
          propHeight1="26px"
          propPadding2="unset"
          propMinHeight3="unset"
          propMargin2="unset"
          propHeight2="26px"
          propPadding3="unset"
          propMinHeight4="unset"
          propMargin3="unset"
          propHeight3="26px"
          propPadding4="unset"
          propMinHeight5="unset"
          propMargin4="unset"
          propHeight4="26px"
        />
        <BulletPointContainer
          guidingPrinciplesOfTGSRTC="Presidents of Mandal/ZPTCs of Mandals"
          monthlySeasonTicketsAreIs="If the four ear-marked for exclusive use by MLAs/MPs fall vacant, these seats will be allotted to presidents of Mandals / ZPTC members on second preference basis. The Layouts various Types of Vehicles are given below. Please click the links below to view the Layouts."
          monthlySeasonTicketsAreIs1="One seat on the left side first row is reserved for the physically challenged persons."
          monthlySeasonTicketsAreIs2="Pallevelugu: 1st to 7th row seats behind the driver's cabin (21 seats)."
          monthlySeasonTicketsAreIs3="Express: 1st to 7th row seats behind the driver's cabin (21 seats)."
          monthlySeasonTicketsAreIs4="Deluxe: 1st to 2nd row seats behind the driver's cabin (4 seats)."
          monthlySeasonTicketsAreIs5="Super Luxury: 1 st to 2nd row seats behind the driver's cabin (4 seats)."
          monthlySeasonTicketsAreIs6="To fulfill its obligation to the State and Central governments by optimizing return on investment."
          monthlySeasonTicketsAreIs7="To emphasize environmental and community concerns in the form of reducing air and noise pollution."
          monthlySeasonTicketsAreIs8="To consciously conform to the policy guidelines of the State in its business operations."
          monthlySeasonTicketsAreIs9="To reach a position of pre-eminence in bus transport business."
          showBulletPoint={false}
          bulletPointVisible={false}
          bulletPointVisible1={false}
          bulletPointVisible2={false}
          bulletPointVisible3={false}
          propDisplay="unset"
          propMinWidth="unset"
          propMinHeight="unset"
          propPadding="unset"
          propMinHeight1="unset"
          propMargin="unset"
          propHeight="26px"
          propPadding1="unset"
          propMinHeight2="unset"
          propMargin1="unset"
          propHeight1="26px"
          propPadding2="unset"
          propMinHeight3="unset"
          propMargin2="unset"
          propHeight2="26px"
          propPadding3="unset"
          propMinHeight4="unset"
          propMargin3="unset"
          propHeight3="26px"
          propPadding4="unset"
          propMinHeight5="unset"
          propMargin4="unset"
          propHeight4="26px"
        />
      </div>
      <img
        className={styles.busDust}
        loading="lazy"
        alt=""
        src="/bus--dust2@2x.png"
      />
    </div>
  );
};

export default SeatLayoutOfTGSRTCContaine;
