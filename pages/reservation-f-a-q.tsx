import type { NextPage } from "next";
import AccordionItems from "../components/accordion-items";
import FrameComponent3 from "../components/frame-component3";
import styles from "./reservation-f-a-q.module.css";

const ReservationFAQ: NextPageReservationFAQType = () => {
  return (
    <div className={styles.reservationFaq}>
      <img className={styles.busDust} alt="" src="/bus--dust@2x.png" />
      <header className={styles.header}>
        <div className={styles.tsrtcLogo}>
          <img
            className={styles.tsrtcLogoIcon}
            loading="lazy"
            alt=""
            src="/tsrtc-logo1@2x.png"
          />
          <div className={styles.tsrtcLogo1}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/---3.svg"
            />
            <img
              className={styles.telanganaStateRoadTransport}
              loading="lazy"
              alt=""
              src="/telangana-state-road-transport-corporation3.svg"
            />
          </div>
        </div>
        <div className={styles.tabContainer}>
          <div className={styles.navTabs}>
            <a className={styles.reservations}>Home</a>
          </div>
          <div className={styles.navTabs1}>
            <a className={styles.reservations1}>Reservations</a>
          </div>
          <div className={styles.navTabs2}>
            <a className={styles.reservations2}>Logistics</a>
          </div>
          <div className={styles.navTabs3}>
            <a className={styles.reservations3}>Bus Passes</a>
          </div>
          <div className={styles.navTabs4}>
            <a className={styles.reservations4}>About</a>
          </div>
          <div className={styles.navTabs5}>
            <a className={styles.reservations5}>Tenders</a>
          </div>
          <div className={styles.navTabs6}>
            <a className={styles.reservations6}>TGSRTC Hospital</a>
          </div>
          <div className={styles.navTabs7}>
            <a className={styles.reservations7}>Contact us</a>
          </div>
        </div>
      </header>
      <img
        className={styles.reservationHeroFaq}
        alt=""
        src="/reservation-hero-faq@2x.png"
      />
      <div className={styles.reservationFaqAccordians}>
        <div className={styles.question}>
          <div className={styles.frequentlyAskedQuestions}>
            Frequently Asked Questions
          </div>
          <div className={styles.accordion}>
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
        <AccordionItems before6Am25="How to postpone of TGSRTC ticket" />
        <div className={styles.accordion1}>
          <div className={styles.bg1} />
          <div className={styles.before6AmContainer}>
            <ol className={styles.studentConcessionalRoutePas}>
              <li>Student Concessional Route Passes in Cities / Towns:</li>
            </ol>
          </div>
          <img
            className={styles.accordianDropdownIcon}
            alt=""
            src="/accordian-dropdown.svg"
          />
        </div>
        <FrameComponent3 />
        <AccordionItems before6Am25="How to cancel to ticket?" />
        <AccordionItems before6Am25=" Explain what is return journey ticket?" />
        <AccordionItems before6Am25="Are these tickets available with Agents?" />
        <AccordionItems before6Am25="Who is an Authorised Ticket Booking Agent (ATB)?" />
        <AccordionItems before6Am25="What are the services offered by Authorised Ticket Booking Agent?" />
        <AccordionItems before6Am25="Details of Fare collection to a child Child ticket?" />
        <AccordionItems before6Am25="Can I get my ticket reserved on plastic money (Credit card) ?" />
        <AccordionItems before6Am25="What are the special buses and schemes available for Sabarimalai pilgrims?" />
        <AccordionItems before6Am25="What are the important bus stations in TGSRTC?" />
        <AccordionItems before6Am25=" What are the important facilities provided at these Bus Stations?" />
        <AccordionItems before6Am25="What is the tariff for luggage carried in buses?" />
        <AccordionItems before6Am25="Are there any dormitories provided in Bus Stations?" />
        <AccordionItems before6Am25="Are there any Deluxe Lounges in bus stations?" />
        <AccordionItems before6Am25="What are the charges for using Deluxe Lounges?" />
        <AccordionItems before6Am25="Any Porter trolley facility is provided?" />
        <AccordionItems before6Am25="Is any Wheel Chair facility provided for Physically challenged at Bus Stations or termini?" />
        <AccordionItems before6Am25="Do I have to pay extra when compared to buying the tickets in the traditional way?" />
        <AccordionItems before6Am25="I've lost my ticket what do I do now?" />
        <AccordionItems before6Am25="I don't have a credit can I still buy tickets at TGSRTC?" />
        <AccordionItems before6Am25="I missed the bus. Do I get refund?" />
        <AccordionItems before6Am25="What credit/debit cards do you accept?" />
        <AccordionItems before6Am25="What payment options do i have?" />
        <AccordionItems before6Am25="Is there any other option to book tickets from TGSRTC?" />
        <div className={styles.accordion2}>
          <div className={styles.bg2} />
          <div className={styles.before6Am1}>
            How safe are online transactions?
          </div>
          <img
            className={styles.accordianDropdowntrueIcon1}
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
      </div>
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
              <img className={styles.icon1} alt="" src="/----11.svg" />
              <img
                className={styles.telanganaStateRoadTransport1}
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
              <div className={styles.reservations8}>Reservations</div>
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
          <div className={styles.recognitionContainer}>
            <div className={styles.recognitionContainer1}>
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
              <div className={styles.recognitionBackground}>
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
                  src="/social-media-icon-21@2x.png"
                />
                <img
                  className={styles.socialMediaIcon3}
                  loading="lazy"
                  alt=""
                  src="/social-media-icon-33@2x.png"
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
        <div className={styles.copyrightContainer}>
          <div className={styles.copyright2021Tgsrtc}>
            Copyright © 2021 TGSRTC, All Rights Reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReservationFAQ;
