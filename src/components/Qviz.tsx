import { FC, useState } from "react";
import { Game } from "./Game";
import { ResultGame } from "./ResultGame";
import { quastions } from "../data/questionsQviz";

interface QvizProps{

}

export const Qviz:FC<QvizProps> = () => {

    const [step,setStep] = useState<number>(0)
    const question = quastions[step]
    const [correct,setCorrect] = useState<number>(0)

    const ClickBro = (index:number) => {
        setStep(step+1)

        if(index == question.correct){
           setCorrect(correct+1)
        }
    }

    return(
        <section className="qviz-section">
            <div className="container">
               <h2>Пройди простую викторину</h2>
               {step !== quastions.length && <Game question={question} onClick={ClickBro} />}
               {step == quastions.length && <ResultGame correct={correct} totalQue={quastions.length} />}
               
            </div>
        </section>
    )
}