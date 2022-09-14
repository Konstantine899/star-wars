import React, { FC } from "react";

interface IProps {
  title: string;
  data: React.ReactNode;
}

const ItemHistory: FC<IProps> = ({ title, data }) => {
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
