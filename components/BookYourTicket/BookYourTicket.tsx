import type { NextPage } from "next";
import styles from "./BookYourTicket.module.css";
import ReservationForm from "../ReservationForm/ReservationForm";

export type BookYourTicket1Type = {
  className?: string;
};

const routes = [
  { from: "Hyderabad", to: "Bangalore" },
  { from: "Hyderabad", to: "Chennai" },
  { from: "Hyderabad", to: "Vijayawada" },
  { from: "Hyderabad", to: "Srisailam" },
  { from: "Hyderabad", to: "Tirupati" },
];

const BookYourTicket1: NextPage<BookYourTicket1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.bookYourTicket, className].join(" ")}>
      <div className={styles.textsWrapper}>
        <div className={styles.texts}>
          <div className={styles.bookYourTicketWrapper}>
            <h1 className={styles.bookYourTicket1}>{"Book Your Ticket"}</h1>
          </div>
          <p className={styles.loremIpsumDolor}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, adipiscing elit. sed do eiusmod tempor incididunt
            ut.
          </p>
        </div>
      </div>
      <div className={styles.bookYourTicketFormContaineWrapper}>
        <form className={styles.bookYourTicketFormContaine}>
          <ReservationForm />
          <div className={styles.interestedRouteContainer}>
            <div className={styles.interestedRouteTitle}>
              <div className={styles.routesYouMay}>
                {"Routes you may be interested in"}
              </div>
              <img className={styles.lineIcon} alt="" src="/line.svg" />
            </div>
            <div className={styles.routeChipsContainer}>
              {routes.map((route, index) => (
                <div key={index} className={styles.routeChips}>
                  <div className={styles.city}>{route.from}</div>
                  <img
                    className={styles.icons3}
                    alt=""
                    src="/arrow-right-icons.svg"
                  />
                  <div className={styles.city}>{route.to}</div>
                </div>
              ))}
              <button className={styles.button1}>
                <div className={styles.applyNow1}>{"View all Routes"}</div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookYourTicket1;
