import type { NextPage } from "next";
import styles from "./other-city-services-section.module.css";

export type OtherCityServicesSectionType = {
  className?: string;
};

const OtherCityServicesSection: NextPage<OtherCityServicesSectionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.otherCityServicesSection, className].join(" ")}>
      <div className={styles.otherCityBusesParent}>
        <h3 className={styles.otherCityBuses}>Other City Buses</h3>
        <p className={styles.theFollowingFacilities}>
          The following facilities are specially operated in cities.
        </p>
      </div>
      <div className={styles.otherBusesImages}>
        <div className={styles.deluxe}>
          <b className={styles.deluxe1}>Deluxe</b>
          <div className={styles.imageCards}>
            <div className={styles.imageText}>
              <div className={styles.imagePlaceholder}>
                <img
                  className={styles.picturesIcon}
                  alt=""
                  src="/pictures-6@2x.png"
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
                        <div className={styles.birlaMandir}>Birla Mandir</div>
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
                        <div className={styles.cableBridge}>Cable Bridge</div>
                      </div>
                      <div className={styles.lumbiniParkWrapper}>
                        <div className={styles.lumbiniPark}>Lumbini Park</div>
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
        <div className={styles.express}>
          <b className={styles.express1}>Express</b>
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
                        <div className={styles.birlaMandir1}>Birla Mandir</div>
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
                        <div className={styles.cableBridge1}>Cable Bridge</div>
                      </div>
                      <div className={styles.lumbiniParkContainer}>
                        <div className={styles.lumbiniPark1}>Lumbini Park</div>
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
        <div className={styles.pallevelugu}>
          <b className={styles.pallevelugu1}>Pallevelugu</b>
          <div className={styles.imageCards2}>
            <div className={styles.imageText2}>
              <div className={styles.imagePlaceholder2}>
                <img
                  className={styles.picturesIcon2}
                  alt=""
                  src="/pictures-8@2x.png"
                />
                <div className={styles.imagePlaceholderInner} />
              </div>
              <div className={styles.busBhavan2}>
                Energy Conservation Gold Awards for the year 2019-20 on
                improvement in fuel efficiency to Suryapet Depot.
              </div>
            </div>
            <div className={styles.contentsContainer}>
              <div className={styles.contents2}>
                <div className={styles.content12}>
                  <div className={styles.calendar2}>
                    <img className={styles.frameIcon4} alt="" />
                    <div className={styles.amTo08002}>
                      08:30 am to 08:00 pm (Weekends)
                    </div>
                  </div>
                  <div className={styles.pickup2}>
                    <img className={styles.frameIcon5} alt="" />
                    <div className={styles.pickupAlpha2}>
                      Pickup - Alpha Hotel Secundarabad
                    </div>
                  </div>
                </div>
                <div className={styles.content22}>
                  <div
                    className={styles.placesCovered2}
                  >{`Places covered & description`}</div>
                  <div className={styles.chipsContainer}>
                    <div className={styles.chips2}>
                      <div className={styles.birlaMandirFrame}>
                        <div className={styles.birlaMandir2}>Birla Mandir</div>
                      </div>
                      <div className={styles.golkondaFrame}>
                        <div className={styles.golkonda2}>Golkonda</div>
                      </div>
                      <div className={styles.taramatiBaradariFrame}>
                        <div className={styles.taramatiBaradari2}>
                          Taramati Baradari
                        </div>
                      </div>
                      <div className={styles.chowmahallaPalaceFrame}>
                        <div className={styles.chowmahallaPalace2}>
                          Chowmahalla Palace
                        </div>
                      </div>
                      <div className={styles.durgamCheruvuParkFrame}>
                        <div className={styles.durgamCheruvuPark2}>
                          Durgam Cheruvu Park
                        </div>
                      </div>
                      <div className={styles.cableBridgeFrame}>
                        <div className={styles.cableBridge2}>Cable Bridge</div>
                      </div>
                      <div className={styles.lumbiniParkFrame}>
                        <div className={styles.lumbiniPark2}>Lumbini Park</div>
                      </div>
                    </div>
                    <div
                      className={styles.packageTourWill2}
                    >{`Package tour will be starting from alpha hotel sec-bad @08:30am and take you to birla mandir, golkonda fort, taramati baradari,where you can have lunch {at your own cost} chowmahala palace, charminar, lumbini park & back to alpha hotel.`}</div>
                  </div>
                </div>
              </div>
              <div className={styles.button2}>
                <div className={styles.applyNow2}>Book Now</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cityOrdinary}>
          <b className={styles.cityOrdinary1}>City Ordinary</b>
          <div className={styles.imageCards3}>
            <div className={styles.imageText3}>
              <div className={styles.imagePlaceholder3}>
                <img
                  className={styles.picturesIcon3}
                  alt=""
                  src="/pictures-9@2x.png"
                />
                <div className={styles.ellipseDiv} />
              </div>
              <div className={styles.busBhavan3}>
                Energy Conservation Gold Awards for the year 2019-20 on
                improvement in fuel efficiency to Suryapet Depot.
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.contents3}>
                <div className={styles.content13}>
                  <div className={styles.calendar3}>
                    <img className={styles.frameIcon6} alt="" />
                    <div className={styles.amTo08003}>
                      08:30 am to 08:00 pm (Weekends)
                    </div>
                  </div>
                  <div className={styles.pickup3}>
                    <img className={styles.frameIcon7} alt="" />
                    <div className={styles.pickupAlpha3}>
                      Pickup - Alpha Hotel Secundarabad
                    </div>
                  </div>
                </div>
                <div className={styles.content23}>
                  <div
                    className={styles.placesCovered3}
                  >{`Places covered & description`}</div>
                  <div className={styles.chipsParent1}>
                    <div className={styles.chips3}>
                      <div className={styles.birlaMandirWrapper1}>
                        <div className={styles.birlaMandir3}>Birla Mandir</div>
                      </div>
                      <div className={styles.golkondaWrapper1}>
                        <div className={styles.golkonda3}>Golkonda</div>
                      </div>
                      <div className={styles.taramatiBaradariWrapper1}>
                        <div className={styles.taramatiBaradari3}>
                          Taramati Baradari
                        </div>
                      </div>
                      <div className={styles.chowmahallaPalaceWrapper1}>
                        <div className={styles.chowmahallaPalace3}>
                          Chowmahalla Palace
                        </div>
                      </div>
                      <div className={styles.durgamCheruvuParkWrapper1}>
                        <div className={styles.durgamCheruvuPark3}>
                          Durgam Cheruvu Park
                        </div>
                      </div>
                      <div className={styles.cableBridgeWrapper1}>
                        <div className={styles.cableBridge3}>Cable Bridge</div>
                      </div>
                      <div className={styles.lumbiniParkWrapper1}>
                        <div className={styles.lumbiniPark3}>Lumbini Park</div>
                      </div>
                    </div>
                    <div
                      className={styles.packageTourWill3}
                    >{`Package tour will be starting from alpha hotel sec-bad @08:30am and take you to birla mandir, golkonda fort, taramati baradari,where you can have lunch {at your own cost} chowmahala palace, charminar, lumbini park & back to alpha hotel.`}</div>
                  </div>
                </div>
              </div>
              <div className={styles.button3}>
                <div className={styles.applyNow3}>Book Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherCityServicesSection;
