import type { NextPage } from "next";
import BulletPointContainer1 from "./bullet-point-container1";
import BulletPointContainer from "./bullet-point-container";
import Column from "./column";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.busPassContentWrapper, className].join(" ")}>
      <div className={styles.busPassContent}>
        <div className={styles.aStudentQuarterlyRouteBus}>
          <BulletPointContainer1
            guidingPrinciplesOfTSRTC="a. Student Quarterly Route Bus Pass"
            monthlySeasonTicketsAreIs="Eligible for the Students above 12 years age."
            monthlySeasonTicketsAreIs1={`This Bus Pass can be issued for the distance upto 4 KMs, 8 KMs, 12 KMs, 18 KMs & 22 KMs with concessional tariff as furnished in below table.`}
            bulltetPointPlaceholder2="pending_I1:1291;717:23307;121:4116"
            bulltetPointPlaceholder3="pending_I1:1291;717:23308;121:4116"
            bulltetPointPlaceholder4="pending_I1:1291;717:23309;121:4116"
            bulltetPointPlaceholder5="pending_I1:1291;717:23310;121:4116"
            bulltetPointPlaceholder6="pending_I1:1291;717:23311;121:4116"
            bulltetPointPlaceholder7="pending_I1:1291;717:23312;121:4116"
            bulltetPointPlaceholder8="pending_I1:1291;717:23313;121:4116"
            bulltetPointPlaceholder9="pending_I1:1291;717:23314;121:4116"
            bulltetPointPlaceholder10="pending_I1:1291;717:23361;121:4116"
            bulltetPointPlaceholder11="pending_I1:1291;717:23366;121:4116"
            bulltetPointPlaceholder12="pending_I1:1291;717:23371;121:4116"
            bulltetPointPlaceholder13="pending_I1:1291;717:23376;121:4116"
            bulltetPointPlaceholder14="pending_I1:1291;717:23381;121:4116"
            bulltetPointPlaceholder15="pending_I1:1291;717:23386;121:4116"
            bulltetPointPlaceholder16="pending_I1:1291;717:23391;121:4116"
            bulltetPointPlaceholder17="pending_I1:1291;717:23396;121:4116"
            bulltetPointPlaceholder18="pending_I1:1291;717:23401;121:4116"
            bulltetPointPlaceholder19="pending_I1:1291;717:23356;121:4116"
          />
          <div className={styles.tableTitle}>
            <div className={styles.title}>
              Pickup and Drop upto 200 kms contract (One way)
            </div>
            <div className={styles.table}>
              <div className={styles.titleHeader}>
                <div className={styles.name}>Overview (Up to March - 2024)</div>
              </div>
              <form className={styles.table1}>
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
                    <div className={styles.name18}>Type</div>
                  </div>
                  <div className={styles.contentCell}>
                    <div className={styles.cells17}>
                      <div className={styles.bg16} />
                      <div className={styles.name19}>Mini Pallevelugu</div>
                    </div>
                    <div className={styles.cells18}>
                      <div className={styles.bg17} />
                      <div className={styles.name20}>Pallevelugu </div>
                    </div>
                    <div className={styles.cells19}>
                      <div className={styles.bg18} />
                      <div className={styles.name21}>Express </div>
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
                  <button className={styles.cells33}>
                    <div className={styles.name35}>Distance in KMs </div>
                  </button>
                  <div className={styles.contentCell1}>
                    <div className={styles.cells34}>
                      <div className={styles.bg32} />
                      <div className={styles.name36}>4</div>
                    </div>
                    <div className={styles.cells35}>
                      <div className={styles.bg33} />
                      <div className={styles.name37}>8</div>
                    </div>
                    <div className={styles.cells36}>
                      <div className={styles.bg34} />
                      <div className={styles.name38}>12</div>
                    </div>
                    <div className={styles.cells37}>
                      <div className={styles.bg35} />
                      <div className={styles.name39}>18</div>
                    </div>
                    <div className={styles.cells38}>
                      <div className={styles.bg36} />
                      <div className={styles.name40}>22</div>
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
                <div className={styles.column4}>
                  <div className={styles.cells50}>
                    <div className={styles.name52}>Name</div>
                  </div>
                  <div className={styles.contentCell2}>
                    <div className={styles.cells51}>
                      <div className={styles.bg48} />
                      <div className={styles.name53}>450.00</div>
                    </div>
                    <div className={styles.cells52}>
                      <div className={styles.bg49} />
                      <div className={styles.name54}>600.00</div>
                    </div>
                    <div className={styles.cells53}>
                      <div className={styles.bg50} />
                      <div className={styles.name55}>900.00</div>
                    </div>
                    <div className={styles.cells54}>
                      <div className={styles.bg51} />
                      <div className={styles.name56}>1150.00</div>
                    </div>
                    <div className={styles.cells55}>
                      <div className={styles.bg52} />
                      <div className={styles.name57}>1350.00</div>
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
                    <div className={styles.name205}>Action</div>
                  </div>
                  <div className={styles.contentCell11}>
                    <div className={styles.buttonCells}>
                      <div className={styles.bg192} />
                      <div className={styles.actions}>
                        <div className={styles.button}>
                          <div className={styles.viewDetails}>View Details</div>
                        </div>
                        <img className={styles.separatorIcon} alt="" />
                        <div className={styles.button1}>
                          <div className={styles.viewDetails1}>
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
                          <div className={styles.viewDetails2}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon2} alt="" />
                        <div className={styles.button3}>
                          <div className={styles.viewDetails3}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon3} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells2}>
                      <div className={styles.bg194} />
                      <div className={styles.actions2}>
                        <div className={styles.button4}>
                          <div className={styles.viewDetails4}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon4} alt="" />
                        <div className={styles.button5}>
                          <div className={styles.viewDetails5}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon5} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells3}>
                      <div className={styles.bg195} />
                      <div className={styles.actions3}>
                        <div className={styles.button6}>
                          <div className={styles.viewDetails6}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon6} alt="" />
                        <div className={styles.button7}>
                          <div className={styles.viewDetails7}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon7} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells4}>
                      <div className={styles.bg196} />
                      <div className={styles.actions4}>
                        <div className={styles.button8}>
                          <div className={styles.viewDetails8}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon8} alt="" />
                        <div className={styles.button9}>
                          <div className={styles.viewDetails9}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon9} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells5}>
                      <div className={styles.bg197} />
                      <div className={styles.actions5}>
                        <div className={styles.button10}>
                          <div className={styles.viewDetails10}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon10} alt="" />
                        <div className={styles.button11}>
                          <div className={styles.viewDetails11}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon11} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells6}>
                      <div className={styles.bg198} />
                      <div className={styles.actions6}>
                        <div className={styles.button12}>
                          <div className={styles.viewDetails12}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon12} alt="" />
                        <div className={styles.button13}>
                          <div className={styles.viewDetails13}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon13} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells7}>
                      <div className={styles.bg199} />
                      <div className={styles.actions7}>
                        <div className={styles.button14}>
                          <div className={styles.viewDetails14}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon14} alt="" />
                        <div className={styles.button15}>
                          <div className={styles.viewDetails15}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon15} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells8}>
                      <div className={styles.bg200} />
                      <div className={styles.actions8}>
                        <div className={styles.button16}>
                          <div className={styles.viewDetails16}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon16} alt="" />
                        <div className={styles.button17}>
                          <div className={styles.viewDetails17}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon17} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells9}>
                      <div className={styles.bg201} />
                      <div className={styles.actions9}>
                        <div className={styles.button18}>
                          <div className={styles.viewDetails18}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon18} alt="" />
                        <div className={styles.button19}>
                          <div className={styles.viewDetails19}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon19} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells10}>
                      <div className={styles.bg202} />
                      <div className={styles.actions10}>
                        <div className={styles.button20}>
                          <div className={styles.viewDetails20}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon20} alt="" />
                        <div className={styles.button21}>
                          <div className={styles.viewDetails21}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon21} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells11}>
                      <div className={styles.bg203} />
                      <div className={styles.actions11}>
                        <div className={styles.button22}>
                          <div className={styles.viewDetails22}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon22} alt="" />
                        <div className={styles.button23}>
                          <div className={styles.viewDetails23}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon23} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells12}>
                      <div className={styles.bg204} />
                      <div className={styles.actions12}>
                        <div className={styles.button24}>
                          <div className={styles.viewDetails24}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon24} alt="" />
                        <div className={styles.button25}>
                          <div className={styles.viewDetails25}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon25} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells13}>
                      <div className={styles.bg205} />
                      <div className={styles.actions13}>
                        <div className={styles.button26}>
                          <div className={styles.viewDetails26}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon26} alt="" />
                        <div className={styles.button27}>
                          <div className={styles.viewDetails27}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon27} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells14}>
                      <div className={styles.bg206} />
                      <div className={styles.actions14}>
                        <div className={styles.button28}>
                          <div className={styles.viewDetails28}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon28} alt="" />
                        <div className={styles.button29}>
                          <div className={styles.viewDetails29}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon29} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells15}>
                      <div className={styles.bg207} />
                      <div className={styles.actions15}>
                        <div className={styles.button30}>
                          <div className={styles.viewDetails30}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon30} alt="" />
                        <div className={styles.button31}>
                          <div className={styles.viewDetails31}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon31} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <BulletPointContainer
            monthlySeasonTicketsAreIs="Validity period – for 3 months (Quarterly)."
            monthlySeasonTicketsAreIs1="Applicant can apply online at www.online.tsrtcpass.in"
            bulltetPointPlaceholder2="pending_I1:1293;717:23307;121:4116"
            monthlySeasonTicketsAreIs2="Applicant can apply online at www.online.tsrtcpass.in."
            bulltetPointPlaceholder3="pending_I1:1293;717:23308;121:4116"
            bulltetPointPlaceholder4="pending_I1:1293;717:23309;121:4116"
            bulltetPointPlaceholder5="pending_I1:1293;717:23310;121:4116"
            bulltetPointPlaceholder6="pending_I1:1293;717:23311;121:4116"
            bulltetPointPlaceholder7="pending_I1:1293;717:23312;121:4116"
            bulltetPointPlaceholder8="pending_I1:1293;717:23313;121:4116"
            bulltetPointPlaceholder9="pending_I1:1293;717:23314;121:4116"
            bulltetPointPlaceholder10="pending_I1:1293;717:23361;121:4116"
            bulltetPointPlaceholder11="pending_I1:1293;717:23366;121:4116"
            bulltetPointPlaceholder12="pending_I1:1293;717:23371;121:4116"
            bulltetPointPlaceholder13="pending_I1:1293;717:23376;121:4116"
            bulltetPointPlaceholder14="pending_I1:1293;717:23381;121:4116"
            bulltetPointPlaceholder15="pending_I1:1293;717:23386;121:4116"
            bulltetPointPlaceholder16="pending_I1:1293;717:23391;121:4116"
            bulltetPointPlaceholder17="pending_I1:1293;717:23396;121:4116"
            bulltetPointPlaceholder18="pending_I1:1293;717:23401;121:4116"
            bulltetPointPlaceholder19="pending_I1:1293;717:23356;121:4116"
            bulletPoint={false}
          />
        </div>
        <div className={styles.bStudentGeneralBusTicket}>
          <BulletPointContainer1
            guidingPrinciplesOfTSRTC="b. Student General Bus Ticket:"
            monthlySeasonTicketsAreIs="For city Students only"
            monthlySeasonTicketsAreIs1="Eligible for the Students above 12 years age."
            bulltetPointPlaceholder2="pending_I1:1295;717:23307;121:4116"
            bulltetPointPlaceholder3="pending_I1:1295;717:23308;121:4116"
            bulltetPointPlaceholder4="pending_I1:1295;717:23309;121:4116"
            bulltetPointPlaceholder5="pending_I1:1295;717:23310;121:4116"
            bulltetPointPlaceholder6="pending_I1:1295;717:23311;121:4116"
            bulltetPointPlaceholder7="pending_I1:1295;717:23312;121:4116"
            bulltetPointPlaceholder8="pending_I1:1295;717:23313;121:4116"
            bulltetPointPlaceholder9="pending_I1:1295;717:23314;121:4116"
            bulltetPointPlaceholder10="pending_I1:1295;717:23361;121:4116"
            bulltetPointPlaceholder11="pending_I1:1295;717:23366;121:4116"
            bulltetPointPlaceholder12="pending_I1:1295;717:23371;121:4116"
            bulltetPointPlaceholder13="pending_I1:1295;717:23376;121:4116"
            bulltetPointPlaceholder14="pending_I1:1295;717:23381;121:4116"
            bulltetPointPlaceholder15="pending_I1:1295;717:23386;121:4116"
            bulltetPointPlaceholder16="pending_I1:1295;717:23391;121:4116"
            bulltetPointPlaceholder17="pending_I1:1295;717:23396;121:4116"
            bulltetPointPlaceholder18="pending_I1:1295;717:23401;121:4116"
            bulltetPointPlaceholder19="pending_I1:1295;717:23356;121:4116"
            monthlySeasonTicketsFlexWrap="unset"
            bulletPointMinHeight="26px"
            bulltetPointPlaceholderMinWidth="unset"
          />
          <div className={styles.tableTitle1}>
            <div className={styles.title1}>
              This Bus Pass can be issued with concessional tariff as furnished
              in below table.
            </div>
            <div className={styles.table2}>
              <div className={styles.titleHeader1}>
                <div className={styles.name206}>
                  Overview (Up to March - 2024)
                </div>
              </div>
              <form className={styles.table3}>
                <div className={styles.cloumn11}>
                  <button className={styles.header1}>
                    <div className={styles.name207}>#</div>
                  </button>
                  <div className={styles.columnCell1}>
                    <div className={styles.cells204}>
                      <div className={styles.bg208} />
                      <div className={styles.name208}>1</div>
                    </div>
                    <div className={styles.cells205}>
                      <div className={styles.bg209} />
                      <div className={styles.name209}>2</div>
                    </div>
                    <div className={styles.cells206}>
                      <div className={styles.bg210} />
                      <div className={styles.name210}>3</div>
                    </div>
                    <div className={styles.cells207}>
                      <div className={styles.bg211} />
                      <div className={styles.name211}>4</div>
                    </div>
                    <div className={styles.cells208}>
                      <div className={styles.bg212} />
                      <div className={styles.name212}>5</div>
                    </div>
                    <div className={styles.cells209}>
                      <div className={styles.bg213} />
                      <div className={styles.name213}>6</div>
                    </div>
                    <div className={styles.cells210}>
                      <div className={styles.bg214} />
                      <div className={styles.name214}>7</div>
                    </div>
                    <div className={styles.cells211}>
                      <div className={styles.bg215} />
                      <div className={styles.name215}>8</div>
                    </div>
                    <div className={styles.cells212}>
                      <div className={styles.bg216} />
                      <div className={styles.name216}>9</div>
                    </div>
                    <div className={styles.cells213}>
                      <div className={styles.bg217} />
                      <div className={styles.name217}>10</div>
                    </div>
                    <div className={styles.cells214}>
                      <div className={styles.bg218} />
                      <div className={styles.name218}>11</div>
                    </div>
                    <div className={styles.cells215}>
                      <div className={styles.bg219} />
                      <div className={styles.name219}>12</div>
                    </div>
                    <div className={styles.cells216}>
                      <div className={styles.bg220} />
                      <div className={styles.name220}>13</div>
                    </div>
                    <div className={styles.cells217}>
                      <div className={styles.bg221} />
                      <div className={styles.name221}>14</div>
                    </div>
                    <div className={styles.cells218}>
                      <div className={styles.bg222} />
                      <div className={styles.name222}>15</div>
                    </div>
                    <div className={styles.cells219}>
                      <div className={styles.bg223} />
                      <div className={styles.name223}>16</div>
                    </div>
                  </div>
                </div>
                <div className={styles.coulmn21}>
                  <div className={styles.cells220}>
                    <div className={styles.name224}>Type</div>
                  </div>
                  <div className={styles.contentCell12}>
                    <div className={styles.cells221}>
                      <div className={styles.bg224} />
                      <div className={styles.name225}>Mini Pallevelugu</div>
                    </div>
                    <div className={styles.cells222}>
                      <div className={styles.bg225} />
                      <div className={styles.name226}>Pallevelugu </div>
                    </div>
                    <div className={styles.cells223}>
                      <div className={styles.bg226} />
                      <div className={styles.name227}>Express </div>
                    </div>
                    <div className={styles.cells224}>
                      <div className={styles.bg227} />
                      <div className={styles.name228}>Item</div>
                    </div>
                    <div className={styles.cells225}>
                      <div className={styles.bg228} />
                      <div className={styles.name229}>Item</div>
                    </div>
                    <div className={styles.cells226}>
                      <div className={styles.bg229} />
                      <div className={styles.name230}>Item</div>
                    </div>
                    <div className={styles.cells227}>
                      <div className={styles.bg230} />
                      <div className={styles.name231}>Item</div>
                    </div>
                    <div className={styles.cells228}>
                      <div className={styles.bg231} />
                      <div className={styles.name232}>Item</div>
                    </div>
                    <div className={styles.cells229}>
                      <div className={styles.bg232} />
                      <div className={styles.name233}>Item</div>
                    </div>
                    <div className={styles.cells230}>
                      <div className={styles.bg233} />
                      <div className={styles.name234}>Item</div>
                    </div>
                    <div className={styles.cells231}>
                      <div className={styles.bg234} />
                      <div className={styles.name235}>Item</div>
                    </div>
                    <div className={styles.cells232}>
                      <div className={styles.bg235} />
                      <div className={styles.name236}>Item</div>
                    </div>
                    <div className={styles.cells233}>
                      <div className={styles.bg236} />
                      <div className={styles.name237}>Item</div>
                    </div>
                    <div className={styles.cells234}>
                      <div className={styles.bg237} />
                      <div className={styles.name238}>Item</div>
                    </div>
                    <div className={styles.cells235}>
                      <div className={styles.bg238} />
                      <div className={styles.name239}>Item</div>
                    </div>
                    <div className={styles.cells236}>
                      <div className={styles.bg239} />
                      <div className={styles.name240}>Item</div>
                    </div>
                  </div>
                </div>
                <div className={styles.column31}>
                  <button className={styles.cells237}>
                    <div className={styles.name241}>Bus Pass Type </div>
                  </button>
                  <div className={styles.contentCell13}>
                    <div className={styles.cells238}>
                      <div className={styles.bg240} />
                      <div className={styles.name242}>4</div>
                    </div>
                    <div className={styles.cells239}>
                      <div className={styles.bg241} />
                      <div className={styles.name243}>8</div>
                    </div>
                    <div className={styles.cells240}>
                      <div className={styles.bg242} />
                      <div className={styles.name244}>12</div>
                    </div>
                    <div className={styles.cells241}>
                      <div className={styles.bg243} />
                      <div className={styles.name245}>18</div>
                    </div>
                    <div className={styles.cells242}>
                      <div className={styles.bg244} />
                      <div className={styles.name246}>22</div>
                    </div>
                    <div className={styles.cells243}>
                      <div className={styles.bg245} />
                      <div className={styles.name247}>Item</div>
                    </div>
                    <div className={styles.cells244}>
                      <div className={styles.bg246} />
                      <div className={styles.name248}>Item</div>
                    </div>
                    <div className={styles.cells245}>
                      <div className={styles.bg247} />
                      <div className={styles.name249}>Item</div>
                    </div>
                    <div className={styles.cells246}>
                      <div className={styles.bg248} />
                      <div className={styles.name250}>Item</div>
                    </div>
                    <div className={styles.cells247}>
                      <div className={styles.bg249} />
                      <div className={styles.name251}>Item</div>
                    </div>
                    <div className={styles.cells248}>
                      <div className={styles.bg250} />
                      <div className={styles.name252}>Item</div>
                    </div>
                    <div className={styles.cells249}>
                      <div className={styles.bg251} />
                      <div className={styles.name253}>Item</div>
                    </div>
                    <div className={styles.cells250}>
                      <div className={styles.bg252} />
                      <div className={styles.name254}>Item</div>
                    </div>
                    <div className={styles.cells251}>
                      <div className={styles.bg253} />
                      <div className={styles.name255}>Item</div>
                    </div>
                    <div className={styles.cells252}>
                      <div className={styles.bg254} />
                      <div className={styles.name256}>Item</div>
                    </div>
                    <div className={styles.cells253}>
                      <div className={styles.bg255} />
                      <div className={styles.name257}>Item</div>
                    </div>
                  </div>
                </div>
                <Column
                  name1="Monthly Tariff (Rs.)"
                  name2="450.00"
                  name3="400.00"
                  name4="900.00"
                  name5="1150.00"
                  name6="1350.00"
                />
                <Column
                  name1="Quarterly Tariff (Rs.)"
                  name2="1350.00"
                  name3="1200.00"
                  name4="Item"
                  name5="Item"
                  name6="Item"
                  propWidth="unset"
                  propFlex="1"
                  propMinWidth="477px"
                  propAlignSelf="stretch"
                  propWidth1="734px"
                  propMinWidth1="52px"
                  propDisplay="inline-block"
                  propMinWidth2="53px"
                  propDisplay1="inline-block"
                  propPadding="var(--spacing-lg) var(--padding-lgi) var(--spacing-lg) var(--padding-xl)"
                  propPadding1="var(--spacing-lg) var(--padding-lgi) var(--spacing-lg) var(--padding-xl)"
                  propPadding2="var(--spacing-lg) var(--padding-lgi) var(--spacing-lg) var(--padding-xl)"
                />
                <div className={styles.column61}>
                  <div className={styles.cells254}>
                    <div className={styles.name258}>Title</div>
                  </div>
                  <div className={styles.contentCell14}>
                    <div className={styles.cells255}>
                      <div className={styles.bg256} />
                      <div className={styles.name259}>Item</div>
                    </div>
                    <div className={styles.cells256}>
                      <div className={styles.bg257} />
                      <div className={styles.name260}>Item</div>
                    </div>
                    <div className={styles.cells257}>
                      <div className={styles.bg258} />
                      <div className={styles.name261}>Item</div>
                    </div>
                    <div className={styles.cells258}>
                      <div className={styles.bg259} />
                      <div className={styles.name262}>Item</div>
                    </div>
                    <div className={styles.cells259}>
                      <div className={styles.bg260} />
                      <div className={styles.name263}>Item</div>
                    </div>
                    <div className={styles.cells260}>
                      <div className={styles.bg261} />
                      <div className={styles.name264}>Item</div>
                    </div>
                    <div className={styles.cells261}>
                      <div className={styles.bg262} />
                      <div className={styles.name265}>Item</div>
                    </div>
                    <div className={styles.cells262}>
                      <div className={styles.bg263} />
                      <div className={styles.name266}>Item</div>
                    </div>
                    <div className={styles.cells263}>
                      <div className={styles.bg264} />
                      <div className={styles.name267}>Item</div>
                    </div>
                    <div className={styles.cells264}>
                      <div className={styles.bg265} />
                      <div className={styles.name268}>Item</div>
                    </div>
                    <div className={styles.cells265}>
                      <div className={styles.bg266} />
                      <div className={styles.name269}>Item</div>
                    </div>
                    <div className={styles.cells266}>
                      <div className={styles.bg267} />
                      <div className={styles.name270}>Item</div>
                    </div>
                    <div className={styles.cells267}>
                      <div className={styles.bg268} />
                      <div className={styles.name271}>Item</div>
                    </div>
                    <div className={styles.cells268}>
                      <div className={styles.bg269} />
                      <div className={styles.name272}>Item</div>
                    </div>
                    <div className={styles.cells269}>
                      <div className={styles.bg270} />
                      <div className={styles.name273}>Item</div>
                    </div>
                    <div className={styles.cells270}>
                      <div className={styles.bg271} />
                      <div className={styles.name274}>Item</div>
                    </div>
                  </div>
                </div>
                <div className={styles.column71}>
                  <div className={styles.cells271}>
                    <div className={styles.name275}>Title</div>
                  </div>
                  <div className={styles.contentCell15}>
                    <div className={styles.cells272}>
                      <div className={styles.bg272} />
                      <div className={styles.name276}>Item</div>
                    </div>
                    <div className={styles.cells273}>
                      <div className={styles.bg273} />
                      <div className={styles.name277}>Item</div>
                    </div>
                    <div className={styles.cells274}>
                      <div className={styles.bg274} />
                      <div className={styles.name278}>Item</div>
                    </div>
                    <div className={styles.cells275}>
                      <div className={styles.bg275} />
                      <div className={styles.name279}>Item</div>
                    </div>
                    <div className={styles.cells276}>
                      <div className={styles.bg276} />
                      <div className={styles.name280}>Item</div>
                    </div>
                    <div className={styles.cells277}>
                      <div className={styles.bg277} />
                      <div className={styles.name281}>Item</div>
                    </div>
                    <div className={styles.cells278}>
                      <div className={styles.bg278} />
                      <div className={styles.name282}>Item</div>
                    </div>
                    <div className={styles.cells279}>
                      <div className={styles.bg279} />
                      <div className={styles.name283}>Item</div>
                    </div>
                    <div className={styles.cells280}>
                      <div className={styles.bg280} />
                      <div className={styles.name284}>Item</div>
                    </div>
                    <div className={styles.cells281}>
                      <div className={styles.bg281} />
                      <div className={styles.name285}>Item</div>
                    </div>
                    <div className={styles.cells282}>
                      <div className={styles.bg282} />
                      <div className={styles.name286}>Item</div>
                    </div>
                    <div className={styles.cells283}>
                      <div className={styles.bg283} />
                      <div className={styles.name287}>Item</div>
                    </div>
                    <div className={styles.cells284}>
                      <div className={styles.bg284} />
                      <div className={styles.name288}>Item</div>
                    </div>
                    <div className={styles.cells285}>
                      <div className={styles.bg285} />
                      <div className={styles.name289}>Item</div>
                    </div>
                    <div className={styles.cells286}>
                      <div className={styles.bg286} />
                      <div className={styles.name290}>Item</div>
                    </div>
                    <div className={styles.cells287}>
                      <div className={styles.bg287} />
                      <div className={styles.name291}>Item</div>
                    </div>
                  </div>
                </div>
                <div className={styles.column81}>
                  <div className={styles.cells288}>
                    <div className={styles.name292}>Title</div>
                  </div>
                  <div className={styles.contentCell16}>
                    <div className={styles.cells289}>
                      <div className={styles.bg288} />
                      <div className={styles.name293}>Item</div>
                    </div>
                    <div className={styles.cells290}>
                      <div className={styles.bg289} />
                      <div className={styles.name294}>Item</div>
                    </div>
                    <div className={styles.cells291}>
                      <div className={styles.bg290} />
                      <div className={styles.name295}>Item</div>
                    </div>
                    <div className={styles.cells292}>
                      <div className={styles.bg291} />
                      <div className={styles.name296}>Item</div>
                    </div>
                    <div className={styles.cells293}>
                      <div className={styles.bg292} />
                      <div className={styles.name297}>Item</div>
                    </div>
                    <div className={styles.cells294}>
                      <div className={styles.bg293} />
                      <div className={styles.name298}>Item</div>
                    </div>
                    <div className={styles.cells295}>
                      <div className={styles.bg294} />
                      <div className={styles.name299}>Item</div>
                    </div>
                    <div className={styles.cells296}>
                      <div className={styles.bg295} />
                      <div className={styles.name300}>Item</div>
                    </div>
                    <div className={styles.cells297}>
                      <div className={styles.bg296} />
                      <div className={styles.name301}>Item</div>
                    </div>
                    <div className={styles.cells298}>
                      <div className={styles.bg297} />
                      <div className={styles.name302}>Item</div>
                    </div>
                    <div className={styles.cells299}>
                      <div className={styles.bg298} />
                      <div className={styles.name303}>Item</div>
                    </div>
                    <div className={styles.cells300}>
                      <div className={styles.bg299} />
                      <div className={styles.name304}>Item</div>
                    </div>
                    <div className={styles.cells301}>
                      <div className={styles.bg300} />
                      <div className={styles.name305}>Item</div>
                    </div>
                    <div className={styles.cells302}>
                      <div className={styles.bg301} />
                      <div className={styles.name306}>Item</div>
                    </div>
                    <div className={styles.cells303}>
                      <div className={styles.bg302} />
                      <div className={styles.name307}>Item</div>
                    </div>
                    <div className={styles.cells304}>
                      <div className={styles.bg303} />
                      <div className={styles.name308}>Item</div>
                    </div>
                  </div>
                </div>
                <div className={styles.column91}>
                  <div className={styles.cells305}>
                    <div className={styles.name309}>Title</div>
                  </div>
                  <div className={styles.contentCell17}>
                    <div className={styles.cells306}>
                      <div className={styles.bg304} />
                      <div className={styles.name310}>Item</div>
                    </div>
                    <div className={styles.cells307}>
                      <div className={styles.bg305} />
                      <div className={styles.name311}>Item</div>
                    </div>
                    <div className={styles.cells308}>
                      <div className={styles.bg306} />
                      <div className={styles.name312}>Item</div>
                    </div>
                    <div className={styles.cells309}>
                      <div className={styles.bg307} />
                      <div className={styles.name313}>Item</div>
                    </div>
                    <div className={styles.cells310}>
                      <div className={styles.bg308} />
                      <div className={styles.name314}>Item</div>
                    </div>
                    <div className={styles.cells311}>
                      <div className={styles.bg309} />
                      <div className={styles.name315}>Item</div>
                    </div>
                    <div className={styles.cells312}>
                      <div className={styles.bg310} />
                      <div className={styles.name316}>Item</div>
                    </div>
                    <div className={styles.cells313}>
                      <div className={styles.bg311} />
                      <div className={styles.name317}>Item</div>
                    </div>
                    <div className={styles.cells314}>
                      <div className={styles.bg312} />
                      <div className={styles.name318}>Item</div>
                    </div>
                    <div className={styles.cells315}>
                      <div className={styles.bg313} />
                      <div className={styles.name319}>Item</div>
                    </div>
                    <div className={styles.cells316}>
                      <div className={styles.bg314} />
                      <div className={styles.name320}>Item</div>
                    </div>
                    <div className={styles.cells317}>
                      <div className={styles.bg315} />
                      <div className={styles.name321}>Item</div>
                    </div>
                    <div className={styles.cells318}>
                      <div className={styles.bg316} />
                      <div className={styles.name322}>Item</div>
                    </div>
                    <div className={styles.cells319}>
                      <div className={styles.bg317} />
                      <div className={styles.name323}>Item</div>
                    </div>
                    <div className={styles.cells320}>
                      <div className={styles.bg318} />
                      <div className={styles.name324}>Item</div>
                    </div>
                    <div className={styles.cells321}>
                      <div className={styles.bg319} />
                      <div className={styles.name325}>Item</div>
                    </div>
                  </div>
                </div>
                <div className={styles.column101}>
                  <div className={styles.cells322}>
                    <div className={styles.name326}>Title</div>
                  </div>
                  <div className={styles.contentCell18}>
                    <div className={styles.cells323}>
                      <div className={styles.bg320} />
                      <div className={styles.name327}>Item</div>
                    </div>
                    <div className={styles.cells324}>
                      <div className={styles.bg321} />
                      <div className={styles.name328}>Item</div>
                    </div>
                    <div className={styles.cells325}>
                      <div className={styles.bg322} />
                      <div className={styles.name329}>Item</div>
                    </div>
                    <div className={styles.cells326}>
                      <div className={styles.bg323} />
                      <div className={styles.name330}>Item</div>
                    </div>
                    <div className={styles.cells327}>
                      <div className={styles.bg324} />
                      <div className={styles.name331}>Item</div>
                    </div>
                    <div className={styles.cells328}>
                      <div className={styles.bg325} />
                      <div className={styles.name332}>Item</div>
                    </div>
                    <div className={styles.cells329}>
                      <div className={styles.bg326} />
                      <div className={styles.name333}>Item</div>
                    </div>
                    <div className={styles.cells330}>
                      <div className={styles.bg327} />
                      <div className={styles.name334}>Item</div>
                    </div>
                    <div className={styles.cells331}>
                      <div className={styles.bg328} />
                      <div className={styles.name335}>Item</div>
                    </div>
                    <div className={styles.cells332}>
                      <div className={styles.bg329} />
                      <div className={styles.name336}>Item</div>
                    </div>
                    <div className={styles.cells333}>
                      <div className={styles.bg330} />
                      <div className={styles.name337}>Item</div>
                    </div>
                    <div className={styles.cells334}>
                      <div className={styles.bg331} />
                      <div className={styles.name338}>Item</div>
                    </div>
                    <div className={styles.cells335}>
                      <div className={styles.bg332} />
                      <div className={styles.name339}>Item</div>
                    </div>
                    <div className={styles.cells336}>
                      <div className={styles.bg333} />
                      <div className={styles.name340}>Item</div>
                    </div>
                    <div className={styles.cells337}>
                      <div className={styles.bg334} />
                      <div className={styles.name341}>Item</div>
                    </div>
                    <div className={styles.cells338}>
                      <div className={styles.bg335} />
                      <div className={styles.name342}>Item</div>
                    </div>
                  </div>
                </div>
                <div className={styles.column111}>
                  <div className={styles.cells339}>
                    <div className={styles.name343}>Title</div>
                  </div>
                  <div className={styles.contentCell19}>
                    <div className={styles.cells340}>
                      <div className={styles.bg336} />
                      <div className={styles.name344}>Item</div>
                    </div>
                    <div className={styles.cells341}>
                      <div className={styles.bg337} />
                      <div className={styles.name345}>Item</div>
                    </div>
                    <div className={styles.cells342}>
                      <div className={styles.bg338} />
                      <div className={styles.name346}>Item</div>
                    </div>
                    <div className={styles.cells343}>
                      <div className={styles.bg339} />
                      <div className={styles.name347}>Item</div>
                    </div>
                    <div className={styles.cells344}>
                      <div className={styles.bg340} />
                      <div className={styles.name348}>Item</div>
                    </div>
                    <div className={styles.cells345}>
                      <div className={styles.bg341} />
                      <div className={styles.name349}>Item</div>
                    </div>
                    <div className={styles.cells346}>
                      <div className={styles.bg342} />
                      <div className={styles.name350}>Item</div>
                    </div>
                    <div className={styles.cells347}>
                      <div className={styles.bg343} />
                      <div className={styles.name351}>Item</div>
                    </div>
                    <div className={styles.cells348}>
                      <div className={styles.bg344} />
                      <div className={styles.name352}>Item</div>
                    </div>
                    <div className={styles.cells349}>
                      <div className={styles.bg345} />
                      <div className={styles.name353}>Item</div>
                    </div>
                    <div className={styles.cells350}>
                      <div className={styles.bg346} />
                      <div className={styles.name354}>Item</div>
                    </div>
                    <div className={styles.cells351}>
                      <div className={styles.bg347} />
                      <div className={styles.name355}>Item</div>
                    </div>
                    <div className={styles.cells352}>
                      <div className={styles.bg348} />
                      <div className={styles.name356}>Item</div>
                    </div>
                    <div className={styles.cells353}>
                      <div className={styles.bg349} />
                      <div className={styles.name357}>Item</div>
                    </div>
                    <div className={styles.cells354}>
                      <div className={styles.bg350} />
                      <div className={styles.name358}>Item</div>
                    </div>
                    <div className={styles.cells355}>
                      <div className={styles.bg351} />
                      <div className={styles.name359}>Item</div>
                    </div>
                  </div>
                </div>
                <div className={styles.column121}>
                  <div className={styles.cells356}>
                    <div className={styles.name360}>Title</div>
                  </div>
                  <div className={styles.contentCell20}>
                    <div className={styles.cells357}>
                      <div className={styles.bg352} />
                      <div className={styles.name361}>Item</div>
                    </div>
                    <div className={styles.cells358}>
                      <div className={styles.bg353} />
                      <div className={styles.name362}>Item</div>
                    </div>
                    <div className={styles.cells359}>
                      <div className={styles.bg354} />
                      <div className={styles.name363}>Item</div>
                    </div>
                    <div className={styles.cells360}>
                      <div className={styles.bg355} />
                      <div className={styles.name364}>Item</div>
                    </div>
                    <div className={styles.cells361}>
                      <div className={styles.bg356} />
                      <div className={styles.name365}>Item</div>
                    </div>
                    <div className={styles.cells362}>
                      <div className={styles.bg357} />
                      <div className={styles.name366}>Item</div>
                    </div>
                    <div className={styles.cells363}>
                      <div className={styles.bg358} />
                      <div className={styles.name367}>Item</div>
                    </div>
                    <div className={styles.cells364}>
                      <div className={styles.bg359} />
                      <div className={styles.name368}>Item</div>
                    </div>
                    <div className={styles.cells365}>
                      <div className={styles.bg360} />
                      <div className={styles.name369}>Item</div>
                    </div>
                    <div className={styles.cells366}>
                      <div className={styles.bg361} />
                      <div className={styles.name370}>Item</div>
                    </div>
                    <div className={styles.cells367}>
                      <div className={styles.bg362} />
                      <div className={styles.name371}>Item</div>
                    </div>
                    <div className={styles.cells368}>
                      <div className={styles.bg363} />
                      <div className={styles.name372}>Item</div>
                    </div>
                    <div className={styles.cells369}>
                      <div className={styles.bg364} />
                      <div className={styles.name373}>Item</div>
                    </div>
                    <div className={styles.cells370}>
                      <div className={styles.bg365} />
                      <div className={styles.name374}>Item</div>
                    </div>
                    <div className={styles.cells371}>
                      <div className={styles.bg366} />
                      <div className={styles.name375}>Item</div>
                    </div>
                    <div className={styles.cells372}>
                      <div className={styles.bg367} />
                      <div className={styles.name376}>Item</div>
                    </div>
                  </div>
                </div>
                <div className={styles.actionCell1}>
                  <div className={styles.cells373}>
                    <div className={styles.name377}>Action</div>
                  </div>
                  <div className={styles.contentCell21}>
                    <div className={styles.buttonCells16}>
                      <div className={styles.bg368} />
                      <div className={styles.actions16}>
                        <div className={styles.button32}>
                          <div className={styles.viewDetails32}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon32} alt="" />
                        <div className={styles.button33}>
                          <div className={styles.viewDetails33}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon33} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells17}>
                      <div className={styles.bg369} />
                      <div className={styles.actions17}>
                        <div className={styles.button34}>
                          <div className={styles.viewDetails34}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon34} alt="" />
                        <div className={styles.button35}>
                          <div className={styles.viewDetails35}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon35} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells18}>
                      <div className={styles.bg370} />
                      <div className={styles.actions18}>
                        <div className={styles.button36}>
                          <div className={styles.viewDetails36}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon36} alt="" />
                        <div className={styles.button37}>
                          <div className={styles.viewDetails37}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon37} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells19}>
                      <div className={styles.bg371} />
                      <div className={styles.actions19}>
                        <div className={styles.button38}>
                          <div className={styles.viewDetails38}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon38} alt="" />
                        <div className={styles.button39}>
                          <div className={styles.viewDetails39}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon39} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells20}>
                      <div className={styles.bg372} />
                      <div className={styles.actions20}>
                        <div className={styles.button40}>
                          <div className={styles.viewDetails40}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon40} alt="" />
                        <div className={styles.button41}>
                          <div className={styles.viewDetails41}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon41} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells21}>
                      <div className={styles.bg373} />
                      <div className={styles.actions21}>
                        <div className={styles.button42}>
                          <div className={styles.viewDetails42}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon42} alt="" />
                        <div className={styles.button43}>
                          <div className={styles.viewDetails43}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon43} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells22}>
                      <div className={styles.bg374} />
                      <div className={styles.actions22}>
                        <div className={styles.button44}>
                          <div className={styles.viewDetails44}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon44} alt="" />
                        <div className={styles.button45}>
                          <div className={styles.viewDetails45}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon45} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells23}>
                      <div className={styles.bg375} />
                      <div className={styles.actions23}>
                        <div className={styles.button46}>
                          <div className={styles.viewDetails46}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon46} alt="" />
                        <div className={styles.button47}>
                          <div className={styles.viewDetails47}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon47} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells24}>
                      <div className={styles.bg376} />
                      <div className={styles.actions24}>
                        <div className={styles.button48}>
                          <div className={styles.viewDetails48}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon48} alt="" />
                        <div className={styles.button49}>
                          <div className={styles.viewDetails49}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon49} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells25}>
                      <div className={styles.bg377} />
                      <div className={styles.actions25}>
                        <div className={styles.button50}>
                          <div className={styles.viewDetails50}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon50} alt="" />
                        <div className={styles.button51}>
                          <div className={styles.viewDetails51}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon51} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells26}>
                      <div className={styles.bg378} />
                      <div className={styles.actions26}>
                        <div className={styles.button52}>
                          <div className={styles.viewDetails52}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon52} alt="" />
                        <div className={styles.button53}>
                          <div className={styles.viewDetails53}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon53} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells27}>
                      <div className={styles.bg379} />
                      <div className={styles.actions27}>
                        <div className={styles.button54}>
                          <div className={styles.viewDetails54}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon54} alt="" />
                        <div className={styles.button55}>
                          <div className={styles.viewDetails55}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon55} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells28}>
                      <div className={styles.bg380} />
                      <div className={styles.actions28}>
                        <div className={styles.button56}>
                          <div className={styles.viewDetails56}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon56} alt="" />
                        <div className={styles.button57}>
                          <div className={styles.viewDetails57}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon57} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells29}>
                      <div className={styles.bg381} />
                      <div className={styles.actions29}>
                        <div className={styles.button58}>
                          <div className={styles.viewDetails58}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon58} alt="" />
                        <div className={styles.button59}>
                          <div className={styles.viewDetails59}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon59} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells30}>
                      <div className={styles.bg382} />
                      <div className={styles.actions30}>
                        <div className={styles.button60}>
                          <div className={styles.viewDetails60}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon60} alt="" />
                        <div className={styles.button61}>
                          <div className={styles.viewDetails61}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon61} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells31}>
                      <div className={styles.bg383} />
                      <div className={styles.actions31}>
                        <div className={styles.button62}>
                          <div className={styles.viewDetails62}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon62} alt="" />
                        <div className={styles.button63}>
                          <div className={styles.viewDetails63}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon63} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <BulletPointContainer
            monthlySeasonTicketsAreIs="Travel facility valid anywhere to anywhere within City/Sub-Urban limits."
            monthlySeasonTicketsAreIs1={`Validity period –1 month & 3 months for monthly and Quarterly passes respectively.`}
            bulltetPointPlaceholder2="/bulltet-point-placeholder.svg"
            monthlySeasonTicketsAreIs2="Applicant can apply online at www.online.tsrtcpass.in."
            bulltetPointPlaceholder3="pending_I1:1297;717:23308;121:4116"
            bulltetPointPlaceholder4="pending_I1:1297;717:23309;121:4116"
            bulltetPointPlaceholder5="pending_I1:1297;717:23310;121:4116"
            bulltetPointPlaceholder6="pending_I1:1297;717:23311;121:4116"
            bulltetPointPlaceholder7="pending_I1:1297;717:23312;121:4116"
            bulltetPointPlaceholder8="pending_I1:1297;717:23313;121:4116"
            bulltetPointPlaceholder9="pending_I1:1297;717:23314;121:4116"
            bulltetPointPlaceholder10="pending_I1:1297;717:23361;121:4116"
            bulltetPointPlaceholder11="pending_I1:1297;717:23366;121:4116"
            bulltetPointPlaceholder12="pending_I1:1297;717:23371;121:4116"
            bulltetPointPlaceholder13="pending_I1:1297;717:23376;121:4116"
            bulltetPointPlaceholder14="pending_I1:1297;717:23381;121:4116"
            bulltetPointPlaceholder15="pending_I1:1297;717:23386;121:4116"
            bulltetPointPlaceholder16="pending_I1:1297;717:23391;121:4116"
            bulltetPointPlaceholder17="pending_I1:1297;717:23396;121:4116"
            bulltetPointPlaceholder18="pending_I1:1297;717:23401;121:4116"
            bulltetPointPlaceholder19="pending_I1:1297;717:23356;121:4116"
            bulletPoint
            propPadding="0px 0px 0px 0px"
            propMinHeight="26px"
            propHeight="unset"
          />
        </div>
        <div className={styles.cStudentGreaterHyderabadB}>
          <div className={styles.bulletPointContainer}>
            <div className={styles.title2}>
              <div className={styles.guidingPrinciplesOf}>
                c. Student Greater Hyderabad Bus Pass ( Monthly/Quarterly)
              </div>
            </div>
            <div className={styles.bulletPoints}>
              <div className={styles.bulletPoint}>
                <img
                  className={styles.bulltetPointPlaceholder}
                  alt=""
                  src="/bulltet-point-placeholder.svg"
                />
                <div className={styles.monthlySeasonTickets}>
                  Eligible for the Students above 12 years age.
                </div>
              </div>
              <div className={styles.bulletPoint1}>
                <img className={styles.bulltetPointPlaceholder1} alt="" />
                <div className={styles.monthlySeasonTickets1}>
                  To provide employee satisfaction in financial and humanistic
                  terms.
                </div>
              </div>
              <div className={styles.bulletPoint2}>
                <img className={styles.bulltetPointPlaceholder2} alt="" />
                <div className={styles.monthlySeasonTickets2}>
                  To strive towards financial self-reliance in regard to
                  performance and growth.
                </div>
              </div>
              <div className={styles.bulletPoint3}>
                <img className={styles.bulltetPointPlaceholder3} alt="" />
                <div className={styles.monthlySeasonTickets3}>
                  To attain a position of reputation and respect in the society.
                </div>
              </div>
              <div className={styles.bulletPoint4}>
                <img className={styles.bulltetPointPlaceholder4} alt="" />
                <div className={styles.monthlySeasonTickets4}>
                  To regularly and constantly improve the capabilities of
                  employees for higher productivity.
                </div>
              </div>
              <div className={styles.bulletPoint5}>
                <img className={styles.bulltetPointPlaceholder5} alt="" />
                <div className={styles.monthlySeasonTickets5}>
                  To focus on service conditions and welfare of the employees
                  and their families consistent with their worth to the
                  Corporation.
                </div>
              </div>
              <div className={styles.bulletPoint6}>
                <img className={styles.bulltetPointPlaceholder6} alt="" />
                <div className={styles.monthlySeasonTickets6}>
                  To fulfill its obligation to the State and Central governments
                  by optimizing return on investment.
                </div>
              </div>
              <div className={styles.bulletPoint7}>
                <img className={styles.bulltetPointPlaceholder7} alt="" />
                <div className={styles.monthlySeasonTickets7}>
                  To emphasize environmental and community concerns in the form
                  of reducing air and noise pollution.
                </div>
              </div>
              <div className={styles.bulletPoint8}>
                <img className={styles.bulltetPointPlaceholder8} alt="" />
                <div className={styles.monthlySeasonTickets8}>
                  To consciously conform to the policy guidelines of the State
                  in its business operations.
                </div>
              </div>
              <div className={styles.bulletPoint9}>
                <img className={styles.bulltetPointPlaceholder9} alt="" />
                <div className={styles.monthlySeasonTickets9}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
              <div className={styles.bulletPoint10}>
                <img className={styles.bulltetPointPlaceholder10} alt="" />
                <div className={styles.monthlySeasonTickets10}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
              <div className={styles.bulletPoint11}>
                <img className={styles.bulltetPointPlaceholder11} alt="" />
                <div className={styles.monthlySeasonTickets11}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
              <div className={styles.bulletPoint12}>
                <img className={styles.bulltetPointPlaceholder12} alt="" />
                <div className={styles.monthlySeasonTickets12}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
              <div className={styles.bulletPoint13}>
                <img className={styles.bulltetPointPlaceholder13} alt="" />
                <div className={styles.monthlySeasonTickets13}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
              <div className={styles.bulletPoint14}>
                <img className={styles.bulltetPointPlaceholder14} alt="" />
                <div className={styles.monthlySeasonTickets14}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
              <div className={styles.bulletPoint15}>
                <img className={styles.bulltetPointPlaceholder15} alt="" />
                <div className={styles.monthlySeasonTickets15}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
              <div className={styles.bulletPoint16}>
                <img className={styles.bulltetPointPlaceholder16} alt="" />
                <div className={styles.monthlySeasonTickets16}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
              <div className={styles.bulletPoint17}>
                <img className={styles.bulltetPointPlaceholder17} alt="" />
                <div className={styles.monthlySeasonTickets17}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
              <div className={styles.bulletPoint18}>
                <img className={styles.bulltetPointPlaceholder18} alt="" />
                <div className={styles.monthlySeasonTickets18}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
              <div className={styles.bulletPoint19}>
                <img className={styles.bulltetPointPlaceholder19} alt="" />
                <div className={styles.monthlySeasonTickets19}>
                  To reach a position of pre-eminence in bus transport business.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tableTitle2}>
            <div className={styles.title3}>
              This Bus Pass can be issued with concessional tariff as furnished
              in below table.
            </div>
            <div className={styles.table4}>
              <div className={styles.titleHeader2}>
                <div className={styles.name378}>
                  Overview (Up to March - 2024)
                </div>
              </div>
              <div className={styles.table5}>
                <div className={styles.cloumn12}>
                  <button className={styles.header2}>
                    <div className={styles.name379}>#</div>
                  </button>
                  <div className={styles.columnCell2}>
                    <div className={styles.cells374}>
                      <div className={styles.bg384} />
                      <div className={styles.name380}>1</div>
                    </div>
                    <div className={styles.cells375}>
                      <div className={styles.bg385} />
                      <div className={styles.name381}>2</div>
                    </div>
                    <div className={styles.cells376}>
                      <div className={styles.bg386} />
                      <div className={styles.name382}>3</div>
                    </div>
                    <div className={styles.cells377}>
                      <div className={styles.bg387} />
                      <div className={styles.name383}>4</div>
                    </div>
                    <div className={styles.cells378}>
                      <div className={styles.bg388} />
                      <div className={styles.name384}>5</div>
                    </div>
                    <div className={styles.cells379}>
                      <div className={styles.bg389} />
                      <div className={styles.name385}>6</div>
                    </div>
                    <div className={styles.cells380}>
                      <div className={styles.bg390} />
                      <div className={styles.name386}>7</div>
                    </div>
                    <div className={styles.cells381}>
                      <div className={styles.bg391} />
                      <div className={styles.name387}>8</div>
                    </div>
                    <div className={styles.cells382}>
                      <div className={styles.bg392} />
                      <div className={styles.name388}>9</div>
                    </div>
                    <div className={styles.cells383}>
                      <div className={styles.bg393} />
                      <div className={styles.name389}>10</div>
                    </div>
                    <div className={styles.cells384}>
                      <div className={styles.bg394} />
                      <div className={styles.name390}>11</div>
                    </div>
                    <div className={styles.cells385}>
                      <div className={styles.bg395} />
                      <div className={styles.name391}>12</div>
                    </div>
                    <div className={styles.cells386}>
                      <div className={styles.bg396} />
                      <div className={styles.name392}>13</div>
                    </div>
                    <div className={styles.cells387}>
                      <div className={styles.bg397} />
                      <div className={styles.name393}>14</div>
                    </div>
                    <div className={styles.cells388}>
                      <div className={styles.bg398} />
                      <div className={styles.name394}>15</div>
                    </div>
                    <div className={styles.cells389}>
                      <div className={styles.bg399} />
                      <div className={styles.name395}>16</div>
                    </div>
                  </div>
                </div>
                <div className={styles.coulmn22}>
                  <div className={styles.cells390}>
                    <div className={styles.name396}>Type</div>
                  </div>
                  <div className={styles.contentCell22}>
                    <div className={styles.cells391}>
                      <div className={styles.bg400} />
                      <div className={styles.name397}>Mini Pallevelugu</div>
                    </div>
                    <div className={styles.cells392}>
                      <div className={styles.bg401} />
                      <div className={styles.name398}>Pallevelugu </div>
                    </div>
                    <div className={styles.cells393}>
                      <div className={styles.bg402} />
                      <div className={styles.name399}>Express </div>
                    </div>
                    <div className={styles.cells394}>
                      <div className={styles.bg403} />
                      <div className={styles.name400}>Item</div>
                    </div>
                    <div className={styles.cells395}>
                      <div className={styles.bg404} />
                      <div className={styles.name401}>Item</div>
                    </div>
                    <div className={styles.cells396}>
                      <div className={styles.bg405} />
                      <div className={styles.name402}>Item</div>
                    </div>
                    <div className={styles.cells397}>
                      <div className={styles.bg406} />
                      <div className={styles.name403}>Item</div>
                    </div>
                    <div className={styles.cells398}>
                      <div className={styles.bg407} />
                      <div className={styles.name404}>Item</div>
                    </div>
                    <div className={styles.cells399}>
                      <div className={styles.bg408} />
                      <div className={styles.name405}>Item</div>
                    </div>
                    <div className={styles.cells400}>
                      <div className={styles.bg409} />
                      <div className={styles.name406}>Item</div>
                    </div>
                    <div className={styles.cells401}>
                      <div className={styles.bg410} />
                      <div className={styles.name407}>Item</div>
                    </div>
                    <div className={styles.cells402}>
                      <div className={styles.bg411} />
                      <div className={styles.name408}>Item</div>
                    </div>
                    <div className={styles.cells403}>
                      <div className={styles.bg412} />
                      <div className={styles.name409}>Item</div>
                    </div>
                    <div className={styles.cells404}>
                      <div className={styles.bg413} />
                      <div className={styles.name410}>Item</div>
                    </div>
                    <div className={styles.cells405}>
                      <div className={styles.bg414} />
                      <div className={styles.name411}>Item</div>
                    </div>
                    <div className={styles.cells406}>
                      <div className={styles.bg415} />
                      <div className={styles.name412}>Item</div>
                    </div>
                  </div>
                </div>
                <div className={styles.column32}>
                  <button className={styles.cells407}>
                    <div className={styles.name413}>Duration</div>
                  </button>
                  <div className={styles.contentCell23}>
                    <div className={styles.cells408}>
                      <div className={styles.bg416} />
                      <div className={styles.name414}>Monthly</div>
                    </div>
                    <button className={styles.cells409}>
                      <div className={styles.bg417} />
                      <div className={styles.name415}>Quarterly</div>
                    </button>
                    <div className={styles.cells410}>
                      <div className={styles.bg418} />
                      <div className={styles.name416}>12</div>
                    </div>
                    <div className={styles.cells411}>
                      <div className={styles.bg419} />
                      <div className={styles.name417}>18</div>
                    </div>
                    <div className={styles.cells412}>
                      <div className={styles.bg420} />
                      <div className={styles.name418}>22</div>
                    </div>
                    <div className={styles.cells413}>
                      <div className={styles.bg421} />
                      <div className={styles.name419}>Item</div>
                    </div>
                    <div className={styles.cells414}>
                      <div className={styles.bg422} />
                      <div className={styles.name420}>Item</div>
                    </div>
                    <div className={styles.cells415}>
                      <div className={styles.bg423} />
                      <div className={styles.name421}>Item</div>
                    </div>
                    <div className={styles.cells416}>
                      <div className={styles.bg424} />
                      <div className={styles.name422}>Item</div>
                    </div>
                    <div className={styles.cells417}>
                      <div className={styles.bg425} />
                      <div className={styles.name423}>Item</div>
                    </div>
                    <div className={styles.cells418}>
                      <div className={styles.bg426} />
                      <div className={styles.name424}>Item</div>
                    </div>
                    <div className={styles.cells419}>
                      <div className={styles.bg427} />
                      <div className={styles.name425}>Item</div>
                    </div>
                    <div className={styles.cells420}>
                      <div className={styles.bg428} />
                      <div className={styles.name426}>Item</div>
                    </div>
                    <div className={styles.cells421}>
                      <div className={styles.bg429} />
                      <div className={styles.name427}>Item</div>
                    </div>
                    <div className={styles.cells422}>
                      <div className={styles.bg430} />
                      <div className={styles.name428}>Item</div>
                    </div>
                    <div className={styles.cells423}>
                      <div className={styles.bg431} />
                      <div className={styles.name429}>Item</div>
                    </div>
                  </div>
                </div>
                <Column
                  name1="Monthly Tariff (Rs.)"
                  name2="400.00 + 70.00 per E.2 KMs beyond Sub-urban limits in particular District place of the route."
                  name3="1200.00 + 210.00 per E.2 KMs beyond Sub-urban limits in particular District place of the route."
                  name4="900.00"
                  name5="1150.00"
                  name6="1350.00"
                  propWidth="unset"
                  propFlex="1"
                  propMinWidth="unset"
                  propAlignSelf="stretch"
                  propWidth1="952px"
                  propMinWidth1="unset"
                  propDisplay="unset"
                  propMinWidth2="unset"
                  propDisplay1="unset"
                  propPadding="var(--spacing-lg) var(--padding-10xs) var(--spacing-lg) var(--padding-xl)"
                  propPadding1="var(--spacing-lg) var(--padding-10xs) var(--spacing-lg) var(--padding-xl)"
                  propPadding2="var(--spacing-lg) 0px var(--spacing-lg) var(--padding-xl)"
                />
                <div className={styles.column51}>
                  <div className={styles.cells424}>
                    <div className={styles.name430}>Quarterly Tariff (Rs.)</div>
                  </div>
                  <div className={styles.contentCell24}>
                    <div className={styles.cells425}>
                      <div className={styles.bg432} />
                      <div className={styles.name431}>1350.00</div>
                    </div>
                    <div className={styles.cells426}>
                      <div className={styles.bg433} />
                      <div className={styles.name432}>1200.00</div>
                    </div>
                    <div className={styles.cells427}>
                      <div className={styles.bg434} />
                      <div className={styles.name433}>Item</div>
                    </div>
                    <div className={styles.cells428}>
                      <div className={styles.bg435} />
                      <div className={styles.name434}>Item</div>
                    </div>
                    <div className={styles.cells429}>
                      <div className={styles.bg436} />
                      <div className={styles.name435}>Item</div>
                    </div>
                    <div className={styles.cells430}>
                      <div className={styles.bg437} />
                      <div className={styles.name436}>Item</div>
                    </div>
                    <div className={styles.cells431}>
                      <div className={styles.bg438} />
                      <div className={styles.name437}>Item</div>
                    </div>
                    <div className={styles.cells432}>
                      <div className={styles.bg439} />
                      <div className={styles.name438}>Item</div>
                    </div>
                    <div className={styles.cells433}>
                      <div className={styles.bg440} />
                      <div className={styles.name439}>Item</div>
                    </div>
                    <div className={styles.cells434}>
                      <div className={styles.bg441} />
                      <div className={styles.name440}>Item</div>
                    </div>
                    <div className={styles.cells435}>
                      <div className={styles.bg442} />
                      <div className={styles.name441}>Item</div>
                    </div>
                    <div className={styles.cells436}>
                      <div className={styles.bg443} />
                      <div className={styles.name442}>Item</div>
                    </div>
                    <div className={styles.cells437}>
                      <div className={styles.bg444} />
                      <div className={styles.name443}>Item</div>
                    </div>
                    <div className={styles.cells438}>
                      <div className={styles.bg445} />
                      <div className={styles.name444}>Item</div>
                    </div>
                    <div className={styles.cells439}>
                      <div className={styles.bg446} />
                      <div className={styles.name445}>Item</div>
                    </div>
                    <div className={styles.cells440}>
                      <div className={styles.bg447} />
                      <div className={styles.name446}>Item</div>
                    </div>
                  </div>
                </div>
                <div className={styles.column62}>
                  <div className={styles.cells441}>
                    <div className={styles.name447}>Title</div>
                  </div>
                  <div className={styles.contentCell25}>
                    <div className={styles.cells442}>
                      <div className={styles.bg448} />
                      <div className={styles.name448}>Item</div>
                    </div>
                    <div className={styles.cells443}>
                      <div className={styles.bg449} />
                      <div className={styles.name449}>Item</div>
                    </div>
                    <div className={styles.cells444}>
                      <div className={styles.bg450} />
                      <div className={styles.name450}>Item</div>
                    </div>
                    <div className={styles.cells445}>
                      <div className={styles.bg451} />
                      <div className={styles.name451}>Item</div>
                    </div>
                    <div className={styles.cells446}>
                      <div className={styles.bg452} />
                      <div className={styles.name452}>Item</div>
                    </div>
                    <div className={styles.cells447}>
                      <div className={styles.bg453} />
                      <div className={styles.name453}>Item</div>
                    </div>
                    <div className={styles.cells448}>
                      <div className={styles.bg454} />
                      <div className={styles.name454}>Item</div>
                    </div>
                    <div className={styles.cells449}>
                      <div className={styles.bg455} />
                      <div className={styles.name455}>Item</div>
                    </div>
                    <div className={styles.cells450}>
                      <div className={styles.bg456} />
                      <div className={styles.name456}>Item</div>
                    </div>
                    <div className={styles.cells451}>
                      <div className={styles.bg457} />
                      <div className={styles.name457}>Item</div>
                    </div>
                    <div className={styles.cells452}>
                      <div className={styles.bg458} />
                      <div className={styles.name458}>Item</div>
                    </div>
                    <div className={styles.cells453}>
                      <div className={styles.bg459} />
                      <div className={styles.name459}>Item</div>
                    </div>
                    <div className={styles.cells454}>
                      <div className={styles.bg460} />
                      <div className={styles.name460}>Item</div>
                    </div>
                    <div className={styles.cells455}>
                      <div className={styles.bg461} />
                      <div className={styles.name461}>Item</div>
                    </div>
                    <div className={styles.cells456}>
                      <div className={styles.bg462} />
                      <div className={styles.name462}>Item</div>
                    </div>
                    <div className={styles.cells457}>
                      <div className={styles.bg463} />
                      <div className={styles.name463}>Item</div>
                    </div>
                  </div>
                </div>
                <div className={styles.column72}>
                  <div className={styles.cells458}>
                    <div className={styles.name464}>Title</div>
                  </div>
                  <div className={styles.contentCell26}>
                    <div className={styles.cells459}>
                      <div className={styles.bg464} />
                      <div className={styles.name465}>Item</div>
                    </div>
                    <div className={styles.cells460}>
                      <div className={styles.bg465} />
                      <div className={styles.name466}>Item</div>
                    </div>
                    <div className={styles.cells461}>
                      <div className={styles.bg466} />
                      <div className={styles.name467}>Item</div>
                    </div>
                    <div className={styles.cells462}>
                      <div className={styles.bg467} />
                      <div className={styles.name468}>Item</div>
                    </div>
                    <div className={styles.cells463}>
                      <div className={styles.bg468} />
                      <div className={styles.name469}>Item</div>
                    </div>
                    <div className={styles.cells464}>
                      <div className={styles.bg469} />
                      <div className={styles.name470}>Item</div>
                    </div>
                    <div className={styles.cells465}>
                      <div className={styles.bg470} />
                      <div className={styles.name471}>Item</div>
                    </div>
                    <div className={styles.cells466}>
                      <div className={styles.bg471} />
                      <div className={styles.name472}>Item</div>
                    </div>
                    <div className={styles.cells467}>
                      <div className={styles.bg472} />
                      <div className={styles.name473}>Item</div>
                    </div>
                    <div className={styles.cells468}>
                      <div className={styles.bg473} />
                      <div className={styles.name474}>Item</div>
                    </div>
                    <div className={styles.cells469}>
                      <div className={styles.bg474} />
                      <div className={styles.name475}>Item</div>
                    </div>
                    <div className={styles.cells470}>
                      <div className={styles.bg475} />
                      <div className={styles.name476}>Item</div>
                    </div>
                    <div className={styles.cells471}>
                      <div className={styles.bg476} />
                      <div className={styles.name477}>Item</div>
                    </div>
                    <div className={styles.cells472}>
                      <div className={styles.bg477} />
                      <div className={styles.name478}>Item</div>
                    </div>
                    <div className={styles.cells473}>
                      <div className={styles.bg478} />
                      <div className={styles.name479}>Item</div>
                    </div>
                    <div className={styles.cells474}>
                      <div className={styles.bg479} />
                      <div className={styles.name480}>Item</div>
                    </div>
                  </div>
                </div>
                <div className={styles.column82}>
                  <div className={styles.cells475}>
                    <div className={styles.name481}>Title</div>
                  </div>
                  <div className={styles.contentCell27}>
                    <div className={styles.cells476}>
                      <div className={styles.bg480} />
                      <div className={styles.name482}>Item</div>
                    </div>
                    <div className={styles.cells477}>
                      <div className={styles.bg481} />
                      <div className={styles.name483}>Item</div>
                    </div>
                    <div className={styles.cells478}>
                      <div className={styles.bg482} />
                      <div className={styles.name484}>Item</div>
                    </div>
                    <div className={styles.cells479}>
                      <div className={styles.bg483} />
                      <div className={styles.name485}>Item</div>
                    </div>
                    <div className={styles.cells480}>
                      <div className={styles.bg484} />
                      <div className={styles.name486}>Item</div>
                    </div>
                    <div className={styles.cells481}>
                      <div className={styles.bg485} />
                      <div className={styles.name487}>Item</div>
                    </div>
                    <div className={styles.cells482}>
                      <div className={styles.bg486} />
                      <div className={styles.name488}>Item</div>
                    </div>
                    <div className={styles.cells483}>
                      <div className={styles.bg487} />
                      <div className={styles.name489}>Item</div>
                    </div>
                    <div className={styles.cells484}>
                      <div className={styles.bg488} />
                      <div className={styles.name490}>Item</div>
                    </div>
                    <div className={styles.cells485}>
                      <div className={styles.bg489} />
                      <div className={styles.name491}>Item</div>
                    </div>
                    <div className={styles.cells486}>
                      <div className={styles.bg490} />
                      <div className={styles.name492}>Item</div>
                    </div>
                    <div className={styles.cells487}>
                      <div className={styles.bg491} />
                      <div className={styles.name493}>Item</div>
                    </div>
                    <div className={styles.cells488}>
                      <div className={styles.bg492} />
                      <div className={styles.name494}>Item</div>
                    </div>
                    <div className={styles.cells489}>
                      <div className={styles.bg493} />
                      <div className={styles.name495}>Item</div>
                    </div>
                    <div className={styles.cells490}>
                      <div className={styles.bg494} />
                      <div className={styles.name496}>Item</div>
                    </div>
                    <div className={styles.cells491}>
                      <div className={styles.bg495} />
                      <div className={styles.name497}>Item</div>
                    </div>
                  </div>
                </div>
                <div className={styles.column92}>
                  <div className={styles.cells492}>
                    <div className={styles.name498}>Title</div>
                  </div>
                  <div className={styles.contentCell28}>
                    <div className={styles.cells493}>
                      <div className={styles.bg496} />
                      <div className={styles.name499}>Item</div>
                    </div>
                    <div className={styles.cells494}>
                      <div className={styles.bg497} />
                      <div className={styles.name500}>Item</div>
                    </div>
                    <div className={styles.cells495}>
                      <div className={styles.bg498} />
                      <div className={styles.name501}>Item</div>
                    </div>
                    <div className={styles.cells496}>
                      <div className={styles.bg499} />
                      <div className={styles.name502}>Item</div>
                    </div>
                    <div className={styles.cells497}>
                      <div className={styles.bg500} />
                      <div className={styles.name503}>Item</div>
                    </div>
                    <div className={styles.cells498}>
                      <div className={styles.bg501} />
                      <div className={styles.name504}>Item</div>
                    </div>
                    <div className={styles.cells499}>
                      <div className={styles.bg502} />
                      <div className={styles.name505}>Item</div>
                    </div>
                    <div className={styles.cells500}>
                      <div className={styles.bg503} />
                      <div className={styles.name506}>Item</div>
                    </div>
                    <div className={styles.cells501}>
                      <div className={styles.bg504} />
                      <div className={styles.name507}>Item</div>
                    </div>
                    <div className={styles.cells502}>
                      <div className={styles.bg505} />
                      <div className={styles.name508}>Item</div>
                    </div>
                    <div className={styles.cells503}>
                      <div className={styles.bg506} />
                      <div className={styles.name509}>Item</div>
                    </div>
                    <div className={styles.cells504}>
                      <div className={styles.bg507} />
                      <div className={styles.name510}>Item</div>
                    </div>
                    <div className={styles.cells505}>
                      <div className={styles.bg508} />
                      <div className={styles.name511}>Item</div>
                    </div>
                    <div className={styles.cells506}>
                      <div className={styles.bg509} />
                      <div className={styles.name512}>Item</div>
                    </div>
                    <div className={styles.cells507}>
                      <div className={styles.bg510} />
                      <div className={styles.name513}>Item</div>
                    </div>
                    <div className={styles.cells508}>
                      <div className={styles.bg511} />
                      <div className={styles.name514}>Item</div>
                    </div>
                  </div>
                </div>
                <div className={styles.column102}>
                  <div className={styles.cells509}>
                    <div className={styles.name515}>Title</div>
                  </div>
                  <div className={styles.contentCell29}>
                    <div className={styles.cells510}>
                      <div className={styles.bg512} />
                      <div className={styles.name516}>Item</div>
                    </div>
                    <div className={styles.cells511}>
                      <div className={styles.bg513} />
                      <div className={styles.name517}>Item</div>
                    </div>
                    <div className={styles.cells512}>
                      <div className={styles.bg514} />
                      <div className={styles.name518}>Item</div>
                    </div>
                    <div className={styles.cells513}>
                      <div className={styles.bg515} />
                      <div className={styles.name519}>Item</div>
                    </div>
                    <div className={styles.cells514}>
                      <div className={styles.bg516} />
                      <div className={styles.name520}>Item</div>
                    </div>
                    <div className={styles.cells515}>
                      <div className={styles.bg517} />
                      <div className={styles.name521}>Item</div>
                    </div>
                    <div className={styles.cells516}>
                      <div className={styles.bg518} />
                      <div className={styles.name522}>Item</div>
                    </div>
                    <div className={styles.cells517}>
                      <div className={styles.bg519} />
                      <div className={styles.name523}>Item</div>
                    </div>
                    <div className={styles.cells518}>
                      <div className={styles.bg520} />
                      <div className={styles.name524}>Item</div>
                    </div>
                    <div className={styles.cells519}>
                      <div className={styles.bg521} />
                      <div className={styles.name525}>Item</div>
                    </div>
                    <div className={styles.cells520}>
                      <div className={styles.bg522} />
                      <div className={styles.name526}>Item</div>
                    </div>
                    <div className={styles.cells521}>
                      <div className={styles.bg523} />
                      <div className={styles.name527}>Item</div>
                    </div>
                    <div className={styles.cells522}>
                      <div className={styles.bg524} />
                      <div className={styles.name528}>Item</div>
                    </div>
                    <div className={styles.cells523}>
                      <div className={styles.bg525} />
                      <div className={styles.name529}>Item</div>
                    </div>
                    <div className={styles.cells524}>
                      <div className={styles.bg526} />
                      <div className={styles.name530}>Item</div>
                    </div>
                    <div className={styles.cells525}>
                      <div className={styles.bg527} />
                      <div className={styles.name531}>Item</div>
                    </div>
                  </div>
                </div>
                <div className={styles.column112}>
                  <div className={styles.cells526}>
                    <div className={styles.name532}>Title</div>
                  </div>
                  <div className={styles.contentCell30}>
                    <div className={styles.cells527}>
                      <div className={styles.bg528} />
                      <div className={styles.name533}>Item</div>
                    </div>
                    <div className={styles.cells528}>
                      <div className={styles.bg529} />
                      <div className={styles.name534}>Item</div>
                    </div>
                    <div className={styles.cells529}>
                      <div className={styles.bg530} />
                      <div className={styles.name535}>Item</div>
                    </div>
                    <div className={styles.cells530}>
                      <div className={styles.bg531} />
                      <div className={styles.name536}>Item</div>
                    </div>
                    <div className={styles.cells531}>
                      <div className={styles.bg532} />
                      <div className={styles.name537}>Item</div>
                    </div>
                    <div className={styles.cells532}>
                      <div className={styles.bg533} />
                      <div className={styles.name538}>Item</div>
                    </div>
                    <div className={styles.cells533}>
                      <div className={styles.bg534} />
                      <div className={styles.name539}>Item</div>
                    </div>
                    <div className={styles.cells534}>
                      <div className={styles.bg535} />
                      <div className={styles.name540}>Item</div>
                    </div>
                    <div className={styles.cells535}>
                      <div className={styles.bg536} />
                      <div className={styles.name541}>Item</div>
                    </div>
                    <div className={styles.cells536}>
                      <div className={styles.bg537} />
                      <div className={styles.name542}>Item</div>
                    </div>
                    <div className={styles.cells537}>
                      <div className={styles.bg538} />
                      <div className={styles.name543}>Item</div>
                    </div>
                    <div className={styles.cells538}>
                      <div className={styles.bg539} />
                      <div className={styles.name544}>Item</div>
                    </div>
                    <div className={styles.cells539}>
                      <div className={styles.bg540} />
                      <div className={styles.name545}>Item</div>
                    </div>
                    <div className={styles.cells540}>
                      <div className={styles.bg541} />
                      <div className={styles.name546}>Item</div>
                    </div>
                    <div className={styles.cells541}>
                      <div className={styles.bg542} />
                      <div className={styles.name547}>Item</div>
                    </div>
                    <div className={styles.cells542}>
                      <div className={styles.bg543} />
                      <div className={styles.name548}>Item</div>
                    </div>
                  </div>
                </div>
                <div className={styles.column122}>
                  <div className={styles.cells543}>
                    <div className={styles.name549}>Title</div>
                  </div>
                  <div className={styles.contentCell31}>
                    <div className={styles.cells544}>
                      <div className={styles.bg544} />
                      <div className={styles.name550}>Item</div>
                    </div>
                    <div className={styles.cells545}>
                      <div className={styles.bg545} />
                      <div className={styles.name551}>Item</div>
                    </div>
                    <div className={styles.cells546}>
                      <div className={styles.bg546} />
                      <div className={styles.name552}>Item</div>
                    </div>
                    <div className={styles.cells547}>
                      <div className={styles.bg547} />
                      <div className={styles.name553}>Item</div>
                    </div>
                    <div className={styles.cells548}>
                      <div className={styles.bg548} />
                      <div className={styles.name554}>Item</div>
                    </div>
                    <div className={styles.cells549}>
                      <div className={styles.bg549} />
                      <div className={styles.name555}>Item</div>
                    </div>
                    <div className={styles.cells550}>
                      <div className={styles.bg550} />
                      <div className={styles.name556}>Item</div>
                    </div>
                    <div className={styles.cells551}>
                      <div className={styles.bg551} />
                      <div className={styles.name557}>Item</div>
                    </div>
                    <div className={styles.cells552}>
                      <div className={styles.bg552} />
                      <div className={styles.name558}>Item</div>
                    </div>
                    <div className={styles.cells553}>
                      <div className={styles.bg553} />
                      <div className={styles.name559}>Item</div>
                    </div>
                    <div className={styles.cells554}>
                      <div className={styles.bg554} />
                      <div className={styles.name560}>Item</div>
                    </div>
                    <div className={styles.cells555}>
                      <div className={styles.bg555} />
                      <div className={styles.name561}>Item</div>
                    </div>
                    <div className={styles.cells556}>
                      <div className={styles.bg556} />
                      <div className={styles.name562}>Item</div>
                    </div>
                    <div className={styles.cells557}>
                      <div className={styles.bg557} />
                      <div className={styles.name563}>Item</div>
                    </div>
                    <div className={styles.cells558}>
                      <div className={styles.bg558} />
                      <div className={styles.name564}>Item</div>
                    </div>
                    <div className={styles.cells559}>
                      <div className={styles.bg559} />
                      <div className={styles.name565}>Item</div>
                    </div>
                  </div>
                </div>
                <div className={styles.actionCell2}>
                  <div className={styles.cells560}>
                    <div className={styles.name566}>Action</div>
                  </div>
                  <div className={styles.contentCell32}>
                    <div className={styles.buttonCells32}>
                      <div className={styles.bg560} />
                      <div className={styles.actions32}>
                        <div className={styles.button64}>
                          <div className={styles.viewDetails64}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon64} alt="" />
                        <div className={styles.button65}>
                          <div className={styles.viewDetails65}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon65} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells33}>
                      <div className={styles.bg561} />
                      <div className={styles.actions33}>
                        <div className={styles.button66}>
                          <div className={styles.viewDetails66}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon66} alt="" />
                        <div className={styles.button67}>
                          <div className={styles.viewDetails67}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon67} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells34}>
                      <div className={styles.bg562} />
                      <div className={styles.actions34}>
                        <div className={styles.button68}>
                          <div className={styles.viewDetails68}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon68} alt="" />
                        <div className={styles.button69}>
                          <div className={styles.viewDetails69}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon69} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells35}>
                      <div className={styles.bg563} />
                      <div className={styles.actions35}>
                        <div className={styles.button70}>
                          <div className={styles.viewDetails70}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon70} alt="" />
                        <div className={styles.button71}>
                          <div className={styles.viewDetails71}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon71} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells36}>
                      <div className={styles.bg564} />
                      <div className={styles.actions36}>
                        <div className={styles.button72}>
                          <div className={styles.viewDetails72}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon72} alt="" />
                        <div className={styles.button73}>
                          <div className={styles.viewDetails73}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon73} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells37}>
                      <div className={styles.bg565} />
                      <div className={styles.actions37}>
                        <div className={styles.button74}>
                          <div className={styles.viewDetails74}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon74} alt="" />
                        <div className={styles.button75}>
                          <div className={styles.viewDetails75}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon75} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells38}>
                      <div className={styles.bg566} />
                      <div className={styles.actions38}>
                        <div className={styles.button76}>
                          <div className={styles.viewDetails76}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon76} alt="" />
                        <div className={styles.button77}>
                          <div className={styles.viewDetails77}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon77} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells39}>
                      <div className={styles.bg567} />
                      <div className={styles.actions39}>
                        <div className={styles.button78}>
                          <div className={styles.viewDetails78}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon78} alt="" />
                        <div className={styles.button79}>
                          <div className={styles.viewDetails79}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon79} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells40}>
                      <div className={styles.bg568} />
                      <div className={styles.actions40}>
                        <div className={styles.button80}>
                          <div className={styles.viewDetails80}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon80} alt="" />
                        <div className={styles.button81}>
                          <div className={styles.viewDetails81}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon81} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells41}>
                      <div className={styles.bg569} />
                      <div className={styles.actions41}>
                        <div className={styles.button82}>
                          <div className={styles.viewDetails82}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon82} alt="" />
                        <div className={styles.button83}>
                          <div className={styles.viewDetails83}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon83} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells42}>
                      <div className={styles.bg570} />
                      <div className={styles.actions42}>
                        <div className={styles.button84}>
                          <div className={styles.viewDetails84}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon84} alt="" />
                        <div className={styles.button85}>
                          <div className={styles.viewDetails85}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon85} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells43}>
                      <div className={styles.bg571} />
                      <div className={styles.actions43}>
                        <div className={styles.button86}>
                          <div className={styles.viewDetails86}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon86} alt="" />
                        <div className={styles.button87}>
                          <div className={styles.viewDetails87}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon87} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells44}>
                      <div className={styles.bg572} />
                      <div className={styles.actions44}>
                        <div className={styles.button88}>
                          <div className={styles.viewDetails88}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon88} alt="" />
                        <div className={styles.button89}>
                          <div className={styles.viewDetails89}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon89} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells45}>
                      <div className={styles.bg573} />
                      <div className={styles.actions45}>
                        <div className={styles.button90}>
                          <div className={styles.viewDetails90}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon90} alt="" />
                        <div className={styles.button91}>
                          <div className={styles.viewDetails91}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon91} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells46}>
                      <div className={styles.bg574} />
                      <div className={styles.actions46}>
                        <div className={styles.button92}>
                          <div className={styles.viewDetails92}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon92} alt="" />
                        <div className={styles.button93}>
                          <div className={styles.viewDetails93}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon93} alt="" />
                      </div>
                    </div>
                    <div className={styles.buttonCells47}>
                      <div className={styles.bg575} />
                      <div className={styles.actions47}>
                        <div className={styles.button94}>
                          <div className={styles.viewDetails94}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon94} alt="" />
                        <div className={styles.button95}>
                          <div className={styles.viewDetails95}>
                            View Details
                          </div>
                        </div>
                        <img className={styles.separatorIcon95} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BulletPointContainer
            monthlySeasonTicketsAreIs="Travel facility valid anywhere to anywhere within City / Sub-Urban limits and particular District place on the Route."
            monthlySeasonTicketsAreIs1={`Validity period – 1 month & 3 months for monthly and Quarterly passes respectively.`}
            bulltetPointPlaceholder2="/bulltet-point-placeholder.svg"
            monthlySeasonTicketsAreIs2="Applicant can apply online at www.online.tsrtcpass.in"
            bulltetPointPlaceholder3="pending_I1:1301;717:23308;121:4116"
            bulltetPointPlaceholder4="pending_I1:1301;717:23309;121:4116"
            bulltetPointPlaceholder5="pending_I1:1301;717:23310;121:4116"
            bulltetPointPlaceholder6="pending_I1:1301;717:23311;121:4116"
            bulltetPointPlaceholder7="pending_I1:1301;717:23312;121:4116"
            bulltetPointPlaceholder8="pending_I1:1301;717:23313;121:4116"
            bulltetPointPlaceholder9="pending_I1:1301;717:23314;121:4116"
            bulltetPointPlaceholder10="pending_I1:1301;717:23361;121:4116"
            bulltetPointPlaceholder11="pending_I1:1301;717:23366;121:4116"
            bulltetPointPlaceholder12="pending_I1:1301;717:23371;121:4116"
            bulltetPointPlaceholder13="pending_I1:1301;717:23376;121:4116"
            bulltetPointPlaceholder14="pending_I1:1301;717:23381;121:4116"
            bulltetPointPlaceholder15="pending_I1:1301;717:23386;121:4116"
            bulltetPointPlaceholder16="pending_I1:1301;717:23391;121:4116"
            bulltetPointPlaceholder17="pending_I1:1301;717:23396;121:4116"
            bulltetPointPlaceholder18="pending_I1:1301;717:23401;121:4116"
            bulltetPointPlaceholder19="pending_I1:1301;717:23356;121:4116"
            bulletPoint
            propPadding="0px 0px 0px 0px"
            propMinHeight="26px"
            propHeight="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
