import React from "react";
import { Link } from "react-router-dom";

const Registration: React.FC = () => {
  return (
    <div className="reg-content">
      Регистрация
      <form className="registration-form">
        <label className="reg-label">
          Login:
          <input className="reg-input" placeholder="Логин" />
        </label>
        <label className="reg-label">
          Password:
          <input className="reg-input" placeholder="Пароль" />
        </label>
        <label className="reg-label">
          Confirm password:
          <input className="reg-input" placeholder="Пароль" />
        </label>
        <button type="submit" className="signInButton">
          Зарегестрироваться
        </button>
      </form>
      <Link style={{ color: "blue" }} to="/login">
        Авторизация
      </Link>
    </div>
  );
};

export default Registration;
