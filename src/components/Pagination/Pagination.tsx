import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Pagination.css";

interface IProps {
  pages: number[];
  getPages: (page: number) => void;
}

const Pagination: FC<IProps> = ({ pages, getPages }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li className="page-item" key={page}>
            <Link
              className="page-link"
              to={`?page=${page}`}
              onClick={() => getPages(page)}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
