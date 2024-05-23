import type { NextPage } from "next";
import Accordians from "./accordians";
import styles from "./frame-component1.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.containerParent, className].join(" ")}>
      <div className={styles.container}>
        <h2 className={styles.tsrtcMiyapur2}>
          TSRTC Miyapur -2 Depot Pushpak Service Operations
        </h2>
        <div className={styles.tsrtcAirportPushpak}>
          TSRTC Airport Pushpak bus timings - Towards RGIA
        </div>
      </div>
      <form className={styles.table}>
        <div className={styles.title}>
          <button className={styles.cells}>
            <div className={styles.name}>#</div>
          </button>
          <button className={styles.cells1}>
            <div className={styles.cells2}>
              <div className={styles.name1}>Route</div>
            </div>
          </button>
          <div className={styles.cells3}>
            <div className={styles.cells4}>
              <div className={styles.name2}>From</div>
            </div>
          </div>
          <button className={styles.cells5}>
            <div className={styles.cells6}>
              <div className={styles.name3}>To</div>
            </div>
          </button>
          <div className={styles.cells7}>
            <div className={styles.cells8}>
              <div className={styles.name4}>Via</div>
            </div>
          </div>
          <div className={styles.cells9}>
            <div className={styles.table1} />
          </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.rowCells}>
            <div className={styles.cells10}>
              <div className={styles.bg} />
              <div className={styles.name5}>1</div>
            </div>
            <div className={styles.contentCell}>
              <div className={styles.cells11}>
                <div className={styles.bg1} />
                <div className={styles.name6}>AL</div>
              </div>
            </div>
            <div className={styles.contentCell1}>
              <div className={styles.cells12}>
                <div className={styles.bg2} />
                <div className={styles.name7}>JBS</div>
              </div>
            </div>
            <div className={styles.contentCell2}>
              <div className={styles.cells13}>
                <div className={styles.bg3} />
                <div className={styles.name8}>RGIA</div>
              </div>
            </div>
            <div className={styles.contentCell3}>
              <div className={styles.cells14}>
                <div className={styles.bg4} />
                <div className={styles.name9}>
                  Tarnaka, Uppal, L B Nagar, Pahadi Sharief
                </div>
              </div>
            </div>
            <div className={styles.contentCell4}>
              <div className={styles.cells15}>
                <div className={styles.bg5} />
                <div className={styles.name10}>Rs 51.00</div>
              </div>
            </div>
          </div>
          <div className={styles.accordian}>
            <div className={styles.bg6} />
            <div className={styles.nameWrapper}>
              <div className={styles.name11}>
                Early morning before 6 am (10)
              </div>
            </div>
            <img
              className={styles.accordianDropdownIcon}
              alt=""
              src="/accordian-dropdown.svg"
            />
          </div>
          <div className={styles.datasContainer}>
            <div className={styles.bg7} />
            <div className={styles.div}>00:00</div>
            <div className={styles.datasContainerInner}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/vector-234250846.svg"
              />
            </div>
            <div className={styles.div1}>00:40</div>
            <div className={styles.datasContainerChild}>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/vector-234250846.svg"
              />
            </div>
            <div className={styles.div2}>01:20</div>
            <div className={styles.frameDiv}>
              <img
                className={styles.frameInner}
                loading="lazy"
                alt=""
                src="/vector-234250846.svg"
              />
            </div>
            <div className={styles.div3}>02:00</div>
            <div className={styles.datasContainerInner1}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector-234250846.svg"
              />
            </div>
            <div className={styles.div4}>03:30</div>
            <div className={styles.datasContainerInner2}>
              <img
                className={styles.frameChild1}
                loading="lazy"
                alt=""
                src="/vector-234250846.svg"
              />
            </div>
            <div className={styles.div5}>04:10</div>
            <div className={styles.datasContainerInner3}>
              <img
                className={styles.frameChild2}
                alt=""
                src="/vector-234250846.svg"
              />
            </div>
            <div className={styles.div6}>04:50</div>
            <div className={styles.datasContainerInner4}>
              <img
                className={styles.frameChild3}
                alt=""
                src="/vector-234250846.svg"
              />
            </div>
            <div className={styles.div7}>05:10</div>
            <div className={styles.datasContainerInner5}>
              <img
                className={styles.frameChild4}
                alt=""
                src="/vector-234250846.svg"
              />
            </div>
            <div className={styles.div8}>05:30</div>
            <div className={styles.datasContainerInner6}>
              <img
                className={styles.frameChild5}
                alt=""
                src="/vector-234250846.svg"
              />
            </div>
            <div className={styles.div9}>05:50</div>
          </div>
          <div className={styles.pageWiseAccordian}>
            <div className={styles.accordian1}>
              <div className={styles.bg8} />
              <input
                className={styles.accordianChild}
                placeholder="Morning 6 am to 12 pm (07)"
                type="text"
              />
              <img
                className={styles.accordianDropdowntrueIcon}
                alt=""
                src="/accordian-dropdowntrue.svg"
              />
            </div>
            <div className={styles.accordian2}>
              <div className={styles.bg9} />
              <input
                className={styles.accordianItem}
                placeholder="Afternoon 12 pm to 6 pm (02)"
                type="text"
              />
              <img
                className={styles.accordianDropdowntrueIcon1}
                alt=""
                src="/accordian-dropdowntrue.svg"
              />
            </div>
            <div className={styles.accordian3}>
              <div className={styles.bg10} />
              <input
                className={styles.accordianInner}
                placeholder="Evening after 6 pm (43)"
                type="text"
              />
              <img
                className={styles.accordianDropdowntrueIcon2}
                alt=""
                src="/accordian-dropdowntrue.svg"
              />
            </div>
          </div>
          <Accordians
            name1="2"
            name2="AC"
            name3="JBS"
            name4="Yathri Nivas, Paryatak Bhavan, Care Hospital, Aramghar"
          />
          <Accordians
            name1="3"
            name2="AM"
            name3="SEC’BAD"
            name4="Secretariat, Lakdi Kapool, Masab Tank, NMDC, Aramghar"
            propPadding="15.5px var(--padding-13xl) 15.5px var(--padding-xl)"
            propMinWidth="24px"
            propMinWidth1="64px"
          />
        </div>
      </form>
    </div>
  );
};

export default FrameComponent;
