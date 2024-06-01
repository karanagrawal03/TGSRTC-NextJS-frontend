import { NextPage } from "next";
import styles from "./index.module.css";
import HospitalServiceCard from "../hospital-service-cards";
import { UPLOADS_BASE_URL } from "../../services/service";

export type HospitalServicesType = {
  data: any;
  className?: string;
};

const HospitalServices: NextPage<HospitalServicesType> = ({data,className = "",}) => {
  return (
    <section className={[styles.hospitalAboutWhatServiceWe, className].join(" ")}>
      {/* About hospital */}
      <div className={styles.aboutHospital}>
        <div className={styles.texts}>
          <div className={styles.titleAndLine}>
            <h1 className={styles.aboutHospitalHeading}>
              {data?.aboutHospitalTitle}
            </h1>
            <div className={styles.imagePlaceholder}>
              <img
                className={styles.aboutHospitalImage}
                loading="lazy"
                alt="about-hospital-image"
                src={UPLOADS_BASE_URL +data?.aboutHospitalImage?.data?.attributes?.url}
              />
            </div>
          </div>
          <p className={styles.tarnakaHospitalStands}>
            {data?.aboutHospitalContent}
          </p>
        </div>
      </div>
      {/* what services we provide */}
      <div className={styles.serviceProviderContainer}>
        <h1 className={styles.whatServiceWe}>{data?.whatServicesTitle}</h1>
        <div className={styles.textCardContianer}>
          {data?.whatServicesCards.map((e: any) => (
            <HospitalServiceCard
              heading={e.heading}
              subheading={e.subheading}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalServices;