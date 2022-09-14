import React, { FC } from "react";
import { Link } from "react-router-dom";

const Logo: FC = () => {
  return (
    <h3>
      <Link to="/">Star Wars</Link>
    </h3>
  );
};

export default Logo;
