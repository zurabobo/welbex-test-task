import React from "react";
import "./Pagination.css";

const Pagination = ({ currentPage, pageCount, onChoosePage }) => {
  const pageLeft =
    currentPage - 1 > 0
      ? currentPage - 2 > 0
        ? currentPage - 2
        : currentPage - 1
      : 1;

  let pageRight =
    currentPage - 1 > 0
      ? currentPage - 2 > 0
        ? currentPage + 2
        : currentPage + 3
      : currentPage + 4;

  if (pageRight > pageCount) {
    pageRight = pageCount;
  }

  const pages = [];
  for (let i = pageLeft; i <= pageRight; i++) {
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

