import React from "react";
import Categories from "../Components/Categories";
import MainNews from "../Components/MainNews";
import NewsContent from "../Components/NewsContent";

const Home: React.FC = () => {
  return (
    <div>
      <MainNews />
      <NewsContent />
    </div>
  );
};

export default Home;
