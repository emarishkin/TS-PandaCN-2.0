import { FC } from "react";
import { Link } from "react-router-dom";
import logo from '/logo.png'
import '../styles/Footer.css'

export const Footer:FC = () => {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer-block">
                    <div className="footer__col">
                        <img className="footer__logo" src={logo} alt="" />
                        <p className="footer__col-text">Транспортно-логистическая компания. Доставка грузов из Китая.</p>
                        <div className="footer__partners">
                            <a className="footer__partners-img" href="https://t.me/pandaoptcn" ><img src='https://pandacnexpress.ru/images/form/tg.svg' alt="" /></a>
                            <a className="footer__partners-img" href="https://www.instagram.com/pandacnexpress_?igsh=MWZqc2FhaGVsaTB1ZA%3D%3D&utm_source=qr"><img src="https://pandacnexpress.ru/images/form/inst.svg" alt="" /></a>
                            <a className="footer__partners-img" href="https://vk.com/pandacnexpress"><img src="https://pandacnexpress.ru/images/form/vk.svg" alt="" /></a>
                            <a className="footer__partners-img" href="https://www.youtube.com/@PandaCnExpress"><img src="https://pandacnexpress.ru/images/form/yt.svg" alt="" /></a>
                        </div>
                    </div>  
                    <div className="footer__menu">
                        <h4 className="footer__title">Меню</h4>
                        <ul className="nav-footer">
                            <li><Link to='/'>Главная</Link></li>
                            <li><Link to='/tariffs'>Тарифы</Link></li>
                            <li><Link to="/services">Услуги</Link></li>
                            <li><Link to="/calculator">Калькулятор</Link></li>
                            <li><Link to="/contacts">Контакты</Link></li>
                        </ul>
                    </div> 
                    <div className="footer__contacts">
                        <h4 className="footer__title">Контакты</h4>
                        <p className="footer__contacts-text">Москва, ТЦ "Южные ворота", 19 км МКАД, Вл. 20 с 1</p>
                        <p className="footer__contacts-text"><a href="tel:+7 927 653-23-22">+7 927 653-23-22</a></p>
                        <p className="footer__contacts-text"><a href="mailto:info@pandacnexpress.ru">info@pandacnexpress.ru</a></p>
                        <p className="footer__contacts-text">©PandaCnExpress 2024</p>
                    </div> 
                    <div className="footer__work">
                        <h4 className="footer__title">Режим работы</h4>
                        <p className="footer__contacts-text">пн-сб: 10:00 - 20:00</p>
                        <p className="footer__contacts-text">вс: 10:00 - 16:00</p>
                    </div>   
                </div>
            </div>
        </footer>
    )
}