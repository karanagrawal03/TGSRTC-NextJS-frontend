import type { NextPage } from "next";
import Cards2 from "./cards2";
import styles from "./bus-pass-other-bus-passes.module.css";

export type BusPassOtherBusPassesType = {
  className?: string;
};

const BusPassOtherBusPasses: NextPage<BusPassOtherBusPassesType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.busPassOtherBusPasses, className].join(" ")}>
      <h1 className={styles.otherBusPasses}>Other Bus Passes</h1>
      <div className={styles.cardsContainer}>
        <Cards2
          pictures="pending_I51:14429;717:19816"
          pictures1="pending_I51:14429;717:19838"
          internationalWomensDay=" Monthly Season Tickets"
        />
        <Cards2
          pictures="pending_I51:14430;717:19816"
          pictures1="pending_I51:14430;717:19838"
          internationalWomensDay="Physically Challenged"
        />
        <Cards2
          pictures="pending_I51:14431;717:19816"
          pictures1="pending_I51:14431;717:19838"
          internationalWomensDay="NGO's Bus Pass."
        />
        <Cards2
          pictures="pending_I51:14432;717:19816"
          pictures1="pending_I51:14432;717:19838"
          internationalWomensDay="Unemployed Youth"
        />
        <Cards2
          pictures="pending_I51:14433;717:19816"
          pictures1="pending_I51:14433;717:19838"
          internationalWomensDay="Journalists"
        />
        <Cards2
          pictures="pending_I51:14434;717:19816"
          pictures1="pending_I51:14434;717:19838"
          internationalWomensDay="Freedom Fighters"
        />
        <Cards2
          pictures="pending_I51:14435;717:19816"
          pictures1="pending_I51:14435;717:19838"
          internationalWomensDay="Dialysis Patients"
        />
        <div className={styles.cards}>
          <div className={styles.imageWeb}>
            <img className={styles.picturesIcon} alt="" />
          </div>
          <div className={styles.imageMobile}>
            <img className={styles.picturesIcon1} alt="" />
          </div>
          <div className={styles.cardTextHolder}>
            <div className={styles.texts}>
              <div className={styles.internationalWomensDayContainer}>
                <p className={styles.mlasMpsMlcs}>{`MLAs, MPs, MLCs `}</p>
                <p className={styles.andSpouses}>and Spouses</p>
              </div>
              <div
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor incididunt ut.  adipiscing elit. sed do eiusmod tempor `}</div>
            </div>
            <div className={styles.lineSeparater}>
              <img
                className={styles.lineSeparatorIcon}
                alt=""
                src="/line-separator2.svg"
              />
            </div>
            <div className={styles.buttonHolder}>
              <div className={styles.viewDetails}>View Details</div>
              <div className={styles.button2}>
                <div className={styles.applyNow}>Apply Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusPassOtherBusPasses;
