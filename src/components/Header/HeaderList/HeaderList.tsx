import React, { FC } from "react";
import { Link } from "react-router-dom";

const HeaderList: FC = () => {
  return (
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
  );
};

export default HeaderList;
