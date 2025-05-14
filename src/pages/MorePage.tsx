import { FC } from "react";

import { ServiceMore } from "../components/ServiceMore";

import { Bunner } from "../components/Bunner";
import { TariffsSection } from "../components/TariffsSection";



export const MorePage: FC = () => {
    
    
    
   

  return (
    <div>
        <div className="section-more">
          
             <ServiceMore  />
             <Bunner />
             <TariffsSection/>
          
        </div>
    </div>
  );
};