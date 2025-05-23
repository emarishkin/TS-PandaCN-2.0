import React from "react";
import { Bunner } from "../components/Bunner";
import { InfoTwo } from "../components/InfoTwo";
import { TariffsSection } from "../components/TariffsSection";
import { Preimushestva } from "../components/Preimushestva";
import { ServiceSection } from "../components/ServiceSection";

import { PandaSection } from "../components/PandaSection";
import { BottomForm } from "../components/BottomForm";
import { Qviz } from "../components/Qviz";

// import WorkSteps from "../components/WorkSteps";


export const HomePage: React.FC = () => {
  return (
    <div>
      <Bunner />
      <InfoTwo />
      <TariffsSection />
      <Preimushestva />
      <ServiceSection />
      {/* <WorkSteps /> */}
      <PandaSection/>
      <Qviz />
       <BottomForm/>
    </div>
  );
};