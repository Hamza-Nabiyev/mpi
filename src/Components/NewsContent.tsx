import React from "react";
import { useParams } from "react-router-dom";
import Categories from "./Categories";
import MainNews from "./MainNews";
const NewsContent: React.FC = () => {
  const { id } = useParams();
  return (
    <div>
      <Categories />
      <div className="news-content">
        <h2 className="news-head">{id ? id : 1} </h2>
        <div className="news-card-content">
          <div className="news-card">content content content content</div>
          <div className="news-card">content content content content</div>
          <div className="news-card">
            content content content content content content content
          </div>
          <div className="news-card">
            content content content content content
          </div>
          <div className="news-card">
            content content content content content content
          </div>
          <div className="news-card">content content content</div>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
