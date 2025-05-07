import { FC } from "react";
import '../styles/InfoCards.css'
interface InfoTwoCardsProps{

}

export const InfoTwoCards:FC<InfoTwoCardsProps> = () => {
    return(
        <div className="container">
           <div className="delivery-order__item delivery__img">
            <h2 className="delivery-order__title">Доставка из <br />Китая <span className="accent-text">за 13 дней</span></h2>
            <ul className="delivery-order__list">
                <li>Минимальный вес 1 кг</li>
                <li>Доставка от 1.7$</li>
                <li>3 вида доставки</li>
            </ul>
           </div>

           <div className="delivery-order__item order__img">
             <h2 className="delivery-order__title">По промокоду <span className="accent-text">PANDA50</span> на первый заказ скидка 50% на комиссию</h2>
             <span className="order__discount">50%</span>
           </div>
        </div>
    )
}