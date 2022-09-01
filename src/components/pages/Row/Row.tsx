import React, { FC } from "react";

interface IRow {
  left: JSX.Element | JSX.Element[];
  right: JSX.Element | JSX.Element[];
}

const Row: FC<IRow> = ({ left, right }) => {
  return (
    <div className="detailed-information">
      <div className="col-md-6">{left}</div>
      <div className="col-md-6">{right}</div>
    </div>
  );
};

export default Row;
