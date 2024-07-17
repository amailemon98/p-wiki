import React from "react";
import Doll from "./Doll";

const DollBox = () => {
  return (
    <div className="product_box">
      {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
        <Doll />
      ))}
    </div>
  );
};

export default DollBox;
