import type { NextPage } from "next";
import Header2 from "../components/header2";
import styles from "./reservation-tourism.module.css";

const ReservationTourism: NextPageReservationTourismType = () => {
  return (
    <div className={styles.reservationTourism}>
      <Header2
        tSRTCLogo="/tsrtc-logo@2x.png"
        prop="/---2.svg"
        tELANGANASTATEROADTRANSPO="/telangana-state-road-transport-corporation2.svg"
      />
      <section className={styles.reservationHeroTourism}>
        <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
        <h1 className={styles.tourism}>Tourism</h1>
        <h2 className={styles.tsrtcIsHappy}>
          TSRTC is happy to announce the following package tours to our valuable
          commuters at affordable rates.
        </h2>
      </section>
      <section className={styles.reservationQuote}>
        <div className={styles.lifeIsShortAndTheWorldIsWrapper}>
          <h1 className={styles.lifeIsShortContainer}>
            <p className={styles.lifeIsShort}>
              "Life is short and the world is wide"
            </p>
            <p className={styles.travelIsThe}>
              "Travel is the investment in yourself"
            </p>
          </h1>
        </div>
        <h2 className={styles.travelAcrossTelangana}>
          Travel across Telangana on our TSRTC buses and explore tourist places.
        </h2>
      </section>
      <section className={styles.reservationDestinations}>
        <div className={styles.destinationsWrapper}>
          <h1 className={styles.destinations}>Destinations</h1>
        </div>
        <div className={styles.tourismCards}>
          <div className={styles.tourismCard}>
            <div className={styles.imageText}>
              <h2 className={styles.hyderabadDarshan}>Hyderabad Darshan</h2>
              <div className={styles.imagePlaceholder}>
                <img
                  className={styles.picturesIcon}
                  loading="lazy"
                  alt=""
                  src="/pictures2@2x.png"
                />
                <div className={styles.imagePlaceholderChild} />
              </div>
            </div>
            <div className={styles.tourismCardContent}>
              <div className={styles.contents}>
                <div className={styles.content1}>
                  <div className={styles.calendar}>
                    <img
                      className={styles.calenderIcon}
                      loading="lazy"
                      alt=""
                      src="/calender-icon.svg"
                    />
                    <div className={styles.amTo0800}>
                      08:30 am to 08:00 pm (Weekends)
                    </div>
                  </div>
                  <div className={styles.pickup}>
                    <img
                      className={styles.pickupBusIcon}
                      loading="lazy"
                      alt=""
                      src="/pickup-bus-icon.svg"
                    />
                    <div className={styles.pickupAlpha}>
                      Pickup - Alpha Hotel Secundarabad
                    </div>
                  </div>
                </div>
                <div className={styles.content2}>
                  <div
                    className={styles.placesCovered}
                  >{`Places covered & description`}</div>
                  <div className={styles.chipsTexts}>
                    <div className={styles.chips}>
                      <div className={styles.chips1}>
                        <div className={styles.birlaMandir}>Birla Mandir</div>
                      </div>
                      <div className={styles.chips2}>
                        <div className={styles.golkonda}>Golkonda</div>
                      </div>
                      <div className={styles.chips3}>
                        <div className={styles.taramatiBaradari}>
                          Taramati Baradari
                        </div>
                      </div>
                      <div className={styles.chips4}>
                        <div className={styles.chowmahallaPalace}>
                          Chowmahalla Palace
                        </div>
                      </div>
                      <div className={styles.chips5}>
                        <div className={styles.durgamCheruvuPark}>
                          Durgam Cheruvu Park
                        </div>
                      </div>
                      <div className={styles.chips6}>
                        <div className={styles.cableBridge}>Cable Bridge</div>
                      </div>
                      <div className={styles.chips7}>
                        <div className={styles.lumbiniPark}>Lumbini Park</div>
                      </div>
                    </div>
                    <div
                      className={styles.packageTourWill}
                    >{`Package tour will be starting from alpha hotel sec-bad @08:30am and take you to birla mandir, golkonda fort, taramati baradari,where you can have lunch {at your own cost} chowmahala palace, charminar, lumbini park & back to alpha hotel.`}</div>
                  </div>
                </div>
              </div>
              <button className={styles.button}>
                <div className={styles.applyNow}>Book Now</div>
              </button>
            </div>
          </div>
          <div className={styles.tourismCard1}>
            <div className={styles.imageText1}>
              <h2 className={styles.hyderabadDarshan1}>
                TTD SED Darshan Package
              </h2>
              <div className={styles.imagePlaceholder1}>
                <img
                  className={styles.picturesIcon1}
                  alt=""
                  src="/pictures-11@2x.png"
                />
                <div className={styles.imagePlaceholderItem} />
              </div>
            </div>
            <div className={styles.tourismCardContent1}>
              <div className={styles.contents1}>
                <div className={styles.content11}>
                  <div className={styles.calendar1}>
                    <img
                      className={styles.calenderIcon1}
                      alt=""
                      src="/calender-icon.svg"
                    />
                    <div className={styles.amTo08001}>
                      08:30 am to 08:00 pm (Weekends)
                    </div>
                  </div>
                  <div className={styles.pickup1}>
                    <img
                      className={styles.pickupBusIcon1}
                      alt=""
                      src="/pickup-bus-icon.svg"
                    />
                    <div className={styles.pickupAlpha1}>
                      Pickup - Alpha Hotel Secundarabad
                    </div>
                  </div>
                </div>
                <div className={styles.content21}>
                  <div
                    className={styles.placesCovered1}
                  >{`Places covered & description`}</div>
                  <div className={styles.chipsTexts1}>
                    <div className={styles.chips8}>
                      <div className={styles.chips9}>
                        <div className={styles.birlaMandir1}>Birla Mandir</div>
                      </div>
                      <div className={styles.chips10}>
                        <div className={styles.golkonda1}>Golkonda</div>
                      </div>
                      <div className={styles.chips11}>
                        <div className={styles.taramatiBaradari1}>
                          Taramati Baradari
                        </div>
                      </div>
                      <div className={styles.chips12}>
                        <div className={styles.chowmahallaPalace1}>
                          Chowmahalla Palace
                        </div>
                      </div>
                      <div className={styles.chips13}>
                        <div className={styles.durgamCheruvuPark1}>
                          Durgam Cheruvu Park
                        </div>
                      </div>
                      <div className={styles.chips14}>
                        <div className={styles.cableBridge1}>Cable Bridge</div>
                      </div>
                      <div className={styles.chips15}>
                        <div className={styles.lumbiniPark1}>Lumbini Park</div>
                      </div>
                    </div>
                    <div
                      className={styles.packageTourWill1}
                    >{`Package tour will be starting from alpha hotel sec-bad @08:30am and take you to birla mandir, golkonda fort, taramati baradari,where you can have lunch {at your own cost} chowmahala palace, charminar, lumbini park & back to alpha hotel.`}</div>
                  </div>
                </div>
              </div>
              <button className={styles.button1}>
                <div className={styles.applyNow1}>Book Now</div>
              </button>
            </div>
          </div>
          <div className={styles.tourismCard2}>
            <div className={styles.imageText2}>
              <h2 className={styles.hyderabadDarshan2}>Singareni Darshan</h2>
              <div className={styles.imagePlaceholder2}>
                <img
                  className={styles.picturesIcon2}
                  alt=""
                  src="/pictures-21@2x.png"
                />
                <div className={styles.imagePlaceholderInner} />
              </div>
            </div>
            <div className={styles.tourismCardContent2}>
              <div className={styles.contents2}>
                <div className={styles.content12}>
                  <div className={styles.calendar2}>
                    <img
                      className={styles.calenderIcon2}
                      alt=""
                      src="/calender-icon.svg"
                    />
                    <div className={styles.amTo08002}>
                      08:30 am to 08:00 pm (Weekends)
                    </div>
                  </div>
                  <div className={styles.pickup2}>
                    <img
                      className={styles.pickupBusIcon2}
                      alt=""
                      src="/pickup-bus-icon.svg"
                    />
                    <div className={styles.pickupAlpha2}>
                      Pickup - Alpha Hotel Secundarabad
                    </div>
                  </div>
                </div>
                <div className={styles.content22}>
                  <div
                    className={styles.placesCovered2}
                  >{`Places covered & description`}</div>
                  <div className={styles.chipsTexts2}>
                    <div className={styles.chips16}>
                      <div className={styles.chips17}>
                        <div className={styles.birlaMandir2}>Birla Mandir</div>
                      </div>
                      <div className={styles.chips18}>
                        <div className={styles.golkonda2}>Golkonda</div>
                      </div>
                      <div className={styles.chips19}>
                        <div className={styles.taramatiBaradari2}>
                          Taramati Baradari
                        </div>
                      </div>
                      <div className={styles.chips20}>
                        <div className={styles.chowmahallaPalace2}>
                          Chowmahalla Palace
                        </div>
                      </div>
                      <div className={styles.chips21}>
                        <div className={styles.durgamCheruvuPark2}>
                          Durgam Cheruvu Park
                        </div>
                      </div>
                      <div className={styles.chips22}>
                        <div className={styles.cableBridge2}>Cable Bridge</div>
                      </div>
                      <div className={styles.chips23}>
                        <div className={styles.lumbiniPark2}>Lumbini Park</div>
                      </div>
                    </div>
                    <div
                      className={styles.packageTourWill2}
                    >{`Package tour will be starting from alpha hotel sec-bad @08:30am and take you to birla mandir, golkonda fort, taramati baradari,where you can have lunch {at your own cost} chowmahala palace, charminar, lumbini park & back to alpha hotel.`}</div>
                  </div>
                </div>
              </div>
              <button className={styles.button2}>
                <div className={styles.applyNow2}>Book Now</div>
              </button>
            </div>
          </div>
          <div className={styles.tourismCard3}>
            <div className={styles.imageText3}>
              <h2 className={styles.hyderabadDarshan3}>
                Karthika Maasam Darshini
              </h2>
              <div className={styles.imagePlaceholder3}>
                <img
                  className={styles.picturesIcon3}
                  alt=""
                  src="/pictures-31@2x.png"
                />
                <div className={styles.ellipseDiv} />
              </div>
            </div>
            <div className={styles.tourismCardContent3}>
              <div className={styles.contents3}>
                <div className={styles.content13}>
                  <div className={styles.calendar3}>
                    <img
                      className={styles.calenderIcon3}
                      alt=""
                      src="/calender-icon.svg"
                    />
                    <div className={styles.amTo08003}>
                      08:30 am to 08:00 pm (Weekends)
                    </div>
                  </div>
                  <div className={styles.pickup3}>
                    <img
                      className={styles.pickupBusIcon3}
                      alt=""
                      src="/pickup-bus-icon.svg"
                    />
                    <div className={styles.pickupAlpha3}>
                      Pickup - Alpha Hotel Secundarabad
                    </div>
                  </div>
                </div>
                <div className={styles.content23}>
                  <div
                    className={styles.placesCovered3}
                  >{`Places covered & description`}</div>
                  <div className={styles.chipsTexts3}>
                    <div className={styles.chips24}>
                      <div className={styles.chips25}>
                        <div className={styles.birlaMandir3}>Birla Mandir</div>
                      </div>
                      <div className={styles.chips26}>
                        <div className={styles.golkonda3}>Golkonda</div>
                      </div>
                      <div className={styles.chips27}>
                        <div className={styles.taramatiBaradari3}>
                          Taramati Baradari
                        </div>
                      </div>
                      <div className={styles.chips28}>
                        <div className={styles.chowmahallaPalace3}>
                          Chowmahalla Palace
                        </div>
                      </div>
                      <div className={styles.chips29}>
                        <div className={styles.durgamCheruvuPark3}>
                          Durgam Cheruvu Park
                        </div>
                      </div>
                      <div className={styles.chips30}>
                        <div className={styles.cableBridge3}>Cable Bridge</div>
                      </div>
                      <div className={styles.chips31}>
                        <div className={styles.lumbiniPark3}>Lumbini Park</div>
                      </div>
                    </div>
                    <div
                      className={styles.packageTourWill3}
                    >{`Package tour will be starting from alpha hotel sec-bad @08:30am and take you to birla mandir, golkonda fort, taramati baradari,where you can have lunch {at your own cost} chowmahala palace, charminar, lumbini park & back to alpha hotel.`}</div>
                  </div>
                </div>
              </div>
              <button className={styles.button3}>
                <div className={styles.applyNow3}>Book Now</div>
              </button>
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
        </footer>
        <div className={styles.copyright2021TsrtcAllRiWrapper}>
          <div className={styles.copyright2021Tsrtc}>
            Copyright © 2021 TSRTC, All Rights Reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReservationTourism;
