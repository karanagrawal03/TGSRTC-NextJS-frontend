import type { NextPage } from "next";
import styles from './index.module.css';
import { UPLOADS_BASE_URL } from "../../services/service";

export type CustomerSupportType = {
  customerSupportWebImage:any;
  customerSupportMobileImage:any;
  customerSupportTitle:string;
  customerSupportSubTitle:string; 
  customerSupportEmail:string;
  customerSupportContactNumber1:string;
  customerSupportContactNumber2:string;
};

const CustomerSupport:NextPage<CustomerSupportType>=({customerSupportWebImage,customerSupportMobileImage,customerSupportTitle,customerSupportSubTitle,customerSupportEmail,customerSupportContactNumber1,customerSupportContactNumber2})=>{

    return(
        <div className={`${styles.csImgContainer}`}>
            <img src={UPLOADS_BASE_URL+customerSupportWebImage?.data?.attributes?.url} className={styles.cSImg} alt="customer suppport image" loading="lazy"/>
            <img src={UPLOADS_BASE_URL+customerSupportMobileImage?.data?.attributes?.url} className={styles.cSImgMobile} alt="customer suppport mobile image" loading="lazy"/>
            <div className={styles.customerSupportTexts}>
              <div className={styles.texts}>
                <h1 className={styles.customerSupport}>
                  {customerSupportTitle}
                </h1>
                <div className={styles.needHelpWith}>
                  {customerSupportSubTitle}
                </div>
              </div>
              <div className={styles.emailPhone}>
                <div className={styles.email}>
                  <img className={styles.icons2} alt="icons image" src="/icons-12.svg" loading="lazy"/>
                  <p className={styles.onlinesupporttgsrtcbusin}>{customerSupportEmail}</p>
                </div>
                <div className={styles.phone}>
                  <img className={styles.icons3} alt="icons" src="/icons-13.svg" loading="lazy"/>
                  <p className={styles.contactNumbers}>{customerSupportContactNumber1} / {customerSupportContactNumber2}</p>
                </div>
              </div>
            </div>
        </div>
    )
}

export default CustomerSupport;