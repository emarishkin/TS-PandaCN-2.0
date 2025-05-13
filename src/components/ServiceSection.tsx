import { FC, useState } from "react";
import { ServiceCard } from "./ServiceCard";
import { services } from "../data/service";
import { ServiceModal } from "./ServiceModal";
import '../styles/ServiceSection.css'

interface ServiceSectionProps{

}

export const ServiceSection:FC<ServiceSectionProps> = () => {

    const [open,setOpen] = useState(false)
    
    const clickOpen = () => setOpen(true)
    const clickClose = () => setOpen(false)
    return(
        <section className="service-section">
            <ServiceCard clickButton1={clickOpen} service={services} />
            <ServiceModal isOpen={open} onClose={clickClose} />
        </section>
    )
}