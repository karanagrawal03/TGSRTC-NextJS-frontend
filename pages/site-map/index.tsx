import type { NextPage } from "next";
import styles from "./index.module.css";
import { doFetch } from "../../services/service";
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
  return (
    <>
      <AnimationBus />
      <AnimationBusMobile />
      <section className={styles.siteMap}>
        <div className={styles.siteMapContainer}>
          <h1 className={styles.siteMapTitle}>{data?.siteMapTitle}</h1>
          <div className={styles.siteMapContent}>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default SiteMap;
