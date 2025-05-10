import { FC } from "react";
import { IPrem } from "../types/preimushestva";
import '../styles/PremCard.css'

interface PreimushestvaCard{
 prem:IPrem[]
}

export const PreimushestvaCard:FC<PreimushestvaCard> = ({prem}) => {
    return(
        <div className="prem-items">
                {prem.map((p)=>(
                    <div className="prem-item">
                        <div className="prem-head">
                            <img className="prem-img" src={p.img} alt="" />
                            <h3 className="prem-h3">{p.title}</h3>
                        </div>
                        <p className="prev-text">{p.descriptions}</p>
                    </div>
                ))}
        </div>
    )
}