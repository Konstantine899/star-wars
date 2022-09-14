import React, { FC } from "react";

interface IProps {
  query: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IProps> = ({ query, onSearch }) => {
  return (
    <input type="text" value={query} placeholder="Search" onChange={onSearch} />
  );
};

export default Input;
