import type { NextPage } from "next";
import BulletPointContainer from "./bullet-point-container";
import ImageCards from "./image-cards";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <div className={[styles.cityServicesParent, className].join(" ")}>
      <h3 className={styles.cityServices}>City Services</h3>
      <div className={styles.cityServicesSection}>
        <div className={styles.cityServicesTypes}>
          <b className={styles.electricBuses}>Electric Buses</b>
          <p className={styles.theFollowingFacilities}>
            The following facilities are available in Electric Buses and
            specially operated to RGI Airport.
          </p>
        </div>
        <BulletPointContainer
          guidingPrinciplesOfTGSRTC="The Salient Features"
          monthlySeasonTicketsAreIs="Ergonomically designed reclining semi sleeper seats with magazine pouch, bottle holder and coat hanger."
          monthlySeasonTicketsAreIs1="Elegant body profile and attractive colour scheme with graphics."
          monthlySeasonTicketsAreIs2="Individual reading lamps and adjustable A / C louvers."
          monthlySeasonTicketsAreIs3="Window curtains, Public addressing system."
          monthlySeasonTicketsAreIs4={`28" LED TV in Front for better visibility to all passengers.`}
          monthlySeasonTicketsAreIs5="Cell phone chargers."
          monthlySeasonTicketsAreIs6={`Parcel racks and side luggage booth & rear luggage booth.`}
          monthlySeasonTicketsAreIs7="Vinyl Floor mat for flooring for better grip (Dura tuff synthetic gross mat) in gangway."
          monthlySeasonTicketsAreIs8="Air suspension for better riding comfort."
          monthlySeasonTicketsAreIs9="Space for commercial luggage of 6.5 Cu.mts"
          showBulletPoint
          bulletPointVisible
          bulletPointVisible1
          bulletPointVisible2={false}
          bulletPointVisible3={false}
          propDisplay="unset"
          propMinWidth="unset"
          propMinHeight="26px"
          propPadding="0px 0px 0px 0px"
          propMinHeight1="26px"
          propMargin="0"
          propHeight="unset"
          propPadding1="0px 0px 0px 0px"
          propMinHeight2="26px"
          propMargin1="0"
          propHeight1="unset"
          propPadding2="0px 0px 0px 0px"
          propMinHeight3="26px"
          propMargin2="0"
          propHeight2="unset"
          propPadding3="unset"
          propMinHeight4="unset"
          propMargin3="unset"
          propHeight3="26px"
          propPadding4="unset"
          propMinHeight5="unset"
          propMargin4="unset"
          propHeight4="26px"
        />
        <div className={styles.cityServicesTypes1}>
          <h3
            className={styles.metroDeluxeCoach}
          >{`Metro Deluxe coach for twin cities of Hyderabad and Secunderabad `}</h3>
          <p className={styles.metroDeluxeCoaches}>
            Metro Deluxe Coaches with better features like attractive colour
            scheme, seat comfort, wider windows etc., are introduced in place of
            Metro liners for the benefit of long distance city commuters.
          </p>
        </div>
        <BulletPointContainer
          guidingPrinciplesOfTGSRTC="The Salient Features"
          monthlySeasonTicketsAreIs="Ergonomically designed reclining semi sleeper seats with magazine pouch, bottle holder and coat hanger."
          monthlySeasonTicketsAreIs1="Elegant body profile and attractive colour scheme with graphics."
          monthlySeasonTicketsAreIs2="Individual reading lamps and adjustable A / C louvers."
          monthlySeasonTicketsAreIs3="Window curtains, Public addressing system."
          monthlySeasonTicketsAreIs4={`28" LED TV in Front for better visibility to all passengers.`}
          monthlySeasonTicketsAreIs5="Cell phone chargers."
          monthlySeasonTicketsAreIs6={`Parcel racks and side luggage booth & rear luggage booth.`}
          monthlySeasonTicketsAreIs7="Vinyl Floor mat for flooring for better grip (Dura tuff synthetic gross mat) in gangway."
          monthlySeasonTicketsAreIs8="Air suspension for better riding comfort."
          monthlySeasonTicketsAreIs9="Space for commercial luggage of 6.5 Cu.mts"
          showBulletPoint
          bulletPointVisible
          bulletPointVisible1
          bulletPointVisible2={false}
          bulletPointVisible3={false}
          propDisplay="unset"
          propMinWidth="unset"
          propMinHeight="26px"
          propPadding="0px 0px 0px 0px"
          propMinHeight1="26px"
          propMargin="0"
          propHeight="unset"
          propPadding1="0px 0px 0px 0px"
          propMinHeight2="26px"
          propMargin1="0"
          propHeight1="unset"
          propPadding2="0px 0px 0px 0px"
          propMinHeight3="26px"
          propMargin2="0"
          propHeight2="unset"
          propPadding3="unset"
          propMinHeight4="unset"
          propMargin3="unset"
          propHeight3="26px"
          propPadding4="unset"
          propMinHeight5="unset"
          propMargin4="unset"
          propHeight4="26px"
        />
        <div className={styles.metroLuxuryAcParent}>
          <h3 className={styles.metroLuxuryAc}>Metro Luxury A.C</h3>
          <div className={styles.imageCardsParent}>
            <ImageCards pictures="/pictures-31@2x.png" />
            <div className={styles.metroTypes}>
              <div className={styles.metroDeluxeParent}>
                <b className={styles.metroDeluxe}>Metro Deluxe</b>
                <div className={styles.imageCards}>
                  <div className={styles.imageText}>
                    <div className={styles.imagePlaceholder}>
                      <img
                        className={styles.picturesIcon}
                        alt=""
                        src="/pictures-4@2x.png"
                      />
                      <div className={styles.imagePlaceholderChild} />
                    </div>
                    <div className={styles.busBhavan}>
                      Energy Conservation Gold Awards for the year 2019-20 on
                      improvement in fuel efficiency to Suryapet Depot.
                    </div>
                  </div>
                  <div className={styles.contentsParent}>
                    <div className={styles.contents}>
                      <div className={styles.content1}>
                        <div className={styles.calendar}>
                          <img className={styles.frameIcon} alt="" />
                          <div className={styles.amTo0800}>
                            08:30 am to 08:00 pm (Weekends)
                          </div>
                        </div>
                        <div className={styles.pickup}>
                          <img className={styles.frameIcon1} alt="" />
                          <div className={styles.pickupAlpha}>
                            Pickup - Alpha Hotel Secundarabad
                          </div>
                        </div>
                      </div>
                      <div className={styles.content2}>
                        <div
                          className={styles.placesCovered}
                        >{`Places covered & description`}</div>
                        <div className={styles.chipsParent}>
                          <div className={styles.chips}>
                            <div className={styles.birlaMandirWrapper}>
                              <div className={styles.birlaMandir}>
                                Birla Mandir
                              </div>
                            </div>
                            <div className={styles.golkondaWrapper}>
                              <div className={styles.golkonda}>Golkonda</div>
                            </div>
                            <div className={styles.taramatiBaradariWrapper}>
                              <div className={styles.taramatiBaradari}>
                                Taramati Baradari
                              </div>
                            </div>
                            <div className={styles.chowmahallaPalaceWrapper}>
                              <div className={styles.chowmahallaPalace}>
                                Chowmahalla Palace
                              </div>
                            </div>
                            <div className={styles.durgamCheruvuParkWrapper}>
                              <div className={styles.durgamCheruvuPark}>
                                Durgam Cheruvu Park
                              </div>
                            </div>
                            <div className={styles.cableBridgeWrapper}>
                              <div className={styles.cableBridge}>
                                Cable Bridge
                              </div>
                            </div>
                            <div className={styles.lumbiniParkWrapper}>
                              <div className={styles.lumbiniPark}>
                                Lumbini Park
                              </div>
                            </div>
                          </div>
                          <div
                            className={styles.packageTourWill}
                          >{`Package tour will be starting from alpha hotel sec-bad @08:30am and take you to birla mandir, golkonda fort, taramati baradari,where you can have lunch {at your own cost} chowmahala palace, charminar, lumbini park & back to alpha hotel.`}</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.button}>
                      <div className={styles.applyNow}>Book Now</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.metroExpressParent}>
                <h3 className={styles.metroExpress}>Metro Express</h3>
                <div className={styles.imageCards1}>
                  <div className={styles.imageText1}>
                    <div className={styles.imagePlaceholder1}>
                      <img
                        className={styles.picturesIcon1}
                        alt=""
                        src="/pictures-5@2x.png"
                      />
                      <div className={styles.imagePlaceholderItem} />
                    </div>
                    <div className={styles.busBhavan1}>
                      Energy Conservation Gold Awards for the year 2019-20 on
                      improvement in fuel efficiency to Suryapet Depot.
                    </div>
                  </div>
                  <div className={styles.contentsGroup}>
                    <div className={styles.contents1}>
                      <div className={styles.content11}>
                        <div className={styles.calendar1}>
                          <img className={styles.frameIcon2} alt="" />
                          <div className={styles.amTo08001}>
                            08:30 am to 08:00 pm (Weekends)
                          </div>
                        </div>
                        <div className={styles.pickup1}>
                          <img className={styles.frameIcon3} alt="" />
                          <div className={styles.pickupAlpha1}>
                            Pickup - Alpha Hotel Secundarabad
                          </div>
                        </div>
                      </div>
                      <div className={styles.content21}>
                        <div
                          className={styles.placesCovered1}
                        >{`Places covered & description`}</div>
                        <div className={styles.chipsGroup}>
                          <div className={styles.chips1}>
                            <div className={styles.birlaMandirContainer}>
                              <div className={styles.birlaMandir1}>
                                Birla Mandir
                              </div>
                            </div>
                            <div className={styles.golkondaContainer}>
                              <div className={styles.golkonda1}>Golkonda</div>
                            </div>
                            <div className={styles.taramatiBaradariContainer}>
                              <div className={styles.taramatiBaradari1}>
                                Taramati Baradari
                              </div>
                            </div>
                            <div className={styles.chowmahallaPalaceContainer}>
                              <div className={styles.chowmahallaPalace1}>
                                Chowmahalla Palace
                              </div>
                            </div>
                            <div className={styles.durgamCheruvuParkContainer}>
                              <div className={styles.durgamCheruvuPark1}>
                                Durgam Cheruvu Park
                              </div>
                            </div>
                            <div className={styles.cableBridgeContainer}>
                              <div className={styles.cableBridge1}>
                                Cable Bridge
                              </div>
                            </div>
                            <div className={styles.lumbiniParkContainer}>
                              <div className={styles.lumbiniPark1}>
                                Lumbini Park
                              </div>
                            </div>
                          </div>
                          <div
                            className={styles.packageTourWill1}
                          >{`Package tour will be starting from alpha hotel sec-bad @08:30am and take you to birla mandir, golkonda fort, taramati baradari,where you can have lunch {at your own cost} chowmahala palace, charminar, lumbini park & back to alpha hotel.`}</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.button1}>
                      <div className={styles.applyNow1}>Book Now</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
