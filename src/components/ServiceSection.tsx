import { FC } from "react";
import { ServiceCard } from "./ServiceCard";
import { services } from "../data/service";

interface ServiceSectionProps{

}

export const ServiceSection:FC<ServiceSectionProps> = () => {
    return(
        <section className="service-section">
            <ServiceCard service={services} />
        </section>
    )
}