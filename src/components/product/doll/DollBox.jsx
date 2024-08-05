import React from "react";
import DollItem from "./DollItem";
import { useProduct } from "../../../contexts/ProductContext";

const DollBox = ({ children }) => {
  const { products, pendding } = useProduct();
  return (
    <div className="product_content">
      {children}
      <div className="doll_box">
        {pendding ? (
          products.map((item) => (
            <DollItem key={item.pokemonName} product={item} />
          ))
        ) : (
          <div>로딩중.....</div>
        )}
      </div>
    </div>
  );
};

export default DollBox;
