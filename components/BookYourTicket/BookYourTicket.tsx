import type { NextPage } from "next";
import styles from "./BookYourTicket.module.css";
import ReservationForm from "../ReservationForm/ReservationForm";
import { BOOK_YOUR_TICKET, BOOK_YOUR_TICKET_PARAGRAPH, ROUTES_TEXT, VIEW_ALL_ROUTES } from "../../constants";

export type BookYourTicketType = {
  className?: string;
  routes: { from: string; to: string }[];
};

const BookYourTicket: NextPage<BookYourTicketType> = ({ className = "", routes }) => {
  return (
    <section className={[styles.bookYourTicket, className].join(" ")}>
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
      <div className={styles.bookYourTicketFormContaineWrapper}>
        <form className={styles.bookYourTicketFormContaine}>
          <ReservationForm />
          <div className={styles.interestedRouteContainer}>
            <div className={styles.interestedRouteTitle}>
              <div className={styles.routesYouMay}>
                {ROUTES_TEXT}
              </div>
              <img className={styles.lineIcon} alt="line icon" src="/line.svg" loading="lazy"/>
            </div>
            <div className={styles.routeChipsContainer}>
              {routes?.map((route, index) => (
                <div key={index} className={styles.routeChips}>
                  <div className={styles.city}>{route.from}</div>
                  <img
                    className={styles.icons3}
                    alt="right arrow icon"
                    src="/arrow-right-icons.svg"
                    loading="lazy"
                  />
                  <div className={styles.city}>{route.to}</div>
                </div>
              ))}
              <button className={styles.button1}>
                <div className={styles.applyNow1}>{VIEW_ALL_ROUTES}</div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookYourTicket;
