import React, { FC } from "react";

interface IDetails {
  field: string;
  label?: string;
}

const Details: FC<IDetails> = ({ field, label }) => {
  return (
    <li className="list-group-item">
      <span>{field}</span>
      <span>{label}</span>
    </li>
  );
};

export default Details;
