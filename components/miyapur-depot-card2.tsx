import type { NextPage } from "next";
import styles from "./miyapur-depot-card2.module.css";

export type MiyapurDepotCard2Type = {
  className?: string;
};

const MiyapurDepotCard2: NextPage<MiyapurDepotCard2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.miyapurDepotCard1, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.routeParent}>
            <div className={styles.route}>Route</div>
            <b className={styles.al}>AL</b>
          </div>
          <div className={styles.fromParent}>
            <div className={styles.from}>From</div>
            <b className={styles.jbs}>JBS</b>
          </div>
        </div>
        <div className={styles.toParent}>
          <div className={styles.to}>To</div>
          <b className={styles.rgia}>RGIA</b>
        </div>
        <div className={styles.viaParent}>
          <div className={styles.via}>Via</div>
          <h3 className={styles.tarnakaUppalL}>
            Tarnaka, Uppal, L B Nagar, Pahadi Sharief
          </h3>
        </div>
      </div>
      <div className={styles.earlyMorningAccordionParent}>
        <div className={styles.earlyMorningAccordion}>
          <div className={styles.accordion}>
            <div className={styles.bg} />
            <div className={styles.before6Am}>
              Early morning before 6 am (10)
            </div>
            <img
              className={styles.accordianDropdownIcon}
              loading="lazy"
              alt=""
              src="/accordian-dropdown.svg"
            />
          </div>
          <div className={styles.earlyMorningValues}>
            <div className={styles.bg1} />
            <div className={styles.items}>
              <div className={styles.chips}>
                <div className={styles.golkonda}>00:00</div>
              </div>
              <div className={styles.chips1}>
                <div className={styles.golkonda1}>00:40</div>
              </div>
              <div className={styles.chips2}>
                <div className={styles.golkonda2}>01:20</div>
              </div>
              <div className={styles.chips3}>
                <div className={styles.golkonda3}>02:00</div>
              </div>
              <div className={styles.chips4}>
                <div className={styles.golkonda4}>03:30</div>
              </div>
              <div className={styles.chips5}>
                <div className={styles.golkonda5}>04:10</div>
              </div>
              <div className={styles.chips6}>
                <div className={styles.golkonda6}>04:50</div>
              </div>
              <div className={styles.chips7}>
                <div className={styles.golkonda7}>05:10</div>
              </div>
              <div className={styles.chips8}>
                <div className={styles.golkonda8}>05:50</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.otherAccordions}>
          <div className={styles.accordion1}>
            <div className={styles.bg2} />
            <div className={styles.before6Am1}>Morning 6 am to 12 pm (07)</div>
            <img
              className={styles.accordianDropdowntrueIcon}
              loading="lazy"
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordion2}>
            <div className={styles.bg3} />
            <div className={styles.before6Am2}>
              Afternoon 12 pm to 6 pm (02)
            </div>
            <img
              className={styles.accordianDropdowntrueIcon1}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordion3}>
            <div className={styles.bg4} />
            <div className={styles.before6Am3}>Evening after 6 pm (43)</div>
            <img
              className={styles.accordianDropdowntrueIcon2}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiyapurDepotCard2;
