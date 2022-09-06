import React, { FC } from "react";
import "./History.css";

interface IHistory {
  children: JSX.Element | JSX.Element[];
}

const History: FC<IHistory> = ({ children }) => {
  return <div>{children}</div>;
};

export default History;
