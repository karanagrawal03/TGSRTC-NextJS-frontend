import type { NextPage } from "next";
import styles from "./index.module.css";
import BookYourTicket from "../components/BookYourTicket/BookYourTicket";
import About from "../components/About/About";
import HomeHero from "../components/HomeHero/HomeHero";
import HomeBookYourServices from "../components/HomeBookYourServices/HomeBookYourServices";
import HomeNewsUpdates from "../components/HomeNewsUpdates/HomeNewsUpdates";
import HomeGamyamApp from "../components/HomeGamyamApp/HomeGamyamApp";
import { HERO_TITLE } from "../constants";
import { routes } from "../constants/book-your-tickets-routes";
import useFetch from "../services/service";
import { useEffect } from "react";
import Carousal from "../components/Carosal";
import HomeBannerAnimation from "../components/home-banner-carousal";

const Homepage: NextPage = () => {
  
  const { data, doFetch } = useFetch();

  useEffect(() => {
    doFetch(`/home-pages?populate=*`);
  }, []);

  const heroSection = data?.heroSection?.map((section: any, index: number) => (
    <HomeHero key={index} title={section.title} image={section.image} mobileImage={section.mobileImage}/>
  )) || [];

  return (
    <div className={styles.homepage}>
       <HomeBannerAnimation children={heroSection} secondary={true} includeAnimation autoplay={true} />
      <BookYourTicket routes={routes} 
      />
      <HomeBookYourServices 
       data={{
        bookYourServiceTitle: data?.bookYourServiceTitle,
        bookYourServiceContent: data?.bookYourServiceContent,
        serviceCards: data?.bookYourServiceCardsData || [],
      }}/>
      <HomeGamyamApp
        data={{
          gamayamTitle: data?.gamyamAppTitle,
          gamayamParagraph: data?.gamayamAppParagraph,
          gamayamLogoUrl: data?.gamyamAppLogo?.data?.attributes?.url,
          webIconUrl: data?.gamyamAppWebImage?.data?.attributes?.url,
          shadowImageUrl: data?.shadowImage?.data?.attributes?.url,
        }}
      />
      <About
        data={{
          title: data?.aboutTitle,
          paragraph: data?.aboutContent,
          logoUrl: data?.aboutLogo?.data?.attributes?.url,
          desktopImageUrl: data?.aboutBgImage?.data?.attributes?.url,
          mobileImageUrl: data?.aboutMobileBg?.data?.attributes?.url,
        }}
      />
      <HomeNewsUpdates data={data?.newsAndUpdatesCardsData} maintitle={data?.newsAndUpdateTitle}/>
    </div>
  );
};

export default Homepage;
