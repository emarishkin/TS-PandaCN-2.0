import { FC } from "react";
import { IService } from "../types/service";
import '../styles/ServiceCard.css'
import { Link } from "react-router-dom";


interface ServiceCardProps{
    service:IService[]
    clickButton1?:()=>void
    clickButton2?:()=>void
}

export const ServiceCard:FC<ServiceCardProps> = ({service,clickButton1,clickButton2}) => {
    return(
        <div className="container">
            <h2 className="service-h2">Наши услуги</h2>
            <div className="service-items">
               {service.map((s,index)=>(
                <div key={s.title} className="service-item">
                   <h2 className="service-title">{s.title}</h2>
                   <p className="service-desc">{s.description}</p>
                   <img className="service-img" src={s.img} alt="" />
                   <div className="service-buttons">
                    <button onClick={clickButton1} className="service-button1">{s.button}</button>
                    {index>=service.length-2&& <Link to="/more" className="service-button2" onClick={clickButton2}>
                    {s.button2}
                    </Link> 
                    }
                    
                   </div>
                </div>
               ))}
            </div>
        </div>
    )
}