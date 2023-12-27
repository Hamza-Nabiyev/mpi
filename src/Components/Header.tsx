import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">Новости</div>
      <div className="header-buttons">
        <button className="header-button">
          <Link to="/">Главная</Link>
        </button>
        <button className="header-button">
          <Link to="/login">Войти</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
