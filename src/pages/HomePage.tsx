import React from "react";
import { Bunner } from "../components/Bunner";
import { InfoTwo } from "../components/InfoTwo";
import { TariffsSection } from "../components/TariffsSection";
import { Preimushestva } from "../components/Preimushestva";
import { ServiceSection } from "../components/ServiceSection";


export const HomePage: React.FC = () => {
  return (
    <div>
      <Bunner />
      <InfoTwo />
      <TariffsSection />
      <Preimushestva />
      <ServiceSection />
    </div>
  );
};