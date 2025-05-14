import { FC } from "react";
import { ServiceSection } from "../components/ServiceSection";
import { PandaSection } from "../components/PandaSection";


export const ServicePage: FC = () => {
  return (
    <div>
       <ServiceSection />
       <PandaSection/>
    </div>
  );
};