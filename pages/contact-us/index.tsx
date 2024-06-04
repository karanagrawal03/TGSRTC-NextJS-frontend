import React, { useEffect, useState } from 'react'
import styles from "./index.module.css";
import FeedbackForm from '../../components/FeedbackForm';
import { faqs } from '../../constants/reservation-faq';
import AccordionItem from '../../components/accordians';
import useFetch from '../../services/service';
import { UPLOADS_BASE_URL } from '../../services/service';
const ContactUs = () => {
   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
   const { data, doFetch, loading, error } = useFetch();
   const handleChange = (index: number) => {
      setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
   };
useEffect(()=>{
doFetch("/contact-uses?populate=*")
},[])
console.log(UPLOADS_BASE_URL+data?.heroBackgroundImageWeb?.data?.attributes?.url)
   return (
      <div className={styles.contactUs}>
         <section className={styles.heroSection}>
            <img className={styles.heroBackgroundImageWeb} src={UPLOADS_BASE_URL+data?.heroBackgroundImageWeb?.data?.attributes?.url}></img>
            <img className={styles.heroBackgroundImageMobile} src={UPLOADS_BASE_URL+data?.heroBackgroundImageMobile?.data?.attributes?.url}></img>
            <div className={styles.contactUsContent}>
               <div className={styles.contactContentLeft}>
                  <div className={styles.contactUsTitle}>{data?.heroTitle}</div>
                  <div className={styles.contactUsDetails}>{data?.heroSubtitle}</div>

                  <div className={styles.contactUsDetails}>
                     {
                        data?.contactDetails?.map((ele:any,index:number) => {
                           return (<>
                              <div className={styles.contactInfo} key={index}>
                                 <img src={ele?.image} className={styles.contactImg}></img>
                                 <div>{ele?.description} {ele.type !=="" ?  "-" : ""}{ele.type}</div>
                              </div>
                           </>)
                        })
                     }
                  </div>
               </div>
               <FeedbackForm />
            </div>
         </section>
         <section className={styles.otherServices}>
            <div className={styles.otherServiceTitle}>
               Contact Details of Other Services
            </div>
            <div className={styles.accordion}>
               <ol className={styles.accordianList}>
                  {data?.otherServicesContactDetails.map((e: any, index: any) => (
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
         </section>
      </div>
   )
}
export default ContactUs;