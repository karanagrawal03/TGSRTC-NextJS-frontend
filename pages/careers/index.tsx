import React, { useEffect } from 'react'
import styles from "./index.module.css"
import CustomTable from '../../components/table-view-details';
import { columnWidths } from '../../constants/reservation-concession-schemes';
import useFetch from '../../services/service';
import { UPLOADS_BASE_URL } from '../../services/service';
import AnimationBus from '../../components/animation-bus';
import AnimationBusMobile from '../../components/animation-bus-mobile';

const Careers = () => {
    const { data, doFetch } = useFetch();
    useEffect(() => {
        doFetch("/careers?populate=*")
    }, [])

    return (
        <div className={styles.careers}>
            <section className={styles.heroSection}>
                <img className={styles.heroBackgroundImageWeb} src={UPLOADS_BASE_URL + data?.heroBackgroundImageWeb?.data?.attributes?.url} loading='lazy'/>
                <img className={styles.heroBackgroundImageMobile} src={UPLOADS_BASE_URL + data?.heroBackgroundImageMobile?.data?.attributes?.url} loading='lazy'/>
                <div className={styles.heroSectionContent}>
                    <div className={styles.heroTitle}>{data?.heroTitle}</div>
                    <div className={styles.heroSubtitle}>{data?.heroSubtitleWeb}<br/>{data?.heroSubtitleMobile}</div>
                </div>
            </section>
            <AnimationBus/>
      <AnimationBusMobile/>
            <section className={styles.requirement}>
                <div className={styles.requirementTitle}>{data?.requirementTitle}</div>
                <CustomTable 
                    rows={data?.requirementTableData} 
                    containerClassName={styles.tableContainer} 
                    columnWidths={columnWidths} 
                    tableHeadCellStyles={styles.tableHeadCell} 
                    tableCellStyles={styles.tableCell} 
                    rowsClassName={styles.rowClass} />
            </section>
        </div>
    )
}
export default Careers;
