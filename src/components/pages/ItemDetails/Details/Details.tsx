import React, { FC } from "react";

interface IProps {
  field: string;
  label?: string;
}

const Details: FC<IProps> = ({ field, label }) => {
  return (
    <li className="list-group-item">
      <span>{field}</span>
      <span>{label}</span>
    </li>
  );
};

export default Details;
