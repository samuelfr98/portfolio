import { useState } from "react";

const FillOnHover = ({ props }) => {


  return (
    <div className="text">
      <div className="fillOnHover">
        {props}
      </div>
    </div>
  );
};

export default FillOnHover;
