import styles from './index.module.css';
import { SERVICES as services } from '../../constants/tsrtc-tarnaka-hospital';
import { ABOUT_HOSPITAL, HOSPITAL_STANDS, WHAT_SERVICE_HEADING } from '../../constants';
import HospitalServiceCard from '../hospital-service-cards';

const HospitalServices=()=>{
  return(
    <section className={styles.hospitalAboutWhatServiceWe}>
      {/* About hospital */}
      <div className={styles.aboutHospital}>
        <div className={styles.texts}>
          <div className={styles.titleAndLine}>
            <h1 className={styles.aboutHospitalHeading}>{ABOUT_HOSPITAL}</h1>
            <div className={styles.imagePlaceholder}>
              <img
                className={styles.aboutHospitalImage}
                loading="lazy"
                alt="about-hospital-image"
                src="/about-hospital-image.png"
              />
            </div>
          </div>
          <p className={styles.tarnakaHospitalStands}>
            {HOSPITAL_STANDS}
          </p>
        </div>
      </div>
      {/* what services we provide */}
      <div className={styles.serviceProviderContainer}>
        <h1 className={styles.whatServiceWe}>{WHAT_SERVICE_HEADING}</h1>   
        <div className={styles.textCardContianer}>
            {services.map((e)=>(
                <HospitalServiceCard heading={e.heading} subheading={e.subheading} />
            ))}
        </div>
      </div>
    </section>
  )
}
export default HospitalServices;