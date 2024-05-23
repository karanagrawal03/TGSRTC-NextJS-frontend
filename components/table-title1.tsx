import type { NextPage } from "next";
import Column1 from "./column1";
import Column from "./column";
import styles from "./table-title1.module.css";

export type TableTitle1Type = {
  className?: string;
};

const TableTitle1: NextPage<TableTitle1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.tableTitle, className].join(" ")}>
      <h2 className={styles.title}>Details of Muchintala bus timings</h2>
      <div className={styles.table}>
        <div className={styles.titleHeader}>
          <div className={styles.name}>Overview (Up to March - 2024)</div>
        </div>
        <div className={styles.table1}>
          <div className={styles.cloumn1}>
            <button className={styles.header}>
              <div className={styles.name1}>#</div>
            </button>
            <div className={styles.columnCell}>
              <div className={styles.cells}>
                <div className={styles.bg} />
                <div className={styles.name2}>1</div>
              </div>
              <div className={styles.cells1}>
                <div className={styles.bg1} />
                <div className={styles.name3}>
                  <p className={styles.p}>2</p>
                </div>
              </div>
              <div className={styles.cells2}>
                <div className={styles.bg2} />
                <div className={styles.name4}>
                  <p className={styles.p1}>3</p>
                </div>
              </div>
              <div className={styles.cells3}>
                <div className={styles.bg3} />
                <div className={styles.name5}>4</div>
              </div>
              <div className={styles.cells4}>
                <div className={styles.bg4} />
                <div className={styles.name6}>5</div>
              </div>
              <div className={styles.cells5}>
                <div className={styles.bg5} />
                <div className={styles.name7}>6</div>
              </div>
              <div className={styles.cells6}>
                <div className={styles.bg6} />
                <div className={styles.name8}>7</div>
              </div>
              <div className={styles.cells7}>
                <div className={styles.bg7} />
                <div className={styles.name9}>8</div>
              </div>
              <div className={styles.cells8}>
                <div className={styles.bg8} />
                <div className={styles.name10}>9</div>
              </div>
              <div className={styles.cells9}>
                <div className={styles.bg9} />
                <div className={styles.name11}>10</div>
              </div>
              <div className={styles.cells10}>
                <div className={styles.bg10} />
                <div className={styles.name12}>11</div>
              </div>
              <div className={styles.cells11}>
                <div className={styles.bg11} />
                <div className={styles.name13}>12</div>
              </div>
              <div className={styles.cells12}>
                <div className={styles.bg12} />
                <div className={styles.name14}>13</div>
              </div>
              <div className={styles.cells13}>
                <div className={styles.bg13} />
                <div className={styles.name15}>14</div>
              </div>
              <div className={styles.cells14}>
                <div className={styles.bg14} />
                <div className={styles.name16}>15</div>
              </div>
              <div className={styles.cells15}>
                <div className={styles.bg15} />
                <div className={styles.name17}>16</div>
              </div>
            </div>
          </div>
          <div className={styles.coulmn2}>
            <div className={styles.cells16}>
              <div className={styles.name18}>Afzal Gunj to Muchintala Time</div>
            </div>
            <div className={styles.contentCell}>
              <div className={styles.cells17}>
                <div className={styles.bg16} />
                <div className={styles.name19}>CNT:20</div>
              </div>
              <div className={styles.cells18}>
                <div className={styles.bg17} />
                <div className={styles.name20}>CNT</div>
              </div>
              <div className={styles.cells19}>
                <div className={styles.bg18} />
                <div className={styles.name21}>CNT</div>
              </div>
              <div className={styles.cells20}>
                <div className={styles.bg19} />
                <div className={styles.name22}>13:50</div>
              </div>
              <div className={styles.cells21}>
                <div className={styles.bg20} />
                <div className={styles.name23}>MYP2:50</div>
              </div>
              <div className={styles.cells22}>
                <div className={styles.bg21} />
                <div className={styles.name24}>18:45</div>
              </div>
              <div className={styles.cells23}>
                <div className={styles.bg22} />
                <div className={styles.name25}>-</div>
              </div>
              <div className={styles.cells24}>
                <div className={styles.bg23} />
                <div className={styles.name26}>Item</div>
              </div>
              <div className={styles.cells25}>
                <div className={styles.bg24} />
                <div className={styles.name27}>Item</div>
              </div>
              <div className={styles.cells26}>
                <div className={styles.bg25} />
                <div className={styles.name28}>Item</div>
              </div>
              <div className={styles.cells27}>
                <div className={styles.bg26} />
                <div className={styles.name29}>Item</div>
              </div>
              <div className={styles.cells28}>
                <div className={styles.bg27} />
                <div className={styles.name30}>Item</div>
              </div>
              <div className={styles.cells29}>
                <div className={styles.bg28} />
                <div className={styles.name31}>Item</div>
              </div>
              <div className={styles.cells30}>
                <div className={styles.bg29} />
                <div className={styles.name32}>Item</div>
              </div>
              <div className={styles.cells31}>
                <div className={styles.bg30} />
                <div className={styles.name33}>Item</div>
              </div>
              <div className={styles.cells32}>
                <div className={styles.bg31} />
                <div className={styles.name34}>Item</div>
              </div>
            </div>
          </div>
          <Column1
            name1="Depot"
            name2="CNT"
            cNT="CNT"
            cNT1="CNT"
            name3="MYP2"
            name4="15:35"
            name5="17:15"
            name6="17:25"
          />
          <div className={styles.column4}>
            <div className={styles.cells33}>
              <div className={styles.name35}>No. of Buses</div>
            </div>
            <div className={styles.contentCell1}>
              <div className={styles.cells34}>
                <div className={styles.bg32} />
                <div className={styles.name36}>12</div>
              </div>
              <div className={styles.cells35}>
                <div className={styles.bg33} />
                <div className={styles.name37}>
                  <p className={styles.p2}>6</p>
                </div>
              </div>
              <div className={styles.cells36}>
                <div className={styles.bg34} />
                <div className={styles.name38}>
                  <p className={styles.p3}>8</p>
                </div>
              </div>
              <div className={styles.cells37}>
                <div className={styles.bg35} />
                <input className={styles.name39} placeholder="15" type="text" />
              </div>
              <div className={styles.cells38}>
                <div className={styles.bg36} />
                <div className={styles.name40}>Item</div>
              </div>
              <div className={styles.cells39}>
                <div className={styles.bg37} />
                <div className={styles.name41}>Item</div>
              </div>
              <div className={styles.cells40}>
                <div className={styles.bg38} />
                <div className={styles.name42}>Item</div>
              </div>
              <div className={styles.cells41}>
                <div className={styles.bg39} />
                <div className={styles.name43}>Item</div>
              </div>
              <div className={styles.cells42}>
                <div className={styles.bg40} />
                <div className={styles.name44}>Item</div>
              </div>
              <div className={styles.cells43}>
                <div className={styles.bg41} />
                <div className={styles.name45}>Item</div>
              </div>
              <div className={styles.cells44}>
                <div className={styles.bg42} />
                <div className={styles.name46}>Item</div>
              </div>
              <div className={styles.cells45}>
                <div className={styles.bg43} />
                <div className={styles.name47}>Item</div>
              </div>
              <div className={styles.cells46}>
                <div className={styles.bg44} />
                <div className={styles.name48}>Item</div>
              </div>
              <div className={styles.cells47}>
                <div className={styles.bg45} />
                <div className={styles.name49}>Item</div>
              </div>
              <div className={styles.cells48}>
                <div className={styles.bg46} />
                <div className={styles.name50}>Item</div>
              </div>
              <div className={styles.cells49}>
                <div className={styles.bg47} />
                <div className={styles.name51}>Item</div>
              </div>
            </div>
          </div>
          <Column name1="Route" name2="AL" aA="AA" aC="AC" name3="AJ" />
          <Column1
            name1="From"
            name2="JBS"
            cNT="SEC-BAD"
            cNT1="JBS"
            name3="Miyapur"
            name4="Item"
            name5="Item"
            name6="Item"
            propWidth="106px"
            propAlignSelf="stretch"
            propMinWidth="39px"
            propWidth1="106px"
            propAlignSelf1="unset"
            propWidth2="106px"
            propMinWidth1="58px"
            propPadding="var(--spacing-lg) var(--padding-lgi) var(--spacing-lg) var(--padding-xl)"
            propPadding1="var(--spacing-lg) var(--padding-lgi) var(--spacing-lg) var(--padding-xl)"
            propHeight="17px"
            propFlex="1"
            propDisplay="inline-block"
            propPadding2="var(--spacing-lg) var(--padding-lgi) var(--spacing-lg) var(--padding-xl)"
          />
          <div className={styles.column7}>
            <button className={styles.cells50}>
              <div className={styles.name52}>To</div>
            </button>
            <div className={styles.contentCell2}>
              <div className={styles.cells51}>
                <div className={styles.bg48} />
                <div className={styles.name53}>RGIA</div>
              </div>
              <div className={styles.cells52}>
                <div className={styles.bg49} />
                <div className={styles.name54}>
                  <p className={styles.rgia}>RGIA</p>
                </div>
              </div>
              <div className={styles.cells53}>
                <div className={styles.bg50} />
                <div className={styles.name55}>
                  <p className={styles.rgia1}>RGIA</p>
                </div>
              </div>
              <div className={styles.cells54}>
                <div className={styles.bg51} />
                <div className={styles.name56}>RGIA</div>
              </div>
              <div className={styles.cells55}>
                <div className={styles.bg52} />
                <div className={styles.name57}>Item</div>
              </div>
              <div className={styles.cells56}>
                <div className={styles.bg53} />
                <div className={styles.name58}>Item</div>
              </div>
              <div className={styles.cells57}>
                <div className={styles.bg54} />
                <div className={styles.name59}>Item</div>
              </div>
              <div className={styles.cells58}>
                <div className={styles.bg55} />
                <div className={styles.name60}>Item</div>
              </div>
              <div className={styles.cells59}>
                <div className={styles.bg56} />
                <div className={styles.name61}>Item</div>
              </div>
              <div className={styles.cells60}>
                <div className={styles.bg57} />
                <div className={styles.name62}>Item</div>
              </div>
              <div className={styles.cells61}>
                <div className={styles.bg58} />
                <div className={styles.name63}>Item</div>
              </div>
              <div className={styles.cells62}>
                <div className={styles.bg59} />
                <div className={styles.name64}>Item</div>
              </div>
              <div className={styles.cells63}>
                <div className={styles.bg60} />
                <div className={styles.name65}>Item</div>
              </div>
              <div className={styles.cells64}>
                <div className={styles.bg61} />
                <div className={styles.name66}>Item</div>
              </div>
              <div className={styles.cells65}>
                <div className={styles.bg62} />
                <div className={styles.name67}>Item</div>
              </div>
              <div className={styles.cells66}>
                <div className={styles.bg63} />
                <div className={styles.name68}>Item</div>
              </div>
            </div>
          </div>
          <Column
            name1="Fare"
            name2="300"
            aA="300"
            aC="300"
            name3="300"
            propWidth="72px"
            propMinWidth="32px"
            propWidth1="72px"
            propMinWidth1="27px"
            propWidth2="72px"
            propMinWidth2="27px"
            propWidth3="unset"
            propAlignSelf="stretch"
            propWidth4="unset"
            propAlignSelf1="stretch"
            propWidth5="unset"
            propAlignSelf2="stretch"
            propWidth6="unset"
            propAlignSelf3="stretch"
            propWidth7="unset"
            propAlignSelf4="stretch"
            propWidth8="unset"
            propAlignSelf5="stretch"
            propWidth9="unset"
            propAlignSelf6="stretch"
            propWidth10="unset"
            propAlignSelf7="stretch"
            propWidth11="unset"
            propAlignSelf8="stretch"
            propWidth12="unset"
            propAlignSelf9="stretch"
            propWidth13="unset"
            propAlignSelf10="stretch"
            propWidth14="unset"
            propAlignSelf11="stretch"
          />
          <div className={styles.column9}>
            <div className={styles.cells67}>
              <div className={styles.name69}>Via</div>
            </div>
            <div className={styles.contentCell3}>
              <div className={styles.cells68}>
                <div className={styles.bg64} />
                <div
                  className={styles.name70}
                >{`Sangeeth, Tarnaka, Uppal X Rd, L B Nagar, Balapur, Pahadisharif `}</div>
              </div>
              <div className={styles.cells69}>
                <div className={styles.bg65} />
                <div className={styles.name71}>
                  <p className={styles.paradiseSecretariatNampall}>
                    Paradise, Secretariat, Nampally, Afzulganj, Bahadhurpur,
                    Aramghar,
                  </p>
                  <p className={styles.shamshabad}>Shamshabad</p>
                </div>
              </div>
              <div className={styles.cells70}>
                <div className={styles.bg66} />
                <div className={styles.name72}>
                  <p className={styles.secundarabadBegumpetPanjag}>
                    Secundarabad, Begumpet, Panjagutta, Banjarahills, Masab
                    Tank, Aramghar,
                  </p>
                  <p className={styles.shamshabad1}>Shamshabad</p>
                </div>
              </div>
              <div className={styles.cells71}>
                <div className={styles.bg67} />
                <div className={styles.name73}>
                  JNTU, Forum Mall, Shilparamam (Hitech City), Gachobowli
                </div>
              </div>
              <div className={styles.cells72}>
                <div className={styles.bg68} />
                <div className={styles.name74}>Item</div>
              </div>
              <div className={styles.cells73}>
                <div className={styles.bg69} />
                <div className={styles.name75}>Item</div>
              </div>
              <div className={styles.cells74}>
                <div className={styles.bg70} />
                <div className={styles.name76}>Item</div>
              </div>
              <div className={styles.cells75}>
                <div className={styles.bg71} />
                <div className={styles.name77}>Item</div>
              </div>
              <div className={styles.cells76}>
                <div className={styles.bg72} />
                <div className={styles.name78}>Item</div>
              </div>
              <div className={styles.cells77}>
                <div className={styles.bg73} />
                <div className={styles.name79}>Item</div>
              </div>
              <div className={styles.cells78}>
                <div className={styles.bg74} />
                <div className={styles.name80}>Item</div>
              </div>
              <div className={styles.cells79}>
                <div className={styles.bg75} />
                <div className={styles.name81}>Item</div>
              </div>
              <div className={styles.cells80}>
                <div className={styles.bg76} />
                <div className={styles.name82}>Item</div>
              </div>
              <div className={styles.cells81}>
                <div className={styles.bg77} />
                <div className={styles.name83}>Item</div>
              </div>
              <div className={styles.cells82}>
                <div className={styles.bg78} />
                <div className={styles.name84}>Item</div>
              </div>
              <div className={styles.cells83}>
                <div className={styles.bg79} />
                <div className={styles.name85}>Item</div>
              </div>
            </div>
          </div>
          <div className={styles.column10}>
            <div className={styles.cells84}>
              <div className={styles.name86}>Title</div>
            </div>
            <div className={styles.contentCell4}>
              <div className={styles.cells85}>
                <div className={styles.bg80} />
                <div className={styles.name87}>Item</div>
              </div>
              <div className={styles.cells86}>
                <div className={styles.bg81} />
                <div className={styles.name88}>Item</div>
              </div>
              <div className={styles.cells87}>
                <div className={styles.bg82} />
                <div className={styles.name89}>Item</div>
              </div>
              <div className={styles.cells88}>
                <div className={styles.bg83} />
                <div className={styles.name90}>Item</div>
              </div>
              <div className={styles.cells89}>
                <div className={styles.bg84} />
                <div className={styles.name91}>Item</div>
              </div>
              <div className={styles.cells90}>
                <div className={styles.bg85} />
                <div className={styles.name92}>Item</div>
              </div>
              <div className={styles.cells91}>
                <div className={styles.bg86} />
                <div className={styles.name93}>Item</div>
              </div>
              <div className={styles.cells92}>
                <div className={styles.bg87} />
                <div className={styles.name94}>Item</div>
              </div>
              <div className={styles.cells93}>
                <div className={styles.bg88} />
                <div className={styles.name95}>Item</div>
              </div>
              <div className={styles.cells94}>
                <div className={styles.bg89} />
                <div className={styles.name96}>Item</div>
              </div>
              <div className={styles.cells95}>
                <div className={styles.bg90} />
                <div className={styles.name97}>Item</div>
              </div>
              <div className={styles.cells96}>
                <div className={styles.bg91} />
                <div className={styles.name98}>Item</div>
              </div>
              <div className={styles.cells97}>
                <div className={styles.bg92} />
                <div className={styles.name99}>Item</div>
              </div>
              <div className={styles.cells98}>
                <div className={styles.bg93} />
                <div className={styles.name100}>Item</div>
              </div>
              <div className={styles.cells99}>
                <div className={styles.bg94} />
                <div className={styles.name101}>Item</div>
              </div>
              <div className={styles.cells100}>
                <div className={styles.bg95} />
                <div className={styles.name102}>Item</div>
              </div>
            </div>
          </div>
          <div className={styles.column11}>
            <div className={styles.cells101}>
              <div className={styles.name103}>Title</div>
            </div>
            <div className={styles.contentCell5}>
              <div className={styles.cells102}>
                <div className={styles.bg96} />
                <div className={styles.name104}>Item</div>
              </div>
              <div className={styles.cells103}>
                <div className={styles.bg97} />
                <div className={styles.name105}>Item</div>
              </div>
              <div className={styles.cells104}>
                <div className={styles.bg98} />
                <div className={styles.name106}>Item</div>
              </div>
              <div className={styles.cells105}>
                <div className={styles.bg99} />
                <div className={styles.name107}>Item</div>
              </div>
              <div className={styles.cells106}>
                <div className={styles.bg100} />
                <div className={styles.name108}>Item</div>
              </div>
              <div className={styles.cells107}>
                <div className={styles.bg101} />
                <div className={styles.name109}>Item</div>
              </div>
              <div className={styles.cells108}>
                <div className={styles.bg102} />
                <div className={styles.name110}>Item</div>
              </div>
              <div className={styles.cells109}>
                <div className={styles.bg103} />
                <div className={styles.name111}>Item</div>
              </div>
              <div className={styles.cells110}>
                <div className={styles.bg104} />
                <div className={styles.name112}>Item</div>
              </div>
              <div className={styles.cells111}>
                <div className={styles.bg105} />
                <div className={styles.name113}>Item</div>
              </div>
              <div className={styles.cells112}>
                <div className={styles.bg106} />
                <div className={styles.name114}>Item</div>
              </div>
              <div className={styles.cells113}>
                <div className={styles.bg107} />
                <div className={styles.name115}>Item</div>
              </div>
              <div className={styles.cells114}>
                <div className={styles.bg108} />
                <div className={styles.name116}>Item</div>
              </div>
              <div className={styles.cells115}>
                <div className={styles.bg109} />
                <div className={styles.name117}>Item</div>
              </div>
              <div className={styles.cells116}>
                <div className={styles.bg110} />
                <div className={styles.name118}>Item</div>
              </div>
              <div className={styles.cells117}>
                <div className={styles.bg111} />
                <div className={styles.name119}>Item</div>
              </div>
            </div>
          </div>
          <div className={styles.column12}>
            <div className={styles.cells118}>
              <div className={styles.name120}>Title</div>
            </div>
            <div className={styles.contentCell6}>
              <div className={styles.cells119}>
                <div className={styles.bg112} />
                <div className={styles.name121}>Item</div>
              </div>
              <div className={styles.cells120}>
                <div className={styles.bg113} />
                <div className={styles.name122}>Item</div>
              </div>
              <div className={styles.cells121}>
                <div className={styles.bg114} />
                <div className={styles.name123}>Item</div>
              </div>
              <div className={styles.cells122}>
                <div className={styles.bg115} />
                <div className={styles.name124}>Item</div>
              </div>
              <div className={styles.cells123}>
                <div className={styles.bg116} />
                <div className={styles.name125}>Item</div>
              </div>
              <div className={styles.cells124}>
                <div className={styles.bg117} />
                <div className={styles.name126}>Item</div>
              </div>
              <div className={styles.cells125}>
                <div className={styles.bg118} />
                <div className={styles.name127}>Item</div>
              </div>
              <div className={styles.cells126}>
                <div className={styles.bg119} />
                <div className={styles.name128}>Item</div>
              </div>
              <div className={styles.cells127}>
                <div className={styles.bg120} />
                <div className={styles.name129}>Item</div>
              </div>
              <div className={styles.cells128}>
                <div className={styles.bg121} />
                <div className={styles.name130}>Item</div>
              </div>
              <div className={styles.cells129}>
                <div className={styles.bg122} />
                <div className={styles.name131}>Item</div>
              </div>
              <div className={styles.cells130}>
                <div className={styles.bg123} />
                <div className={styles.name132}>Item</div>
              </div>
              <div className={styles.cells131}>
                <div className={styles.bg124} />
                <div className={styles.name133}>Item</div>
              </div>
              <div className={styles.cells132}>
                <div className={styles.bg125} />
                <div className={styles.name134}>Item</div>
              </div>
              <div className={styles.cells133}>
                <div className={styles.bg126} />
                <div className={styles.name135}>Item</div>
              </div>
              <div className={styles.cells134}>
                <div className={styles.bg127} />
                <div className={styles.name136}>Item</div>
              </div>
            </div>
          </div>
          <div className={styles.actionCell}>
            <div className={styles.cells135}>
              <div className={styles.name137}>Action</div>
            </div>
            <div className={styles.contentCell7}>
              <div className={styles.buttonCells}>
                <div className={styles.bg128} />
                <div className={styles.actions}>
                  <div className={styles.button}>
                    <div className={styles.viewDetails}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon} alt="" />
                  <div className={styles.button1}>
                    <div className={styles.viewDetails1}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon1} alt="" />
                </div>
              </div>
              <div className={styles.buttonCells1}>
                <div className={styles.bg129} />
                <div className={styles.actions1}>
                  <div className={styles.button2}>
                    <div className={styles.viewDetails2}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon2} alt="" />
                  <div className={styles.button3}>
                    <div className={styles.viewDetails3}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon3} alt="" />
                </div>
              </div>
              <div className={styles.buttonCells2}>
                <div className={styles.bg130} />
                <div className={styles.actions2}>
                  <div className={styles.button4}>
                    <div className={styles.viewDetails4}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon4} alt="" />
                  <div className={styles.button5}>
                    <div className={styles.viewDetails5}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon5} alt="" />
                </div>
              </div>
              <div className={styles.buttonCells3}>
                <div className={styles.bg131} />
                <div className={styles.actions3}>
                  <div className={styles.button6}>
                    <div className={styles.viewDetails6}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon6} alt="" />
                  <div className={styles.button7}>
                    <div className={styles.viewDetails7}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon7} alt="" />
                </div>
              </div>
              <div className={styles.buttonCells4}>
                <div className={styles.bg132} />
                <div className={styles.actions4}>
                  <div className={styles.button8}>
                    <div className={styles.viewDetails8}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon8} alt="" />
                  <div className={styles.button9}>
                    <div className={styles.viewDetails9}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon9} alt="" />
                </div>
              </div>
              <div className={styles.buttonCells5}>
                <div className={styles.bg133} />
                <div className={styles.actions5}>
                  <div className={styles.button10}>
                    <div className={styles.viewDetails10}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon10} alt="" />
                  <div className={styles.button11}>
                    <div className={styles.viewDetails11}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon11} alt="" />
                </div>
              </div>
              <div className={styles.buttonCells6}>
                <div className={styles.bg134} />
                <div className={styles.actions6}>
                  <div className={styles.button12}>
                    <div className={styles.viewDetails12}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon12} alt="" />
                  <div className={styles.button13}>
                    <div className={styles.viewDetails13}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon13} alt="" />
                </div>
              </div>
              <div className={styles.buttonCells7}>
                <div className={styles.bg135} />
                <div className={styles.actions7}>
                  <div className={styles.button14}>
                    <div className={styles.viewDetails14}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon14} alt="" />
                  <div className={styles.button15}>
                    <div className={styles.viewDetails15}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon15} alt="" />
                </div>
              </div>
              <div className={styles.buttonCells8}>
                <div className={styles.bg136} />
                <div className={styles.actions8}>
                  <div className={styles.button16}>
                    <div className={styles.viewDetails16}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon16} alt="" />
                  <div className={styles.button17}>
                    <div className={styles.viewDetails17}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon17} alt="" />
                </div>
              </div>
              <div className={styles.buttonCells9}>
                <div className={styles.bg137} />
                <div className={styles.actions9}>
                  <div className={styles.button18}>
                    <div className={styles.viewDetails18}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon18} alt="" />
                  <div className={styles.button19}>
                    <div className={styles.viewDetails19}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon19} alt="" />
                </div>
              </div>
              <div className={styles.buttonCells10}>
                <div className={styles.bg138} />
                <div className={styles.actions10}>
                  <div className={styles.button20}>
                    <div className={styles.viewDetails20}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon20} alt="" />
                  <div className={styles.button21}>
                    <div className={styles.viewDetails21}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon21} alt="" />
                </div>
              </div>
              <div className={styles.buttonCells11}>
                <div className={styles.bg139} />
                <div className={styles.actions11}>
                  <div className={styles.button22}>
                    <div className={styles.viewDetails22}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon22} alt="" />
                  <div className={styles.button23}>
                    <div className={styles.viewDetails23}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon23} alt="" />
                </div>
              </div>
              <div className={styles.buttonCells12}>
                <div className={styles.bg140} />
                <div className={styles.actions12}>
                  <div className={styles.button24}>
                    <div className={styles.viewDetails24}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon24} alt="" />
                  <div className={styles.button25}>
                    <div className={styles.viewDetails25}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon25} alt="" />
                </div>
              </div>
              <div className={styles.buttonCells13}>
                <div className={styles.bg141} />
                <div className={styles.actions13}>
                  <div className={styles.button26}>
                    <div className={styles.viewDetails26}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon26} alt="" />
                  <div className={styles.button27}>
                    <div className={styles.viewDetails27}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon27} alt="" />
                </div>
              </div>
              <div className={styles.buttonCells14}>
                <div className={styles.bg142} />
                <div className={styles.actions14}>
                  <div className={styles.button28}>
                    <div className={styles.viewDetails28}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon28} alt="" />
                  <div className={styles.button29}>
                    <div className={styles.viewDetails29}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon29} alt="" />
                </div>
              </div>
              <div className={styles.buttonCells15}>
                <div className={styles.bg143} />
                <div className={styles.actions15}>
                  <div className={styles.button30}>
                    <div className={styles.viewDetails30}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon30} alt="" />
                  <div className={styles.button31}>
                    <div className={styles.viewDetails31}>View Details</div>
                  </div>
                  <img className={styles.separatorIcon31} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableTitle1;
