import "../../assets/styles/css/pagination.css";
import React, { Fragment } from "react";

const pagination = ({
  functionPagination,
  gamesLength,
  gamesPage,
  currentPage,
}) => {
  const pageNumber = [];

  let i = 0;
  while (i <= Math.ceil(gamesLength / gamesPage)) {
    pageNumber.push(i + 1);
    i++;
  }
  pageNumber.pop();

  return (
    <>
      <div className="pagination">
        {pageNumber &&
          pageNumber.map((number, index) => {
            return (
              <Fragment key={index}>
                <input
                  id={`dot-${index + 1}`}
                  className="dot_input"
                  type="radio"
                  name="dots"
                  onChange={() => functionPagination(number)}
                  checked={index + 1 === currentPage ? true : false}
                />
                <label
                  className="label_dot"
                  htmlFor={`dot-${index + 1}`}></label>
              </Fragment>
            );
          })}

        <div className="pacman"></div>
      </div>
    </>
  );
};

export default pagination;
