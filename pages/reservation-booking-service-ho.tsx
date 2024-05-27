import type { NextPage } from "next";
import Header1 from "../components/header1";
import ReservationHeroLanding from "../components/reservation-hero-landing";
import BookYourTicket from "../components/book-your-ticket";
import ReservationKPIs from "../components/reservation-k-p-is";
import Coulmn from "../components/coulmn";
import styles from "./reservation-booking-service-ho.module.css";

const ReservationBookingServiceHo: NextPageReservationBookingServiceHoType =
  () => {
    return (
      <div className={styles.reservationBookingServiceHo}>
        <Header1 />
        <ReservationHeroLanding
          maskGroup="/mask-group@2x.png"
          tGSRTCOnlineBusTicket="TGSRTC Online Bus ticket"
          bookingService="Booking Service"
          bookYourTicketsHassleFree="Book your tickets hassle free !"
        />
        <BookYourTicket />
        <ReservationKPIs />
        <section className={styles.busDustParent}>
          <img className={styles.busDust} alt="" src="/bus--dust@2x.png" />
          <div className={styles.reservationSpecialBusesOf}>
            <div className={styles.specialBusesOfferWrapper}>
              <h1 className={styles.specialBuses}>{`Special Buses & Offer`}</h1>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.iconsWrapper}>
                <img className={styles.icons} alt="" src="/icons-10.svg" />
              </div>
              <div className={styles.tourismCard}>
                <div className={styles.imagePlaceholder}>
                  <img
                    className={styles.picturesIcon}
                    loading="lazy"
                    alt=""
                    src="/pictures@2x.png"
                  />
                  <div className={styles.imagePlaceholderChild} />
                </div>
                <div className={styles.specialBusContent}>
                  <div className={styles.specialBusHeader}>
                    <div className={styles.header}>
                      <b className={styles.hyderabad}>Hyderabad</b>
                      <div className={styles.directionIcon}>
                        <div className={styles.frameGroup}>
                          <img
                            className={styles.frameChild}
                            alt=""
                            src="/group-1000013474.svg"
                          />
                          <img
                            className={styles.frameItem}
                            alt=""
                            src="/group-1000013475.svg"
                          />
                        </div>
                      </div>
                      <b className={styles.bhadrachalam}>Bhadrachalam</b>
                    </div>
                    <h2 className={styles.specialBusesFor}>
                      Special Buses for Rama Navami Festival
                    </h2>
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
                        <p
                          className={styles.monthlySeasonTickets}
                        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, `}</p>
                      </div>
                      <div className={styles.bulletPoint1}>
                        <img
                          className={styles.bulltetPointPlaceholder1}
                          alt=""
                          src="/bulltet-point-placeholder.svg"
                        />
                        <p
                          className={styles.monthlySeasonTickets1}
                        >{`Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</p>
                      </div>
                      <div className={styles.bulletPoint2}>
                        <img
                          className={styles.bulltetPointPlaceholder2}
                          alt=""
                          src="/bulltet-point-placeholder.svg"
                        />
                        <p className={styles.monthlySeasonTickets2}>
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco labori.
                        </p>
                      </div>
                      <div className={styles.bulletPoint3}>
                        <img
                          className={styles.bulltetPointPlaceholder3}
                          alt=""
                          src="/bulltet-point-placeholder.svg"
                        />
                        <p className={styles.monthlySeasonTickets3}>
                          Ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit.
                        </p>
                      </div>
                      <div className={styles.bulletPoint4}>
                        <img
                          className={styles.bulltetPointPlaceholder4}
                          alt=""
                          src="/bulltet-point-placeholder.svg"
                        />
                        <p className={styles.monthlySeasonTickets4}>
                          Velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat.
                        </p>
                      </div>
                      <div className={styles.bulletPoint5}>
                        <img
                          className={styles.bulltetPointPlaceholder5}
                          alt=""
                          src="/bulltet-point-placeholder.svg"
                        />
                        <p className={styles.monthlySeasonTickets5}>
                          Cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id.
                        </p>
                      </div>
                      <div className={styles.bulletPoint6}>
                        <img
                          className={styles.bulltetPointPlaceholder6}
                          alt=""
                        />
                        <div className={styles.monthlySeasonTickets6}>
                          To fulfill its obligation to the State and Central
                          governments by optimizing return on investment.
                        </div>
                      </div>
                      <div className={styles.bulletPoint7}>
                        <img
                          className={styles.bulltetPointPlaceholder7}
                          alt=""
                        />
                        <div className={styles.monthlySeasonTickets7}>
                          To emphasize environmental and community concerns in
                          the form of reducing air and noise pollution.
                        </div>
                      </div>
                      <div className={styles.bulletPoint8}>
                        <img
                          className={styles.bulltetPointPlaceholder8}
                          alt=""
                        />
                        <div className={styles.monthlySeasonTickets8}>
                          To consciously conform to the policy guidelines of the
                          State in its business operations.
                        </div>
                      </div>
                      <div className={styles.bulletPoint9}>
                        <img
                          className={styles.bulltetPointPlaceholder9}
                          alt=""
                        />
                        <div className={styles.monthlySeasonTickets9}>
                          To reach a position of pre-eminence in bus transport
                          business.
                        </div>
                      </div>
                      <div className={styles.bulletPoint10}>
                        <img
                          className={styles.bulltetPointPlaceholder10}
                          alt=""
                        />
                        <div className={styles.monthlySeasonTickets10}>
                          To reach a position of pre-eminence in bus transport
                          business.
                        </div>
                      </div>
                      <div className={styles.bulletPoint11}>
                        <img
                          className={styles.bulltetPointPlaceholder11}
                          alt=""
                        />
                        <div className={styles.monthlySeasonTickets11}>
                          To reach a position of pre-eminence in bus transport
                          business.
                        </div>
                      </div>
                      <div className={styles.bulletPoint12}>
                        <img
                          className={styles.bulltetPointPlaceholder12}
                          alt=""
                        />
                        <div className={styles.monthlySeasonTickets12}>
                          To reach a position of pre-eminence in bus transport
                          business.
                        </div>
                      </div>
                      <div className={styles.bulletPoint13}>
                        <img
                          className={styles.bulltetPointPlaceholder13}
                          alt=""
                        />
                        <div className={styles.monthlySeasonTickets13}>
                          To reach a position of pre-eminence in bus transport
                          business.
                        </div>
                      </div>
                      <div className={styles.bulletPoint14}>
                        <img
                          className={styles.bulltetPointPlaceholder14}
                          alt=""
                        />
                        <div className={styles.monthlySeasonTickets14}>
                          To reach a position of pre-eminence in bus transport
                          business.
                        </div>
                      </div>
                      <div className={styles.bulletPoint15}>
                        <img
                          className={styles.bulltetPointPlaceholder15}
                          alt=""
                        />
                        <div className={styles.monthlySeasonTickets15}>
                          To reach a position of pre-eminence in bus transport
                          business.
                        </div>
                      </div>
                      <div className={styles.bulletPoint16}>
                        <img
                          className={styles.bulltetPointPlaceholder16}
                          alt=""
                        />
                        <div className={styles.monthlySeasonTickets16}>
                          To reach a position of pre-eminence in bus transport
                          business.
                        </div>
                      </div>
                      <div className={styles.bulletPoint17}>
                        <img
                          className={styles.bulltetPointPlaceholder17}
                          alt=""
                        />
                        <div className={styles.monthlySeasonTickets17}>
                          To reach a position of pre-eminence in bus transport
                          business.
                        </div>
                      </div>
                      <div className={styles.bulletPoint18}>
                        <img
                          className={styles.bulltetPointPlaceholder18}
                          alt=""
                        />
                        <div className={styles.monthlySeasonTickets18}>
                          To reach a position of pre-eminence in bus transport
                          business.
                        </div>
                      </div>
                      <div className={styles.bulletPoint19}>
                        <img
                          className={styles.bulltetPointPlaceholder19}
                          alt=""
                        />
                        <div className={styles.monthlySeasonTickets19}>
                          To reach a position of pre-eminence in bus transport
                          business.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.iconsContainer}>
                <img className={styles.icons1} alt="" src="/icons-11.svg" />
              </div>
            </div>
            <div className={styles.carousalWrapper}>
              <div className={styles.carousal}>
                <img
                  className={styles.carouselRedDot}
                  loading="lazy"
                  alt=""
                  src="/carousel-red-dot.svg"
                />
                <img
                  className={styles.carouselRedDot1}
                  alt=""
                  src="/carousel-red-dot-1.svg"
                />
                <img
                  className={styles.carouselRedDot2}
                  alt=""
                  src="/carousel-red-dot-1.svg"
                />
                <img
                  className={styles.carouselRedDot3}
                  alt=""
                  src="/carousel-red-dot-1.svg"
                />
                <img
                  className={styles.carouselRedDot4}
                  alt=""
                  src="/carousel-red-dot-1.svg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.customerSupportImageWrapper}>
          <div className={styles.customerSupportImage}>
            <img
              className={styles.charanjeetDhimanMhusybu4bxmIcon}
              alt=""
              src="/charanjeetdhimanmhusybu4bxmunsplash-1-1@2x.png"
            />
            <div className={styles.charanjeetDhimanMhusybu4bxmParent}>
              <div className={styles.charanjeetDhimanMhusybu4bxm} />
              <div className={styles.wrapperVector234251040}>
                <img
                  className={styles.wrapperVector234251040Child}
                  alt=""
                  src="/vector-234251040.svg"
                />
              </div>
            </div>
            <div className={styles.customerSupportTexts}>
              <div className={styles.texts}>
                <h1 className={styles.customerSupport}>
                  24/7 Customer Support
                </h1>
                <h2 className={styles.needHelpWith}>
                  Need help with e-Ticketing Refund related queries?
                </h2>
              </div>
              <div className={styles.emailPhone}>
                <div className={styles.email}>
                  <img className={styles.icons2} alt="" src="/icons-12.svg" />
                  <h2 className={styles.onlinesupporttgsrtcbusin}>
                    online.support@TGSRTCbus.in
                  </h2>
                </div>
                <div className={styles.phone}>
                  <img className={styles.icons3} alt="" src="/icons-13.svg" />
                  <div className={styles.div}>040 69440000 / 040 23450033</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.reservationBookingServiceHoInner}>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameDiv}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.frameParent1}>
                    <div className={styles.tgsrtcWrapper}>
                      <h1 className={styles.tgsrtc}>TGSRTC</h1>
                    </div>
                    <h1 className={styles.settingStandardsDelivering}>
                      Setting Standards, Delivering Excellence
                    </h1>
                  </div>
                </div>
                <p className={styles.tgsrtcIsCommittedTo}>
                  TGSRTC is committed to provide consistently high quality of
                  services and to continuously improve the services through a
                  process of teamwork for the utmost satisfaction of the
                  passengers and to attain a position of pre-eminence in the Bus
                  Transport sector.
                </p>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.typesOfServicesParent}>
                <h3 className={styles.typesOfServices}>Types of Services</h3>
                <p className={styles.advanceReservationFacility}>
                  Advance reservation facility is provided through Online
                  Passenger Reservation System (OPRS) for the different types of
                  services mentioned hereunder:
                </p>
              </div>
              <div className={styles.tableTitle}>
                <div className={styles.title1}>Types of Services</div>
                <div className={styles.table}>
                  <div className={styles.titleHeader}>
                    <div className={styles.name}>
                      Overview (Up to March - 2024)
                    </div>
                  </div>
                  <div className={styles.table1}>
                    <div className={styles.cloumn1}>
                      <div className={styles.header1}>
                        <div className={styles.name1}>#</div>
                      </div>
                      <div className={styles.columnCell}>
                        <div className={styles.cells}>
                          <div className={styles.bg} />
                          <div className={styles.name2}>1</div>
                        </div>
                        <div className={styles.cells1}>
                          <div className={styles.bg1} />
                          <div className={styles.name3}>2</div>
                        </div>
                        <div className={styles.cells2}>
                          <div className={styles.bg2} />
                          <div className={styles.name4}>3</div>
                        </div>
                        <div className={styles.cells3}>
                          <div className={styles.bg3} />
                          <div className={styles.name5}>4</div>
                        </div>
                        <div className={styles.cells4}>
                          <div className={styles.bg4} />
                          <div className={styles.name6}>5</div>
                        </div>
                        <div className={styles.cells5}>
                          <div className={styles.bg5} />
                          <div className={styles.name7}>6</div>
                        </div>
                        <div className={styles.cells6}>
                          <div className={styles.bg6} />
                          <div className={styles.name8}>7</div>
                        </div>
                        <div className={styles.cells7}>
                          <div className={styles.bg7} />
                          <div className={styles.name9}>8</div>
                        </div>
                        <div className={styles.cells8}>
                          <div className={styles.bg8} />
                          <div className={styles.name10}>9</div>
                        </div>
                        <div className={styles.cells9}>
                          <div className={styles.bg9} />
                          <div className={styles.name11}>10</div>
                        </div>
                        <div className={styles.cells10}>
                          <div className={styles.bg10} />
                          <div className={styles.name12}>11</div>
                        </div>
                        <div className={styles.cells11}>
                          <div className={styles.bg11} />
                          <div className={styles.name13}>12</div>
                        </div>
                        <div className={styles.cells12}>
                          <div className={styles.bg12} />
                          <div className={styles.name14}>13</div>
                        </div>
                        <div className={styles.cells13}>
                          <div className={styles.bg13} />
                          <div className={styles.name15}>14</div>
                        </div>
                        <div className={styles.cells14}>
                          <div className={styles.bg14} />
                          <div className={styles.name16}>15</div>
                        </div>
                        <div className={styles.cells15}>
                          <div className={styles.bg15} />
                          <div className={styles.name17}>16</div>
                        </div>
                      </div>
                    </div>
                    <Coulmn
                      name1="Type"
                      name2="Garuda Plus (AC Semi-Sleeper Multi Axle)"
                      name3="Rajdhani (2 + 2 AC Semi-Sleeper)"
                      name4="Super Luxury (2 + 2 Non-AC Pushback)"
                      name5="Deluxe (2 + 2 Non-AC)"
                      name6="Express (3 + 2 Non-AC)"
                      showCoulmn2={false}
                      cells
                      cells1
                      cells2
                      cells3
                      cells4={false}
                      cells5={false}
                      cells6={false}
                      cells7={false}
                      cells8={false}
                      cells9={false}
                      cells10={false}
                      propWidth="250px"
                      propHeight="805px"
                      propAlignSelf="stretch"
                      propWidth1="unset"
                      propDisplay="unset"
                      propMinWidth="unset"
                      propAlignSelf1="stretch"
                      propWidth2="unset"
                      propPadding="var(--spacing-lg) var(--padding-xl)"
                      propHeight1="48px"
                      propDisplay1="unset"
                      propMinWidth1="unset"
                      coulmn2AlignSelf="unset"
                      nameHeight="unset"
                      nameFlex="unset"
                      cellsPadding="var(--spacing-lg) var(--padding-11xs) var(--spacing-lg) var(--padding-xl)"
                      nameHeight1="17px"
                      nameFlex1="1"
                      nameDisplay="inline-block"
                    />
                    <div className={styles.column3}>
                      <div className={styles.cells16}>
                        <div className={styles.name18}>Type of bus</div>
                      </div>
                      <div className={styles.contentCell}>
                        <div className={styles.cells17}>
                          <div className={styles.bg16} />
                          <div className={styles.name19}>
                            Garuda Plus (AC Semi-Sleeper Multi Axle)
                          </div>
                        </div>
                        <div className={styles.cells18}>
                          <div className={styles.bg17} />
                          <div className={styles.name20}>
                            Rajdhani (2 + 2 AC Semi-Sleeper)
                          </div>
                        </div>
                        <div className={styles.cells19}>
                          <div className={styles.bg18} />
                          <div className={styles.name21}>
                            Super Luxury (2 + 2 Non-AC Pushback)
                          </div>
                        </div>
                        <div className={styles.cells20}>
                          <div className={styles.bg19} />
                          <input
                            className={styles.name22}
                            placeholder="Deluxe (2 + 2 Non-AC)"
                            type="text"
                          />
                        </div>
                        <div className={styles.cells21}>
                          <div className={styles.bg20} />
                          <div className={styles.name23}>
                            Express (3 + 2 Non-AC)
                          </div>
                        </div>
                        <div className={styles.cells22}>
                          <div className={styles.bg21} />
                          <div className={styles.name24}>Item</div>
                        </div>
                        <div className={styles.cells23}>
                          <div className={styles.bg22} />
                          <div className={styles.name25}>Item</div>
                        </div>
                        <div className={styles.cells24}>
                          <div className={styles.bg23} />
                          <div className={styles.name26}>Item</div>
                        </div>
                        <div className={styles.cells25}>
                          <div className={styles.bg24} />
                          <div className={styles.name27}>Item</div>
                        </div>
                        <div className={styles.cells26}>
                          <div className={styles.bg25} />
                          <div className={styles.name28}>Item</div>
                        </div>
                        <div className={styles.cells27}>
                          <div className={styles.bg26} />
                          <div className={styles.name29}>Item</div>
                        </div>
                        <div className={styles.cells28}>
                          <div className={styles.bg27} />
                          <div className={styles.name30}>Item</div>
                        </div>
                        <div className={styles.cells29}>
                          <div className={styles.bg28} />
                          <div className={styles.name31}>Item</div>
                        </div>
                        <div className={styles.cells30}>
                          <div className={styles.bg29} />
                          <div className={styles.name32}>Item</div>
                        </div>
                        <div className={styles.cells31}>
                          <div className={styles.bg30} />
                          <div className={styles.name33}>Item</div>
                        </div>
                        <div className={styles.cells32}>
                          <div className={styles.bg31} />
                          <div className={styles.name34}>Item</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.column4}>
                      <input
                        className={styles.cells33}
                        placeholder="Number of services"
                        type="text"
                      />
                      <div className={styles.contentCell1}>
                        <div className={styles.cells34}>
                          <div className={styles.bg32} />
                          <div className={styles.name35}>101</div>
                        </div>
                        <div className={styles.cells35}>
                          <div className={styles.bg33} />
                          <div className={styles.name36}>290</div>
                        </div>
                        <div className={styles.cells36}>
                          <div className={styles.bg34} />
                          <div className={styles.name37}>791</div>
                        </div>
                        <div className={styles.cells37}>
                          <div className={styles.bg35} />
                          <div className={styles.name38}>179</div>
                        </div>
                        <div className={styles.cells38}>
                          <div className={styles.bg36} />
                          <div className={styles.name39}>124</div>
                        </div>
                        <div className={styles.cells39}>
                          <div className={styles.bg37} />
                          <div className={styles.name40}>Item</div>
                        </div>
                        <div className={styles.cells40}>
                          <div className={styles.bg38} />
                          <div className={styles.name41}>Item</div>
                        </div>
                        <div className={styles.cells41}>
                          <div className={styles.bg39} />
                          <div className={styles.name42}>Item</div>
                        </div>
                        <div className={styles.cells42}>
                          <div className={styles.bg40} />
                          <div className={styles.name43}>Item</div>
                        </div>
                        <div className={styles.cells43}>
                          <div className={styles.bg41} />
                          <div className={styles.name44}>Item</div>
                        </div>
                        <div className={styles.cells44}>
                          <div className={styles.bg42} />
                          <div className={styles.name45}>Item</div>
                        </div>
                        <div className={styles.cells45}>
                          <div className={styles.bg43} />
                          <div className={styles.name46}>Item</div>
                        </div>
                        <div className={styles.cells46}>
                          <div className={styles.bg44} />
                          <div className={styles.name47}>Item</div>
                        </div>
                        <div className={styles.cells47}>
                          <div className={styles.bg45} />
                          <div className={styles.name48}>Item</div>
                        </div>
                        <div className={styles.cells48}>
                          <div className={styles.bg46} />
                          <div className={styles.name49}>Item</div>
                        </div>
                        <div className={styles.cells49}>
                          <div className={styles.bg47} />
                          <div className={styles.name50}>Item</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.column5}>
                      <div className={styles.cells50}>
                        <div className={styles.name51}>Title</div>
                      </div>
                      <div className={styles.contentCell2}>
                        <div className={styles.cells51}>
                          <div className={styles.bg48} />
                          <div className={styles.name52}>Item</div>
                        </div>
                        <div className={styles.cells52}>
                          <div className={styles.bg49} />
                          <div className={styles.name53}>Item</div>
                        </div>
                        <div className={styles.cells53}>
                          <div className={styles.bg50} />
                          <div className={styles.name54}>Item</div>
                        </div>
                        <div className={styles.cells54}>
                          <div className={styles.bg51} />
                          <div className={styles.name55}>Item</div>
                        </div>
                        <div className={styles.cells55}>
                          <div className={styles.bg52} />
                          <div className={styles.name56}>Item</div>
                        </div>
                        <div className={styles.cells56}>
                          <div className={styles.bg53} />
                          <div className={styles.name57}>Item</div>
                        </div>
                        <div className={styles.cells57}>
                          <div className={styles.bg54} />
                          <div className={styles.name58}>Item</div>
                        </div>
                        <div className={styles.cells58}>
                          <div className={styles.bg55} />
                          <div className={styles.name59}>Item</div>
                        </div>
                        <div className={styles.cells59}>
                          <div className={styles.bg56} />
                          <div className={styles.name60}>Item</div>
                        </div>
                        <div className={styles.cells60}>
                          <div className={styles.bg57} />
                          <div className={styles.name61}>Item</div>
                        </div>
                        <div className={styles.cells61}>
                          <div className={styles.bg58} />
                          <div className={styles.name62}>Item</div>
                        </div>
                        <div className={styles.cells62}>
                          <div className={styles.bg59} />
                          <div className={styles.name63}>Item</div>
                        </div>
                        <div className={styles.cells63}>
                          <div className={styles.bg60} />
                          <div className={styles.name64}>Item</div>
                        </div>
                        <div className={styles.cells64}>
                          <div className={styles.bg61} />
                          <div className={styles.name65}>Item</div>
                        </div>
                        <div className={styles.cells65}>
                          <div className={styles.bg62} />
                          <div className={styles.name66}>Item</div>
                        </div>
                        <div className={styles.cells66}>
                          <div className={styles.bg63} />
                          <div className={styles.name67}>Item</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.column6}>
                      <div className={styles.cells67}>
                        <div className={styles.name68}>Title</div>
                      </div>
                      <div className={styles.contentCell3}>
                        <div className={styles.cells68}>
                          <div className={styles.bg64} />
                          <div className={styles.name69}>Item</div>
                        </div>
                        <div className={styles.cells69}>
                          <div className={styles.bg65} />
                          <div className={styles.name70}>Item</div>
                        </div>
                        <div className={styles.cells70}>
                          <div className={styles.bg66} />
                          <div className={styles.name71}>Item</div>
                        </div>
                        <div className={styles.cells71}>
                          <div className={styles.bg67} />
                          <div className={styles.name72}>Item</div>
                        </div>
                        <div className={styles.cells72}>
                          <div className={styles.bg68} />
                          <div className={styles.name73}>Item</div>
                        </div>
                        <div className={styles.cells73}>
                          <div className={styles.bg69} />
                          <div className={styles.name74}>Item</div>
                        </div>
                        <div className={styles.cells74}>
                          <div className={styles.bg70} />
                          <div className={styles.name75}>Item</div>
                        </div>
                        <div className={styles.cells75}>
                          <div className={styles.bg71} />
                          <div className={styles.name76}>Item</div>
                        </div>
                        <div className={styles.cells76}>
                          <div className={styles.bg72} />
                          <div className={styles.name77}>Item</div>
                        </div>
                        <div className={styles.cells77}>
                          <div className={styles.bg73} />
                          <div className={styles.name78}>Item</div>
                        </div>
                        <div className={styles.cells78}>
                          <div className={styles.bg74} />
                          <div className={styles.name79}>Item</div>
                        </div>
                        <div className={styles.cells79}>
                          <div className={styles.bg75} />
                          <div className={styles.name80}>Item</div>
                        </div>
                        <div className={styles.cells80}>
                          <div className={styles.bg76} />
                          <div className={styles.name81}>Item</div>
                        </div>
                        <div className={styles.cells81}>
                          <div className={styles.bg77} />
                          <div className={styles.name82}>Item</div>
                        </div>
                        <div className={styles.cells82}>
                          <div className={styles.bg78} />
                          <div className={styles.name83}>Item</div>
                        </div>
                        <div className={styles.cells83}>
                          <div className={styles.bg79} />
                          <div className={styles.name84}>Item</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.column7}>
                      <div className={styles.cells84}>
                        <div className={styles.name85}>Title</div>
                      </div>
                      <div className={styles.contentCell4}>
                        <div className={styles.cells85}>
                          <div className={styles.bg80} />
                          <div className={styles.name86}>Item</div>
                        </div>
                        <div className={styles.cells86}>
                          <div className={styles.bg81} />
                          <div className={styles.name87}>Item</div>
                        </div>
                        <div className={styles.cells87}>
                          <div className={styles.bg82} />
                          <div className={styles.name88}>Item</div>
                        </div>
                        <div className={styles.cells88}>
                          <div className={styles.bg83} />
                          <div className={styles.name89}>Item</div>
                        </div>
                        <div className={styles.cells89}>
                          <div className={styles.bg84} />
                          <div className={styles.name90}>Item</div>
                        </div>
                        <div className={styles.cells90}>
                          <div className={styles.bg85} />
                          <div className={styles.name91}>Item</div>
                        </div>
                        <div className={styles.cells91}>
                          <div className={styles.bg86} />
                          <div className={styles.name92}>Item</div>
                        </div>
                        <div className={styles.cells92}>
                          <div className={styles.bg87} />
                          <div className={styles.name93}>Item</div>
                        </div>
                        <div className={styles.cells93}>
                          <div className={styles.bg88} />
                          <div className={styles.name94}>Item</div>
                        </div>
                        <div className={styles.cells94}>
                          <div className={styles.bg89} />
                          <div className={styles.name95}>Item</div>
                        </div>
                        <div className={styles.cells95}>
                          <div className={styles.bg90} />
                          <div className={styles.name96}>Item</div>
                        </div>
                        <div className={styles.cells96}>
                          <div className={styles.bg91} />
                          <div className={styles.name97}>Item</div>
                        </div>
                        <div className={styles.cells97}>
                          <div className={styles.bg92} />
                          <div className={styles.name98}>Item</div>
                        </div>
                        <div className={styles.cells98}>
                          <div className={styles.bg93} />
                          <div className={styles.name99}>Item</div>
                        </div>
                        <div className={styles.cells99}>
                          <div className={styles.bg94} />
                          <div className={styles.name100}>Item</div>
                        </div>
                        <div className={styles.cells100}>
                          <div className={styles.bg95} />
                          <div className={styles.name101}>Item</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.column8}>
                      <div className={styles.cells101}>
                        <div className={styles.name102}>Title</div>
                      </div>
                      <div className={styles.contentCell5}>
                        <div className={styles.cells102}>
                          <div className={styles.bg96} />
                          <div className={styles.name103}>Item</div>
                        </div>
                        <div className={styles.cells103}>
                          <div className={styles.bg97} />
                          <div className={styles.name104}>Item</div>
                        </div>
                        <div className={styles.cells104}>
                          <div className={styles.bg98} />
                          <div className={styles.name105}>Item</div>
                        </div>
                        <div className={styles.cells105}>
                          <div className={styles.bg99} />
                          <div className={styles.name106}>Item</div>
                        </div>
                        <div className={styles.cells106}>
                          <div className={styles.bg100} />
                          <div className={styles.name107}>Item</div>
                        </div>
                        <div className={styles.cells107}>
                          <div className={styles.bg101} />
                          <div className={styles.name108}>Item</div>
                        </div>
                        <div className={styles.cells108}>
                          <div className={styles.bg102} />
                          <div className={styles.name109}>Item</div>
                        </div>
                        <div className={styles.cells109}>
                          <div className={styles.bg103} />
                          <div className={styles.name110}>Item</div>
                        </div>
                        <div className={styles.cells110}>
                          <div className={styles.bg104} />
                          <div className={styles.name111}>Item</div>
                        </div>
                        <div className={styles.cells111}>
                          <div className={styles.bg105} />
                          <div className={styles.name112}>Item</div>
                        </div>
                        <div className={styles.cells112}>
                          <div className={styles.bg106} />
                          <div className={styles.name113}>Item</div>
                        </div>
                        <div className={styles.cells113}>
                          <div className={styles.bg107} />
                          <div className={styles.name114}>Item</div>
                        </div>
                        <div className={styles.cells114}>
                          <div className={styles.bg108} />
                          <div className={styles.name115}>Item</div>
                        </div>
                        <div className={styles.cells115}>
                          <div className={styles.bg109} />
                          <div className={styles.name116}>Item</div>
                        </div>
                        <div className={styles.cells116}>
                          <div className={styles.bg110} />
                          <div className={styles.name117}>Item</div>
                        </div>
                        <div className={styles.cells117}>
                          <div className={styles.bg111} />
                          <div className={styles.name118}>Item</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.column9}>
                      <div className={styles.cells118}>
                        <div className={styles.name119}>Title</div>
                      </div>
                      <div className={styles.contentCell6}>
                        <div className={styles.cells119}>
                          <div className={styles.bg112} />
                          <div className={styles.name120}>Item</div>
                        </div>
                        <div className={styles.cells120}>
                          <div className={styles.bg113} />
                          <div className={styles.name121}>Item</div>
                        </div>
                        <div className={styles.cells121}>
                          <div className={styles.bg114} />
                          <div className={styles.name122}>Item</div>
                        </div>
                        <div className={styles.cells122}>
                          <div className={styles.bg115} />
                          <div className={styles.name123}>Item</div>
                        </div>
                        <div className={styles.cells123}>
                          <div className={styles.bg116} />
                          <div className={styles.name124}>Item</div>
                        </div>
                        <div className={styles.cells124}>
                          <div className={styles.bg117} />
                          <div className={styles.name125}>Item</div>
                        </div>
                        <div className={styles.cells125}>
                          <div className={styles.bg118} />
                          <div className={styles.name126}>Item</div>
                        </div>
                        <div className={styles.cells126}>
                          <div className={styles.bg119} />
                          <div className={styles.name127}>Item</div>
                        </div>
                        <div className={styles.cells127}>
                          <div className={styles.bg120} />
                          <div className={styles.name128}>Item</div>
                        </div>
                        <div className={styles.cells128}>
                          <div className={styles.bg121} />
                          <div className={styles.name129}>Item</div>
                        </div>
                        <div className={styles.cells129}>
                          <div className={styles.bg122} />
                          <div className={styles.name130}>Item</div>
                        </div>
                        <div className={styles.cells130}>
                          <div className={styles.bg123} />
                          <div className={styles.name131}>Item</div>
                        </div>
                        <div className={styles.cells131}>
                          <div className={styles.bg124} />
                          <div className={styles.name132}>Item</div>
                        </div>
                        <div className={styles.cells132}>
                          <div className={styles.bg125} />
                          <div className={styles.name133}>Item</div>
                        </div>
                        <div className={styles.cells133}>
                          <div className={styles.bg126} />
                          <div className={styles.name134}>Item</div>
                        </div>
                        <div className={styles.cells134}>
                          <div className={styles.bg127} />
                          <div className={styles.name135}>Item</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.column10}>
                      <div className={styles.cells135}>
                        <div className={styles.name136}>Title</div>
                      </div>
                      <div className={styles.contentCell7}>
                        <div className={styles.cells136}>
                          <div className={styles.bg128} />
                          <div className={styles.name137}>Item</div>
                        </div>
                        <div className={styles.cells137}>
                          <div className={styles.bg129} />
                          <div className={styles.name138}>Item</div>
                        </div>
                        <div className={styles.cells138}>
                          <div className={styles.bg130} />
                          <div className={styles.name139}>Item</div>
                        </div>
                        <div className={styles.cells139}>
                          <div className={styles.bg131} />
                          <div className={styles.name140}>Item</div>
                        </div>
                        <div className={styles.cells140}>
                          <div className={styles.bg132} />
                          <div className={styles.name141}>Item</div>
                        </div>
                        <div className={styles.cells141}>
                          <div className={styles.bg133} />
                          <div className={styles.name142}>Item</div>
                        </div>
                        <div className={styles.cells142}>
                          <div className={styles.bg134} />
                          <div className={styles.name143}>Item</div>
                        </div>
                        <div className={styles.cells143}>
                          <div className={styles.bg135} />
                          <div className={styles.name144}>Item</div>
                        </div>
                        <div className={styles.cells144}>
                          <div className={styles.bg136} />
                          <div className={styles.name145}>Item</div>
                        </div>
                        <div className={styles.cells145}>
                          <div className={styles.bg137} />
                          <div className={styles.name146}>Item</div>
                        </div>
                        <div className={styles.cells146}>
                          <div className={styles.bg138} />
                          <div className={styles.name147}>Item</div>
                        </div>
                        <div className={styles.cells147}>
                          <div className={styles.bg139} />
                          <div className={styles.name148}>Item</div>
                        </div>
                        <div className={styles.cells148}>
                          <div className={styles.bg140} />
                          <div className={styles.name149}>Item</div>
                        </div>
                        <div className={styles.cells149}>
                          <div className={styles.bg141} />
                          <div className={styles.name150}>Item</div>
                        </div>
                        <div className={styles.cells150}>
                          <div className={styles.bg142} />
                          <div className={styles.name151}>Item</div>
                        </div>
                        <div className={styles.cells151}>
                          <div className={styles.bg143} />
                          <div className={styles.name152}>Item</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.column11}>
                      <div className={styles.cells152}>
                        <div className={styles.name153}>Title</div>
                      </div>
                      <div className={styles.contentCell8}>
                        <div className={styles.cells153}>
                          <div className={styles.bg144} />
                          <div className={styles.name154}>Item</div>
                        </div>
                        <div className={styles.cells154}>
                          <div className={styles.bg145} />
                          <div className={styles.name155}>Item</div>
                        </div>
                        <div className={styles.cells155}>
                          <div className={styles.bg146} />
                          <div className={styles.name156}>Item</div>
                        </div>
                        <div className={styles.cells156}>
                          <div className={styles.bg147} />
                          <div className={styles.name157}>Item</div>
                        </div>
                        <div className={styles.cells157}>
                          <div className={styles.bg148} />
                          <div className={styles.name158}>Item</div>
                        </div>
                        <div className={styles.cells158}>
                          <div className={styles.bg149} />
                          <div className={styles.name159}>Item</div>
                        </div>
                        <div className={styles.cells159}>
                          <div className={styles.bg150} />
                          <div className={styles.name160}>Item</div>
                        </div>
                        <div className={styles.cells160}>
                          <div className={styles.bg151} />
                          <div className={styles.name161}>Item</div>
                        </div>
                        <div className={styles.cells161}>
                          <div className={styles.bg152} />
                          <div className={styles.name162}>Item</div>
                        </div>
                        <div className={styles.cells162}>
                          <div className={styles.bg153} />
                          <div className={styles.name163}>Item</div>
                        </div>
                        <div className={styles.cells163}>
                          <div className={styles.bg154} />
                          <div className={styles.name164}>Item</div>
                        </div>
                        <div className={styles.cells164}>
                          <div className={styles.bg155} />
                          <div className={styles.name165}>Item</div>
                        </div>
                        <div className={styles.cells165}>
                          <div className={styles.bg156} />
                          <div className={styles.name166}>Item</div>
                        </div>
                        <div className={styles.cells166}>
                          <div className={styles.bg157} />
                          <div className={styles.name167}>Item</div>
                        </div>
                        <div className={styles.cells167}>
                          <div className={styles.bg158} />
                          <div className={styles.name168}>Item</div>
                        </div>
                        <div className={styles.cells168}>
                          <div className={styles.bg159} />
                          <div className={styles.name169}>Item</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.column12}>
                      <div className={styles.cells169}>
                        <div className={styles.name170}>Title</div>
                      </div>
                      <div className={styles.contentCell9}>
                        <div className={styles.cells170}>
                          <div className={styles.bg160} />
                          <div className={styles.name171}>Item</div>
                        </div>
                        <div className={styles.cells171}>
                          <div className={styles.bg161} />
                          <div className={styles.name172}>Item</div>
                        </div>
                        <div className={styles.cells172}>
                          <div className={styles.bg162} />
                          <div className={styles.name173}>Item</div>
                        </div>
                        <div className={styles.cells173}>
                          <div className={styles.bg163} />
                          <div className={styles.name174}>Item</div>
                        </div>
                        <div className={styles.cells174}>
                          <div className={styles.bg164} />
                          <div className={styles.name175}>Item</div>
                        </div>
                        <div className={styles.cells175}>
                          <div className={styles.bg165} />
                          <div className={styles.name176}>Item</div>
                        </div>
                        <div className={styles.cells176}>
                          <div className={styles.bg166} />
                          <div className={styles.name177}>Item</div>
                        </div>
                        <div className={styles.cells177}>
                          <div className={styles.bg167} />
                          <div className={styles.name178}>Item</div>
                        </div>
                        <div className={styles.cells178}>
                          <div className={styles.bg168} />
                          <div className={styles.name179}>Item</div>
                        </div>
                        <div className={styles.cells179}>
                          <div className={styles.bg169} />
                          <div className={styles.name180}>Item</div>
                        </div>
                        <div className={styles.cells180}>
                          <div className={styles.bg170} />
                          <div className={styles.name181}>Item</div>
                        </div>
                        <div className={styles.cells181}>
                          <div className={styles.bg171} />
                          <div className={styles.name182}>Item</div>
                        </div>
                        <div className={styles.cells182}>
                          <div className={styles.bg172} />
                          <div className={styles.name183}>Item</div>
                        </div>
                        <div className={styles.cells183}>
                          <div className={styles.bg173} />
                          <div className={styles.name184}>Item</div>
                        </div>
                        <div className={styles.cells184}>
                          <div className={styles.bg174} />
                          <div className={styles.name185}>Item</div>
                        </div>
                        <div className={styles.cells185}>
                          <div className={styles.bg175} />
                          <div className={styles.name186}>Item</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.actionCell}>
                      <div className={styles.cells186}>
                        <div className={styles.name187}>Action</div>
                      </div>
                      <div className={styles.contentCell10}>
                        <div className={styles.buttonCells}>
                          <div className={styles.bg176} />
                          <div className={styles.actions}>
                            <div className={styles.button}>
                              <div className={styles.viewDetails}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon} alt="" />
                            <div className={styles.button1}>
                              <div className={styles.viewDetails1}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon1} alt="" />
                          </div>
                        </div>
                        <div className={styles.buttonCells1}>
                          <div className={styles.bg177} />
                          <div className={styles.actions1}>
                            <div className={styles.button2}>
                              <div className={styles.viewDetails2}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon2} alt="" />
                            <div className={styles.button3}>
                              <div className={styles.viewDetails3}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon3} alt="" />
                          </div>
                        </div>
                        <div className={styles.buttonCells2}>
                          <div className={styles.bg178} />
                          <div className={styles.actions2}>
                            <div className={styles.button4}>
                              <div className={styles.viewDetails4}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon4} alt="" />
                            <div className={styles.button5}>
                              <div className={styles.viewDetails5}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon5} alt="" />
                          </div>
                        </div>
                        <div className={styles.buttonCells3}>
                          <div className={styles.bg179} />
                          <div className={styles.actions3}>
                            <div className={styles.button6}>
                              <div className={styles.viewDetails6}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon6} alt="" />
                            <div className={styles.button7}>
                              <div className={styles.viewDetails7}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon7} alt="" />
                          </div>
                        </div>
                        <div className={styles.buttonCells4}>
                          <div className={styles.bg180} />
                          <div className={styles.actions4}>
                            <div className={styles.button8}>
                              <div className={styles.viewDetails8}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon8} alt="" />
                            <div className={styles.button9}>
                              <div className={styles.viewDetails9}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon9} alt="" />
                          </div>
                        </div>
                        <div className={styles.buttonCells5}>
                          <div className={styles.bg181} />
                          <div className={styles.actions5}>
                            <div className={styles.button10}>
                              <div className={styles.viewDetails10}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon10} alt="" />
                            <div className={styles.button11}>
                              <div className={styles.viewDetails11}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon11} alt="" />
                          </div>
                        </div>
                        <div className={styles.buttonCells6}>
                          <div className={styles.bg182} />
                          <div className={styles.actions6}>
                            <div className={styles.button12}>
                              <div className={styles.viewDetails12}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon12} alt="" />
                            <div className={styles.button13}>
                              <div className={styles.viewDetails13}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon13} alt="" />
                          </div>
                        </div>
                        <div className={styles.buttonCells7}>
                          <div className={styles.bg183} />
                          <div className={styles.actions7}>
                            <div className={styles.button14}>
                              <div className={styles.viewDetails14}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon14} alt="" />
                            <div className={styles.button15}>
                              <div className={styles.viewDetails15}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon15} alt="" />
                          </div>
                        </div>
                        <div className={styles.buttonCells8}>
                          <div className={styles.bg184} />
                          <div className={styles.actions8}>
                            <div className={styles.button16}>
                              <div className={styles.viewDetails16}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon16} alt="" />
                            <div className={styles.button17}>
                              <div className={styles.viewDetails17}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon17} alt="" />
                          </div>
                        </div>
                        <div className={styles.buttonCells9}>
                          <div className={styles.bg185} />
                          <div className={styles.actions9}>
                            <div className={styles.button18}>
                              <div className={styles.viewDetails18}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon18} alt="" />
                            <div className={styles.button19}>
                              <div className={styles.viewDetails19}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon19} alt="" />
                          </div>
                        </div>
                        <div className={styles.buttonCells10}>
                          <div className={styles.bg186} />
                          <div className={styles.actions10}>
                            <div className={styles.button20}>
                              <div className={styles.viewDetails20}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon20} alt="" />
                            <div className={styles.button21}>
                              <div className={styles.viewDetails21}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon21} alt="" />
                          </div>
                        </div>
                        <div className={styles.buttonCells11}>
                          <div className={styles.bg187} />
                          <div className={styles.actions11}>
                            <div className={styles.button22}>
                              <div className={styles.viewDetails22}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon22} alt="" />
                            <div className={styles.button23}>
                              <div className={styles.viewDetails23}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon23} alt="" />
                          </div>
                        </div>
                        <div className={styles.buttonCells12}>
                          <div className={styles.bg188} />
                          <div className={styles.actions12}>
                            <div className={styles.button24}>
                              <div className={styles.viewDetails24}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon24} alt="" />
                            <div className={styles.button25}>
                              <div className={styles.viewDetails25}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon25} alt="" />
                          </div>
                        </div>
                        <div className={styles.buttonCells13}>
                          <div className={styles.bg189} />
                          <div className={styles.actions13}>
                            <div className={styles.button26}>
                              <div className={styles.viewDetails26}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon26} alt="" />
                            <div className={styles.button27}>
                              <div className={styles.viewDetails27}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon27} alt="" />
                          </div>
                        </div>
                        <div className={styles.buttonCells14}>
                          <div className={styles.bg190} />
                          <div className={styles.actions14}>
                            <div className={styles.button28}>
                              <div className={styles.viewDetails28}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon28} alt="" />
                            <div className={styles.button29}>
                              <div className={styles.viewDetails29}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon29} alt="" />
                          </div>
                        </div>
                        <div className={styles.buttonCells15}>
                          <div className={styles.bg191} />
                          <div className={styles.actions15}>
                            <div className={styles.button30}>
                              <div className={styles.viewDetails30}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon30} alt="" />
                            <div className={styles.button31}>
                              <div className={styles.viewDetails31}>
                                View Details
                              </div>
                            </div>
                            <img className={styles.separatorIcon31} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img className={styles.scrollIcon} alt="" />
              </div>
            </div>
            <div className={styles.bulletPointContainer1}>
              <div className={styles.title2}>
                <h2 className={styles.guidingPrinciplesOf1}>Connectivity</h2>
              </div>
              <div className={styles.bulletPoints1}>
                <div className={styles.bulletPoint20}>
                  <img
                    className={styles.bulltetPointPlaceholder20}
                    alt=""
                    src="/bulltet-point-placeholder.svg"
                  />
                  <p className={styles.monthlySeasonTickets20}>
                    Andhra Pradesh (Visakhapatnam, Vijayawada, Kakinada,
                    Rajahmundry, Guntur, Eluru, Ongole, Nellore, Chittoor,
                    Tirupathi, Anantapur, Kadapa, Kurnool etc.)
                  </p>
                </div>
                <div className={styles.bulletPoint21}>
                  <img
                    className={styles.bulltetPointPlaceholder21}
                    alt=""
                    src="/bulltet-point-placeholder.svg"
                  />
                  <p className={styles.monthlySeasonTickets21}>
                    Telangana (Hyderabad, Sangareddy, Mahabubnagar, Nalgonda,
                    Miryalaguda, Warangal, Karimnagar, Nizamabad, Bodhan,
                    Adilabad, Nirmal, Khammam, Bhadrachalam etc.) and
                  </p>
                </div>
                <div className={styles.bulletPoint22}>
                  <img
                    className={styles.bulltetPointPlaceholder22}
                    alt=""
                    src="/bulltet-point-placeholder.svg"
                  />
                  <p className={styles.monthlySeasonTickets22}>
                    Surrounding States (Mumbai, Pune, Shirdi, Nagpur, Bengaluru,
                    Chennai etc.)
                  </p>
                </div>
                <div className={styles.bulletPoint23}>
                  <img className={styles.bulltetPointPlaceholder23} alt="" />
                  <div className={styles.monthlySeasonTickets23}>
                    Ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit.
                  </div>
                </div>
                <div className={styles.bulletPoint24}>
                  <img className={styles.bulltetPointPlaceholder24} alt="" />
                  <div className={styles.monthlySeasonTickets24}>
                    Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat.
                  </div>
                </div>
                <div className={styles.bulletPoint25}>
                  <img className={styles.bulltetPointPlaceholder25} alt="" />
                  <div className={styles.monthlySeasonTickets25}>
                    Cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id.
                  </div>
                </div>
                <div className={styles.bulletPoint26}>
                  <img className={styles.bulltetPointPlaceholder26} alt="" />
                  <div className={styles.monthlySeasonTickets26}>
                    To fulfill its obligation to the State and Central
                    governments by optimizing return on investment.
                  </div>
                </div>
                <div className={styles.bulletPoint27}>
                  <img className={styles.bulltetPointPlaceholder27} alt="" />
                  <div className={styles.monthlySeasonTickets27}>
                    To emphasize environmental and community concerns in the
                    form of reducing air and noise pollution.
                  </div>
                </div>
                <div className={styles.bulletPoint28}>
                  <img className={styles.bulltetPointPlaceholder28} alt="" />
                  <div className={styles.monthlySeasonTickets28}>
                    To consciously conform to the policy guidelines of the State
                    in its business operations.
                  </div>
                </div>
                <div className={styles.bulletPoint29}>
                  <img className={styles.bulltetPointPlaceholder29} alt="" />
                  <div className={styles.monthlySeasonTickets29}>
                    To reach a position of pre-eminence in bus transport
                    business.
                  </div>
                </div>
                <div className={styles.bulletPoint30}>
                  <img className={styles.bulltetPointPlaceholder30} alt="" />
                  <div className={styles.monthlySeasonTickets30}>
                    To reach a position of pre-eminence in bus transport
                    business.
                  </div>
                </div>
                <div className={styles.bulletPoint31}>
                  <img className={styles.bulltetPointPlaceholder31} alt="" />
                  <div className={styles.monthlySeasonTickets31}>
                    To reach a position of pre-eminence in bus transport
                    business.
                  </div>
                </div>
                <div className={styles.bulletPoint32}>
                  <img className={styles.bulltetPointPlaceholder32} alt="" />
                  <div className={styles.monthlySeasonTickets32}>
                    To reach a position of pre-eminence in bus transport
                    business.
                  </div>
                </div>
                <div className={styles.bulletPoint33}>
                  <img className={styles.bulltetPointPlaceholder33} alt="" />
                  <div className={styles.monthlySeasonTickets33}>
                    To reach a position of pre-eminence in bus transport
                    business.
                  </div>
                </div>
                <div className={styles.bulletPoint34}>
                  <img className={styles.bulltetPointPlaceholder34} alt="" />
                  <div className={styles.monthlySeasonTickets34}>
                    To reach a position of pre-eminence in bus transport
                    business.
                  </div>
                </div>
                <div className={styles.bulletPoint35}>
                  <img className={styles.bulltetPointPlaceholder35} alt="" />
                  <div className={styles.monthlySeasonTickets35}>
                    To reach a position of pre-eminence in bus transport
                    business.
                  </div>
                </div>
                <div className={styles.bulletPoint36}>
                  <img className={styles.bulltetPointPlaceholder36} alt="" />
                  <div className={styles.monthlySeasonTickets36}>
                    To reach a position of pre-eminence in bus transport
                    business.
                  </div>
                </div>
                <div className={styles.bulletPoint37}>
                  <img className={styles.bulltetPointPlaceholder37} alt="" />
                  <div className={styles.monthlySeasonTickets37}>
                    To reach a position of pre-eminence in bus transport
                    business.
                  </div>
                </div>
                <div className={styles.bulletPoint38}>
                  <img className={styles.bulltetPointPlaceholder38} alt="" />
                  <div className={styles.monthlySeasonTickets38}>
                    To reach a position of pre-eminence in bus transport
                    business.
                  </div>
                </div>
                <div className={styles.bulletPoint39}>
                  <img className={styles.bulltetPointPlaceholder39} alt="" />
                  <div className={styles.monthlySeasonTickets39}>
                    To reach a position of pre-eminence in bus transport
                    business.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.footer}>
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <img
                className={styles.logo51Icon}
                loading="lazy"
                alt=""
                src="/logo5-1@2x.png"
              />
              <div className={styles.logoTextGroup}>
                <img className={styles.icon} alt="" src="/----1.svg" />
                <img
                  className={styles.telanganaStateRoadTransport}
                  alt=""
                  src="/telangana-state-road-transport-corporation-1.svg"
                />
              </div>
            </div>
            <div className={styles.linksContainer}>
              <div className={styles.footerLinks1}>
                <b className={styles.quicklinks}>Quicklinks</b>
                <div className={styles.careers}>{`Careers `}</div>
                <a className={styles.siteMap}>Site Map</a>
                <a className={styles.aboutUs}>About Us</a>
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
              src="/line-separator-2.svg"
            />
          </div>
          <footer className={styles.recognitionAndSocialMediaC}>
            <div className={styles.recognitionContainerWrapper}>
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
                <div className={styles.recognition2Wrapper}>
                  <img
                    className={styles.recognition2Icon}
                    loading="lazy"
                    alt=""
                    src="/recognition-2@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.socialMediaContainer}>
              <div className={styles.socialMedia}>
                <div className={styles.followUsOn}>
                  Follow us on @TGSRTCMDOFFICE
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
          </footer>
          <div className={styles.copyright2021TgsrtcAllRWrapper}>
            <div className={styles.copyright2021Tgsrtc}>
              Copyright © 2021 TGSRTC, All Rights Reserved.
            </div>
          </div>
        </section>
        <img className={styles.busDust1} alt="" src="/bus--dust-1@2x.png" />
      </div>
    );
  };

export default ReservationBookingServiceHo;
