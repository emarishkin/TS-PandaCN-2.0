import { FC } from "react";
import { IPanda } from "../types/questions";
import '../styles/Game.css'


interface GameProps {
    question: IPanda;
    onClickVariant: (index: number) => void;
    step: number;
    totalQuestions: number;
}

export const Game: FC<GameProps> = ({ question, onClickVariant, step, totalQuestions }) => {
    const progress = ((step + 1) / totalQuestions) * 100;

    return (
        <div className='game'>
            <div className='progresBar'>
                <div style={{ width: `${progress}%` }}></div>
            </div>
            <div>
                <h2>{question.title}</h2>
                <ul>
                    {question.variants.map((variant, index) => (
                        <li 
                            key={index} 
                            onClick={() => onClickVariant(index)}
                            
                        >
                            {variant}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};