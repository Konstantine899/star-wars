import React, { FC } from "react";
import "./Spinnet.css";

const Spinner: FC = () => {
  return (
    <div className="lds-css">
      <div className="lds-double-ring">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
