import type { NextPage } from "next";
import FormContainer from "./form-container";
import styles from "./book-your-ticket1.module.css";

export type BookYourTicket1Type = {
  className?: string;
};

const BookYourTicket1: NextPage<BookYourTicket1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.bookYourTicket, className].join(" ")}>
      <div className={styles.textsWrapper}>
        <div className={styles.texts}>
          <div className={styles.bookYourTicketWrapper}>
            <h1 className={styles.bookYourTicket1}>Book Your Ticket</h1>
          </div>
          <p className={styles.loremIpsumDolor}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, adipiscing elit. sed do eiusmod tempor incididunt
            ut.
          </p>
        </div>
      </div>
      <img
        className={styles.illustration22}
        alt=""
        src="/illustration-2-2@2x.png"
      />
      <div className={styles.shape} />
      <div className={styles.bookYourTicketFormContaineWrapper}>
        <form className={styles.bookYourTicketFormContaine}>
          <div className={styles.bookYourTicketFormTabs}>
            <div className={styles.searchTabsContainer}>
              <div className={styles.searchTabs}>
                <button className={styles.cityToCityBus}>
                  <img className={styles.icons} alt="" src="/icons.svg" />
                  <b className={styles.intercity}>Intercity</b>
                </button>
                <div className={styles.cityToCityBus1}>
                  <img className={styles.icons1} alt="" src="/icons-1.svg" />
                  <div className={styles.intracity}>Intracity</div>
                </div>
              </div>
            </div>
            <div className={styles.bookYourTicketForm}>
              <div className={styles.formActionFiled}>
                <FormContainer date="From" prop="Hyderabad (HYD)" />
                <FormContainer
                  date="To"
                  prop="Warangal (WL)"
                  propBorderRadius="unset"
                  propMinWidth="17px"
                  propDisplay="inline-block"
                  propMinWidth1="121px"
                />
                <div className={styles.formContainer}>
                  <div className={styles.field}>
                    <div className={styles.date}>Date</div>
                    <div className={styles.inputField}>
                      <div className={styles.div}>14-05-2024</div>
                      <img
                        className={styles.icons2}
                        alt=""
                        src="/icons-4.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.quickDateSelections}>
                    <div className={styles.quickDates}>
                      <div className={styles.today}>Today</div>
                    </div>
                    <div className={styles.quickDates1}>
                      <div className={styles.tomorrow}>Tomorrow</div>
                    </div>
                  </div>
                  <button className={styles.button}>
                    <b className={styles.applyNow}>Search Buses</b>
                  </button>
                </div>
                <div className={styles.wrapperExchange}>
                  <img
                    className={styles.exchangeIcon}
                    loading="lazy"
                    alt=""
                    src="/exchange.svg"
                  />
                </div>
              </div>
              <div className={styles.checkboxField}>
                <input className={styles.frameInput} type="checkbox" />
                <div className={styles.iWantTo}>
                  I want to book a round trip
                </div>
              </div>
            </div>
          </div>
          <div className={styles.interestedRouteContainer}>
            <div className={styles.interestedRouteTitle}>
              <div className={styles.routesYouMay}>
                Routes you may be interested in
              </div>
              <img className={styles.lineIcon} alt="" src="/line.svg" />
            </div>
            <div className={styles.routeChipsContainer}>
              <div className={styles.routeChips}>
                <div className={styles.routeChips1}>
                  <div className={styles.hyderabad}>Hyderabad</div>
                  <img className={styles.icons3} alt="" src="/icons-5.svg" />
                  <div className={styles.bangalore}>Bangalore</div>
                </div>
                <div className={styles.routeChips2}>
                  <div className={styles.hyderabad1}>Hyderabad</div>
                  <img className={styles.icons4} alt="" src="/icons-5.svg" />
                  <div className={styles.bangalore1}>Chennai</div>
                </div>
                <div className={styles.routeChips3}>
                  <div className={styles.hyderabad2}>Hyderabad</div>
                  <img className={styles.icons5} alt="" src="/icons-5.svg" />
                  <div className={styles.bangalore2}>Vijayawada</div>
                </div>
                <div className={styles.routeChips4}>
                  <div className={styles.hyderabad3}>Hyderabad</div>
                  <img className={styles.icons6} alt="" src="/icons-5.svg" />
                  <div className={styles.bangalore3}>Srisailam</div>
                </div>
                <div className={styles.routeChips5}>
                  <div className={styles.hyderabad4}>Hyderabad</div>
                  <img className={styles.icons7} alt="" src="/icons-5.svg" />
                  <div className={styles.bangalore4}>Tirupati</div>
                </div>
              </div>
              <button className={styles.button1}>
                <div className={styles.applyNow1}>View all Routes</div>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.bg}>
        <img
          className={styles.image709Icon}
          loading="lazy"
          alt=""
          src="/image-709@2x.png"
        />
        <img className={styles.image710Icon} alt="" src="/image-710@2x.png" />
        <img className={styles.image711Icon} alt="" src="/image-711@2x.png" />
      </div>
    </section>
  );
};

export default BookYourTicket1;
