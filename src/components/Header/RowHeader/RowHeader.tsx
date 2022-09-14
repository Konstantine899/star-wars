import React, { FC } from "react";
import "./RowHeader.css";
interface IRowHeader {
  left: JSX.Element | JSX.Element[];
  right: JSX.Element | JSX.Element[];
}
const RowHeader: FC<IRowHeader> = ({ left, right }) => {
  return (
    <div className="row-header">
      <div className="col-md-6">{left}</div>
      <div className="col-md-6">{right}</div>
    </div>
  );
};

export default RowHeader;
