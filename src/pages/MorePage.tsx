import { FC } from "react";

import { ServiceMore } from "../components/ServiceMore";

import { Bunner } from "../components/Bunner";
import { TariffsSection } from "../components/TariffsSection";
import { PandaSection } from "../components/PandaSection";



export const MorePage: FC = () => {
    
    
    
   

  return (
    <div>
        <div className="section-more">
          
             <ServiceMore  />
             <Bunner />
             <TariffsSection/>
             <PandaSection/>
          
        </div>
    </div>
  );
};