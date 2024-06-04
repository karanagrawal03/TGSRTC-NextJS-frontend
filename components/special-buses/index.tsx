import type { NextPage } from "next";
import styles from "./index.module.css";
import Carousel from "../carousel";
import SpecialBusesOffersCard from "../specialBusesOffersCard";
import { ReactNode } from "react";

export type SpecialBusesType = {
  specialBusOffersTitle:string;
  specialBusOffersData:any;
};

const SpecialBuses:NextPage<SpecialBusesType>=({specialBusOffersTitle,specialBusOffersData})=>{
  const splBusOffersCards = specialBusOffersData?.map((item : any,  index :number) => (
    <SpecialBusesOffersCard
      key={index}
      item={item}
    />
  ));
    return(
        <section className={styles.busDustParent}>
          <img className={styles.busDust} alt="bus image" src="/bus--dust7.svg" loading="lazy"/>
          <div className={styles.reservationSpecialBusesOf}>
            <div className={styles.specialBusesOfferWrapper}>
              <h1 className={styles.specialBuses}>{specialBusOffersTitle}</h1>
            </div>
            <Carousel
              perView={1}
              autoplay={true}
              children={[splBusOffersCards]}
            > 
            </Carousel>
          </div>
        </section>
    )
}
export default SpecialBuses;