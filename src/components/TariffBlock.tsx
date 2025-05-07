import { FC } from "react";
import { Tariff } from "../types/tariff";
import '../styles/TariffBlock.css'



interface TariffBlockProps {
  tariff: Tariff;
  onRequestClick?: () => void;
}

export const TariffBlock: FC<TariffBlockProps> = ({ tariff, onRequestClick }) => {
  return (
    <div className="tariff-block">
      <div className="tariff-header">
        <h3 className="title-tariff">{tariff.title}</h3>
        <p className="text-tariff">{tariff.description}</p>
        <img className="img-tariff" src={tariff.img} alt="" />
        <span className="tariff-price">{tariff.price}</span>
        <p className="ps-tsriff">{tariff.ps}</p>
      </div>
      <button className="button-tariff" onClick={onRequestClick}>Оставить заявку</button>
    </div>
  );
};
