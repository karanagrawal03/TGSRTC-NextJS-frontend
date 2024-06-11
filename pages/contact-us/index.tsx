import React, { useEffect, useState } from 'react'
import styles from "./index.module.css";
import FeedbackForm from '../../components/FeedbackForm';
import AccordionItem from '../../components/accordians';
import { doFetch } from '../../services/service';
import AnimationBus from '../../components/animation-bus';
import AnimationBusMobile from '../../components/animation-bus-mobile';

export async function getStaticProps() {
   const data = await doFetch("/contact-uses?populate=*");
 
   return {
     props: {
       data,
     },
   };
}

const ContactUs = ({data}) => {
   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

   const handleChange = (index: number) => {
      setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
   };

   return (
      <div className={styles.contactUs}>
         <section className={styles.heroSection}>
            <div className={styles.contactUsContent}>
               <div className={styles.contactContentLeft}>
                  <div className={styles.contactUsTitle}>{data?.heroTitle}</div>
                  <div className={styles.contactUsAddress}>{data?.heroSubtitle}<br />{data?.contactAddress}<br />{data?.contactAddressPincode}</div>
                  <div className={styles.contactUsEmail}>
                     <img src="/mailIcon.png" alt="mailicon" loading='lazy' className={styles.mailIcon} />
                     <span><a href={`${"mailto:"}${data?.contactEmail1}`} className={styles.link}>{data?.contactEmail1}</a><span>{data?.forGeneral}</span></span>
                  </div>
                  <div className={styles.contactUsEmail}>
                     <img src="/mailIcon.png" alt="mailIcon" loading='lazy' className={styles.mailIcon} />
                     <span><a href={`${"mailto:"}${data?.contactEmail2}`} className={styles.link}>{data?.contactEmail2}</a><span>{data?.forLogistics}</span></span>
                  </div>
                  <div className={styles.contactUsPhone}>
                     <img src="/phoneIcon.png" alt="phoneIcon" loading='lazy' className={styles.phoneIcon} />
                     <span><a href={`${"tel:"}${data?.contactPhone1}`} className={styles.link}>{data?.contactPhone1}</a>/ <a href={`${"tel:"}${data?.contactPhone2}`} className={styles.link}>{data?.contactPhone2}</a></span>
                  </div>
                  <div className={styles.contactUsHelpline}>
                     <img src="/phoneIcon.png" alt="phoneIcon" loading='lazy' className={styles.phoneIcon} />
                     <span>
                        <span>{data?.helplineNumber}</span><br />
                        <span className={styles.italic}>{data?.helplineTimings}</span>
                     </span>
                  </div>
               </div>
               <div className={styles.contactContentRight}>
                  <FeedbackForm />
               </div>
            </div>
         </section>
         <AnimationBus />
         <AnimationBusMobile />
         <section className={styles.otherServices}>
            <div className={styles.otherServiceTitle}>
               {data?.otherServicesTitle}
            </div>
            <div className={styles.accordion}>
               {data?.otherServicesContactDetails.map((e: any, index: any) => (
                  <AccordionItem
                     key={index}
                     extraDropdownClassName={styles.extraDropdown}
                     name={e.name}
                     info={e.info}
                     expanded={expandedIndex === index}
                     onChange={() => handleChange(index)}
                     containerClassName={styles.containerClassName}
                     headingStyles={styles.headingStyles}
                  />
               ))}
            </div>
         </section>
      </div>
   )
}
export default ContactUs;