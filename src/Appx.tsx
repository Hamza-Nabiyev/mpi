import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import MainNews from "./Components/MainNews";
import Home from "./Pages/Home";

const Appx: React.FC = () => {
  return (
    <div>
      <div>
        <Router>
          <Header />
          <Categories />
          <MainNews />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default Appx;
