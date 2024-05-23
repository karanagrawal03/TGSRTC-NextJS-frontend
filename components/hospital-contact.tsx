import type { NextPage } from "next";
import styles from "./hospital-contact.module.css";

export type HospitalContactType = {
  className?: string;
};

const HospitalContact: NextPage<HospitalContactType> = ({ className = "" }) => {
  return (
    <section className={[styles.hospitalContact, className].join(" ")}>
      <div className={styles.weAreAvailableForYouContaWrapper}>
        <div className={styles.weAreAvailableForYouConta}>
          <div className={styles.texts}>
            <h1 className={styles.weAreAvailable}>
              We Are Available For You !
            </h1>
            <div className={styles.support}>
              <div className={styles.phoneContainer}>
                <div className={styles.phone}>
                  <img className={styles.icons} alt="" src="/icons.svg" />
                  <div className={styles.forTsrtcEmployee}>
                    +91-9154298785 - For TSRTC Employee
                  </div>
                </div>
                <img className={styles.lineIcon} alt="" src="/line.svg" />
                <div className={styles.phone1}>
                  <img className={styles.icons1} alt="" src="/icons.svg" />
                  <div className={styles.nonTsrtcEmployee}>
                    +91-9154298817 - Non TSRTC Employee
                  </div>
                </div>
              </div>
              <div className={styles.email}>
                <img className={styles.icons2} alt="" src="/icons-2.svg" />
                <h2 className={styles.supporttsrtchospitalcom}>
                  support@tsrtchospital.com
                </h2>
              </div>
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles.applyNow}>Book Appointment</div>
          </button>
        </div>
      </div>
      <div className={styles.contactImage}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.image682Parent}>
            <img
              className={styles.image682Icon}
              alt=""
              src="/image-682@2x.png"
            />
            <img
              className={styles.image683Icon}
              alt=""
              src="/image-682@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalContact;
