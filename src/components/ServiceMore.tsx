import { FC } from "react";
import '../styles/ServiceMore.css'

interface ServiceMoreProps{
  closeOn:()=>void 
  opning:boolean
}

export const ServiceMore:FC<ServiceMoreProps> = ({closeOn, opning}) => {
    if (!opning) return null;
    
    return (
        <div className="service-more-overlay">
            <div className="service-more-content">
                <h2>Подробная информация об услуге</h2>
                
                <button onClick={closeOn} className="back-button">
                    Вернуться назад
                </button>
            </div>
        </div>
    )
}