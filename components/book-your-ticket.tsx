import type { NextPage } from "next";
import styles from "./book-your-ticket.module.css";
import { BOOK_YOUR_TICKET, BOOK_YOUR_TICKET_PARAGRAPH, DATE_LABEL, FROM_LABEL, HYDERABAD_LABEL, ROUND_TRIP, ROUTES_TEXT, SEARCH_BUSSES, TODAY_LABEL, TOMMAROW_LABEL, TO_LABEL, VIEW_ALL_ROUTES, WARANGAL_LABEL } from "../constants";

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
                <h1 className={styles.bookYourTicket1}>{BOOK_YOUR_TICKET}</h1>
              </div>
              <p className={styles.loremIpsumDolor}>
                {BOOK_YOUR_TICKET_PARAGRAPH}
              </p>
            </div>
          </div>
          <form className={styles.bookYourTicketFormContaine}>
            <div className={styles.bookYourTicketFormTabs}>
              <div className={styles.searchTabsContainer}>
                <div className={styles.searchTabs}>
                  <button className={styles.cityToCityBus}>
                    <img className={styles.icons} alt="intercity icon" src="/icons.svg" loading="lazy" />
                    <b className={styles.intercity}>Intercity</b>
                  </button>
                  <div className={styles.cityToCityBus1}>
                    <img className={styles.icons1} alt="intracity icon" src="/icons-1.svg" loading="lazy"/>
                    <div className={styles.intracity}>Intracity</div>
                  </div>
                </div>
              </div>
              <div className={styles.bookYourTicketForm}>
                <div className={styles.formActionFiled}>
                  <div className={styles.formContainer}>
                    <div className={styles.field}>
                      <div className={styles.date}>{FROM_LABEL}</div>
                      <div className={styles.inputField}>
                        <div className={styles.div}>{HYDERABAD_LABEL}</div>
                        <img
                          className={styles.icons2}
                          alt="dropdown icon"
                          src="/icons-2.svg"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.formContainer1}>
                    <div className={styles.field1}>
                      <div className={styles.date1}>{TO_LABEL}</div>
                      <div className={styles.inputField1}>
                        <div className={styles.div1}>{WARANGAL_LABEL}</div>
                        <img
                          className={styles.icons3}
                          alt="dropdown icon"
                          src="/icons-2.svg"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.formContainer2}>
                    <div className={styles.field2}>
                      <div className={styles.date2}>{DATE_LABEL}</div>
                      <div className={styles.inputField2}>
                        <div className={styles.div2}>{DATE_LABEL}</div>
                        <img
                          className={styles.icons4}
                          alt="calender icon"
                          src="/icons-4.svg"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className={styles.quickDateSelections}>
                      <div className={styles.quickDates}>
                        <div className={styles.today}>{TODAY_LABEL}</div>
                      </div>
                      <div className={styles.quickDates1}>
                        <div className={styles.tomorrow}>{TOMMAROW_LABEL}</div>
                      </div>
                    </div>
                    <button className={styles.button}>
                      <b className={styles.applyNow}>{SEARCH_BUSSES}</b>
                    </button>
                  </div>
                  <div className={styles.wrapperExchange}>
                    <img
                      className={styles.exchangeIcon}
                      loading="lazy"
                      alt="exchange icon"
                      src="/exchange.svg"
                    />
                  </div>
                </div>
                <div className={styles.checkboxField}>
                  <input className={styles.frameInput} type="checkbox" />
                  <div className={styles.iWantTo}>
                   {ROUND_TRIP}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.interestedRouteContainer}>
              <div className={styles.interestedRouteTitle}>
                <div className={styles.routesYouMay}>
                 {ROUTES_TEXT}
                </div>
                <img className={styles.lineIcon} alt="line icon" src="/line.svg" loading="lazy"
                />
              </div>
              <div className={styles.routeChipsContainer}>
                <div className={styles.routeChips}>
                  <div className={styles.routeChips1}>
                    <div className={styles.hyderabad}>Hyderabad</div>
                    <img className={styles.icons5} alt="right arrow" src="/icons-5.svg" loading="lazy"/>
                    <div className={styles.bangalore}>Bangalore</div>
                  </div>
                  <div className={styles.routeChips2}>
                    <div className={styles.hyderabad1}>Hyderabad</div>
                    <img className={styles.icons6} alt="right arrow" src="/icons-5.svg" loading="lazy"/>
                    <div className={styles.bangalore1}>Chennai</div>
                  </div>
                  <div className={styles.routeChips3}>
                    <div className={styles.hyderabad2}>Hyderabad</div>
                    <img className={styles.icons7} alt="right arrow" src="/icons-5.svg" loading="lazy"/>
                    <div className={styles.bangalore2}>Vijayawada</div>
                  </div>
                  <div className={styles.routeChips4}>
                    <div className={styles.hyderabad3}>Hyderabad</div>
                    <img className={styles.icons8} alt="right arrow" src="/icons-5.svg" loading="lazy"/>
                    <div className={styles.bangalore3}>Srisailam</div>
                  </div>
                  <div className={styles.routeChips5}>
                    <div className={styles.hyderabad4}>Hyderabad</div>
                    <img className={styles.icons9} alt="right arrow" src="/icons-5.svg" loading="lazy"/>
                    <div className={styles.bangalore4}>Tirupati</div>
                  </div>
                </div>
                <button className={styles.button1}>
                  <div className={styles.applyNow1}>{VIEW_ALL_ROUTES}</div>
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
