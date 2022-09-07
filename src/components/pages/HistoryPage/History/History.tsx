import React, { FC } from "react";

interface IHistory {
  children: JSX.Element | JSX.Element[];
}

const History: FC<IHistory> = ({ children }) => {
  return <>{children}</>;
};

export default History;
