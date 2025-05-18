import { FC } from "react";
import '../styles/ResultGame.css'
import logo from '/logo.png'

interface ResultGameProps {
    correctAnswers: number;
    totalQuestions: number;
}

export const ResultGame: FC<ResultGameProps> = ({ correctAnswers, totalQuestions }) => {
    return (
        <div className='result'>
            <img 
                src={logo} 
                alt="Result" 
            />
            <h2>Вы ответили на {correctAnswers} из {totalQuestions}</h2>
            <button onClick={() => window.location.reload()}>
                Попробовать снова
            </button>
        </div>
    );
};