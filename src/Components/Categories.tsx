import React from "react";
import { Link } from "react-router-dom";

const Categories: React.FC = () => {
  const fakeCategories = [
    { id: 1, name: "Главное" },
    { id: 2, name: "Политика" },
    { id: 3, name: "Экономика" },
  ];
  return (
    <div className="categories-content">
      {fakeCategories.map((category) => (
        <Link key={category.id} to={`/category/${category.id}`}>
          <button className="categories-button">{category.name}</button>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
