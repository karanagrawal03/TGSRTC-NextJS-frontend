import React, { ReactNode } from "react";
import styles from "./index.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollAnimation from "../home-banner-animation";

interface CarouselInterface {
  children: Array<ReactNode>;
  perView?: number;
  autoplay?: boolean;
  secondary?: boolean;
  customStyles?: any;
  sliderClassName?: string;
  includeAnimation?: boolean;
  title?: string;
}

const HomeBannerAnimation = (props: CarouselInterface) => {
  const {
    children,
    perView = 1,
    autoplay = true,
    secondary = false,
    customStyles,
    sliderClassName,
    includeAnimation = false,
    title,
  } = props;

  function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        <img className={styles.icons3} alt="" src="/icons-10.svg" />
      </div>
    );
  }

  function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        <img className={styles.icons4} alt="" src="/icons-11.svg" />
      </div>
    );
  }

  const data = children;

  console.log(data,'datadatadata');


  const settings = {
    dots: true,
    infinite: true,
    autoplay: autoplay,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: perView,
    slidesToScroll: perView,
    arrows: secondary ? false : true,
    dotsClass: `${styles.button__bar} ${
      secondary ? styles.secondary : perView > 1 ? styles.multiple : ""
    }`,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    data.length > 0 && (
      
      <div
        className={`${styles.slider} ${customStyles} ${
          secondary ? styles.secondarySlider : ""
        }`}
      >
        <Slider {...settings} className={sliderClassName}>
          {includeAnimation && (
         
         <>
         <div className={styles.scrollTitle}>
              <ScrollAnimation />
            <div className={styles.titleSection}>
            <h1 className={styles.tgsrtcServing}>{title}</h1>
            </div>
         </div>
         </>
          )}
          {data.map((child: ReactNode, index: number) => (
            <div key={index}>{child}</div>
          ))}
        </Slider>
      </div>
    )
  );
};

export default HomeBannerAnimation;
