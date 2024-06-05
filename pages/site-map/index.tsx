import type { NextPage } from "next";
import styles from "./index.module.css";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";
import { useEffect, useState } from "react";
import { styled } from "@mui/material";

const SiteMap: NextPageSiteMapType = () => {
  const { data, doFetch } = useFetch();
  const [viewPortWidth,setViewPortWidth] = useState(1366)

  useEffect(() => {
    
    window.addEventListener('resize', ()=>{setViewPortWidth(window.innerWidth)});
    doFetch(`/site-maps?populate=*`);
  }, []);

  const MainStyles = styled('main')(()=>{
    const maxWidth = 1300432;
    const finalHeight = maxWidth/viewPortWidth
    if(viewPortWidth>=1366){
        return{
            height:`952px`
        }
    }
    if(viewPortWidth >900 && viewPortWidth < 1100){
        return{
            height:`1371px`
        }
    }
    if(viewPortWidth >727 && viewPortWidth < 900){
        return{
            height:`1820px`
        }
    }
    if(viewPortWidth < 727){
        return{
            height:`100%`
        }
    }
    else{
        return{
            height:`${finalHeight}px`
        }
    }
    
  })
  return (
    <div className={styles.siteMap}>
      <section className={styles.siteMapContainer}>
        <h1 className={styles.siteMapTitle}>{data?.siteMapTitle}</h1>
        <MainStyles className={styles.siteMapContent}>
          {data?.siteMapData?.map((item: any) => (
            <div className={styles.siteMapItem}>
                <ul className={styles.siteMapList}>
                    <li className={styles.listItem}>{item?.name}</li>
                    {item?.data?.length !== 0 && item?.data?.map((listItem: string) => ( 
                        <>
                            <p className={styles.listItemSubLink}>{listItem}</p>
                        </>
                    ))}
                </ul>
            </div>
          ))}
        </MainStyles>
      </section>
    </div>
  );
};

export default SiteMap;