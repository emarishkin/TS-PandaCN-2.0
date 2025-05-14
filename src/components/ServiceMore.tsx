import { FC } from "react";
import '../styles/ServiceMore.css'
import { Link } from "react-router-dom";

interface ServiceMoreProps{
 
}

export const ServiceMore:FC<ServiceMoreProps> = () => {
   
    
    return (
        <div className="container">
        
            <div className="service-more-content">
                <h2 className="h2-more">Подробная информация</h2>
                <Link to=".." relative="path" className="back-button">
                Вернуться назад
                </Link> 
            </div>
            
        </div>
       
    )
}