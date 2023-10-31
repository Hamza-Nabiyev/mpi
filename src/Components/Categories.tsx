import React from "react";
import { Link } from "react-router-dom";

const Categories: React.FC = () => {
  return (
    <div className="categories-content">
      <Link to="/">
        <button className="categories-button">Главное</button>
      </Link>
      <button className="categories-button">Политика</button>
      <button className="categories-button">Экономика</button>
      <button className="categories-button">22</button>
      <button className="categories-button">test</button>
      <button className="categories-button">test</button>
      <button className="categories-button">test</button>
    </div>
  );
};

export default Categories;
