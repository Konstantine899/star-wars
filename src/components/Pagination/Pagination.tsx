import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useStarWars } from "../../hooks/useStarWars";

interface IPagination {
  pages: number[];
}

const Pagination: FC<IPagination> = ({ pages }) => {
  const { getPeoplePage } = useStarWars();
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li className="page-item" key={page}>
            <Link
              className="page-link"
              to={`?page=${page}`}
              onClick={() => getPeoplePage(page)}
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
