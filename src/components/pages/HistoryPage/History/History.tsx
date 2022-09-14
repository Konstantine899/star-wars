import React, { FC } from "react";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const History: FC<IProps> = ({ children }) => {
  return <>{children}</>;
};

export default History;
