import React, { useEffect, useState } from 'react';
import styles from './index.module.css'; 
import { UPLOADS_BASE_URL } from '../../services/service';

interface ImageWithCaptionProps {
    src: string;
    caption: string;
    isSingleImage: boolean; 
    additionalClassName?: string;
    additionalImageSection?: string;
    additionalImage?: string;
    additionalMobileImage?: string;
    mobileSrc?: string;
}

const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({ 
    src, 
    caption, 
    isSingleImage, 
    additionalClassName, 
    additionalImageSection, 
    additionalImage, 
    additionalMobileImage, 
    mobileSrc 
}) => {
    const [width, setWidth] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth > 750);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className={`${isSingleImage ? styles.singleContainer : styles.multipleContainer} ${additionalClassName}`}>
            <div className={`${isSingleImage ? styles.singleImageSection : styles.multipleImageSection} ${additionalImageSection}`}>
                {
                    width ? (
                        <img src={`${UPLOADS_BASE_URL}${src}`} alt="image" className={`${isSingleImage ? styles.singleImage : styles.multipleImage} ${additionalImage}`} />
                    ) : (
                        <img src={`${UPLOADS_BASE_URL}${mobileSrc}`} alt="image" className={`${isSingleImage ? styles.singleImage : styles.multipleImage} ${additionalMobileImage}`} />
                    )
                }
            </div>
            <div className={styles.caption}>{caption}</div>
        </div>
    );
}

export default ImageWithCaption;
