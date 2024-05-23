import type { NextPage } from "next";
import styles from "./home-hero.module.css";

export type HomeHeroType = {
  className?: string;
};

const HomeHero: NextPage<HomeHeroType> = ({ className = "" }) => {
  return (
    <section className={[styles.homeHero, className].join(" ")}>
      <div className={styles.heroBg}>
        <div className={styles.cloudsContainer}>
          <div className={styles.cloudsAndSlogan}>
            <div className={styles.wrapperWhiteClouds}>
              <img
                className={styles.whiteCloudsIcon}
                alt=""
                src="/white-clouds.svg"
              />
            </div>
            <div className={styles.sloganContainer}>
              <img
                className={styles.sloganContainerChild}
                alt=""
                src="/group-1000013511@2x.png"
              />
              <h1 className={styles.devotedToServingContainer}>
                <p className={styles.devotedToServing}>Devoted to Serving</p>
                <p className={styles.peopleSince1932}>People since 1932</p>
              </h1>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/group-1000013509.svg"
          />
          <div className={styles.movingBus}>
            <img
              className={styles.movingBusChild}
              alt=""
              src="/vector-234251057.svg"
            />
            <img
              className={styles.busDust}
              loading="lazy"
              alt=""
              src="/bus--dust@2x.png"
            />
          </div>
          <img
            className={styles.stationaryBusIcon}
            alt=""
            src="/stationary-bus.svg"
          />
          <img className={styles.busDust1} alt="" src="/bus--dust-1@2x.png" />
          <div className={styles.carouselContainerWrapper}>
            <div className={styles.carouselContainer}>
              <img
                className={styles.busDust2}
                alt=""
                src="/bus--dust-2@2x.png"
              />
              <div className={styles.carousal}>
                <img
                  className={styles.carouselRedDot}
                  loading="lazy"
                  alt=""
                  src="/carousel-red-dot.svg"
                />
                <img
                  className={styles.carouselRedDot1}
                  alt=""
                  src="/carousel-red-dot-1.svg"
                />
                <img
                  className={styles.carouselRedDot2}
                  alt=""
                  src="/carousel-red-dot-1.svg"
                />
                <img
                  className={styles.carouselRedDot3}
                  alt=""
                  src="/carousel-red-dot-1.svg"
                />
                <img
                  className={styles.carouselRedDot4}
                  alt=""
                  src="/carousel-red-dot-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
