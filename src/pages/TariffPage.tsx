import React from "react";
import { TariffsSection } from "../components/TariffsSection";


export const HomePage: React.FC = () => {
  return (
    <div>
      <h2>Наши тарифы</h2>
      <TariffsSection />
    </div>
  );
};