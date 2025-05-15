import { FC } from "react";
import { FormaB } from "./FormaB";
import '../styles/BottomForm.css'

interface BottomFormProps{

}

export const BottomForm:FC<BottomFormProps> = () => {
    return(
        <section className="FormBottomSection">
            <div className="container">
                <div className="form++">
                    <h2>Оставьте заявку,<br />и мы свяжемся с вами</h2>
                    <div className="h2-and-form">
                        <div className="FormaB">
                            <FormaB />
                        </div>
                        <div className="contact-info">
                            <p className="contact__info-title">Или оформите заказ через Telegram</p>
                            <div className="contact__info-wrap">
                                <p className="contact__info-phone">+7 (927) 653-23-22</p>
                                <a className="contact__info-btn" href="https://t.me/pandaoptcn" target="_blank">Telegram</a>
                                <p className="contact__info-text">Соц. сети</p>
                                <div className="contact__info-socials">
                                  <a className="contact__info-social" href="https://t.me/pandaoptcn" ><img src='https://pandacnexpress.ru/images/form/tg.svg' alt="" /></a>
                                  <a className="contact__info-social" href="https://www.instagram.com/pandacnexpress_?igsh=MWZqc2FhaGVsaTB1ZA%3D%3D&utm_source=qr"><img src="https://pandacnexpress.ru/images/form/inst.svg" alt="" /></a>
                                  <a className="contact__info-social" href="https://vk.com/pandacnexpress"><img src="https://pandacnexpress.ru/images/form/vk.svg" alt="" /></a>
                                  <a className="contact__info-social" href="https://www.youtube.com/@PandaCnExpress"><img src="https://pandacnexpress.ru/images/form/yt.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}