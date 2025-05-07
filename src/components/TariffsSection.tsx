import { FC } from "react";
import { tariffs } from "../data/tariffs";
import { TariffBlock } from "./TariffBlock";
import '../styles/TariffsSection.css'

interface TariffsSectionProps{
    onRequestClick?: () => void
}

export const TariffsSection:FC<TariffsSectionProps> = ({ onRequestClick }) => {
    return (
        <section className="tariffs-section" id="tariffs">
          <h2>Наши тарифы</h2>
          <div className="tariffs-list">
            {tariffs.map((t) => (
              <TariffBlock key={t.id} tariff={t} onRequestClick={onRequestClick} />
            ))}
          </div>
        </section>
      );
}