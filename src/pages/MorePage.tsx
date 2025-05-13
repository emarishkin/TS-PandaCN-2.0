import { FC } from "react";

import { ServiceMore } from "../components/ServiceMore";
import {useNavigate } from "react-router-dom";



export const MorePage: FC = () => {
    
    const navigate = useNavigate();
    
    const clickClose2 = () => {
        navigate(-1); 
    }

  return (
    <div>
        <div className="more-page-container">
            <ServiceMore opning={true} closeOn={clickClose2} />
        </div>
    </div>
  );
};