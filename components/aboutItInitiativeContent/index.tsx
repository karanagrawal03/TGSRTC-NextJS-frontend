import React from 'react';
import styles from "./index.module.css";
import DynamicContent from '../dynamicContent';
import ItInitiativeSection from '../itInitiativesection';

interface ContentSection {
    title: string;
    content: string[];
    lists?: any[];
    bottomContent?: string[];
    backgroundColor: string;
}

interface Data {
    sections: ContentSection[];
}

const AboutItIntiativeContent = ({ data }: { data: Data }) => {
    return (
        <div className={styles.app}>
            {data?.sections?.map((section, index) => (
                <DynamicContent
                    key={index}
                    number={index + 1}
                    ContentComponent={() => <ItInitiativeSection section={section} />} // Render the ContentRenderer component
                    backgroundColor={section.backgroundColor}
                    itemContentStyles={styles.itemContent}
                    sequenceStyles={styles.sequenceStyles}
                />
            ))}
        </div>
    );
};

export default AboutItIntiativeContent;
