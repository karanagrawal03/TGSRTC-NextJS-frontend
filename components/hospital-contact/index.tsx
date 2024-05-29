import styles from './index.module.css';
import {BOOK_APPOINTMENT, NON_TGSRTC_EMPLOYEE, TGSRTC_EMPLOYEE, TGSRTC_HOSPITAL_EMAIL, WE_ARE_AVAILABLE } from '../../constants';
import Button from '../button';

const HospitalContact=()=>{
    return(
        <section className={styles.hospitalContact}>
          <div className={styles.availability}>
            <div className={styles.weAreAvailableForYouConta}>
              <div className={styles.contactTexts}>
                <h1 className={styles.weAreAvailable}>
                  {WE_ARE_AVAILABLE}
                </h1>
                <div className={styles.support}>
                  <div className={styles.phoneContainer}>
                    <div className={styles.phone}>
                      <img className={styles.icons} loading="lazy" alt="call-icon1" src="/icons1.svg" />
                      <div className={styles.forTgsrtcEmployee}>
                        {TGSRTC_EMPLOYEE}
                      </div>
                    </div>
                    <img className={styles.lineIcon} loading="lazy" alt="line-icon" src="/line1.svg" />
                    <div className={styles.phone1}>
                      <img className={styles.icons1} loading="lazy" alt="call-icon2" src="/icons1.svg" />
                      <div className={styles.nonTgsrtcEmployee}>
                        {NON_TGSRTC_EMPLOYEE}
                      </div>
                    </div>
                  </div>
                  <div className={styles.email}>
                    <img className={styles.icons2} alt="mail-icon" src="/icons-21.svg" />
                    <h2 className={styles.supporttgsrtchospitalcom}>
                      {TGSRTC_HOSPITAL_EMAIL}
                    </h2>
                  </div>
                </div>
              </div>
              <Button text={BOOK_APPOINTMENT} className={styles.button} textClassName={styles.applyNow} />
            </div>
          </div>
          <div className={styles.contactImage}>
            <img
              className={styles.contactImageWeb}
              loading="lazy"
              alt="hospital-contact-image-web"
              src="/hospital-contact-image-web@2x.png"
            />
            <img
              className={styles.contactImageMobile}
              loading="lazy"
              alt="hospital-contact-image-mobile"
              src="/hospital-contact-image-mobile@2x.png"
            />
          </div>
        </section>
    )
}
export default HospitalContact;