import styles from "./index.module.css";
import { useState } from "react";
import AccordionItem from "../../components/accordians";
import { faqs } from "../../constants/reservation-faq";
import { FAQ, FAQ_HEADING, FAQ_SUBTITLE } from "../../constants";

const ReservationFAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleChange = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className={styles.reservationFaq}>
      <div className={styles.bgImg}>
        <img src={"/faqImg.png"} alt="faq" className={styles.img} />
        <img src={"/faqImgMobile.png"} alt="faq" className={styles.imgMobile} />
        <div className={styles.texts}>
          <div className={styles.text1}>{FAQ}</div>
          <div className={styles.text2}>
            {FAQ_SUBTITLE}
          </div>
        </div>
      </div>
      <div className={styles.faQuestions}>
      <img src={"/busFaqMobile.svg"} className={styles.busImgMobile}/>
        <div className={styles.faqTitle}>{FAQ_HEADING}</div>
        <div className={styles.accordion}>
            <ol className={styles.accordianList}>
          {faqs?.map((e, index) => (
            <AccordionItem
              key={index}
              name={e.name}
              info={e.info}
              expanded={expandedIndex === index}
              onChange={() => handleChange(index)}
              containerClassName={styles.containerClassName}
              headingStyles={styles.headingStyles}
            />
          ))}
          </ol>
        </div>
        <div className={styles.busImgWrapper}>
        <img src="/Bus&DustFaq.png" alt="bus" className={styles.busImg}/>
        </div>
      </div>
    </div>
  );
};

export default ReservationFAQ;
