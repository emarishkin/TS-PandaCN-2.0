import { FC } from "react";
import { IPanda } from "../types/questions";



interface GameProps{
question:IPanda
onClick: (index: number) => void
}

export const Game:FC<GameProps> = ({question,onClick}) => {
    
    return(
        <div className="game">
            <div className="progresBar">
                
            </div>
            <div>
                <h2>{question.title}</h2>  
                <ul>
                    {question.variants.map((variant, index)=>(
                        <li key={index}><button onClick={()=>onClick(index)}>{variant}</button></li>
                    ))} 
                </ul>            
            </div>
        </div>
    )
}