import type { NextPage } from "next";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <div
      className={[styles.accordionAnswerSectionWrapper, className].join(" ")}
    >
      <div className={styles.accordionAnswerSection}>
        <div className={styles.texts}>
          <div className={styles.itemCell}>
            <p className={styles.noteThisFacilityContainer}>
              <span className={styles.note}>Note:</span>
              <span>{` This facility is available at RTC Counters & ATB Agent Counters only.`}</span>
            </p>
          </div>
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
                <p className={styles.monthlySeasonTickets}>
                  The preponed ticket is allowed not only for the same service
                  for another day but also to any other service for the same day
                  or any other day. However, this facility is restricted to the
                  same type of service and to the same destination.
                </p>
              </div>
              <div className={styles.bulletPoint1}>
                <img
                  className={styles.bulltetPointPlaceholder1}
                  alt=""
                  src="/bulltet-point-placeholder.svg"
                />
                <p className={styles.monthlySeasonTickets1}>
                  Preponement of date of journey and reserved ticket is
                  permitted only once and such requisition has to be made 2
                  hours before the departure of the service.
                </p>
              </div>
              <div className={styles.bulletPoint2}>
                <img className={styles.bulltetPointPlaceholder2} alt="" />
                <div className={styles.monthlySeasonTickets2}>
                  Passengers intending to travel from 76th km to 100th Km are
                  facilitated to travel with a single slab tariff of 80 Kms
                  fare.
                </div>
              </div>
              <div className={styles.bulletPoint3}>
                <img className={styles.bulltetPointPlaceholder3} alt="" />
                <div className={styles.monthlySeasonTickets3}>
                  There are no child tickets in MST category.
                </div>
              </div>
              <div className={styles.bulletPoint4}>
                <img className={styles.bulltetPointPlaceholder4} alt="" />
                <div
                  className={styles.monthlySeasonTickets4}
                >{`Express MST is not issued for 0-5 & 6-10 Kms slab.`}</div>
              </div>
              <div className={styles.bulletPoint5}>
                <img className={styles.bulltetPointPlaceholder5} alt="" />
                <div className={styles.monthlySeasonTickets5}>
                  The above per Km tariff for District services are including
                  Toll Plaza charges.
                </div>
              </div>
              <div className={styles.bulletPoint6}>
                <img className={styles.bulltetPointPlaceholder6} alt="" />
                <div
                  className={styles.monthlySeasonTickets6}
                >{`In case of city service BoC, upto 50 Kms radius bookings, no Toll Charges shall be collected. For the city type BoC's booked for destinations over & above 50 Kms, the Toll Plaza charges @ Rs.5/- per km shall be collected.`}</div>
              </div>
              <div className={styles.bulletPoint7}>
                <img className={styles.bulltetPointPlaceholder7} alt="" />
                <div className={styles.monthlySeasonTickets7}>
                  In case if the BoC service does not pass through Toll gate,
                  the appplicable amount will be refunded to the hirer
                </div>
              </div>
              <div className={styles.bulletPoint8}>
                <img className={styles.bulltetPointPlaceholder8} alt="" />
                <div className={styles.monthlySeasonTickets8}>
                  Cancellation : In case of cancellation of BoC, the
                  cancellation charges which shall be deducted from BoC amount
                  paid by the party are tabulated below:
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
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
