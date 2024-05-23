import type { NextPage } from "next";
import styles from "./hospital-about-what-service-we.module.css";

export type HospitalAboutWhatServiceWeType = {
  className?: string;
};

const HospitalAboutWhatServiceWe: NextPage<HospitalAboutWhatServiceWeType> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.hospitalAboutWhatServiceWe, className].join(" ")}
    >
      <div className={styles.aboutHospital}>
        <div className={styles.texts}>
          <div className={styles.titleAndLine}>
            <h1 className={styles.aboutHospital1}>{`About Hospital `}</h1>
            <div className={styles.imagePlaceholder}>
              <img
                className={styles.image679Icon}
                loading="lazy"
                alt=""
                src="/image-679@2x.png"
              />
            </div>
          </div>
          <h2 className={styles.tarnakaHospitalStands}>
            Tarnaka Hospital stands out for its commitment to providing
            essential healthcare services to the community. With a focus on
            efficient diagnosis, treatment, and care, TSRTC Tarnaka Hospital
            serves as a vital resource for affordable and reliable medical
            assistance. TSRTC Hospital started in the year 1978 as a 40 bedded
            Hospital, now is a 200 bedded Super Specialty Hospital spread across
            7.7 acres of lush green landscape at Tarnaka, Hyderabad catering
            1200+ outpatients per day.
          </h2>
        </div>
      </div>
      <div className={styles.serviceProviderContainer}>
        <h1 className={styles.whatServiceWe}>What Service We Provide</h1>
        <div className={styles.textCardContianer}>
          <textarea
            className={styles.textCards}
            placeholder={`24/7 Emergency & Trauma Care`}
            rows={6}
            cols={12}
          />
          <textarea
            className={styles.textCards1}
            placeholder="Anesthesioloy"
            rows={6}
            cols={12}
          />
          <div className={styles.textCards2}>
            <h3 className={styles.emergencyTrauma}>Cardiology</h3>
          </div>
          <div className={styles.textCards3}>
            <h3 className={styles.emergencyTraumaContainer}>
              <p className={styles.cardiology}>Cardiology</p>
              <p className={styles.nonInterventional}>
                ( Non- Interventional )
              </p>
            </h3>
          </div>
          <textarea
            className={styles.textCards4}
            placeholder="Critical Care Unit"
            rows={6}
            cols={12}
          />
          <div className={styles.textCards5}>
            <h3 className={styles.emergencyTraumaContainer1}>
              <p className={styles.medicalOncology}>Medical Oncology</p>
              <p className={styles.opChemo}>{`(OP & Chemo Therapy)`}</p>
            </h3>
          </div>
          <textarea
            className={styles.textCards6}
            placeholder="Dental Surgery"
            rows={6}
            cols={12}
          />
          <textarea
            className={styles.textCards7}
            placeholder="Pediatric Surgery"
            rows={6}
            cols={12}
          />
          <textarea
            className={styles.textCards8}
            placeholder="Neuro Surgery"
            rows={6}
            cols={12}
          />
          <div className={styles.textCards9}>
            <div className={styles.emergencyTraumaContainer2}>
              <p className={styles.obstetrics}>{`Obstetrics &`}</p>
              <p className={styles.gynaecology}> Gynaecology</p>
              <p className={styles.excludingHighRisk}>
                (Excluding High Risk Cases)
              </p>
            </div>
          </div>
          <textarea
            className={styles.textCards10}
            placeholder="Ophthalmology"
            rows={6}
            cols={12}
          />
          <div className={styles.textCards11}>
            <h3 className={styles.emergencyTrauma1}>Orthopaedic Surgery</h3>
          </div>
          <div className={styles.textCards12}>
            <h3 className={styles.emergencyTraumaContainer3}>
              <p className={styles.otolaryngology}>{`Otolaryngology `}</p>
              <p className={styles.entSurgery}>(ENT) Surgery</p>
            </h3>
          </div>
          <textarea
            className={styles.textCards13}
            placeholder="Urology"
            rows={6}
            cols={12}
          />
          <div className={styles.textCards14}>
            <h3 className={styles.emergencyTrauma2}>Dermatology</h3>
          </div>
          <textarea
            className={styles.textCards15}
            placeholder="Dialysis"
            rows={6}
            cols={12}
          />
          <textarea
            className={styles.textCards16}
            placeholder="General Medicine"
            rows={6}
            cols={12}
          />
          <textarea
            className={styles.textCards17}
            placeholder="General Surgery"
            rows={6}
            cols={12}
          />
          <div className={styles.textCards18}>
            <h3 className={styles.emergencyTrauma3}>Laparoscopic Surgery</h3>
          </div>
          <textarea
            className={styles.textCards19}
            placeholder="Physiotherapy"
            rows={6}
            cols={12}
          />
          <div className={styles.textCards20}>
            <h3 className={styles.emergencyTrauma4}>Respiratory Medicine</h3>
          </div>
          <div className={styles.textCards21}>
            <h3 className={styles.emergencyTrauma5}>Pulmonology</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalAboutWhatServiceWe;
