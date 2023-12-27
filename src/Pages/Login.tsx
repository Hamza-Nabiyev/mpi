import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (username.length === 0 || password.length === 0) {
      setError("Ошибка");
    } else {
      setError("");
      console.log("Username:", username, "Password:", password);
    }
  };
  return (
    <div className="reg-content">
      Авторизация
      <form className="registration-form" onSubmit={handleSubmit}>
        <label className="reg-label">
          Login:
          <input
            className="reg-input"
            placeholder="Логин"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <label className="reg-label">
          Password:
          <input
            className="reg-input"
            placeholder="Пароль"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit" className="signInButton">
          Войти
        </button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
      <Link style={{ color: "blue" }} to="/registration">
        Регистрация
      </Link>
    </div>
  );
};

export default Login;
