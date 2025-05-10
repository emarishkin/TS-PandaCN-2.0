import { FC } from "react";
import { PreimushestvaCard } from "./PreimushestvaCard";
import { preimushestvas } from "../data/preimushestvas";
import '../styles/Prem.css'

interface PreimushestvaProps{}

export const Preimushestva:FC<PreimushestvaProps> = () =>{
    return(
       <section className="prem-section">
        <div className="container">
          <div className="prem-info-content">
            <h2 className="prem-h2">Преимущества работы с нами</h2>
            <PreimushestvaCard prem={preimushestvas} />
          </div>
        </div>
       </section>
    )
}