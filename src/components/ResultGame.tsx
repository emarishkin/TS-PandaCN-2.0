import { FC } from "react";
import '../styles/ResultGame.css'

interface ResultGameProps {
    correctAnswers: number;
    totalQuestions: number;
}

export const ResultGame: FC<ResultGameProps> = ({ correctAnswers, totalQuestions }) => {
    return (
        <div className='result'>
            <img 
                src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png" 
                alt="Result" 
            />
            <h2>Вы ответили на {correctAnswers} из {totalQuestions}</h2>
            <button onClick={() => window.location.reload()}>
                Попробовать снова
            </button>
        </div>
    );
};