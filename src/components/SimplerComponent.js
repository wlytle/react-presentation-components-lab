// Code SimplerComponent Here
import React from "react";

const SimplerComponent = ({ handleClick, color }) => {
  return (
    <div style={{ backgroundColor: color || "white" }} onClick={handleClick}>
      I am just happy
    </div>
  );
};

export default SimplerComponent;
