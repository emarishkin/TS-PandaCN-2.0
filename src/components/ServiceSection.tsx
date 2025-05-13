import { FC, useState } from "react";
import { ServiceCard } from "./ServiceCard";
import { services } from "../data/service";
import { ServiceModal } from "./ServiceModal";
import '../styles/ServiceSection.css'
import { useNavigate } from "react-router-dom";


interface ServiceSectionProps{

}

export const ServiceSection:FC<ServiceSectionProps> = () => {

    const [open,setOpen] = useState(false)
    
    const clickOpen = () => setOpen(true)
    const clickClose = () => setOpen(false)
    
     const navigate = useNavigate();
    const clickOpen2 = () => {
        navigate('/more'); 
    }

    return(
        <section className="service-section">
            <ServiceCard clickButton1={clickOpen} clickButton2={clickOpen2}  service={services} />
            <ServiceModal isOpen={open} onClose={clickClose} />
            
        </section>
    )
}