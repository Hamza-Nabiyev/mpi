import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">Новости</div>
      <div className="header-buttons">
        <button className="header-button">Войти</button>
      </div>
    </header>
  );
};

export default Header;
