import { FC, useState } from "react";
import { tariffs } from "../data/tariffs";
import { TariffBlock } from "./TariffBlock";
import { Modal } from "./Modal";
import '../styles/TariffsSection.css'

export const TariffsSection: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="tariffs-section" id="tariffs">
      <h2>Наши тарифы</h2>
      <div className="tariffs-list">
        {tariffs.map((t) => (
          <TariffBlock key={t.id} tariff={t} onRequestClick={openModal} />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};
