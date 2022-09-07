import React, { FC } from "react";

interface IItemHistory {
  title: string;
  data: React.ReactNode;
}

const ItemHistory: FC<IItemHistory> = ({ title, data }) => {
  return (
    <>
      {data == false ? null : (
        <>
          <h2>{title}</h2>
          <div className="card-history">
            <ul>{data}</ul>
          </div>
        </>
      )}
    </>
  );
};

export default ItemHistory;
