import React, { FC } from "react";

interface IItemHistory {
  title: string;
  data: React.ReactNode;
}

const ItemHistory: FC<IItemHistory> = ({ title, data }) => {
  return (
    <div>
      {data == false ? null : (
        <>
          <h1>{title}</h1>
          <ul>{data}</ul>
        </>
      )}
    </div>
  );
};

export default ItemHistory;
