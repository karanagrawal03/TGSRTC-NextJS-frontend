import { ReactNode } from "react";
import styles from "./index.module.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface CarouselInterface {
  children: Array<ReactNode>;
  perView?: number;
  autoplay?: boolean;
  secondary?: boolean;
  customStyles?: any;
  sliderClassName?: string;
}
const Carousel = (props: CarouselInterface) => {
  const {
    children,
    perView = 1,
    autoplay = true,
    secondary = false,
    customStyles,
    sliderClassName,
  } = props;
  function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        <img className={styles.icons3} alt="preview icons" src="/icons-10.svg" loading="lazy"/>
      </div>
    );
  }

  function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        <img className={styles.icons4} alt="next icons" src="/icons-11.svg" loading="lazy"/>
      </div>
    );
  }
  const data = children;
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
    <div
      className={`${styles.slider} ${customStyles} ${
        secondary ? styles.secondarySlider : ""
      }`}
    >
      <Slider {...settings} className={sliderClassName}>
        {...data}
      </Slider>
    </div>
  );
};
export default Carousel;