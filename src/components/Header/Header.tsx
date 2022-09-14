import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Search from "../Search/Search";
import RowHeader from "./RowHeader/RowHeader";

const Header = () => {
  return (
    <>
      <RowHeader
        left={
          <div className="header">
            <h3>
              <Link to="/">Star Wars</Link>
            </h3>
            <ul className="header-list">
              <li>
                <Link to="/people">People</Link>
              </li>
              <li>
                <Link to="/planets">Planets</Link>
              </li>
              <li>
                <Link to="/starships">Starships</Link>
              </li>
              <li>
                <Link to="/history">History</Link>
              </li>
            </ul>
          </div>
        }
        right={<Search />}
      />
    </>
  );
};

export default Header;
