import { FC } from "react";

import { ServiceMore } from "../components/ServiceMore";
import {useNavigate } from "react-router-dom";
import { Bunner } from "../components/Bunner";
import { TariffsSection } from "../components/TariffsSection";



export const MorePage: FC = () => {
    
    const navigate = useNavigate();
    
    const clickClose2 = () => {
        navigate(-1); 
    }

  return (
    <div>
        <div className="section-more">
          
             <ServiceMore opning={true} closeOn={clickClose2} />
             <Bunner />
             <TariffsSection/>
          
        </div>
    </div>
  );
};