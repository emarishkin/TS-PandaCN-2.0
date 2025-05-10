import { FC } from "react";
import { IPrem } from "../types/preimushestva";


interface PreimushestvaCard{
 prem:IPrem[]
}

export const PreimushestvaCard:FC<PreimushestvaCard> = ({prem}) => {
    return(
        <div className="prem-items">
                {prem.map((p)=>(
                    <div className="prem-item">
                        <div className="prem-head">
                            <img src={p.img} alt="" />
                            <h2>{p.title}</h2>
                        </div>
                        <p>{p.descriptions}</p>
                    </div>
                ))}
        </div>
    )
}