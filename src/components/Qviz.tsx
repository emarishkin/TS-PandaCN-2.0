import { FC, useState } from "react";
import { Game } from "./Game";
import { ResultGame } from "./ResultGame";
import { quastions } from "../data/questionsQviz";
import '../styles/Qviz.css'

export const Qviz: FC = () => {
    const [step, setStep] = useState<number>(0);
    const [correct, setCorrect] = useState<number>(0);
    const question = quastions[step];

    const handleAnswerClick = (index: number) => {
        if (index === question.correct) {
            setCorrect(correct + 1);
        }
        setStep(step + 1);
    };

    return (
        <section className="qviz-section">
            <div className='container'>
                <h2>Пройди простую викторину</h2>
                {step !== quastions.length ? (
                    <Game 
                        question={question} 
                        onClickVariant={handleAnswerClick}
                        step={step}
                        totalQuestions={quastions.length}
                    />
                ) : (
                    <ResultGame 
                        correctAnswers={correct} 
                        totalQuestions={quastions.length} 
                    />
                )}
            </div>
        </section>
    );
};