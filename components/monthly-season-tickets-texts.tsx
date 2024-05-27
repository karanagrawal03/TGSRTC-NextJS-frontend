import type { NextPage } from "next";
import styles from "./monthly-season-tickets-texts.module.css";

export type MonthlySeasonTicketsTextsType = {
  className?: string;
};

const MonthlySeasonTicketsTexts: NextPage<MonthlySeasonTicketsTextsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.monthlySeasonTicketsTexts, className].join(" ")}>
      <h2 className={styles.monthlySeasonTickets}>
        Monthly Season Tickets: (MST)
      </h2>
      <div className={styles.monthlySeasonTicketsSubCon}>
        <div className={styles.bulletPointContainer}>
          <div className={styles.title}>
            <div className={styles.guidingPrinciplesOf}>
              Guiding Principles of TGSRTC
            </div>
          </div>
          <div className={styles.bulletPoints}>
            <div className={styles.bulletPoint}>
              <img
                className={styles.bulltetPointPlaceholder}
                loading="lazy"
                alt=""
                src="/bulltet-point-placeholder.svg"
              />
              <p className={styles.monthlySeasonTickets1}>
                Monthly Season Tickets are issued separately for Pallevelugu and
                Express types of buses by collecting 20 days fare for one month
                travel.
              </p>
            </div>
            <div className={styles.bulletPoint1}>
              <img
                className={styles.bulltetPointPlaceholder1}
                alt=""
                src="/bulltet-point-placeholder.svg"
              />
              <p className={styles.monthlySeasonTickets2}>
                MSTs are issued upto 75 Kms with 5 Kms slabs.
              </p>
            </div>
            <div className={styles.bulletPoint2}>
              <img
                className={styles.bulltetPointPlaceholder2}
                alt=""
                src="/bulltet-point-placeholder.svg"
              />
              <p className={styles.monthlySeasonTickets3}>
                Passengers intending to travel from 76th km to 100th Km are
                facilitated to travel with a single slab tariff of 80 Kms fare.
              </p>
            </div>
            <div className={styles.bulletPoint3}>
              <img
                className={styles.bulltetPointPlaceholder3}
                alt=""
                src="/bulltet-point-placeholder.svg"
              />
              <p className={styles.monthlySeasonTickets4}>
                There are no child tickets in MST category.
              </p>
            </div>
            <div className={styles.bulletPoint4}>
              <img
                className={styles.bulltetPointPlaceholder4}
                alt=""
                src="/bulltet-point-placeholder.svg"
              />
              <p
                className={styles.monthlySeasonTickets5}
              >{`Express MST is not issued for 0-5 & 6-10 Kms slab.`}</p>
            </div>
            <div className={styles.bulletPoint5}>
              <img className={styles.bulltetPointPlaceholder5} alt="" />
              <div className={styles.monthlySeasonTickets6}>
                The above per Km tariff for District services are including Toll
                Plaza charges.
              </div>
            </div>
            <div className={styles.bulletPoint6}>
              <img className={styles.bulltetPointPlaceholder6} alt="" />
              <div
                className={styles.monthlySeasonTickets7}
              >{`In case of city service BoC, upto 50 Kms radius bookings, no Toll Charges shall be collected. For the city type BoC's booked for destinations over & above 50 Kms, the Toll Plaza charges @ Rs.5/- per km shall be collected.`}</div>
            </div>
            <div className={styles.bulletPoint7}>
              <img className={styles.bulltetPointPlaceholder7} alt="" />
              <div className={styles.monthlySeasonTickets8}>
                In case if the BoC service does not pass through Toll gate, the
                appplicable amount will be refunded to the hirer
              </div>
            </div>
            <div className={styles.bulletPoint8}>
              <img className={styles.bulltetPointPlaceholder8} alt="" />
              <div className={styles.monthlySeasonTickets9}>
                Cancellation : In case of cancellation of BoC, the cancellation
                charges which shall be deducted from BoC amount paid by the
                party are tabulated below:
              </div>
            </div>
            <div className={styles.bulletPoint9}>
              <img className={styles.bulltetPointPlaceholder9} alt="" />
              <div className={styles.monthlySeasonTickets10}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
            <div className={styles.bulletPoint10}>
              <img className={styles.bulltetPointPlaceholder10} alt="" />
              <div className={styles.monthlySeasonTickets11}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
            <div className={styles.bulletPoint11}>
              <img className={styles.bulltetPointPlaceholder11} alt="" />
              <div className={styles.monthlySeasonTickets12}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
            <div className={styles.bulletPoint12}>
              <img className={styles.bulltetPointPlaceholder12} alt="" />
              <div className={styles.monthlySeasonTickets13}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
            <div className={styles.bulletPoint13}>
              <img className={styles.bulltetPointPlaceholder13} alt="" />
              <div className={styles.monthlySeasonTickets14}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
            <div className={styles.bulletPoint14}>
              <img className={styles.bulltetPointPlaceholder14} alt="" />
              <div className={styles.monthlySeasonTickets15}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
            <div className={styles.bulletPoint15}>
              <img className={styles.bulltetPointPlaceholder15} alt="" />
              <div className={styles.monthlySeasonTickets16}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
            <div className={styles.bulletPoint16}>
              <img className={styles.bulltetPointPlaceholder16} alt="" />
              <div className={styles.monthlySeasonTickets17}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
            <div className={styles.bulletPoint17}>
              <img className={styles.bulltetPointPlaceholder17} alt="" />
              <div className={styles.monthlySeasonTickets18}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
            <div className={styles.bulletPoint18}>
              <img className={styles.bulltetPointPlaceholder18} alt="" />
              <div className={styles.monthlySeasonTickets19}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
            <div className={styles.bulletPoint19}>
              <img className={styles.bulltetPointPlaceholder19} alt="" />
              <div className={styles.monthlySeasonTickets20}>
                To reach a position of pre-eminence in bus transport business.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.valueAdditionGivenToMstHo}>
          <div className={styles.valueAdditionGiven}>
            Value addition given to MST holders
          </div>
          <div className={styles.bulletPointContainer1}>
            <div className={styles.title1}>
              <div className={styles.guidingPrinciplesOf1}>
                Guiding Principles of TGSRTC
              </div>
            </div>
            <div className={styles.bulletPoints1}>
              <div className={styles.bulletPoint20}>
                <img
                  className={styles.bulltetPointPlaceholder20}
                  alt=""
                  src="/bulltet-point-placeholder.svg"
                />
                <p className={styles.monthlySeasonTickets21}>
                  Pallevelugu Monthly Season Ticket holder is permitted to
                  travel in Express buses by paying a flat fare of Rs.10/- for
                  each journey on the permitted route.
                </p>
              </div>
              <div className={styles.bulletPoint21}>
                <img
                  className={styles.bulltetPointPlaceholder21}
                  alt=""
                  src="/bulltet-point-placeholder.svg"
                />
                <p className={styles.monthlySeasonTickets22}>
                  Express Monthly Season Ticket holder is permitted to travel in
                  Deluxe buses by paying a flat fare of Rs.20/- for each journey
                  on the permitted route
                </p>
              </div>
              <div className={styles.bulletPoint22}>
                <img className={styles.bulltetPointPlaceholder22} alt="" />
                <div className={styles.monthlySeasonTickets23}>
                  Passengers intending to travel from 76th km to 100th Km are
                  facilitated to travel with a single slab tariff of 80 Kms
                  fare.
                </div>
              </div>
              <div className={styles.bulletPoint23}>
                <img className={styles.bulltetPointPlaceholder23} alt="" />
                <div className={styles.monthlySeasonTickets24}>
                  There are no child tickets in MST category.
                </div>
              </div>
              <div className={styles.bulletPoint24}>
                <img className={styles.bulltetPointPlaceholder24} alt="" />
                <div
                  className={styles.monthlySeasonTickets25}
                >{`Express MST is not issued for 0-5 & 6-10 Kms slab.`}</div>
              </div>
              <div className={styles.bulletPoint25}>
                <img className={styles.bulltetPointPlaceholder25} alt="" />
                <div className={styles.monthlySeasonTickets26}>
                  The above per Km tariff for District services are including
                  Toll Plaza charges.
                </div>
              </div>
              <div className={styles.bulletPoint26}>
                <img className={styles.bulltetPointPlaceholder26} alt="" />
                <div
                  className={styles.monthlySeasonTickets27}
                >{`In case of city service BoC, upto 50 Kms radius bookings, no Toll Charges shall be collected. For the city type BoC's booked for destinations over & above 50 Kms, the Toll Plaza charges @ Rs.5/- per km shall be collected.`}</div>
              </div>
              <div className={styles.bulletPoint27}>
                <img className={styles.bulltetPointPlaceholder27} alt="" />
                <div className={styles.monthlySeasonTickets28}>
                  In case if the BoC service does not pass through Toll gate,
                  the appplicable amount will be refunded to the hirer
                </div>
              </div>
              <div className={styles.bulletPoint28}>
                <img className={styles.bulltetPointPlaceholder28} alt="" />
                <div className={styles.monthlySeasonTickets29}>
                  Cancellation : In case of cancellation of BoC, the
                  cancellation charges which shall be deducted from BoC amount
                  paid by the party are tabulated below:
                </div>
              </div>
              <div className={styles.bulletPoint29}>
                <img className={styles.bulltetPointPlaceholder29} alt="" />
                <div className={styles.monthlySeasonTickets30}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
              <div className={styles.bulletPoint30}>
                <img className={styles.bulltetPointPlaceholder30} alt="" />
                <div className={styles.monthlySeasonTickets31}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
              <div className={styles.bulletPoint31}>
                <img className={styles.bulltetPointPlaceholder31} alt="" />
                <div className={styles.monthlySeasonTickets32}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
              <div className={styles.bulletPoint32}>
                <img className={styles.bulltetPointPlaceholder32} alt="" />
                <div className={styles.monthlySeasonTickets33}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
              <div className={styles.bulletPoint33}>
                <img className={styles.bulltetPointPlaceholder33} alt="" />
                <div className={styles.monthlySeasonTickets34}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
              <div className={styles.bulletPoint34}>
                <img className={styles.bulltetPointPlaceholder34} alt="" />
                <div className={styles.monthlySeasonTickets35}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
              <div className={styles.bulletPoint35}>
                <img className={styles.bulltetPointPlaceholder35} alt="" />
                <div className={styles.monthlySeasonTickets36}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
              <div className={styles.bulletPoint36}>
                <img className={styles.bulltetPointPlaceholder36} alt="" />
                <div className={styles.monthlySeasonTickets37}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
              <div className={styles.bulletPoint37}>
                <img className={styles.bulltetPointPlaceholder37} alt="" />
                <div className={styles.monthlySeasonTickets38}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
              <div className={styles.bulletPoint38}>
                <img className={styles.bulltetPointPlaceholder38} alt="" />
                <div className={styles.monthlySeasonTickets39}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
              <div className={styles.bulletPoint39}>
                <img className={styles.bulltetPointPlaceholder39} alt="" />
                <div className={styles.monthlySeasonTickets40}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlySeasonTicketsTexts;
