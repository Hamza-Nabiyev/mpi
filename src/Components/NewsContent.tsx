import React from "react";

const NewsContent: React.FC = () => {
  return (
    <div className="news-content">
      <h2 className="news-head">Заголовок</h2>
      <div className="news-card-content">
        <div className="news-card">content content content content</div>
        <div className="news-card">content content content content</div>
        <div className="news-card">
          content content content content content content content
        </div>
        <div className="news-card">content content content content content</div>
        <div className="news-card">
          content content content content content content
        </div>
        <div className="news-card">content content content</div>
      </div>
    </div>
  );
};

export default NewsContent;
