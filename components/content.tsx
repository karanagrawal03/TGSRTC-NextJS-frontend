import type { NextPage } from "next";
import FrameComponent from "./frame-component";
import styles from "./content.module.css";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <img
        className={styles.busDust}
        loading="lazy"
        alt=""
        src="/bus--dust4@2x.png"
      />
      <div className={styles.tendersDetails}>
        <div className={styles.detailsContent}>
          <div className={styles.sideTabSelectionContainer}>
            <div className={styles.sideTabSelection}>
              <div className={styles.text}>Open Land Parcel on Lease</div>
            </div>
            <div className={styles.sideTabSelection1}>
              <div className={styles.text1}>{`Procurement & Supplies`}</div>
            </div>
            <div className={styles.sideTabSelection2}>
              <div className={styles.text2}>{`Stalls & Shops for Rent`}</div>
            </div>
            <div className={styles.sideTabSelection3}>
              <b className={styles.text3}>Outsourcing Contracts</b>
            </div>
            <div className={styles.sideTabSelection4}>
              <div className={styles.text4}>Software and IT Products</div>
            </div>
            <div className={styles.sideTabSelection5}>
              <div className={styles.text5}>
                Advertisements and Fuel Outlets
              </div>
            </div>
            <div className={styles.sideTabSelection6}>
              <div className={styles.text6}>{`Auctions & Disposals`}</div>
            </div>
            <div className={styles.sideTabSelection7}>
              <div
                className={styles.text7}
              >{`Build Operate & Transfer (BOT)`}</div>
            </div>
            <div className={styles.sideTabSelection8}>
              <div className={styles.text8}>{`Chassis & Bodies`}</div>
            </div>
            <div className={styles.sideTabSelection9}>
              <div className={styles.text9}>Electric Buses</div>
            </div>
            <div className={styles.sideTabSelection10}>
              <div className={styles.text10}>Civil Engineering Works</div>
            </div>
            <div className={styles.sideTabSelection11}>
              <div className={styles.text11}>Hire Buses</div>
            </div>
            <div className={styles.sideTabSelection12}>
              <div className={styles.text12}>Other Contracts</div>
            </div>
          </div>
        </div>
        <div className={styles.tableTitle}>
          <h1 className={styles.title}>Outsourcing Contracts</h1>
          <div className={styles.table}>
            <div className={styles.titleHeader}>
              <div className={styles.name}>Overview (Up to March - 2024)</div>
            </div>
            <div className={styles.table1}>
              <div className={styles.cloumn1}>
                <div className={styles.header}>
                  <div className={styles.name1}>#</div>
                </div>
                <div className={styles.columnCell}>
                  <div className={styles.cells}>
                    <div className={styles.bg} />
                    <div className={styles.name2}>
                      <p className={styles.p}>1</p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p className={styles.blankLine1}>&nbsp;</p>
                    </div>
                  </div>
                  <div className={styles.cells1}>
                    <div className={styles.bg1} />
                    <div className={styles.name3}>2</div>
                  </div>
                  <div className={styles.cells2}>
                    <div className={styles.bg2} />
                    <div className={styles.name4}>3</div>
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
                    <div className={styles.name8}>
                      <p className={styles.p1}>2</p>
                      <p className={styles.blankLine2}>&nbsp;</p>
                      <p className={styles.blankLine3}>&nbsp;</p>
                    </div>
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
                  <div className={styles.name18}>Title</div>
                </div>
                <div className={styles.contentCell}>
                  <div className={styles.cells17}>
                    <div className={styles.bg16} />
                    <div
                      className={styles.name19}
                    >{`Notification for Sweeping Cleaning & Washing Garage yards etc.,Upkeep of bus stations ,Asst. to Mechanics,Artisan Cader,Sharmiks/Man power of Cargo vehicles of Hyderabad Region of Greater Hyderabad Zone`}</div>
                  </div>
                  <div className={styles.cells18}>
                    <div className={styles.bg17} />
                    <div className={styles.name20}>Item</div>
                  </div>
                  <div className={styles.cells19}>
                    <div className={styles.bg18} />
                    <div className={styles.name21}>Item</div>
                  </div>
                  <div className={styles.cells20}>
                    <div className={styles.bg19} />
                    <div className={styles.name22}>Item</div>
                  </div>
                  <div className={styles.cells21}>
                    <div className={styles.bg20} />
                    <div className={styles.name23}>Item</div>
                  </div>
                  <div className={styles.cells22}>
                    <div className={styles.bg21} />
                    <div className={styles.name24}>Item</div>
                  </div>
                  <div className={styles.cells23}>
                    <div className={styles.bg22} />
                    <div className={styles.name25}>Item</div>
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
              <div className={styles.column3}>
                <div className={styles.cells33}>
                  <b className={styles.name35}>Title</b>
                </div>
                <div className={styles.contentCell1}>
                  <div className={styles.cells34}>
                    <div className={styles.bg32} />
                    <p
                      className={styles.name36}
                    >{`Notification for Sweeping Cleaning & Washing Garage yards etc.,Upkeep of bus stations ,Asst. to Mechanics,Artisan Cader,Sharmiks/Man power of Cargo vehicles of Hyderabad Region of Greater Hyderabad Zone`}</p>
                  </div>
                  <div className={styles.cells35}>
                    <div className={styles.bg33} />
                    <div className={styles.name37}>
                      <ul className={styles.upkeepOfBusStationsTender}>
                        <li>UPKEEP OF BUS STATIONS_Tender Form.</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.cells36}>
                    <div className={styles.bg34} />
                    <div className={styles.name38}>
                      <ul className={styles.garageYardTenderForm}>
                        <li>GARAGE YARD_TENDER - FORM</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.cells37}>
                    <div className={styles.bg35} />
                    <div className={styles.name39}>
                      <ul className={styles.cargoShramiksTenderForm}>
                        <li>CARGO SHRAMIKS TENDER FORM</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.cells38}>
                    <div className={styles.bg36} />
                    <div className={styles.name40}>
                      <ul className={styles.asstToMechanicsTenderForm}>
                        <li>ASST. TO MECHANICS TENDER FORM-2023</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.cells39}>
                    <div className={styles.bg37} />
                    <div className={styles.name41}>
                      <ul className={styles.artisansTenderForm}>
                        <li>ARTISANS_ TENDER - FORM</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.cells40}>
                    <div className={styles.bg38} />
                    <p
                      className={styles.name42}
                    >{`Notification for Sweeping Cleaning & Washing of buses to the depots etc.,Bus stations Sweeping of old bus stations,Maintenance contract of Bus station including sweeping cleaning etc., and HSD oil topup to the depots, Asst. to the Mechanics , Garrage Sweeping works to the depot of Khammam Region`}</p>
                  </div>
                  <div className={styles.cells41}>
                    <div className={styles.bg39} />
                    <div className={styles.name43}>
                      <ul className={styles.tenderFormGarageSweepingOf}>
                        <li>Tender form garage sweeping of KMM region</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.cells42}>
                    <div className={styles.bg40} />
                    <div className={styles.name44}>
                      <ul className={styles.washingOfBusesTenderForms}>
                        <li>
                          Washing of buses Tender forms OTHER THAN YLD DEPOT 24
                          BUSES (1)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.cells43}>
                    <div className={styles.bg41} />
                    <div className={styles.name45}>
                      <ul className={styles.washingOfBusesTenderForms1}>
                        <li>
                          Washing of buses Tender forms OTHER THAN SPL DEPOT 26
                          BUSES
                        </li>
                      </ul>
                    </div>
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
              <div className={styles.column4}>
                <div className={styles.cells50}>
                  <b className={styles.name52}>Title</b>
                </div>
                <div className={styles.contentCell2}>
                  <div className={styles.cellsParent}>
                    <div className={styles.cells51}>
                      <div className={styles.bg48} />
                      <div className={styles.name53}>
                        <p className={styles.p2}>30/03/2024</p>
                        <p className={styles.blankLine4}>&nbsp;</p>
                        <p className={styles.blankLine5}>&nbsp;</p>
                      </div>
                    </div>
                    <div className={styles.cells52}>
                      <div className={styles.bg49} />
                      <div className={styles.name54}>Item</div>
                    </div>
                  </div>
                  <div className={styles.cells53}>
                    <div className={styles.bg50} />
                    <div className={styles.name55}>Item</div>
                  </div>
                  <div className={styles.cells54}>
                    <div className={styles.bg51} />
                    <div className={styles.name56}>Item</div>
                  </div>
                  <div className={styles.cells55}>
                    <div className={styles.bg52} />
                    <div className={styles.name57}>Item</div>
                  </div>
                  <div className={styles.cellsGroup}>
                    <div className={styles.cells56}>
                      <div className={styles.bg53} />
                      <div className={styles.name58}>Item</div>
                    </div>
                    <div className={styles.cells57}>
                      <div className={styles.bg54} />
                      <div className={styles.name59}>
                        <p className={styles.p3}>30/04/2024</p>
                        <p className={styles.blankLine6}>&nbsp;</p>
                        <p className={styles.blankLine7}>&nbsp;</p>
                        <p className={styles.blankLine8}>&nbsp;</p>
                        <p className={styles.blankLine9}>&nbsp;</p>
                      </div>
                    </div>
                    <div className={styles.cells58}>
                      <div className={styles.bg55} />
                      <div className={styles.name60}>Item</div>
                    </div>
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
              <div className={styles.column5}>
                <div className={styles.cells67}>
                  <div className={styles.name69}>Title</div>
                </div>
                <div className={styles.contentCell3}>
                  <div className={styles.cells68}>
                    <div className={styles.bg64} />
                    <div className={styles.name70}>Item</div>
                  </div>
                  <div className={styles.cells69}>
                    <div className={styles.bg65} />
                    <div className={styles.name71}>Item</div>
                  </div>
                  <div className={styles.cells70}>
                    <div className={styles.bg66} />
                    <div className={styles.name72}>Item</div>
                  </div>
                  <div className={styles.cells71}>
                    <div className={styles.bg67} />
                    <div className={styles.name73}>Item</div>
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
              <div className={styles.column6}>
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
              <div className={styles.column7}>
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
              <div className={styles.column8}>
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
              <div className={styles.column9}>
                <div className={styles.cells135}>
                  <div className={styles.name137}>Title</div>
                </div>
                <div className={styles.contentCell7}>
                  <div className={styles.cells136}>
                    <div className={styles.bg128} />
                    <div className={styles.name138}>Item</div>
                  </div>
                  <div className={styles.cells137}>
                    <div className={styles.bg129} />
                    <div className={styles.name139}>Item</div>
                  </div>
                  <div className={styles.cells138}>
                    <div className={styles.bg130} />
                    <div className={styles.name140}>Item</div>
                  </div>
                  <div className={styles.cells139}>
                    <div className={styles.bg131} />
                    <div className={styles.name141}>Item</div>
                  </div>
                  <div className={styles.cells140}>
                    <div className={styles.bg132} />
                    <div className={styles.name142}>Item</div>
                  </div>
                  <div className={styles.cells141}>
                    <div className={styles.bg133} />
                    <div className={styles.name143}>Item</div>
                  </div>
                  <div className={styles.cells142}>
                    <div className={styles.bg134} />
                    <div className={styles.name144}>Item</div>
                  </div>
                  <div className={styles.cells143}>
                    <div className={styles.bg135} />
                    <div className={styles.name145}>Item</div>
                  </div>
                  <div className={styles.cells144}>
                    <div className={styles.bg136} />
                    <div className={styles.name146}>Item</div>
                  </div>
                  <div className={styles.cells145}>
                    <div className={styles.bg137} />
                    <div className={styles.name147}>Item</div>
                  </div>
                  <div className={styles.cells146}>
                    <div className={styles.bg138} />
                    <div className={styles.name148}>Item</div>
                  </div>
                  <div className={styles.cells147}>
                    <div className={styles.bg139} />
                    <div className={styles.name149}>Item</div>
                  </div>
                  <div className={styles.cells148}>
                    <div className={styles.bg140} />
                    <div className={styles.name150}>Item</div>
                  </div>
                  <div className={styles.cells149}>
                    <div className={styles.bg141} />
                    <div className={styles.name151}>Item</div>
                  </div>
                  <div className={styles.cells150}>
                    <div className={styles.bg142} />
                    <div className={styles.name152}>Item</div>
                  </div>
                  <div className={styles.cells151}>
                    <div className={styles.bg143} />
                    <div className={styles.name153}>Item</div>
                  </div>
                </div>
              </div>
              <div className={styles.column10}>
                <div className={styles.cells152}>
                  <div className={styles.name154}>Title</div>
                </div>
                <div className={styles.contentCell8}>
                  <div className={styles.cells153}>
                    <div className={styles.bg144} />
                    <div className={styles.name155}>Item</div>
                  </div>
                  <div className={styles.cells154}>
                    <div className={styles.bg145} />
                    <div className={styles.name156}>Item</div>
                  </div>
                  <div className={styles.cells155}>
                    <div className={styles.bg146} />
                    <div className={styles.name157}>Item</div>
                  </div>
                  <div className={styles.cells156}>
                    <div className={styles.bg147} />
                    <div className={styles.name158}>Item</div>
                  </div>
                  <div className={styles.cells157}>
                    <div className={styles.bg148} />
                    <div className={styles.name159}>Item</div>
                  </div>
                  <div className={styles.cells158}>
                    <div className={styles.bg149} />
                    <div className={styles.name160}>Item</div>
                  </div>
                  <div className={styles.cells159}>
                    <div className={styles.bg150} />
                    <div className={styles.name161}>Item</div>
                  </div>
                  <div className={styles.cells160}>
                    <div className={styles.bg151} />
                    <div className={styles.name162}>Item</div>
                  </div>
                  <div className={styles.cells161}>
                    <div className={styles.bg152} />
                    <div className={styles.name163}>Item</div>
                  </div>
                  <div className={styles.cells162}>
                    <div className={styles.bg153} />
                    <div className={styles.name164}>Item</div>
                  </div>
                  <div className={styles.cells163}>
                    <div className={styles.bg154} />
                    <div className={styles.name165}>Item</div>
                  </div>
                  <div className={styles.cells164}>
                    <div className={styles.bg155} />
                    <div className={styles.name166}>Item</div>
                  </div>
                  <div className={styles.cells165}>
                    <div className={styles.bg156} />
                    <div className={styles.name167}>Item</div>
                  </div>
                  <div className={styles.cells166}>
                    <div className={styles.bg157} />
                    <div className={styles.name168}>Item</div>
                  </div>
                  <div className={styles.cells167}>
                    <div className={styles.bg158} />
                    <div className={styles.name169}>Item</div>
                  </div>
                  <div className={styles.cells168}>
                    <div className={styles.bg159} />
                    <div className={styles.name170}>Item</div>
                  </div>
                </div>
              </div>
              <div className={styles.column11}>
                <div className={styles.cells169}>
                  <div className={styles.name171}>Title</div>
                </div>
                <div className={styles.contentCell9}>
                  <div className={styles.cells170}>
                    <div className={styles.bg160} />
                    <div className={styles.name172}>Item</div>
                  </div>
                  <div className={styles.cells171}>
                    <div className={styles.bg161} />
                    <div className={styles.name173}>Item</div>
                  </div>
                  <div className={styles.cells172}>
                    <div className={styles.bg162} />
                    <div className={styles.name174}>Item</div>
                  </div>
                  <div className={styles.cells173}>
                    <div className={styles.bg163} />
                    <div className={styles.name175}>Item</div>
                  </div>
                  <div className={styles.cells174}>
                    <div className={styles.bg164} />
                    <div className={styles.name176}>Item</div>
                  </div>
                  <div className={styles.cells175}>
                    <div className={styles.bg165} />
                    <div className={styles.name177}>Item</div>
                  </div>
                  <div className={styles.cells176}>
                    <div className={styles.bg166} />
                    <div className={styles.name178}>Item</div>
                  </div>
                  <div className={styles.cells177}>
                    <div className={styles.bg167} />
                    <div className={styles.name179}>Item</div>
                  </div>
                  <div className={styles.cells178}>
                    <div className={styles.bg168} />
                    <div className={styles.name180}>Item</div>
                  </div>
                  <div className={styles.cells179}>
                    <div className={styles.bg169} />
                    <div className={styles.name181}>Item</div>
                  </div>
                  <div className={styles.cells180}>
                    <div className={styles.bg170} />
                    <div className={styles.name182}>Item</div>
                  </div>
                  <div className={styles.cells181}>
                    <div className={styles.bg171} />
                    <div className={styles.name183}>Item</div>
                  </div>
                  <div className={styles.cells182}>
                    <div className={styles.bg172} />
                    <div className={styles.name184}>Item</div>
                  </div>
                  <div className={styles.cells183}>
                    <div className={styles.bg173} />
                    <div className={styles.name185}>Item</div>
                  </div>
                  <div className={styles.cells184}>
                    <div className={styles.bg174} />
                    <div className={styles.name186}>Item</div>
                  </div>
                  <div className={styles.cells185}>
                    <div className={styles.bg175} />
                    <div className={styles.name187}>Item</div>
                  </div>
                </div>
              </div>
              <div className={styles.column12}>
                <div className={styles.cells186}>
                  <div className={styles.name188}>Title</div>
                </div>
                <div className={styles.contentCell10}>
                  <div className={styles.cells187}>
                    <div className={styles.bg176} />
                    <div className={styles.name189}>Item</div>
                  </div>
                  <div className={styles.cells188}>
                    <div className={styles.bg177} />
                    <div className={styles.name190}>Item</div>
                  </div>
                  <div className={styles.cells189}>
                    <div className={styles.bg178} />
                    <div className={styles.name191}>Item</div>
                  </div>
                  <div className={styles.cells190}>
                    <div className={styles.bg179} />
                    <div className={styles.name192}>Item</div>
                  </div>
                  <div className={styles.cells191}>
                    <div className={styles.bg180} />
                    <div className={styles.name193}>Item</div>
                  </div>
                  <div className={styles.cells192}>
                    <div className={styles.bg181} />
                    <div className={styles.name194}>Item</div>
                  </div>
                  <div className={styles.cells193}>
                    <div className={styles.bg182} />
                    <div className={styles.name195}>Item</div>
                  </div>
                  <div className={styles.cells194}>
                    <div className={styles.bg183} />
                    <div className={styles.name196}>Item</div>
                  </div>
                  <div className={styles.cells195}>
                    <div className={styles.bg184} />
                    <div className={styles.name197}>Item</div>
                  </div>
                  <div className={styles.cells196}>
                    <div className={styles.bg185} />
                    <div className={styles.name198}>Item</div>
                  </div>
                  <div className={styles.cells197}>
                    <div className={styles.bg186} />
                    <div className={styles.name199}>Item</div>
                  </div>
                  <div className={styles.cells198}>
                    <div className={styles.bg187} />
                    <div className={styles.name200}>Item</div>
                  </div>
                  <div className={styles.cells199}>
                    <div className={styles.bg188} />
                    <div className={styles.name201}>Item</div>
                  </div>
                  <div className={styles.cells200}>
                    <div className={styles.bg189} />
                    <div className={styles.name202}>Item</div>
                  </div>
                  <div className={styles.cells201}>
                    <div className={styles.bg190} />
                    <div className={styles.name203}>Item</div>
                  </div>
                  <div className={styles.cells202}>
                    <div className={styles.bg191} />
                    <div className={styles.name204}>Item</div>
                  </div>
                </div>
              </div>
              <div className={styles.actionCell}>
                <div className={styles.cells203}>
                  <b className={styles.name205}>Action</b>
                </div>
                <div className={styles.contentCell11}>
                  <div className={styles.buttonCellsParent}>
                    <div className={styles.buttonCells}>
                      <div className={styles.bg192} />
                      <div className={styles.actions}>
                        <div className={styles.button}>
                          <b className={styles.viewDetails}>
                            <p className={styles.viewDetails1}>View Details</p>
                            <p className={styles.blankLine10}>&nbsp;</p>
                            <p className={styles.blankLine11}>&nbsp;</p>
                          </b>
                        </div>
                        <img className={styles.separatorIcon} alt="" />
                        <div className={styles.button1}>
                          <div className={styles.viewDetails2}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon1} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells1}>
                      <div className={styles.bg193} />
                      <div className={styles.actions1}>
                        <div className={styles.button2}>
                          <div className={styles.viewDetails3}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon2} alt="" />
                        <div className={styles.button3}>
                          <div className={styles.viewDetails4}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon3} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.buttonCells2}>
                    <div className={styles.bg194} />
                    <div className={styles.actions2}>
                      <div className={styles.button4}>
                        <div className={styles.viewDetails5}>View Details</div>
                      </div>
                      <img className={styles.separatorIcon4} alt="" />
                      <div className={styles.button5}>
                        <div className={styles.viewDetails6}>View Details</div>
                      </div>
                      <img className={styles.separatorIcon5} alt="" />
                    </div>
                  </div>
                  <div className={styles.buttonCells3}>
                    <div className={styles.bg195} />
                    <div className={styles.actions3}>
                      <div className={styles.button6}>
                        <div className={styles.viewDetails7}>View Details</div>
                      </div>
                      <img className={styles.separatorIcon6} alt="" />
                      <div className={styles.button7}>
                        <div className={styles.viewDetails8}>View Details</div>
                      </div>
                      <img className={styles.separatorIcon7} alt="" />
                    </div>
                  </div>
                  {/* <FrameComponent
                    separator="pending_I321:51991;369:24135;369:19682"
                    separator1="pending_I321:51991;369:24135;369:19686"
                    separator2="pending_I321:51991;369:24117;369:19682"
                    separator3="pending_I321:51991;369:24117;369:19686"
                  /> */}
                  <div className={styles.buttonCells4}>
                    <div className={styles.bg196} />
                    <div className={styles.actions4}>
                      <div className={styles.button8}>
                        <div className={styles.viewDetails9}>View Details</div>
                      </div>
                      <img className={styles.separatorIcon8} alt="" />
                      <div className={styles.button9}>
                        <div className={styles.viewDetails10}>View Details</div>
                      </div>
                      <img className={styles.separatorIcon9} alt="" />
                    </div>
                  </div>
                  <div className={styles.buttonCells5}>
                    <div className={styles.bg197} />
                    <div className={styles.actions5}>
                      <div className={styles.button10}>
                        <div className={styles.viewDetails11}>View Details</div>
                      </div>
                      <img className={styles.separatorIcon10} alt="" />
                      <div className={styles.button11}>
                        <div className={styles.viewDetails12}>View Details</div>
                      </div>
                      <img className={styles.separatorIcon11} alt="" />
                    </div>
                  </div>
                  {/* <FrameComponent
                    separator="pending_I321:51991;369:24108;369:19682"
                    separator1="pending_I321:51991;369:24108;369:19686"
                    separator2="pending_I321:51991;369:24099;369:19682"
                    separator3="pending_I321:51991;369:24099;369:19686"
                    propFlex="unset"
                  /> */}
                  <div className={styles.buttonCells6}>
                    <div className={styles.bg198} />
                    <div className={styles.actions6}>
                      <div className={styles.button12}>
                        <div className={styles.viewDetails13}>View Details</div>
                      </div>
                      <img className={styles.separatorIcon12} alt="" />
                      <div className={styles.button13}>
                        <div className={styles.viewDetails14}>View Details</div>
                      </div>
                      <img className={styles.separatorIcon13} alt="" />
                    </div>
                  </div>
                  <div className={styles.buttonCells7}>
                    <div className={styles.bg199} />
                    <div className={styles.actions7}>
                      <div className={styles.button14}>
                        <div className={styles.viewDetails15}>View Details</div>
                      </div>
                      <img className={styles.separatorIcon14} alt="" />
                      <div className={styles.button15}>
                        <div className={styles.viewDetails16}>View Details</div>
                      </div>
                      <img className={styles.separatorIcon15} alt="" />
                    </div>
                  </div>
                  <div className={styles.buttonCells8}>
                    <div className={styles.bg200} />
                    <div className={styles.actions8}>
                      <div className={styles.button16}>
                        <div className={styles.viewDetails17}>View Details</div>
                      </div>
                      <img className={styles.separatorIcon16} alt="" />
                      <div className={styles.button17}>
                        <div className={styles.viewDetails18}>View Details</div>
                      </div>
                      <img className={styles.separatorIcon17} alt="" />
                    </div>
                  </div>
                  <div className={styles.buttonCells9}>
                    <div className={styles.bg201} />
                    <div className={styles.actions9}>
                      <div className={styles.button18}>
                        <div className={styles.viewDetails19}>View Details</div>
                      </div>
                      <img className={styles.separatorIcon18} alt="" />
                      <div className={styles.button19}>
                        <div className={styles.viewDetails20}>View Details</div>
                      </div>
                      <img className={styles.separatorIcon19} alt="" />
                    </div>
                  </div>
                  <div className={styles.buttonCells10}>
                    <div className={styles.bg202} />
                    <div className={styles.actions10}>
                      <div className={styles.button20}>
                        <div className={styles.viewDetails21}>View Details</div>
                      </div>
                      <img className={styles.separatorIcon20} alt="" />
                      <div className={styles.button21}>
                        <div className={styles.viewDetails22}>View Details</div>
                      </div>
                      <img className={styles.separatorIcon21} alt="" />
                    </div>
                  </div>
                  <div className={styles.buttonCells11}>
                    <div className={styles.bg203} />
                    <div className={styles.actions11}>
                      <div className={styles.button22}>
                        <div className={styles.viewDetails23}>View Details</div>
                      </div>
                      <img className={styles.separatorIcon22} alt="" />
                      <div className={styles.button23}>
                        <div className={styles.viewDetails24}>View Details</div>
                      </div>
                      <img className={styles.separatorIcon23} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.scrollIcon} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Content;
