import React, { memo } from "react";

import Button from "../Button";

import "./style.css";
const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

function Pagination({ limit, total, offset, setOffset }) {
  const currentPage = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(currentPage - MAX_LEFT, 1);
  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }

  return (
    <div className="pagination-container">
      <Button
        className="pagination-comand-button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </Button>
      <ul>
        {Array.from({ length: Math.min(pages, MAX_ITEMS) })
          .map((_, index) => index + first)
          .filter((page) => {
            if (page <= pages) return page;
          })
          .map((page) => {
            return (
              <button  className= { currentPage === page ? 'pagination-button current-page':'pagination-button'} key={page} onClick={() => onPageChange(page)}>
                {page}
              </button>
            );
          })}
      </ul>
      <Button
        className="pagination-comand-button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pages}
      >
        Proximo
      </Button>
    </div>
  );
}

export default memo(Pagination);
