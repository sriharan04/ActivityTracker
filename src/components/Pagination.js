import React from "react";
import classes from "./Pagination.css";
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={classes.pagination}>
        {pageNumbers.map(number => {
          return (
            <li
              key={number}
              className={classes.page_item}
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
