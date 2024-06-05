import React, { useState } from 'react';
import styles from "./index.module.css";
import BulletPoints from '../bullet-points';
import DynamicContent from '../dynamicContent';
interface BulletPoint {
    listContent: string[];
    listTitle?: string;
}

interface ContentSection {
    title: string;
    content: string[];
    lists?: BulletPoint[];
    bottomContent?: string[];
}

interface Data {
    ticketIssueContent1: ContentSection;
    ticketIssueContent2: ContentSection;
    callCenter: ContentSection;
    busPass: ContentSection;
    migration: ContentSection;
    hospital: ContentSection;
    attendance: ContentSection;
    computerisation: ContentSection;
    payments: ContentSection;
}

const AboutItIntiativeContent = ({ data }: { data: Data }) => {
    function TicketMachine1() {
        return (<div className={styles.container}>
            <div className={styles.heading}>{data?.ticketIssueContent1?.title}</div>
            {data?.ticketIssueContent1?.content?.map((item: string,index:number) =>
                <div className={styles.content} key={index}>{item}</div>)
            }
            {data?.ticketIssueContent1?.lists?.map((item: BulletPoint,index:number) => (
                <div className={styles.list} key={index}>
                    <BulletPoints items={item?.listContent} containerClassName={styles.listStyles} dynamicStyles={styles.list} />
                </div>
            ))
            }
        </div>
        )

    }
    function TicketMachine2() {
        return (<div className={styles.container}>
            <div className={styles.heading}>{data?.ticketIssueContent2?.title}</div>
            {data?.ticketIssueContent2?.content?.map((item: string,index:number) =>
                <div className={styles.content} key={index}>{item}</div>)
            }
            {data?.ticketIssueContent1?.lists?.map((item: BulletPoint,index:number) => (
                <> <div className={styles.listHeading}>{item?.listTitle}</div>
                    <div className={styles.list} key={index}>
                        <BulletPoints items={item?.listContent} containerClassName={styles.listStyles} dynamicStyles={styles.list} />
                    </div>
                </>
            ))
            }
        </div>)
    }
    function CallCenter() {
        return (<div className={styles.container}>
            <div className={styles.heading}>{data?.callCenter?.title}</div>
            {data?.callCenter?.content?.map((item: string,index:number) =>
                <div className={styles.content} key={index}>{item}</div>)
            }
            {data?.callCenter?.lists?.map((item: BulletPoint,index:number) => (
                <div className={styles.list} key={index}>
                    <BulletPoints items={item?.listContent} containerClassName={styles.listStyles} dynamicStyles={styles.list} />
                </div>
            ))
            }
        </div>)
    }
    function BusPass() {

        return (<div className={styles.container}>
            <div className={styles.heading}>{data?.busPass?.title}</div>
            <div className={styles.content}>
                <div className={styles.content}>
                    {data?.busPass?.content.map((item:string, index:number) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
            </div>
            {data?.busPass?.lists?.map((item: BulletPoint,index:number) => (
                <div className={styles.list} key={index}>
                    <BulletPoints items={item?.listContent} containerClassName={styles.listStyles} dynamicStyles={styles.list} />
                </div>
            ))
            }
        </div>)

    }

    function Migration() {

        return (<div className={styles.container}>
            <div className={styles.heading}>{data?.migration?.title}</div>
            <div className={styles.content}>
                {data?.migration?.content?.map((item:string, index:number) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
            {data?.migration?.lists?.map((item: BulletPoint,index:number) => (
                <div className={styles.list} key={index}>
                    <BulletPoints items={item?.listContent} containerClassName={styles.listStyles} dynamicStyles={styles.list} />
                </div>
            ))
            }
            <div className={styles.content}>
                {data?.migration?.bottomContent?.map((item:string, index:number) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </div>)

    }
    function Hospital() {
        return (<div className={styles.container}>
            <div className={styles.heading}>{data?.hospital?.title}</div>
            <div className={styles.content}>
                {data?.hospital?.content?.map((item:string, index:number) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </div>)

    }
    function Attendance() {
        return (<div>
            <div className={styles.heading}>{data?.attendance?.title}</div>
            <div className={styles.content}>
                {data?.attendance?.content?.map((item:string, index:number) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </div>)
    }
    function Computerisation() {
        return (<div className={styles.container}>
            <div className={styles.heading}>{data?.computerisation?.title}</div>
            <div className={styles.content}>
                {data?.computerisation?.content?.map((item:string, index:number) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </div>)

    }
    function Payments() {
        return (<div className={styles.container}>
            <div className={styles.heading}>{data?.payments?.title}</div>
            <div className={styles.content}>
                {data?.payments?.content?.map((item:string, index:number) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </div>)
    }
    const [items, setItems] = useState<any>([
      
        { ContentComponent: TicketMachine1, backgroundColor: "var(--color-mintcream-100)" },
        { ContentComponent: TicketMachine2, backgroundColor: 'var(--support-white)' },
        { ContentComponent: CallCenter, backgroundColor: 'var(--color-light-gray)' },
        { ContentComponent: BusPass, backgroundColor: 'var(--support-white)' },
        { ContentComponent: Migration, backgroundColor: 'var(--color-mintcream-100)' },
        { ContentComponent: Hospital, backgroundColor: 'var(--support-white)' },
        { ContentComponent: Attendance, backgroundColor: 'var(--support-grey-bg)' },
        { ContentComponent: Computerisation, backgroundColor: 'var(--support-white)' },
        { ContentComponent: Payments, backgroundColor: 'var(--color-mintcream-100)' }
    ]);
    return (
        <div className={styles.app}>
            {items.map((item: any, index: any) => (
                <DynamicContent
                    key={index}
                    number={index + 1}
                    ContentComponent={item.ContentComponent}
                    backgroundColor={item.backgroundColor}
                    itemContentStyles={styles.itemContent}
                    sequenceStyles={styles.sequenceStyles}
                />
            ))}
        </div>
    )
}
export default AboutItIntiativeContent;
