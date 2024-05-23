import type { NextPage } from "next";
import Header2 from "../components/header2";
import styles from "./reservation-special-bus-timing4.module.css";

const ReservationSpecialBusTiming4: NextPageReservationSpecialBusTiming4Type =
  () => {
    return (
      <div className={styles.reservationSpecialBusTiming}>
        <Header2
          tSRTCLogo="/tsrtc-logo@2x.png"
          prop="/---2.svg"
          tELANGANASTATEROADTRANSPO="/telangana-state-road-transport-corporation2.svg"
          tSRTCLogoIconPadding="0px 0px 0px 0px"
          iconPadding="0px 0px var(--padding-12xs-9)"
          reservationsPadding="var(--padding-6xs) 0px"
          reservationsPadding1="var(--padding-6xs) 0px var(--padding-11xs)"
          reservationsPadding2="var(--padding-6xs) 0px"
          reservationsPadding3="var(--padding-6xs) 0px"
          reservationsPadding4="var(--padding-6xs) 0px"
          reservationsPadding5="var(--padding-6xs) 0px"
          reservationsPadding6="var(--padding-6xs) 0px"
          reservationsPadding7="var(--padding-6xs) 0px"
        />
        <img
          className={styles.reservationHeroFaq}
          alt=""
          src="/reservation-hero-faq@2x.png"
        />
        <section className={styles.reservationFaqAccordians}>
          <div className={styles.firstQuestion}>
            <div className={styles.frequentlyAskedQuestions}>
              Frequently Asked Questions
            </div>
            <div className={styles.accordian}>
              <div className={styles.bg} />
              <div className={styles.before6Am}>How to book a ticket?</div>
              <img
                className={styles.accordianDropdowntrueIcon}
                loading="lazy"
                alt=""
                src="/accordian-dropdowntrue.svg"
              />
            </div>
          </div>
          <div className={styles.accordian1}>
            <div className={styles.bg1} />
            <div className={styles.before6Am1}>
              How to postpone of T.S.R.T.C. ticket
            </div>
            <img
              className={styles.accordianDropdowntrueIcon1}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.secondQuestion}>
            <div className={styles.accordian2}>
              <div className={styles.bg2} />
              <div className={styles.before6Am2}>
                How to prepone of T.S.R.T.C. ticket?
              </div>
              <img
                className={styles.accordianDropdownIcon}
                loading="lazy"
                alt=""
                src="/accordian-dropdown.svg"
              />
            </div>
          </div>
          <div className={styles.ticketInfo}>
            <div className={styles.texts}>
              <div className={styles.note}>
                <div className={styles.itemCell}>
                  <div className={styles.noteThisFacilityContainer}>
                    <span className={styles.note1}>Note:</span>
                    <span>{` This facility is available at RTC Counters & ATB Agent Counters only.`}</span>
                  </div>
                </div>
              </div>
              <div className={styles.bulletPointContainer}>
                <div className={styles.title}>
                  <div className={styles.guidingPrinciplesOf}>
                    Guiding Principles of TSRTC
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
                    <div className={styles.monthlySeasonTickets}>
                      The preponed ticket is allowed not only for the same
                      service for another day but also to any other service for
                      the same day or any other day. However, this facility is
                      restricted to the same type of service and to the same
                      destination.
                    </div>
                  </div>
                  <div className={styles.bulletPoint1}>
                    <img
                      className={styles.bulltetPointPlaceholder1}
                      alt=""
                      src="/bulltet-point-placeholder.svg"
                    />
                    <div className={styles.monthlySeasonTickets1}>
                      Preponement of date of journey and reserved ticket is
                      permitted only once and such requisition has to be made 2
                      hours before the departure of the service.
                    </div>
                  </div>
                  <div className={styles.bulletPoint2}>
                    <img className={styles.bulltetPointPlaceholder2} alt="" />
                    <div className={styles.monthlySeasonTickets2}>
                      Passengers intending to travel from 76th km to 100th Km
                      are facilitated to travel with a single slab tariff of 80
                      Kms fare.
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
                      The above per Km tariff for District services are
                      including Toll Plaza charges.
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
                      In case if the BoC service does not pass through Toll
                      gate, the appplicable amount will be refunded to the hirer
                    </div>
                  </div>
                  <div className={styles.bulletPoint8}>
                    <img className={styles.bulltetPointPlaceholder8} alt="" />
                    <div className={styles.monthlySeasonTickets8}>
                      Cancellation : In case of cancellation of BoC, the
                      cancellation charges which shall be deducted from BoC
                      amount paid by the party are tabulated below:
                    </div>
                  </div>
                  <div className={styles.bulletPoint9}>
                    <img className={styles.bulltetPointPlaceholder9} alt="" />
                    <div className={styles.monthlySeasonTickets9}>
                      To reach a position of pre-eminence in bus transport
                      business.
                    </div>
                  </div>
                  <div className={styles.bulletPoint10}>
                    <img className={styles.bulltetPointPlaceholder10} alt="" />
                    <div className={styles.monthlySeasonTickets10}>
                      To reach a position of pre-eminence in bus transport
                      business.
                    </div>
                  </div>
                  <div className={styles.bulletPoint11}>
                    <img className={styles.bulltetPointPlaceholder11} alt="" />
                    <div className={styles.monthlySeasonTickets11}>
                      To reach a position of pre-eminence in bus transport
                      business.
                    </div>
                  </div>
                  <div className={styles.bulletPoint12}>
                    <img className={styles.bulltetPointPlaceholder12} alt="" />
                    <div className={styles.monthlySeasonTickets12}>
                      To reach a position of pre-eminence in bus transport
                      business.
                    </div>
                  </div>
                  <div className={styles.bulletPoint13}>
                    <img className={styles.bulltetPointPlaceholder13} alt="" />
                    <div className={styles.monthlySeasonTickets13}>
                      To reach a position of pre-eminence in bus transport
                      business.
                    </div>
                  </div>
                  <div className={styles.bulletPoint14}>
                    <img className={styles.bulltetPointPlaceholder14} alt="" />
                    <div className={styles.monthlySeasonTickets14}>
                      To reach a position of pre-eminence in bus transport
                      business.
                    </div>
                  </div>
                  <div className={styles.bulletPoint15}>
                    <img className={styles.bulltetPointPlaceholder15} alt="" />
                    <div className={styles.monthlySeasonTickets15}>
                      To reach a position of pre-eminence in bus transport
                      business.
                    </div>
                  </div>
                  <div className={styles.bulletPoint16}>
                    <img className={styles.bulltetPointPlaceholder16} alt="" />
                    <div className={styles.monthlySeasonTickets16}>
                      To reach a position of pre-eminence in bus transport
                      business.
                    </div>
                  </div>
                  <div className={styles.bulletPoint17}>
                    <img className={styles.bulltetPointPlaceholder17} alt="" />
                    <div className={styles.monthlySeasonTickets17}>
                      To reach a position of pre-eminence in bus transport
                      business.
                    </div>
                  </div>
                  <div className={styles.bulletPoint18}>
                    <img className={styles.bulltetPointPlaceholder18} alt="" />
                    <div className={styles.monthlySeasonTickets18}>
                      To reach a position of pre-eminence in bus transport
                      business.
                    </div>
                  </div>
                  <div className={styles.bulletPoint19}>
                    <img className={styles.bulltetPointPlaceholder19} alt="" />
                    <div className={styles.monthlySeasonTickets19}>
                      To reach a position of pre-eminence in bus transport
                      business.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.accordian3}>
            <div className={styles.bg3} />
            <div className={styles.before6Am3}>How to cancel to ticket?</div>
            <img
              className={styles.accordianDropdowntrueIcon2}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian4}>
            <div className={styles.bg4} />
            <div className={styles.before6Am4}>
              {" "}
              Explain what is return journey ticket?
            </div>
            <img
              className={styles.accordianDropdowntrueIcon3}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian5}>
            <div className={styles.bg5} />
            <div className={styles.before6Am5}>
              Are these tickets available with Agents?
            </div>
            <img
              className={styles.accordianDropdowntrueIcon4}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian6}>
            <div className={styles.bg6} />
            <div className={styles.before6Am6}>
              Who is an Authorised Ticket Booking Agent (ATB)?
            </div>
            <img
              className={styles.accordianDropdowntrueIcon5}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian7}>
            <div className={styles.bg7} />
            <div className={styles.before6Am7}>
              What are the services offered by Authorised Ticket Booking Agent?
            </div>
            <img
              className={styles.accordianDropdowntrueIcon6}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian8}>
            <div className={styles.bg8} />
            <input
              className={styles.before6Am8}
              placeholder="Details of Fare collection to a child Child ticket?"
              type="text"
            />
            <img
              className={styles.accordianDropdowntrueIcon7}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian9}>
            <div className={styles.bg9} />
            <div className={styles.before6Am9}>
              Can I get my ticket reserved on plastic money (Credit card) ?
            </div>
            <img
              className={styles.accordianDropdowntrueIcon8}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian10}>
            <div className={styles.bg10} />
            <div className={styles.before6Am10}>
              What are the special buses and schemes available for Sabarimalai
              pilgrims?
            </div>
            <img
              className={styles.accordianDropdowntrueIcon9}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian11}>
            <div className={styles.bg11} />
            <div className={styles.before6Am11}>
              What are the important bus stations in TSRTC?
            </div>
            <img
              className={styles.accordianDropdowntrueIcon10}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian12}>
            <div className={styles.bg12} />
            <div className={styles.before6Am12}>
              {" "}
              What are the important facilities provided at these Bus Stations?
            </div>
            <img
              className={styles.accordianDropdowntrueIcon11}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian13}>
            <div className={styles.bg13} />
            <div className={styles.before6Am13}>
              What is the tariff for luggage carried in buses?
            </div>
            <img
              className={styles.accordianDropdowntrueIcon12}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian14}>
            <div className={styles.bg14} />
            <div className={styles.before6Am14}>
              Are there any dormitories provided in Bus Stations?
            </div>
            <img
              className={styles.accordianDropdowntrueIcon13}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian15}>
            <div className={styles.bg15} />
            <div className={styles.before6Am15}>
              Are there any Deluxe Lounges in bus stations?
            </div>
            <img
              className={styles.accordianDropdowntrueIcon14}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian16}>
            <div className={styles.bg16} />
            <div className={styles.before6Am16}>
              What are the charges for using Deluxe Lounges?
            </div>
            <img
              className={styles.accordianDropdowntrueIcon15}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian17}>
            <div className={styles.bg17} />
            <div className={styles.before6Am17}>
              Any Porter trolley facility is provided?
            </div>
            <img
              className={styles.accordianDropdowntrueIcon16}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian18}>
            <div className={styles.bg18} />
            <div className={styles.before6Am18}>
              Is any Wheel Chair facility provided for Physically challenged at
              Bus Stations or termini?
            </div>
            <img
              className={styles.accordianDropdowntrueIcon17}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian19}>
            <div className={styles.bg19} />
            <div className={styles.before6Am19}>
              Do I have to pay extra when compared to buying the tickets in the
              traditional way?
            </div>
            <img
              className={styles.accordianDropdowntrueIcon18}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian20}>
            <div className={styles.bg20} />
            <input
              className={styles.before6Am20}
              placeholder="I've lost my ticket what do I do now?"
              type="text"
            />
            <img
              className={styles.accordianDropdowntrueIcon19}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian21}>
            <div className={styles.bg21} />
            <div className={styles.before6Am21}>
              I don't have a credit can I still buy tickets at TSRTC?
            </div>
            <img
              className={styles.accordianDropdowntrueIcon20}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian22}>
            <div className={styles.bg22} />
            <div className={styles.before6Am22}>
              I missed the bus. Do I get refund?
            </div>
            <img
              className={styles.accordianDropdowntrueIcon21}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian23}>
            <div className={styles.bg23} />
            <div className={styles.before6Am23}>
              What credit/debit cards do you accept?
            </div>
            <img
              className={styles.accordianDropdowntrueIcon22}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian24}>
            <div className={styles.bg24} />
            <div className={styles.before6Am24}>
              What payment options do i have?
            </div>
            <img
              className={styles.accordianDropdowntrueIcon23}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian25}>
            <div className={styles.bg25} />
            <div className={styles.before6Am25}>
              Is there any other option to book tickets from TSRTC?
            </div>
            <img
              className={styles.accordianDropdowntrueIcon24}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian26}>
            <div className={styles.bg26} />
            <div className={styles.before6Am26}>
              How safe are online transactions?
            </div>
            <img
              className={styles.accordianDropdowntrueIcon25}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
        </section>
        <footer className={styles.footer}>
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <img
                className={styles.logo51Icon}
                loading="lazy"
                alt=""
                src="/logo5-1@2x.png"
              />
              <div className={styles.logoTextGroup}>
                <img className={styles.icon} alt="" src="/----11.svg" />
                <img
                  className={styles.telanganaStateRoadTransport}
                  alt=""
                  src="/telangana-state-road-transport-corporation-11.svg"
                />
              </div>
            </div>
            <div className={styles.linksContainer}>
              <div className={styles.footerLinks1}>
                <b className={styles.quicklinks}>Quicklinks</b>
                <div className={styles.careers}>{`Careers `}</div>
                <div className={styles.siteMap}>Site Map</div>
                <div className={styles.aboutUs}>About Us</div>
                <div className={styles.contactUs}>Contact us</div>
              </div>
              <div className={styles.footerLinks2}>
                <b className={styles.information}>Information</b>
                <div className={styles.rtiAct2005}>RTI Act, 2005</div>
                <div className={styles.roadSafety}>Road Safety</div>
                <div
                  className={styles.privacyPolicies}
                >{`Privacy Policies `}</div>
                <div className={styles.feedback}>Feedback</div>
              </div>
              <div className={styles.footerLinks3}>
                <b className={styles.faqs}>FAQs</b>
                <div className={styles.reservations}>Reservations</div>
                <div className={styles.busPasses}>Bus Passes</div>
              </div>
            </div>
          </div>
          <div className={styles.lineSeparater}>
            <img
              className={styles.lineSeparatorIcon}
              alt=""
              src="/line-separator.svg"
            />
          </div>
          <div className={styles.recognitionAndSocialMediaC}>
            <div className={styles.recognitionAndSocial}>
              <div className={styles.recognitionContainer}>
                <div className={styles.recognition1}>
                  <img
                    className={styles.image462Icon}
                    alt=""
                    src="/image-462@2x.png"
                  />
                  <img
                    className={styles.image474Icon}
                    loading="lazy"
                    alt=""
                    src="/image-474@2x.png"
                  />
                </div>
                <button className={styles.recognition2Wrapper}>
                  <img
                    className={styles.recognition2Icon}
                    alt=""
                    src="/recognition-2@2x.png"
                  />
                </button>
              </div>
            </div>
            <div className={styles.socialMediaContainer}>
              <div className={styles.socialMedia}>
                <div className={styles.followUsOn}>
                  Follow us on @TSRTCMDOFFICE
                </div>
                <div className={styles.socialMediaHandles}>
                  <img
                    className={styles.socialMediaIcon1}
                    loading="lazy"
                    alt=""
                    src="/social-media-icon-1@2x.png"
                  />
                  <img
                    className={styles.socialMediaIcon2}
                    loading="lazy"
                    alt=""
                    src="/social-media-icon-2@2x.png"
                  />
                  <img
                    className={styles.socialMediaIcon3}
                    loading="lazy"
                    alt=""
                    src="/social-media-icon-3@2x.png"
                  />
                  <img
                    className={styles.socialMediaIcon4}
                    alt=""
                    src="/social-media-icon-4@2x.png"
                  />
                </div>
              </div>
              <div className={styles.downloadPlartformContainer}>
                <div className={styles.downloadOurApp}>Download our app</div>
                <div className={styles.downloadPlatform}>
                  <img
                    className={styles.googlePlayIcon}
                    loading="lazy"
                    alt=""
                    src="/google-play@2x.png"
                  />
                  <img
                    className={styles.appStoreIcon}
                    loading="lazy"
                    alt=""
                    src="/app-store@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.copyright2021TsrtcAllRiWrapper}>
            <div className={styles.copyright2021Tsrtc}>
              Copyright © 2021 TSRTC, All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>
    );
  };

export default ReservationSpecialBusTiming4;
