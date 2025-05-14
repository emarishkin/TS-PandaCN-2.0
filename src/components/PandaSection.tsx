import { FC } from "react";
import { PandaYears } from "./PandaYears";
import PandaCounter from "./PandaCounter";
import { PandaClients } from "./PandaClients";
import '../styles/PandaSection.css';
import { PandaPercent } from "./PandaPercent";
import '../styles/PandaSection.css'

export const PandaSection: FC = () => {
    return(
        <section className="panda-section">
            <div className="container">
                <h2>PandaCn<span style={{color:'#21e363',margin:0}}>Express</span> в цифрах:</h2>
                <p>Качество оказываемых услуг лучше всего демонстрирует статистика. Ниже мы привели наши нескромные показатели за все время нашей работы.</p>
                
                <div className="counters-grid">
                    <div className="counter-block">
                        <PandaYears />
                    </div>
                    <div className="counter-block">
                        <PandaCounter />
                    </div>
                    <div className="counter-block">
                        <PandaPercent />
                    </div>
                    <div className="counter-block">
                        <PandaClients />
                    </div>
                </div>
            </div>
        </section>
    )
}