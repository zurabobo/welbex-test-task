import React from "react";
import "./Pagination.css";

const Pagination = ({ data, currentPage, onChoosePage }) => {
  const [pageCount] = React.useState(Math.ceil(data.length / 5));
  
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((item, index) => (
        <button
          key={index}
          onClick={() => onChoosePage(item)}
          className={`pagination__item ${
            currentPage === item ? "pagination__item_active" : null
          }`}
        >
          <span className="pagination__item-span">{item}</span>
        </button>
      ))}
    </div>
  );
};

export default Pagination;

