import styles from "./index.module.css";
import { useEffect, useState } from "react";
import AccordionItem from "../../components/accordians";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

const ReservationFAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const {data,doFetch,loading,error}=useFetch();
  const handleChange = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  useEffect(()=>{
    doFetch("/reservation-faqs?populate=*")
  },[])
  return (
    <div className={styles.reservationFaq}>
      <div className={styles.bgImg}>
        <img src={UPLOADS_BASE_URL+data?.heroBackgroundImageWeb?.data?.attributes?.url} alt="faq background image web" className={styles.img} />
        <img src={UPLOADS_BASE_URL+data?.heroBackgroundImageMobile?.data?.attributes?.url} alt="faq background image mobile" className={styles.imgMobile} />
        <div className={styles.texts}>
          <div className={styles.text1}>{data?.heroTitle}</div>
          <div className={styles.text2}>
            {data?.heroSubTitle}
          </div>
        </div>
      </div>
      <AnimationBus />
      <AnimationBusMobile />
      <div className={styles.faQuestions}>
        <div className={styles.faqTitle}>{data?.frequentlyAskedQuestionTitle}</div>
        <div className={styles.accordion}>
            <ol className={styles.accordianList}>
          {data?.frequentlyAskedQuestionsList != null && data?.frequentlyAskedQuestionsList != undefined ? data?.frequentlyAskedQuestionsList?.map((e:any, index:any) => (
            <AccordionItem
              key={index}
              name={e.name}
              info={e.info}
              expanded={expandedIndex === index}
              onChange={() => handleChange(index)}
              containerClassName={styles.containerClassName}
              headingStyles={styles.headingStyles}
            />
          )): <></>}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ReservationFAQ;
