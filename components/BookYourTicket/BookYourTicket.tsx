import { useState } from "react";
import type { NextPage } from "next";
import styles from "./BookYourTicket.module.css";
import ReservationForm from "../ReservationForm/ReservationForm";
import { BOOK_YOUR_TICKET, BOOK_YOUR_TICKET_PARAGRAPH, ROUTES_TEXT, VIEW_ALL_ROUTES } from "../../constants";

export type BookYourTicketType = {
  className?: string;
  routes: { from: string; to: string }[];
  marginTop?: string; 
};

const BookYourTicket: NextPage<BookYourTicketType> = ({ className = "", routes, marginTop }) => {
  const [showAllRoutes, setShowAllRoutes] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState("");
  const [selectedTo, setSelectedTo] = useState("");

  const displayedRoutes = showAllRoutes ? routes : routes.slice(0, 5);

  const handleViewAllRoutes = () => {
    setShowAllRoutes(true);
  };

  const handleRouteSelect = (from: string, to: string) => {
    setSelectedFrom(from);
    setSelectedTo(to);
  };

  return (
    <section className={[styles.bookYourTicket, className].join(" ")} style={{ marginTop }}> {/* Add marginTop style here */}
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
          <ReservationForm routes={routes} onRouteSelect={handleRouteSelect} selectedFrom={selectedFrom} selectedTo={selectedTo} />
          <div className={styles.interestedRouteContainer}>
            <div className={styles.interestedRouteTitle}>
              <div className={styles.routesYouMay}>
                {ROUTES_TEXT}
              </div>
              <img className={styles.lineIcon} alt="line icon" src="/line.svg" loading="lazy" />
            </div>
            <div className={styles.routeChipsContainer}>
              {displayedRoutes.map((route, index) => (
                <div key={index} className={styles.routeChips} onClick={() => handleRouteSelect(route.from, route.to)}>
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
              {!showAllRoutes && (
                <button type="button" className={styles.button1} onClick={handleViewAllRoutes}>
                  <div className={styles.applyNow1}>{VIEW_ALL_ROUTES}</div>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookYourTicket;
