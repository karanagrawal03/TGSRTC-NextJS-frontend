import type { NextPage } from "next";
import styles from "./logistic-book-your-cargo-secti.module.css";

export type LogisticBookYourCargoSectiType = {
  className?: string;
};

const LogisticBookYourCargoSecti: NextPage<LogisticBookYourCargoSectiType> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.logisticBookYourCargoSecti, className].join(" ")}
    >
      <div className={styles.bookingTitleContainer}>
        <h1 className={styles.bookYourCargo}>{`Book Your Cargo `}</h1>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cards}>
          <div className={styles.infographicContainerWrapper}>
            <div className={styles.infographicContainer}>
              <div className={styles.infographics}>
                <div className={styles.frameParent}>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                    <h1 className={styles.h1}>₹</h1>
                  </div>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/group-1000013273.svg"
                  />
                </div>
                <div className={styles.infographicsChild} />
              </div>
            </div>
          </div>
          <div className={styles.bodyContainer}>
            <div className={styles.texts}>
              <h2 className={styles.busPasses}>
                <p className={styles.bulkCtvCargo}>Bulk CTV Cargo</p>
                <p className={styles.rates}>Rates</p>
              </h2>
              <p className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod
                tempor incididunt ut. adipiscing elit. sed do eiusmod tempor
                incididunt ut.
              </p>
            </div>
            <div className={styles.lineSeparater}>
              <img className={styles.lineSeparatorIcon} alt="" />
            </div>
            <button className={styles.buttonsContainer}>
              <div className={styles.button1}>
                <b className={styles.applyNow}>Apply Now</b>
              </div>
              <div className={styles.button2}>
                <div className={styles.applyNow1}>Apply Now</div>
              </div>
            </button>
          </div>
        </div>
        <div className={styles.cards1}>
          <div className={styles.infographicContainerContainer}>
            <div className={styles.infographicContainer1}>
              <div className={styles.infographics1}>
                <div className={styles.frameGroup}>
                  <div className={styles.vectorGroup}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-1.svg"
                    />
                    <h1 className={styles.h11}>%</h1>
                  </div>
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/group-1000013264.svg"
                  />
                </div>
                <div className={styles.infographicsItem} />
              </div>
            </div>
          </div>
          <div className={styles.bodyContainer1}>
            <div className={styles.texts1}>
              <h2 className={styles.busPasses1}>
                <p className={styles.tariffParcels}>{`Tariff Parcels &`}</p>
                <p className={styles.parcelCovers}>Parcel Covers</p>
              </h2>
              <p className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet, adipiscing elit. sed do eiusmod
                tempor incididunt ut. adipiscing elit. sed do eiusmod tempor
                incididunt ut.
              </p>
            </div>
            <div className={styles.lineSeparater1}>
              <img className={styles.lineSeparatorIcon1} alt="" />
            </div>
            <button className={styles.buttonsContainer1}>
              <div className={styles.button11}>
                <b className={styles.applyNow2}>Apply Now</b>
              </div>
              <div className={styles.button21}>
                <div className={styles.applyNow3}>Apply Now</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticBookYourCargoSecti;
