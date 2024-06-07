import { useState, useEffect } from "react";
import styles from "./index.module.css";
import plant1 from '../../public/Plant 1.png';
import plant2 from '../../public/Plant 2 (1).svg';
import house from '../../public/house.svg';
import boyImage from '../../public/boyImage.svg';
import girlImage from '../../public/girlImage.svg';
import BusAnimation from '../../public/Dust.json';
import Lottie from 'react-lottie';

const AnimationBus = () => {
    const [visibleImage, setVisibleImage] = useState<string>("");
    const [pageHeight, setPageHeight] = useState<number>(0);
    const [scrollPosition, setScrollPosition] = useState<number>(0); // State to track scroll position
    const [isAnimationPlaying, setIsAnimationPlaying] = useState<boolean>(true); // State to track animation playback

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: BusAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        const updatePageHeight = () => {
            setPageHeight(document.documentElement.scrollHeight - window.innerHeight);
        };
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsAnimationPlaying(true);
            const scrollPercentage = (scrollY / pageHeight) * 100;
            setScrollPosition(scrollPercentage)
            console.log(scrollPosition)

            if (scrollPercentage >= 80) {
                setVisibleImage("girlImage");
            } else if (scrollPercentage >= 60) {
                setVisibleImage("boyImage");
            } else if (scrollPercentage >= 40) {
                setVisibleImage("house");
            } else if (scrollPercentage >= 20) {
                setVisibleImage("plant2");
            } else if (scrollPercentage >= 10) {
                setVisibleImage("plant1");
            } else {
                setVisibleImage("");
            }
        };

        const handleStopScroll = () => {
            setIsAnimationPlaying(false);
        };

        window.addEventListener("resize", updatePageHeight);
        window.addEventListener("scroll", handleScroll);
        updatePageHeight();

        return () => {
            window.removeEventListener("resize", updatePageHeight);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mouseup", handleStopScroll);
        };
    }, [pageHeight]);

    // useEffect(() => {
    //     console.log("scroll", window.scrollX, window.screenTop)
    // })
    useEffect(() => {
        window.addEventListener('scroll', (e) => {

        });
        return () => {
            window.removeEventListener('scroll', console.log);
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img
                    style={{ display: visibleImage === "plant1" ? 'block' : 'none' }}
                    className={styles.plant1}
                    src='/Plant 1.png'
                    alt="Plant 1"
                />
                <img
                    style={{ display: visibleImage === "plant2" ? 'block' : 'none' }}
                    className={styles.plant2}
                    src='/Plant 2 (1).svg'
                    alt="Plant 2"
                />
                <img
                    style={{ display: visibleImage === "house" ? 'block' : 'none' }}
                    src='/house.svg'
                    alt="House"
                    className={styles.house}
                />
                <img
                    style={{ display: visibleImage === "boyImage" ? 'block' : 'none' }}
                    src='/boyImage.svg'
                    alt="Boy"
                    className={styles.boyImage}
                />
                <img
                    style={{ display: visibleImage === "girlImage" ? 'block' : 'none' }}
                    src='/girlImage.svg'
                    alt="Girl"
                    className={styles.girlImage}
                />
            </div>
            <div className={styles.animation}>
                <Lottie
                    options={defaultOptions}
                />
            </div>
        </div>
    );
}

export default AnimationBus;
