import { FC } from "react";
import { IService } from "../types/service";
import '../styles/ServiceCard.css'


interface ServiceCardProps{
    service:IService[]
}

export const ServiceCard:FC<ServiceCardProps> = ({service}) => {
    return(
        <div className="container">
            <div className="service-items">
               {service.map((s)=>(
                <div key={s.title} className="service-item">
                   <h2>{s.title}</h2>
                   <p>{s.description}</p>
                   <img src={s.img} alt="" />
                   <button>{s.button}</button>
                   <button>{s.button2}</button>
                </div>
               ))}
            </div>
        </div>
    )
}