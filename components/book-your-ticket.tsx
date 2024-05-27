import type { NextPage } from "next";
import styles from "./book-your-ticket.module.css";

export type BookYourTicketType = {
  className?: string;
};

const BookYourTicket: NextPage<BookYourTicketType> = ({ className = "" }) => {
  return (
    <section className={[styles.bookYourTicket, className].join(" ")}>
      <div className={styles.bookYourTicketInner}>
        <div className={styles.frameParent}>
          <div className={styles.textsWrapper}>
            <div className={styles.texts}>
              <div className={styles.bookYourTicketWrapper}>
                <h1 className={styles.bookYourTicket1}>Book Your Ticket</h1>
              </div>
              <p className={styles.loremIpsumDolor}>
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor
                incididunt ut.
              </p>
            </div>
          </div>
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
                  <div className={styles.formContainer}>
                    <div className={styles.field}>
                      <div className={styles.date}>From</div>
                      <div className={styles.inputField}>
                        <div className={styles.div}>Hyderabad (HYD)</div>
                        <img
                          className={styles.icons2}
                          alt=""
                          src="/icons-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.formContainer1}>
                    <div className={styles.field1}>
                      <div className={styles.date1}>To</div>
                      <div className={styles.inputField1}>
                        <div className={styles.div1}>Warangal (WL)</div>
                        <img
                          className={styles.icons3}
                          alt=""
                          src="/icons-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.formContainer2}>
                    <div className={styles.field2}>
                      <div className={styles.date2}>Date</div>
                      <div className={styles.inputField2}>
                        <div className={styles.div2}>14-05-2024</div>
                        <img
                          className={styles.icons4}
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
                    <img className={styles.icons5} alt="" src="/icons-5.svg" />
                    <div className={styles.bangalore}>Bangalore</div>
                  </div>
                  <div className={styles.routeChips2}>
                    <div className={styles.hyderabad1}>Hyderabad</div>
                    <img className={styles.icons6} alt="" src="/icons-5.svg" />
                    <div className={styles.bangalore1}>Chennai</div>
                  </div>
                  <div className={styles.routeChips3}>
                    <div className={styles.hyderabad2}>Hyderabad</div>
                    <img className={styles.icons7} alt="" src="/icons-5.svg" />
                    <div className={styles.bangalore2}>Vijayawada</div>
                  </div>
                  <div className={styles.routeChips4}>
                    <div className={styles.hyderabad3}>Hyderabad</div>
                    <img className={styles.icons8} alt="" src="/icons-5.svg" />
                    <div className={styles.bangalore3}>Srisailam</div>
                  </div>
                  <div className={styles.routeChips5}>
                    <div className={styles.hyderabad4}>Hyderabad</div>
                    <img className={styles.icons9} alt="" src="/icons-5.svg" />
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
      </div>
      <img
        className={styles.illustration22}
        alt=""
        src="/illustration-2-2@2x.png"
      />
      <div className={styles.shape} />
      <div className={styles.bg}>
        <img className={styles.image709Icon} alt="" src="/image-709@2x.png" />
        <img className={styles.image710Icon} alt="" src="/image-710@2x.png" />
        <img className={styles.image711Icon} alt="" src="/image-711@2x.png" />
      </div>
    </section>
  );
};

export default BookYourTicket;
