import type { NextPage } from "next";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL, doFetch } from "../../services/service";
import { useEffect, useState } from "react";
import { styled } from "@mui/material";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

export async function getStaticProps() {
  const data = await doFetch("/site-maps?populate=*");

  return {
    props: {
      data,
    },
  };
};

const SiteMap: NextPage = ({data}) => {
  const [viewPortWidth, setViewPortWidth] = useState(1366);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setViewPortWidth(window.innerWidth);
    });
  }, []);

  const MainStyles = styled("main")(() => {
    const maxWidth = 1301798;
    const finalHeight = maxWidth / viewPortWidth;
    if (viewPortWidth >= 1366) {
      return {
        height: `953px`,
      };
    }
    if (viewPortWidth > 900 && viewPortWidth < 1100) {
      return {
        height: `1371px`,
      };
    }
    if (viewPortWidth > 727 && viewPortWidth < 900) {
      return {
        height: `1820px`,
      };
    }
    if (viewPortWidth < 727) {
      return {
        height: `100%`,
      };
    } else {
      return {
        height: `${finalHeight}px`,
      };
    }
  });

  return (
    <>
      <AnimationBus />
      <AnimationBusMobile />
      <div className={styles.siteMap}>
        <section className={styles.siteMapContainer}>
          <h1 className={styles.siteMapTitle}>{data?.siteMapTitle}</h1>
          <MainStyles className={styles.siteMapContent}>
            {data?.siteMapData?.map((item: any, index: number) => (
              <div className={styles.siteMapItem} key={index}>
                <ul className={styles.siteMapList}> 
                  <li className={styles.listItem} key={index}><a className={styles.listItemlink} href={item?.link}>{item?.name}</a></li>
                  {item?.data?.length !== 0 &&
                    item?.data?.map((listItem: { name: string, link: string },index:number) => (
                      <a className={styles.listItemSubLink} href={listItem.link} key={index}>{listItem.name}</a>
                    ))}
                </ul>
              </div>
            ))}
          </MainStyles>
        </section>
      </div>
    </>
  );
};

export default SiteMap;
