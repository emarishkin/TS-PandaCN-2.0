import { FC } from "react";
import '../styles/Header.css';
import logo from '/logo.png';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span className="logo-text">PandaCnExpress</span>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="/">Главная</a></li>
            <li><a href="/tariffs">Тарифы</a></li>
            <li><a href="/services">Услуги</a></li>
            <li><a href="/calculator">Калькулятор</a></li>
            <li><a href="/contacts">Контакты</a></li>
          </ul>
        </nav>
        <div className="contact">
          <span className="phone">+7 (927) 653-23-22</span>
          <a href="https://t.me/PandaCnExpres" className="btn">Telegram</a>
        </div>
      </div>
    </header>
  );
};
