import { FC } from "react";
import { FormaB } from "./FormaB";

interface BottomFormProps{

}

export const BottomForm:FC<BottomFormProps> = () => {
    return(
        <section className="FormBottomSection">
            <div className="container">
                <div className="h2-and-form">
                    <h2>Оставьте заявку,<br />и мы свяжемся с вами</h2>
                    <div className="FormaB">
                        <FormaB />
                    </div>
                </div>
            </div>
        </section>
    )
}