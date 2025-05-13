import { FC, useState } from "react";
import "../styles/Header.css";
import logo from "/logo.png";
import { Link } from "react-router-dom";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span className="logo-text"><a style={{textDecoration:'none',color:'#ff7043'}} href="/">PandaCnExpress</a></span>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li><Link to='/' onClick={()=>setMenuOpen(false)}>Главная</Link></li>
            <li><Link to='/tariffs' onClick={()=>setMenuOpen(false)}>Тарифы</Link></li>
            <li><Link to="/services" onClick={()=>setMenuOpen(false)}>Услуги</Link></li>
            <li><Link to="/calculator" onClick={()=>setMenuOpen(false)}>Калькулятор</Link></li>
            <li><Link to="/contacts" onClick={()=>setMenuOpen(false)}>Контакты</Link></li>
          </ul>

          <div className="contact mobile-only">
            <span className="phone">+7 (927) 653-23-22</span>
            <a href="https://t.me/PandaCnExpres" className="btn">Telegram</a>
          </div>
        </nav>

        <div className="contact desktop-only">
          <span className="phone">+7 (927) 653-23-22</span>
          <a href="https://t.me/PandaCnExpres" className="btn">Telegram</a>
        </div>

        <button
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(prev=>!prev)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </header>
  );
};
