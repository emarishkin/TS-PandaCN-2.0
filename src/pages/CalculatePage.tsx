import { FC } from "react";
import { Bunner } from "../components/Bunner";

export const CalculatePage:FC = () => {
  return (
    <div>
        <h2 style={{fontSize:13,textAlign:'center'}}>Чтобы приблизительно рассчитать стоимость доставки воспользуйтесь нашим калькулятором</h2>
      <Bunner />
    </div>
  );
};