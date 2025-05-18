import { FC } from "react"


interface ResultGameProps{
   correct:number 
   totalQue:number
} 

export const ResultGame:FC<ResultGameProps> = ({correct,totalQue}) => {
    return(
        <div className="result">
            <img src="" alt="" />
            <h2>вы ответили на {correct} из {totalQue}</h2>     
        </div>
    )
}